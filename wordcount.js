const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function plainText(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/#{1,6}\s+/g, ' ')
    .replace(/[*_`#<>[\]()]/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

const noindexBlogSlugs = new Set([
  'content-marketing-strategy-revenue', 'dropshipping-vs-inventory-ecommerce',
  'ecommerce-conversion-rate-optimization', 'email-marketing-automation-ecommerce',
  'local-seo-for-small-business', 'how-to-build-an-ecommerce-brand',
  'niche-ecommerce-topical-authority', 'shopify-seo-strategy',
  'ai-seo-tools-small-business', 'shopify-seo-guide', 'ecommerce-seo-strategy',
]);

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const results = files.map(file => {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const slug = String(data.slug || file.replace(/^article-\d+-/,'').replace(/\.md$/,'')).replace(/^\/blog\//,'').replace(/^\//,'');
  const words = plainText(content).split(' ').filter(Boolean).length;
  return { slug, words, noindex: noindexBlogSlugs.has(slug) };
}).sort((a,b) => a.words - b.words);

console.log('SLUG | WORDS | STATUS');
results.forEach(r => {
  const status = r.noindex ? '[NOINDEX-SITEMAP]' : r.words < 1000 ? '[THIN]' : '[OK]';
  console.log(`${status.padEnd(18)} ${String(r.words).padStart(6)} words  ${r.slug}`);
});
