#!/usr/bin/env bash
set -e

echo "=== BUILD CHECK ==="
npm run build

echo ""
echo "=== SOURCE NEEDED COUNT ==="
grep -R "\[SOURCE NEEDED\]" src/content/blog | wc -l || true

echo ""
echo "=== WORST SOURCE NEEDED ARTICLES ==="
grep -R "\[SOURCE NEEDED\]" src/content/blog \
| cut -d: -f1 \
| sort \
| uniq -c \
| sort -nr \
| head -25 || true

echo ""
echo "=== EMPTY MARKDOWN FILES ==="
find src/content/blog -name "*.md" -exec sh -c 'for f; do [ "$(wc -w < "$f")" -eq 0 ] && echo "$f"; done' sh {} +

echo ""
echo "=== INTERNAL LINKS COUNT ==="
grep -R '\](/' src/content/blog | wc -l || true

echo ""
echo "=== PUBLIC IMAGE FILES ==="
find public -type f | grep -Ei "\.(png|jpg|jpeg|webp)$" || true

echo ""
echo "=== BAD IMAGE FILENAMES ==="
find public -type f | grep -Ei "\.(png|jpg|jpeg|webp)$" | grep -E " |IMG_|Screenshot|screen shot|copy|final" || true

echo ""
echo "=== AI FILLER PHRASES ==="
grep -R "in conclusion\|it is important to note\|now more than ever\|ultimately" src/content/blog || true
