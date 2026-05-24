import fs from "fs";
import path from "path";

const SRC_DIR = "blog/html";
const OUT_DIR = "src/content/blog";

function decode(s = "") {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&bull;/g, "•")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function slugFrom(raw, file) {
  return (
    raw.match(/bankdemark\.com\/blog\/([a-z0-9-]+)/i)?.[1] ||
    path.basename(file).replace(/\.html$/i, "").replace(/^article-html-\d+-/, "")
  );
}

function textFromTag(raw, tag) {
  return decode(raw.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1] || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function metaDescription(raw) {
  return decode(
    raw.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] ||
    raw.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i)?.[1] ||
    ""
  ).trim();
}

function bodyArticle(raw) {
  let body =
    raw.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1] ||
    raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ||
    raw;

  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<nav[^>]*(id=["']table-of-contents["']|class=["']toc["']|aria-label=["']Table of Contents["'])[\s\S]*?<\/nav>/gi, "")
    .replace(/<nav[^>]*aria-label=["']Breadcrumb["'][\s\S]*?<\/nav>/gi, "");

  return body;
}

function htmlToMd(html) {
  let s = html;

  s = s
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "### $1\n\n")
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "#### $1\n\n")
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "$1\n\n")
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
    .replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)")
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n")
    .replace(/<\/?(ul|ol)[^>]*>/gi, "\n")
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, "\n> $1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(section|div|header|footer|main|span)[^>]*>/gi, "\n");

  s = s.replace(/<table[\s\S]*?<\/table>/gi, (table) => {
    const rows = [...table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
      [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi)].map((c) =>
        decode(c[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
      )
    ).filter(r => r.length);

    if (!rows.length) return "";

    const header = rows[0];
    const sep = header.map(() => "---");
    const rest = rows.slice(1);
    return "\n" + [header, sep, ...rest].map(r => `| ${r.join(" | ")} |`).join("\n") + "\n\n";
  });

  return decode(s)
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

const files = fs.readdirSync(SRC_DIR).filter(f => /^article-html-(1[2-9])-.*\.html$/i.test(f));
const imported = [];

for (const file of files) {
  const full = path.join(SRC_DIR, file);
  const raw = fs.readFileSync(full, "utf8");
  const slug = slugFrom(raw, file);
  const outFile = path.join(OUT_DIR, `${slug}.md`);

  if (fs.existsSync(outFile)) {
    throw new Error(`Refusing to overwrite existing post: ${outFile}`);
  }

  const title = textFromTag(raw, "h1") || textFromTag(raw, "title");
  const metaTitle = textFromTag(raw, "title") || title;
  const desc = metaDescription(raw);
  const article = bodyArticle(raw);
  let content = htmlToMd(article);

  content = content
    .replace(new RegExp(`^#\\s+${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*`, "i"), "")
    .replace(/^#+\s*Table of Contents[\s\S]*?(?=^##\s)/gim, "")
    .trim();

  const words = content.split(/\s+/).filter(Boolean).length;
  const readTime = `${Math.max(3, Math.ceil(words / 220))} min read`;

  const md = `---
title: "${title.replace(/"/g, '\\"')}"
meta_title: "${metaTitle.replace(/"/g, '\\"')}"
meta_description: "${desc.replace(/"/g, '\\"')}"
slug: /blog/${slug}
date: "2026-05-24"
category: "Business Strategy"
readTime: "${readTime}"
featured: false
---

# ${title}

${content}
`;

  fs.writeFileSync(outFile, md);
  imported.push({ file, slug, outFile, words });
}

fs.writeFileSync("html-blog-import-report.json", JSON.stringify({ imported }, null, 2));
console.table(imported);
