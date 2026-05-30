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

function slugifyHeading(text) {
  return String(text).toLowerCase()
    .replace(/<[^>]+>/g,'').replace(/&[^;]+;/g,'')
    .replace(/[^a-z0-9\s-]/g,'').trim()
    .replace(/\s+/g,'-').replace(/-+/g,'-');
}

function renderPostHtml(markdown) {
  marked.setOptions({ gfm: true, breaks: false });
  let html = marked.parse(markdown);
  html = html.replace(/(<hr>\s*){2,}/g, '<hr>\n');
  html = html.replace(/<h([2-3])>(.*?)<\/h\1>/g, (match, level, inner) => {
    const id = slugifyHeading(inner);
    if (!id) return match;
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
  html = html.replace(/<table>([\s\S]*?)<\/table>/g, (m) => `<div class="post-table-scroll">${m}</div>`);
  const firstH2 = html.search(/<h2 id="/);
  let preamble = '', body = html;
  if (firstH2 > 0) { preamble = html.slice(0, firstH2).trim(); body = html.slice(firstH2); }
  const preambleMeat = preamble.replace(/<hr>/g,'').replace(/<h1[^>]*>.*?<\/h1>/g,'').trim();
  if (preambleMeat) { preamble = `<div class="post-intro-card">${preamble}</div>`; } else { preamble = ''; }
  body = body.replace(/<h2 id="([^"]+)">([\s\S]*?)(?=<h2 id="|$)/g, (match, id) => {
    const isFaq = /^faq|frequently.asked|questions/.test(id);
    return `<section class="${isFaq ? 'content-card faq-section' : 'content-card'}">${match}</section>`;
  });
  return preamble + body;
}

const raw = fs.readFileSync('src/content/blog/article-01-personal-finance-for-beginners.md', 'utf8');
const { content } = matter(raw);
const cleaned = cleanMarkdown(content);
const html = renderPostHtml(cleaned);

console.log('=== STRUCTURE CHECK ===');
const sections = html.match(/<section class="[^"]*">/g) || [];
console.log('Total sections:', sections.length);
console.log('FAQ sections:', sections.filter(s => s.includes('faq')).length);
console.log('Has post-intro-card:', html.includes('post-intro-card'));
console.log('Consecutive HRs:', (html.match(/(<hr>\s*){2,}/g) || []).length);
console.log('');
console.log('=== PREAMBLE ===');
const introStart = html.indexOf('<div class="post-intro-card">');
const introEnd = html.indexOf('</div>', introStart) + 6;
console.log(html.slice(introStart, introStart + 400));
console.log('');
console.log('=== FIRST SECTION ===');
const secStart = html.indexOf('<section class="content-card">');
console.log(html.slice(secStart, secStart + 300));
console.log('');
console.log('=== FAQ SECTION ===');
const faqIdx = html.indexOf('faq-section');
if (faqIdx > -1) console.log(html.slice(faqIdx - 10, faqIdx + 400));
