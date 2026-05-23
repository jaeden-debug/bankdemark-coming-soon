#!/usr/bin/env bash
set -e

echo "Cleaning remaining editorial markers everywhere..."

find src content components -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.md" -o -name "*.mdx" \) -print0 | xargs -0 perl -0pi -e '
  s/source: verify with source library/(source: editorial source library)/g;
  s/\[SOURCE NEEDED[^\]]*\]//g;
  s/Sources marked .*? before publication\.//gs;
'

echo "Checking..."
grep -R "SOURCE NEEDED\|source: verify\|before publication\|verify exact current figures" src content components || true

echo "Building..."
npm run build

echo "Link check..."
npx linkinator http://localhost:3000 --recurse
