#!/usr/bin/env bash
set -e

echo "Fixing broken internal blog links..."

find src/content/blog -name "*.md" -type f -print0 | xargs -0 perl -0pi -e '
  s#/blog/financial-freedom\b#/blog/financial-freedom-roadmap#g;
  s#/blog/how-to-save-money\b#/blog/how-to-save-money-emergency-fund#g;
  s#/blog/business-credit-cards-for-new-businesses\b#/blog/best-business-credit-cards-new-business#g;
  s#/blog/ai-tools-small-business\b#/blog/ai-finance-tools#g;
  s#/blog/small-business-seo-canada\b#/blog/ecommerce-seo-strategy#g;
  s#/blog/topical-authority-seo\b#/blog/ecommerce-seo-strategy#g;
'

echo "Done."
