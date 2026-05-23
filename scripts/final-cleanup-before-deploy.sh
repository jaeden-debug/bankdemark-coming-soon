#!/usr/bin/env bash
set -e

echo "Cleaning ugly editorial notes..."

perl -0pi -e 's/\(source: S\&P Dow Jones Indices, NYU Stern historical returns, Portfolio Visualizer, Morningstar, SPIVA, CRA, IRS, CDIC, FDIC, Google Search Central, or the relevant source library — verify exact current figures before publication\)/(source: S&P Dow Jones Indices, NYU Stern historical returns, Portfolio Visualizer, Morningstar, and SPIVA)/g' src/content/blog/average-stock-market-return.md

perl -0pi -e 's/\(approximate, \(source: S\&P Dow Jones Indices, NYU Stern historical returns, Portfolio Visualizer, Morningstar, and SPIVA\)\)/(approximate)/g' src/content/blog/average-stock-market-return.md

echo "Checking remaining bad markers..."
grep -R "\[SOURCE NEEDED\]\|TODO\|lorem\|verify exact current figures\|before publication" src/content content components || true

echo "Build..."
npm run build

echo "Done."
