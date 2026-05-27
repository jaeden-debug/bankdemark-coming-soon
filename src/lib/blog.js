import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function cleanSlug(file) {
  return file.replace(/^article-\d+-/, "").replace(/\.md$/, "");
}

function inferCategory(slug) {
  if (slug.includes("business-credit")) return "Business Credit";
  if (slug.includes("investing") || slug.includes("index-funds") || slug.includes("etfs")) return "Investing";
  if (slug.includes("budget") || slug.includes("save-money") || slug.includes("emergency") || slug.includes("personal-finance")) return "Personal Finance";
  if (slug.includes("financial-freedom")) return "Financial Freedom";
  if (slug.includes("seo") || slug.includes("shopify") || slug.includes("ecommerce") || slug.includes("ai")) return "Business Systems";
  if (slug.includes("credit")) return "Credit";
  return "Finance";
}

function cleanMarkdown(content) {
  return content
    .replace(/^#\s+.*$/m, "")
    .replace(/^By BankDeMark Editorial.*$/gim, "")
    .replace(/^[\s\S]*?\*\*By BankDeMark Editorial Team[\s\S]*?\*\*\s*/i, "")
    .replace(/^## SEO Metadata[\s\S]*?(?=^## |^# |>)/gim, "")
    .replace(/^SEO Metadata[\s\S]*?(?=^## |^# |>)/gim, "")
    .replace(/^## Article Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/^Article Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/^## BreadcrumbList Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/^BreadcrumbList Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/^## FAQ Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/^FAQ Schema JSON-LD[\s\S]*?```/gim, "")
    .replace(/```json[\s\S]*?```/gim, "")
    .replace(/\*\*Slug:\*\*.*$/gim, "")
    .replace(/\*Slug:\*\*.*$/gim, "")
    .replace(/\*\*Meta Title:\*\*.*$/gim, "")
    .replace(/\*\*Meta Description:\*\*.*$/gim, "")
    .replace(/\*\*Target Keywords:\*\*.*$/gim, "")
    .replace(/^##?\s*Suggested Supporting Articles[\s\S]*?(?=^## |^# |\Z)/gim, "")
    .replace(/\{#[-a-z0-9]+\}/gi, "")
    .trim();
}


function removeQuickAnswerBlocks(value = "") {
  return String(value || "")
    .replace(/<section[^>]*id=["']quick-answer["'][\s\S]*?<\/section>/gi, " ")
    .replace(/<div[^>]*class=["'][^"']*quick-answer[^"']*["'][\s\S]*?<\/div>/gi, " ")
    .replace(/^>\s*\*\*Quick Answer:\*\*.*$/gim, " ")
    .replace(/^Quick Answer[:\s][\s\S]*?(?=^##\s+|^#\s+|$)/gim, " ");
}

function plainText(markdown) {
  return removeQuickAnswerBlocks(markdown)
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&bull;/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/[#>*_`[\]()|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


function stripHtmlForExcerpt(value = "") {
  return String(value || "")
    .replace(/^---[\s\S]*?---/m, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&bull;/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/^\s*#{1,6}\s+/gm, " ")
    .replace(/^\s*>+\s?/gm, " ")
    .replace(/\*\*/g, "")
    .replace(/[*_`#<>]/g, "")
    .replace(/-{3,}/g, " ")
    .replace(/[|~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractInlineMetaDescription(markdown = "") {
  const match = String(markdown || "").match(/\*\*Meta Description:\*\*\s*`?([^`\n]+)`?/i);
  return match?.[1]?.trim() || "";
}

function cleanExcerptSource(markdown = "", title = "") {
  let value = String(markdown || "");

  value = value
    .replace(/^#\s+.*$/m, " ")
    .replace(/^##\s*SEO Metadata[\s\S]*?(?=^##\s|^#\s|$)/im, " ")
    .replace(/^SEO Metadata[\s\S]*?(?=^##\s|^#\s|$)/im, " ")
    .replace(/^##\s*Quick Answer[\s\S]*?(?=^##\s|^#\s|$)/im, " ")
    .replace(/^>\s*\*\*Quick Answer:\*\*.*$/gim, " ")
    .replace(/<section[^>]*(quick-answer|table-of-contents)[\s\S]*?<\/section>/gi, " ")
    .replace(/<nav[^>]*(table-of-contents|toc)[\s\S]*?<\/nav>/gi, " ")
    .replace(/<div[^>]*class=["']quick-answer["'][\s\S]*?<\/div>/gi, " ");

  const cleanTitle = String(title || "").trim();
  if (cleanTitle) value = value.replace(cleanTitle, " ");

  return stripHtmlForExcerpt(value);
}

function makeExcerpt(value = "", max = 165) {
  const clean = stripHtmlForExcerpt(value);
  return clean.length > max ? clean.slice(0, max).replace(/\s+\S*$/, "") + "…" : clean;
}


export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file, index) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const slug = String(data.slug || cleanSlug(file))
        .replace(/^\/blog\//, "")
        .replace(/^\//, "");

      const cleanContent = cleanMarkdown(content || raw);

      const title =
        data.title ||
        raw.match(/^#\s+(.+)$/m)?.[1]?.replace(/^Article\s+\d+:\s*/i, "").trim() ||
        slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

      const excerpt =
        makeExcerpt(
          data.excerpt ||
            data.meta_description ||
            extractInlineMetaDescription(cleanContent) ||
            cleanExcerptSource(cleanContent, title),
          155
        ) || "A practical BankDeMark guide for smarter money decisions.";

      const words = plainText(cleanContent).split(" ").filter(Boolean).length;

      return {
        slug,
        title,
        excerpt,
        category: data.category || inferCategory(slug),
        date: data.date || `2026-05-${String(21 - index).padStart(2, "0")}`,
        readTime: data.readTime || `${Math.max(3, Math.ceil(words / 220))} min read`,
        featured: Boolean(data.featured),
        content: cleanContent,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug);
}

function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[^;]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function renderPostHtml(markdown) {
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  let html = marked.parse(markdown);

  html = html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (match, level, inner) => {
    const id = slugifyHeading(inner);
    if (!id) return match;
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });

  html = html.replace(/<table>([\s\S]*?)<\/table>/g, (match) => {
    return `<div class="post-table-scroll">${match}</div>`;
  });

  html = html.replace(/<h2 id="([^"]+)">([\s\S]*?)(?=<h2 id="|$)/g, (match) => {
    return `<section class="content-card">${match}</section>`;
  });

  return html;
}
