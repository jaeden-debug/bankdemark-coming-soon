const fs = require("fs");
const path = require("path");

const roots = ["src/content/blog"];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}

function removeManualToc(content) {
  return content
    .replace(
      /(^|\n)#{1,3}\s+(Table of Contents|Contents)\s*\n(?:\s*\n)*(?:(?:[-*]\s+\[[^\]]+\]\(#[^)]+\)\s*\n)|(?:\d+\.\s+\[[^\]]+\]\(#[^)]+\)\s*\n))+/gi,
      "\n"
    )
    .replace(/\n{4,}/g, "\n\n\n");
}

function cleanUglyInternalLinkLabels(content) {
  // Turns: - **Shopify SEO Guide:** [/blog/shopify-seo-guide](/blog/shopify-seo-guide)
  // Into:  - [Shopify SEO Guide](/blog/shopify-seo-guide)
  return content.replace(
    /^(\s*[-*]\s+)\*\*([^*\n:]+):\*\*\s+\[([/\w.-][^\]]*)\]\(([^)]+)\)\s*$/gm,
    "$1[$2]($4)"
  );
}

let changed = 0;

for (const root of roots) {
  for (const file of walk(root)) {
    const original = fs.readFileSync(file, "utf8");
    let updated = original;

    updated = removeManualToc(updated);
    updated = cleanUglyInternalLinkLabels(updated);

    if (updated !== original) {
      fs.writeFileSync(file, updated);
      console.log("Fixed:", file);
      changed++;
    }
  }
}

console.log(`Done. Updated ${changed} blog files.`);
