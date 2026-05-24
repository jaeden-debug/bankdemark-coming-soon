import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = "src/content/blog";

function decodeEntities(s) {
  return String(s || "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&bull;/g, " ")
    .replace(/&nbsp;/g, " ");
}

function cleanText(s) {
  return decodeEntities(s)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/^---[\s\S]*?---/m, " ")
    .replace(/^#+\s+/gm, " ")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\{#[-a-z0-9]+\}/gi, "")
    .replace(/$begin:math:display$\[\^$end:math:display$]+\]$begin:math:text$\[\^\)\]\+$end:math:text$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function removeBadOpeners(s) {
  return s
    .replace(/^Quick Answer:\s*/i, "")
    .replace(/^.*?\bQuick Answer\b[:\s-]*/i, "")
    .replace(/^Disclaimer:\s*This content is educational only.*?(?=[A-Z][a-z])/i, "");
}

for (const file of fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"))) {
  const full = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);

  const metaDesc =
    parsed.data.meta_description ||
    parsed.data.description ||
    parsed.data.excerpt ||
    "";

  let excerpt = cleanText(metaDesc);

  if (!excerpt || excerpt.length < 40 || /<|>|Quick Answer|Disclaimer/i.test(excerpt)) {
    excerpt = removeBadOpeners(cleanText(parsed.content));
  }

  parsed.data.excerpt = excerpt.slice(0, 170).replace(/\s+\S*$/, "").trim() + "...";

  fs.writeFileSync(full, matter.stringify(parsed.content, parsed.data));
  console.log("fixed", file);
}
