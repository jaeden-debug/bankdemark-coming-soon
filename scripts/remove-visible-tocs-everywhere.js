const fs = require("fs");
const path = require("path");

const roots = ["src/content", "src/app/data"];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  let files = [];

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      if (["node_modules", ".next", ".git"].includes(entry)) continue;
      files = files.concat(walk(full));
    } else if (/\.(md|mdx|js|jsx|ts|tsx)$/.test(full)) {
      files.push(full);
    }
  }

  return files;
}

function removeToc(content) {
  return content
    .replace(
      /(^|\n)#{1,3}\s+Table of Contents\s*\n(?:\s*\n)*(?:(?:[-*]\s+\[.*?\]\(.*?\)\s*\n)|(?:\d+\.\s+\[.*?\]\(.*?\)\s*\n)|(?:<ul>[\s\S]*?<\/ul>\s*))/gi,
      "\n"
    )
    .replace(
      /(^|\n)<h2[^>]*>\s*Table of Contents\s*<\/h2>\s*(?:<ul>[\s\S]*?<\/ul>)?/gi,
      "\n"
    )
    .replace(/\n{4,}/g, "\n\n\n");
}

let changed = 0;

for (const root of roots) {
  for (const file of walk(root)) {
    const original = fs.readFileSync(file, "utf8");
    const updated = removeToc(original);

    if (updated !== original) {
      fs.writeFileSync(file, updated);
      console.log("Removed TOC:", file);
      changed++;
    }
  }
}

console.log(`Done. Removed visible TOCs from ${changed} files.`);
