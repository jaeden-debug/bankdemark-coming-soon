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
    .replace(/^Internal Link Map[\s\S]*?(?=^## |^# |\Z)/gim, "")
    .replace(/^Suggested Supporting Articles[\s\S]*?(?=^## |^# |\Z)/gim, "")
    .replace(/\]*\]/g, "")
    .replace(/\{#[-a-z0-9]+\}/gi, "")
    .trim();
}

function plainText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`[\]()|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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
        data.excerpt ||
        plainText(cleanContent).slice(0, 180) ||
        "A practical BankDeMark guide for smarter money decisions.";

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

export function renderPostHtml(markdown) {
  marked.setOptions({
    gfm: true,
    breaks: false,
  });

  return marked.parse(markdown);
}
