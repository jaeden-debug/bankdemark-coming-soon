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

let failed = false;

for (const root of roots) {
  for (const file of walk(root)) {
    const s = fs.readFileSync(file, "utf8");

    const needed = [...s.matchAll(/\[SOURCE NEEDED[^\]]*\]/gi)];
    if (needed.length) {
      failed = true;
      console.log(`SOURCE NEEDED: ${file} (${needed.length})`);
      needed.slice(0, 10).forEach((m) => console.log(`  ${m[0]}`));
    }

    const refs = [...s.matchAll(/\[src:([a-z0-9-]+)\]/gi)];
    for (const ref of refs) {
      if (!registry[ref[1]]) {
        failed = true;
        console.log(`UNKNOWN SOURCE ID: ${file} -> ${ref[1]}`);
      }
    }

    const sourceIds = [...s.matchAll(/id="source-([a-z0-9-]+)"/gi)];
    for (const ref of sourceIds) {
      if (!registry[ref[1]]) {
        failed = true;
        console.log(`UNKNOWN BIBLIOGRAPHY SOURCE: ${file} -> ${ref[1]}`);
      }
    }
  }
}

if (failed) {
  console.error("\nSource validation failed.");
  process.exit(1);
}

console.log("Source validation passed.");
