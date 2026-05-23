#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const cmd = process.argv[2] || "audit";
const rootDirs = ["src/content/blog", "blog"].filter(fs.existsSync);
const registryPath = "content/sources/source-registry.json";

if (!fs.existsSync(registryPath)) {
  console.error("Missing content/sources/source-registry.json");
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return walk(full);
    return e.isFile() && e.name.endsWith(".md") ? [full] : [];
  });
}

function files() {
  return rootDirs.flatMap(walk);
}

function normalize(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

const aliases = Object.entries(registry).flatMap(([id, s]) => [
  { id, alias: normalize(s.title) },
  ...(s.aliases || []).map((a) => ({ id, alias: normalize(a) })),
]);

function findSource(label) {
  const n = normalize(label);
  return aliases.find((x) => n.includes(x.alias) || x.alias.includes(n));
}

function stripSources(s) {
  return s.replace(/\n---\n\n## Sources\n\n<ol class="source-bibliography">[\s\S]*?<\/ol>\n?/m, "").trimEnd();
}

function citation(id, n) {
  return `<sup class="citation-ref"><a href="#source-${id}">[${n}]</a></sup>`;
}

function bibliography(ids) {
  if (!ids.length) return "";
  return `\n\n---\n\n## Sources\n\n<ol class="source-bibliography">\n${ids.map((id, i) => {
    const s = registry[id];
    return `<li id="source-${id}"><strong>[${i + 1}]</strong> <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a></li>`;
  }).join("\n")}\n</ol>\n`;
}

function audit() {
  let needed = 0;
  let cited = 0;

  for (const file of files()) {
    const s = fs.readFileSync(file, "utf8");
    const n = (s.match(/\[SOURCE NEEDED[^\]]*\]/gi) || []).length;
    const c = (s.match(/class="citation-ref"/gi) || []).length;
    if (n || c) console.log(`${file}: ${c} citations, ${n} source-needed`);
    needed += n;
    cited += c;
  }

  console.log(`\nAuthorityOS Audit: ${cited} citations, ${needed} unresolved source tags.`);
  if (needed) process.exitCode = 1;
}

function inject() {
  for (const file of files()) {
    let s = fs.readFileSync(file, "utf8");
    let changed = false;
    s = stripSources(s);

    const used = [];
    const use = (id) => {
      if (!used.includes(id)) used.push(id);
      return used.indexOf(id) + 1;
    };

    s = s.replace(/\(source:\s*([^)]+)\)/gi, (_, label) => {
      const found = findSource(label);
      changed = true;
      if (!found) return `[SOURCE NEEDED: ${label.trim()}]`;
      return citation(found.id, use(found.id));
    });

    s = s.replace(/\[src:([a-z0-9-]+)\]/gi, (m, id) => {
      if (!registry[id]) return `[SOURCE NEEDED: unknown source id ${id}]`;
      changed = true;
      return citation(id, use(id));
    });

    s = s.replace(/\(editorial source library\)/gi, () => {
      changed = true;
      return "[SOURCE NEEDED: choose exact source from source-registry.json]";
    });

    if (used.length) s += bibliography(used);

    if (changed) {
      fs.writeFileSync(file, s);
      console.log(`AuthorityOS injected: ${file}`);
    }
  }
}

function validate() {
  let failed = false;

  for (const file of files()) {
    const s = fs.readFileSync(file, "utf8");
    const needed = [...s.matchAll(/\[SOURCE NEEDED[^\]]*\]/gi)];
    if (needed.length) {
      failed = true;
      console.log(`SOURCE NEEDED: ${file} (${needed.length})`);
      needed.slice(0, 10).forEach((m) => console.log(`  ${m[0]}`));
    }

    for (const m of s.matchAll(/id="source-([a-z0-9-]+)"/gi)) {
      if (!registry[m[1]]) {
        failed = true;
        console.log(`UNKNOWN SOURCE: ${file} -> ${m[1]}`);
      }
    }
  }

  if (failed) process.exit(1);
  console.log("AuthorityOS validation passed.");
}

function report() {
  const rows = files().map((file) => {
    const s = fs.readFileSync(file, "utf8");
    return {
      file,
      citations: (s.match(/class="citation-ref"/gi) || []).length,
      needed: (s.match(/\[SOURCE NEEDED[^\]]*\]/gi) || []).length,
      words: s.split(/\s+/).filter(Boolean).length,
    };
  });

  fs.writeFileSync("authorityos-report.json", JSON.stringify(rows, null, 2));
  console.log("Wrote authorityos-report.json");
}

({ audit, inject, validate, report }[cmd] || audit)();
