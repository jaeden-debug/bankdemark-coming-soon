#!/usr/bin/env bash
set -e

echo "Fixing stale embedded links in src/app/data/posts.js..."

perl -0pi -e '
  s#/blog/business-credit-cards-for-new-businesses#/blog/best-business-credit-cards-new-business#g;
  s#/blog/small-business-seo-canada#/blog/ecommerce-seo-strategy#g;
  s#/blog/topical-authority-seo#/blog/ecommerce-seo-strategy#g;
  s#/blog/ai-tools-small-business#/blog/ai-finance-tools#g;
  s#/blog/how-to-save-money#/blog/how-to-save-money-emergency-fund#g;
  s#/blog/financial-freedom#/blog/financial-freedom-roadmap#g;
  s/\[SOURCE NEEDED\]/source: verify with source library/g;
  s/\*Sources marked source: verify with source library.*?\*//gs;
' src/app/data/posts.js

echo "Checking remaining bad links..."
grep -R "/blog/financial-freedom\|/blog/how-to-save-money\|/blog/business-credit-cards-for-new-businesses\|/blog/ai-tools-small-business\|/blog/small-business-seo-canada\|/blog/topical-authority-seo\|\[SOURCE NEEDED\]" src/app/data/posts.js src/content/blog || true

echo "Done."
