const fs = require("fs");
const path = require("path");

const registryPath = path.join(process.cwd(), "content/sources/source-registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const roots = ["src/content/blog", "blog"].filter((dir) => fs.existsSync(dir));

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}

function normalize(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

const aliasMap = [];
for (const [id, source] of Object.entries(registry)) {
  for (const alias of source.aliases || []) {
    aliasMap.push({ id, alias: normalize(alias) });
  }
  aliasMap.push({ id, alias: normalize(source.title) });
}

function findSource(raw) {
  const n = normalize(raw);
  return aliasMap.find((x) => n.includes(x.alias) || x.alias.includes(n));
}

function citationHtml(id, number) {
  const s = registry[id];
  return `<sup class="citation-ref"><a href="#source-${id}">[${number}]</a></sup>`;
}

function stripOldBibliography(content) {
  return content.replace(/\n---\n\n## Sources\n\n[\s\S]*$/m, "").trimEnd();
}

function buildBibliography(used) {
  if (!used.length) return "";
  const lines = used.map(([id, number]) => {
    const s = registry[id];
    return `<li id="source-${id}"><strong>[${number}]</strong> <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a></li>`;
  });

  return `\n\n---\n\n## Sources\n\n<ol class="source-bibliography">\n${lines.join("\n")}\n</ol>\n`;
}

function processFile(file) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;

  content = stripOldBibliography(content);

  const usedIds = [];

  function trackId(id) {
    if (!usedIds.includes(id)) usedIds.push(id);
    return usedIds.indexOf(id) + 1;
  }

  content = content.replace(/\(source:\s*([^)]+)\)/gi, (match, label) => {
    const found = findSource(label);
    if (!found) return `[SOURCE NEEDED: ${label.trim()}]`;
    changed = true;
    const n = trackId(found.id);
    return citationHtml(found.id, n);
  });

  content = content.replace(/\(editorial source library\)/gi, () => {
    changed = true;
    return "[SOURCE NEEDED: choose exact source from source-registry.json]";
  });

  const explicitRefs = [...content.matchAll(/\[src:([a-z0-9-]+)\]/gi)];
  for (const ref of explicitRefs) {
    const id = ref[1];
    if (!registry[id]) continue;
    const n = trackId(id);
    content = content.replace(ref[0], citationHtml(id, n));
    changed = true;
  }

  if (usedIds.length) {
    content += buildBibliography(usedIds.map((id, i) => [id, i + 1]));
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Injected sources: ${file}`);
  }
}

for (const root of roots) {
  for (const file of walk(root)) processFile(file);
}
