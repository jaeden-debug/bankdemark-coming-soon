const fs = require("fs");
const path = require("path");

const sourceDir = "blog/html";
const outDir = "src/content/blog";

const decode = (s = "") =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const stripTags = (s = "") => decode(s.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim());

const slugFromCanonical = (html, file) => {
  const canonical = html.match(/<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1] || "";
  const fromCanonical = canonical.match(/\/blog\/([^/?#]+)/)?.[1];
  if (fromCanonical) return fromCanonical.trim();

  return file
    .replace(/\.html$/i, "")
    .replace(/^article-html-\d+-/, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
};

const extractMeta = (html, name) => {
  const re = new RegExp(`<meta\\s+name=["']${name}["'][^>]*content=["']([^"']*)["'][^>]*>`, "i");
  return decode(html.match(re)?.[1] || "");
};

const extractOg = (html, prop) => {
  const re = new RegExp(`<meta\\s+property=["']${prop}["'][^>]*content=["']([^"']*)["'][^>]*>`, "i");
  return decode(html.match(re)?.[1] || "");
};

const getCategory = (html) => {
  const headerCat = html.match(/<strong>\s*Category:\s*<\/strong>\s*([^<]+)/i)?.[1];
  if (headerCat) return stripTags(headerCat);

  const schemaSection = html.match(/"articleSection"\s*:\s*"([^"]+)"/i)?.[1];
  if (schemaSection) return decode(schemaSection);

  const pillar = html.match(/Pillar:\s*([^<\n-]+)/i)?.[1];
  if (pillar) return decode(pillar.trim());

  return "Business Strategy";
};

const cleanArticleHtml = (html) => {
  let body = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] || html;

  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<nav[^>]*(aria-label=["']Breadcrumb["']|id=["']table-of-contents["']|class=["']toc["'])[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<nav[^>]*>[\s\S]*?Table of Contents[\s\S]*?<\/nav>/gi, "")
    .replace(/<header[^>]*>[\s\S]*?<\/header>/i, "")
    .replace(/\[SOURCE NEEDED[^\]]*\]/gi, "")
    .replace(/\s+target=["'][^"']*["']/gi, "")
    .replace(/\s+rel=["'][^"']*["']/gi, "")
    .replace(/https:\/\/bankdemark\.com/gi, "")
    .replace(/<section([^>]*)>/gi, "\n<section$1>\n")
    .replace(/<\/section>/gi, "\n</section>\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return decode(body);
};

const htmlFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith(".html")).sort();

let imported = 0;
let skipped = [];

for (const file of htmlFiles) {
  const full = path.join(sourceDir, file);
  const html = fs.readFileSync(full, "utf8");

  const slug = slugFromCanonical(html, file);
  const outFile = path.join(outDir, `${slug}.md`);

  if (fs.existsSync(outFile)) {
    skipped.push({ file, slug, reason: "target md already exists" });
    continue;
  }

  const title =
    stripTags(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || "") ||
    stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");

  const metaTitle =
    stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "") ||
    title;

  const description =
    extractMeta(html, "description") ||
    extractOg(html, "og:description") ||
    "--";

  const category = getCategory(html);
  const content = cleanArticleHtml(html);
  const words = stripTags(content).split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

  const md = `---
title: "${title.replace(/"/g, '\\"')}"
meta_title: "${metaTitle.replace(/"/g, '\\"')}"
meta_description: "${description.replace(/"/g, '\\"')}"
slug: /blog/${slug}
date: "2026-05-23"
category: "${category.replace(/"/g, '\\"')}"
readTime: "${readTime}"
featured: false
---

# ${title}

${content}
`;

  fs.writeFileSync(outFile, md);
  console.log("Imported:", outFile);
  imported++;
}

fs.writeFileSync(
  "html-blog-import-report.json",
  JSON.stringify({ imported, skipped }, null, 2)
);

console.log(`Done. Imported ${imported}. Skipped ${skipped.length}.`);
if (skipped.length) console.table(skipped);
