const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function cleanSlug(file) {
  return file.replace(/^article-\d+-/, '').replace(/\.md$/, '');
}

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const slugs = files.map(file => {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data } = matter(raw);
  const slug = String(data.slug || cleanSlug(file))
    .replace(/^\/blog\//, '').replace(/^\//, '');
  return { file, slug, hasFrontMatterSlug: !!data.slug };
});

// Static routes
const staticRoutes = [
  '/', '/about', '/contact', '/blog', '/calculators', '/pillars', '/privacy',
  '/terms', '/disclaimer', '/financial-freedom-quiz', '/financial-freedom-roadmap',
  '/money-health-score', '/pillars/personal-finance', '/pillars/investing',
  '/pillars/business-credit', '/pillars/debt-management', '/pillars/financial-freedom',
  '/pillars/banking', '/calculators/budget-calculator', '/calculators/compound-interest-calculator',
  '/calculators/credit-card-payoff-calculator', '/calculators/debt-payoff-calculator',
  '/calculators/emergency-fund-calculator', '/calculators/fire-calculator',
  '/calculators/investment-calculator', '/calculators/mortgage-calculator',
  '/calculators/net-worth-calculator', '/calculators/rent-vs-buy-calculator',
  '/calculators/retirement-calculator', '/calculators/rrsp-calculator',
  '/calculators/tfsa-calculator',
];

// Noindex set
const noindexBlogSlugs = new Set([
  'content-marketing-strategy-revenue', 'dropshipping-vs-inventory-ecommerce',
  'ecommerce-conversion-rate-optimization', 'email-marketing-automation-ecommerce',
  'local-seo-for-small-business', 'how-to-build-an-ecommerce-brand',
  'niche-ecommerce-topical-authority', 'shopify-seo-strategy',
  'ai-seo-tools-small-business', 'shopify-seo-guide', 'ecommerce-seo-strategy',
]);

// SEOMap nodes
const seoMapFile = fs.readFileSync('src/app/data/seoMap.js', 'utf8');
const seoMapKeys = [...seoMapFile.matchAll(/"(\/[^"]+)":\s*\{/g)].map(m => m[1]);
const uniqueSeoKeys = [...new Set(seoMapKeys)];

console.log('\n=== TOTAL BLOG POSTS:', slugs.length, '===');
console.log('\n=== NOINDEX SLUGS (in sitemap.js) ===');
noindexBlogSlugs.forEach(s => console.log(' NOINDEX:', s));

console.log('\n=== SLUGS NOT IN SEOMAP ===');
slugs.forEach(({ slug }) => {
  const path = `/blog/${slug}`;
  if (!uniqueSeoKeys.includes(path)) {
    const isNoindex = noindexBlogSlugs.has(slug);
    console.log(` ${isNoindex ? '[NOINDEX]' : '[MISSING]'} /blog/${slug}`);
  }
});

console.log('\n=== STATIC ROUTES NOT IN SEOMAP ===');
staticRoutes.forEach(r => {
  const key = r === '/' ? '/' : r;
  if (!uniqueSeoKeys.includes(key)) {
    console.log(' MISSING:', key);
  }
});

console.log('\n=== DUPLICATE SLUG RISK (cleanSlug vs frontmatter conflict) ===');
const seenSlugs = new Map();
slugs.forEach(({ file, slug }) => {
  if (seenSlugs.has(slug)) {
    console.log(' DUPLICATE SLUG:', slug, '→ files:', seenSlugs.get(slug), 'AND', file);
  }
  seenSlugs.set(slug, file);
});
console.log(seenSlugs.size, 'unique slugs from', slugs.length, 'files');
