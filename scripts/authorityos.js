const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const ROOTS = ["src/content/blog", "blog"].filter(fs.existsSync);
const REGISTRY_PATH = "content/sources/source-registry.json";
const REPORT_PATH = "authorityos-report.json";

function loadRegistry() {
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"));
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return e.isFile() && /\.(md|mdx|html)$/i.test(e.name) ? [full] : [];
  });
}

function files() {
  return ROOTS.flatMap(walk);
}

function normalize(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function stripBibliography(s) {
  return s.replace(/\n---\n\n## Sources\n\n<ol class="source-bibliography"[\s\S]*?<\/ol>\s*$/m, "").trimEnd();
}

function buildAliasMap(registry) {
  const out = [];
  for (const [id, src] of Object.entries(registry)) {
    out.push({ id, alias: normalize(id) });
    out.push({ id, alias: normalize(src.title) });
    for (const a of src.aliases || []) out.push({ id, alias: normalize(a) });
  }
  return out.filter(x => x.alias.length > 2).sort((a,b) => b.alias.length - a.alias.length);
}

function findSource(label, registry) {
  const n = normalize(label);
  const aliases = buildAliasMap(registry);
  return aliases.find(x => n.includes(x.alias) || x.alias.includes(n));
}

function citation(id, number, claimType = "source") {
  return `<sup class="citation-ref" data-source-id="${id}" data-claim-type="${claimType}"><a href="#source-${id}">[${number}]</a></sup>`;
}

function bibliography(used, registry) {
  if (!used.length) return "";
  return `\n\n---\n\n## Sources\n\n<ol class="source-bibliography" data-authorityos="bibliography">\n${used.map(([id, n]) => {
    const s = registry[id];
    const category = s.category ? ` <span class="source-category">${s.category}</span>` : "";
    const confidence = s.confidence ? ` <span class="source-confidence">Confidence: ${s.confidence}</span>` : "";
    return `<li id="source-${id}" data-source-id="${id}"><strong>[${n}]</strong> <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a>${category}${confidence}</li>`;
  }).join("\n")}\n</ol>\n`;
}

function wordCount(s) {
  return s.replace(/<[^>]+>/g, " ").replace(/[#>*_`[\]()|~-]/g, " ").split(/\s+/).filter(Boolean).length;
}

function analyze(file, registry) {
  const s = fs.readFileSync(file, "utf8");
  const unresolved = [...s.matchAll(/\[SOURCE NEEDED[^\]]*\]/gi)].map(m => m[0]);
  const srcTags = [...s.matchAll(/\[src:([a-z0-9-]+)\]/gi)].map(m => m[1]);
  const claimTags = [...s.matchAll(/\[claim:([^|\]]+)\|([a-z0-9-]+)\]/gi)].map(m => ({ type: m[1], id: m[2] }));
  const inlineCitations = [...s.matchAll(/data-source-id="([^"]+)"/gi)].map(m => m[1]);
  const biblio = [...s.matchAll(/id="source-([^"]+)"/gi)].map(m => m[1]);
  const allSourceIds = [...new Set([...srcTags, ...claimTags.map(x => x.id), ...inlineCitations, ...biblio])];
  const unknown = allSourceIds.filter(id => !registry[id]);
  const words = wordCount(s);
  const citationCount = inlineCitations.length + srcTags.length + claimTags.length;
  const density = words ? Number(((citationCount / words) * 1000).toFixed(2)) : 0;
  const categories = [...new Set(allSourceIds.map(id => registry[id]?.category).filter(Boolean))];

  let score = 100;
  score -= unresolved.length * 15;
  score -= unknown.length * 25;
  if (words > 1200 && density < 1) score -= 15;
  if (words > 2500 && categories.length < 2) score -= 8;
  if (/editorial source library/i.test(s)) score -= 20;
  score = Math.max(0, Math.min(100, score));

  return { file, words, citationCount, citationDensityPer1000Words: density, unresolved, unknown, sourceIds: allSourceIds, categories, score };
}

function injectFile(file, registry) {
  let s = fs.readFileSync(file, "utf8");
  const original = s;
  s = stripBibliography(s);

  const used = [];
  const use = (id) => {
    if (!used.includes(id)) used.push(id);
    return used.indexOf(id) + 1;
  };

  s = s.replace(/\(source:\s*([^\)]+)\)/gi, (_, label) => {
    const found = findSource(label, registry);
    if (!found) return `[SOURCE NEEDED: ${label.trim()}]`;
    return citation(found.id, use(found.id));
  });

  s = s.replace(/\[SOURCE NEEDED:\s*([^\]]+)\]/gi, (match, label) => {
    const found = findSource(label, registry);
    if (!found) return match;
    return citation(found.id, use(found.id));
  });

  s = s.replace(/\[src:([a-z0-9-]+)\]/gi, (match, id) => {
    if (!registry[id]) return match;
    return citation(id, use(id));
  });

  s = s.replace(/\[claim:([^|\]]+)\|([a-z0-9-]+)\]/gi, (match, type, id) => {
    if (!registry[id]) return match;
    return citation(id, use(id), normalize(type) || "claim");
  });

  s = s.replace(/\(editorial source library\)/gi, "[SOURCE NEEDED: choose exact source from source-registry.json]");

  if (used.length) s += bibliography(used.map((id, i) => [id, i + 1]), registry);

  if (s !== original) {
    fs.writeFileSync(file, s);
    console.log(`AuthorityOS injected: ${file}`);
  }
}

function audit() {
  const registry = loadRegistry();
  const rows = files().map(f => analyze(f, registry));
  let citations = 0, unresolved = 0;
  for (const r of rows) {
    citations += r.citationCount;
    unresolved += r.unresolved.length;
    if (r.citationCount || r.unresolved.length || r.unknown.length) {
      console.log(`${r.file}: score ${r.score}/100, ${r.citationCount} citations, ${r.unresolved.length} unresolved, ${r.unknown.length} unknown`);
    }
  }
  console.log(`\nAuthorityOS Audit: ${citations} citations, ${unresolved} unresolved source tags.`);
}

function inject() {
  const registry = loadRegistry();
  for (const f of files()) injectFile(f, registry);
}

function validate() {
  const registry = loadRegistry();
  let failed = false;
  for (const f of files()) {
    const r = analyze(f, registry);
    if (r.unresolved.length || r.unknown.length) {
      failed = true;
      console.log(`FAILED: ${f}`);
      r.unresolved.slice(0, 10).forEach(x => console.log(`  unresolved ${x}`));
      r.unknown.slice(0, 10).forEach(x => console.log(`  unknown source id: ${x}`));
    }
  }
  if (failed) {
    console.error("\nAuthorityOS validation failed.");
    process.exit(1);
  }
  console.log("AuthorityOS validation passed.");
}

function report() {
  const registry = loadRegistry();
  const rows = files().map(f => analyze(f, registry));
  const payload = {
    generatedAt: new Date().toISOString(),
    totals: {
      files: rows.length,
      citations: rows.reduce((a,b) => a + b.citationCount, 0),
      unresolved: rows.reduce((a,b) => a + b.unresolved.length, 0),
      averageScore: Math.round(rows.reduce((a,b) => a + b.score, 0) / Math.max(rows.length, 1))
    },
    articles: rows
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${REPORT_PATH}`);
}

function suggest() {
  const registry = loadRegistry();
  for (const f of files()) {
    const r = analyze(f, registry);
    if (!r.unresolved.length) continue;
    console.log(`\n${f}`);
    for (const u of r.unresolved) {
      const label = u.replace(/$begin:math:display$SOURCE NEEDED\:\\s\*\/i\, \"\"\)\.replace\(\/$end:math:display$$/, "");
      const found = findSource(label, registry);
      console.log(`  ${u}`);
      console.log(`  suggestion: ${found ? `[src:${found.id}] — ${registry[found.id].title}` : "no strong match"}`);
    }
  }
}

function checkUrl(url) {
  return new Promise(resolve => {
    const mod = url.startsWith("https") ? https : http;
    const req = mod.request(url, { method: "HEAD", timeout: 6000 }, res => {
      resolve({ url, status: res.statusCode });
    });
    req.on("timeout", () => { req.destroy(); resolve({ url, status: "timeout" }); });
    req.on("error", () => resolve({ url, status: "error" }));
    req.end();
  });
}

async function health() {
  const registry = loadRegistry();
  for (const [id, src] of Object.entries(registry)) {
    const r = await checkUrl(src.url);
    console.log(`${id}: ${r.status} ${src.url}`);
  }
}

const cmd = process.argv[2] || "audit";
if (cmd === "audit") audit();
else if (cmd === "inject") inject();
else if (cmd === "validate") validate();
else if (cmd === "report") report();
else if (cmd === "suggest") suggest();
else if (cmd === "health") health();
else {
  console.log("Usage: node scripts/authorityos.js audit|inject|validate|report|suggest|health");
  process.exit(1);
}
