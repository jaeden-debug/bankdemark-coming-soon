#!/usr/bin/env bash
set -e

find src/content/blog src/app/data content components -type f \( -name "*.md" -o -name "*.js" -o -name "*.jsx" \) -print0 | xargs -0 perl -0pi -e '
  s/\s*\([^)]*before publication[^)]*\)//gi;
  s/;?\s*verify[^.\n|]*before publication//gi;
  s/;?\s*check[^.\n|]*before publication//gi;
  s/Verify[^.\n|]*before publication\.?//gi;
  s/verify[^.\n|]*before publication//gi;
  s/before publication//gi;
  s/source: editorial source library/editorial source library/g;
'

grep -R "SOURCE NEEDED\|source: verify\|before publication\|verify exact current figures" src content components || true

npm run build
