#!/bin/bash

echo ""
echo "=== TOTAL SOURCE NEEDED COUNT ==="
grep -R "\[SOURCE NEEDED\]" src/content/blog | wc -l

echo ""
echo "=== WORST ARTICLES ==="
grep -R "\[SOURCE NEEDED\]" src/content/blog \
| cut -d: -f1 \
| sort \
| uniq -c \
| sort -nr \
| head -25

echo ""
echo "=== TOP MISSING CLAIMS ==="
grep -R "\[SOURCE NEEDED\]" src/content/blog \
| head -50

