const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function cleanSlug(file) {
  return file.replace(/^article-\d+-/, '').replace(/\.md$/, '');
}

// Parse the seoMap node keys from the JS source
const seoMapSrc = fs.readFileSync('src/app/data/seoMap.js', 'utf8');
const seoKeys = new Set([...seoMapSrc.matchAll(/"(\/[^"]+)":\s*\{/g)].map(m => m[1]));

// Get all blog slugs
const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const slugs = files.map(file => {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
  const { data } = matter(raw);
  const slug = String(data.slug || cleanSlug(file)).replace(/^\/blog\//, '').replace(/^\//, '');
  return { slug, path: `/blog/${slug}` };
});

// Static routes
const staticRoutes = [
  '/', '/blog', '/calculators', '/pillars',
  '/pillars/personal-finance', '/pillars/investing', '/pillars/business-credit',
  '/pillars/debt-management', '/pillars/financial-freedom', '/pillars/banking',
  '/calculators/compound-interest-calculator', '/calculators/investment-calculator',
  '/calculators/retirement-calculator', '/calculators/budget-calculator',
  '/calculators/fire-calculator', '/calculators/net-worth-calculator',
  '/calculators/debt-payoff-calculator', '/calculators/credit-card-payoff-calculator',
  '/calculators/emergency-fund-calculator', '/calculators/mortgage-calculator',
  '/calculators/rent-vs-buy-calculator', '/calculators/tfsa-calculator',
  '/calculators/rrsp-calculator', '/financial-freedom-roadmap',
  '/financial-freedom-quiz', '/money-health-score', '/about',
];

let missing = 0, covered = 0;

console.log('\n=== BLOG POST SEOMAP COVERAGE ===');
slugs.forEach(({ path }) => {
  if (seoKeys.has(path)) {
    covered++;
  } else {
    console.log('  MISSING:', path);
    missing++;
  }
});

console.log('\n=== STATIC ROUTE COVERAGE ===');
staticRoutes.forEach(r => {
  if (!seoKeys.has(r)) console.log('  MISSING:', r);
});

// Check every seoMap node links to retirement-calculator, compound-interest-calculator, investment-calculator
const requiredLinks = [
  '/calculators/retirement-calculator',
  '/calculators/compound-interest-calculator', 
  '/calculators/investment-calculator',
];
const blogNodes = [...seoMapSrc.matchAll(/"(\/blog\/[^"]+)":\s*\{[\s\S]*?links:\s*\[([\s\S]*?)\]/g)];

let noRequiredLink = 0;
console.log('\n=== BLOG NODES MISSING REQUIRED CALCULATOR LINKS ===');
blogNodes.forEach(([, nodePath, linksStr]) => {
  const missing = requiredLinks.filter(r => !linksStr.includes(r));
  if (missing.length) {
    console.log(`  ${nodePath}: missing ${missing.join(', ')}`);
    noRequiredLink++;
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Blog posts covered in seoMap: ${covered}/${slugs.length}`);
console.log(`Blog posts missing from seoMap: ${missing}`);
console.log(`Blog nodes missing required calculator links: ${noRequiredLink}`);
console.log(`Total seoMap nodes: ${seoKeys.size}`);
