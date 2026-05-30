const matter = require('gray-matter');
const { marked } = require('marked');
const fs = require('fs');

function cleanMarkdown(content) {
  return content
    .replace(/^#\s+.*$/m, '')
    .replace(/^By BankDeMark Editorial.*$/gim, '')
    .replace(/^## SEO Metadata[\s\S]*?(?=^## |^# |>)/gim, '')
    .replace(/```json[\s\S]*?```/gim, '')
    .replace(/\*\*Slug:\*\*.*$/gim, '')
    .replace(/\*\*Meta Title:\*\*.*$/gim, '')
    .replace(/\*\*Meta Description:\*\*.*$/gim, '')
    .replace(/\*\*Target Keywords:\*\*.*$/gim, '')
    .replace(/\{#[-a-z0-9]+\}/gi, '')
    .trim();
}

const raw = fs.readFileSync('src/content/blog/article-01-personal-finance-for-beginners.md', 'utf8');
const { content } = matter(raw);
const cleaned = cleanMarkdown(content);
marked.setOptions({ gfm: true, breaks: false });
let html = marked.parse(cleaned);

html = html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (match, level, inner) => {
  const id = inner.toLowerCase().replace(/<[^>]+>/g,'').replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-');
  return `<h${level} id="${id}">${inner}</h${level}>`;
});

html = html.replace(/<table>([\s\S]*?)<\/table>/g, (match) => `<div class="post-table-scroll">${match}</div>`);

html = html.replace(/<h2 id="([^"]+)">([\s\S]*?)(?=<h2 id="|$)/g, (match) => {
  return `<section class="content-card">${match}</section>`;
});

// Show last 500 chars to check unclosed sections
console.log('=== END OF HTML ===');
console.log(html.slice(-500));

// Count open/close sections
const opens = (html.match(/<section class="content-card">/g) || []).length;
const closes = (html.match(/<\/section>/g) || []).length;
console.log('Open sections:', opens, 'Close sections:', closes);
