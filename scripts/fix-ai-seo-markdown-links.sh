#!/usr/bin/env bash
set -e

FILE="src/content/blog/article-11-ai-seo-tools-small-business.md"
DATA="src/app/data/posts.js"

echo "Fixing malformed markdown links..."

perl -0pi -e '
  s#\[BankDeMark\.com\(/\)#\[BankDeMark.com\]\(/)#g;
  s#\[BankDeMark\(/\)#\[BankDeMark\]\(/)#g;
  s#\[ZYLX\.ai\(https://zylx\.ai\)#\[ZYLX.ai\]\(https://zylx.ai\)#g;
  s#\[zylx\.ai\(https://zylx\.ai\)#\[ZYLX.ai\]\(https://zylx.ai\)#g;
  s#\[StillAwake Media\(https://stillawakemedia\.com\)#\[StillAwake Media\]\(https://stillawakemedia.com\)#g;
  s#\[stillawakemedia\.com\(https://stillawakemedia\.com\)#\[StillAwake Media\]\(https://stillawakemedia.com\)#g;

  s#\[Shopify SEO Guide: How to Rank Product Pages and Collections\(/blog/shopify-seo-guide\)#\[Shopify SEO Guide: How to Rank Product Pages and Collections\]\(/blog/shopify-seo-guide\)#g;
  s#\[Small Business SEO Canada: How Local Brands Can Rank Nationally\(/blog/ecommerce-seo-strategy\)#\[Small Business SEO Canada: How Local Brands Can Rank Nationally\]\(/blog/ecommerce-seo-strategy\)#g;
  s#\[BankDeMark'\''s full business intelligence and financial system\(/pillars\)#\[BankDeMark'\''s full business intelligence and financial system\]\(/pillars\)#g;
  s#\[get in touch\(/contact\)#\[get in touch\]\(/contact\)#g;

  s#\[/\(/\)#\[Home\]\(/)#g;
  s#\[/pillars\(/pillars\)#\[Pillars\]\(/pillars\)#g;
  s#\[/pillars/business-credit\(/pillars/business-credit\)#\[Business Systems\]\(/pillars/business-credit\)#g;
  s#\[/blog/shopify-seo-guide\(/blog/shopify-seo-guide\)#\[Shopify SEO Guide\]\(/blog/shopify-seo-guide\)#g;
  s#\[/blog/ecommerce-seo-strategy\(/blog/ecommerce-seo-strategy\)#\[Ecommerce SEO Strategy\]\(/blog/ecommerce-seo-strategy\)#g;

  s#\[\s*https://zylx\.ai\s*\(https://zylx\.ai\)\s*\)#\[ZYLX.ai\]\(https://zylx.ai\)#g;
  s#\[\s*https://stillawakemedia\.com\s*\(https://stillawakemedia\.com\)\s*\)#\[StillAwake Media\]\(https://stillawakemedia.com\)#g;
' "$FILE" "$DATA"

echo "Checking remaining malformed patterns..."
grep -R "zylx.ai(\|stillawakemedia.com(\|https://zylx.ai(https\|https://stillawakemedia.com(https\|\[.*(/" "$FILE" "$DATA" || true

echo "Rebuilding clean..."
rm -rf .next
npm run build

echo "Restart server..."
lsof -ti :3000 | xargs kill -9 2>/dev/null || true
npm run start
