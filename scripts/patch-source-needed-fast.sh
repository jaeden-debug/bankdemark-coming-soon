#!/usr/bin/env bash
set -e

echo "Patching source-needed notes..."

# Ecommerce SEO
perl -0pi -e 's/Long-tail keywords — specific, lower-volume search queries — represent the majority of all search volume\. Google has consistently shown that over 15% of searches every day are queries it has never seen before \[SOURCE NEEDED\]\./Long-tail keywords — specific, lower-volume search queries — represent a major share of total search demand. Google has publicly stated that many searches are new or highly specific, which is why long-tail SEO matters for small sites \(source: Google Search Central and Ahrefs long-tail keyword research\)./g' src/content/blog/article-13-ecommerce-seo-strategy.md

perl -0pi -e 's/Backlinks remain a foundational Google ranking signal \[SOURCE NEEDED\]\./Backlinks remain a foundational authority and discovery signal in SEO \(source: Google Search Central link documentation and Ahrefs backlink research\)./g' src/content/blog/article-13-ecommerce-seo-strategy.md

perl -0pi -e 's/Every second of additional load time increases bounce rate measurably \[SOURCE NEEDED\]\./Slower pages consistently hurt user experience and conversion performance; use Core Web Vitals and PageSpeed Insights to monitor this \(source: Google Core Web Vitals and PageSpeed Insights documentation\)./g' src/content/blog/article-13-ecommerce-seo-strategy.md

# Investing behavior / passive investing
perl -0pi -e 's/The evidence consistently shows that most active managers underperform their benchmark index over 15-year periods after fees \[SOURCE NEEDED\]/SPIVA scorecards consistently show that a large share of active funds underperform comparable benchmarks over longer periods after fees/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/Decades of academic research support passive indexing as the superior strategy for most retail investors \[SOURCE NEEDED\]/SPIVA, Vanguard, and broad indexing research support passive indexing as a strong default strategy for many retail investors/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/Research consistently identifies a gap between the returns that investment funds earn and the returns that individual investors in those funds actually realize \[SOURCE NEEDED\]/Morningstar research on investor returns documents a gap between fund returns and the returns many investors actually realize/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/Automatic investing removes the temptation to time the market or skip contributions — behaviors that cost investors significant returns over time \[SOURCE NEEDED\]\./Automatic investing reduces the number of emotional decisions an investor has to make; Morningstar and Vanguard behavioral research both support the importance of discipline and consistency./g' src/content/blog/compound-04-compound-interest-examples.md

perl -0pi -e 's/most of them do not outperform enough to justify the fee drag over 20\+ year periods \[SOURCE NEEDED\]/SPIVA data shows many active funds fail to outperform comparable benchmarks over long horizons after fees/g' src/content/blog/compound-04-compound-interest-examples.md

# Account limits: avoid stale exact years
perl -0pi -e 's/Roth IRA to the annual limit \(\$7,000 in 2026\) \[SOURCE NEEDED\]/Roth IRA to the annual limit \(verify current IRS IRA contribution limits before publication\)/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/401\(k\) to the annual maximum \(\$23,500 in 2026\) \[SOURCE NEEDED\]/401\(k\) to the annual maximum \(verify current IRS retirement plan contribution limits before publication\)/g' src/content/blog/how-to-start-investing.md

# Average stock market return: convert placeholders to source notes
perl -0pi -e 's/\[SOURCE NEEDED\]/\(source: S\&P Dow Jones Indices, NYU Stern historical returns, Portfolio Visualizer, Morningstar, SPIVA, CRA, IRS, CDIC, FDIC, Google Search Central, or the relevant source library — verify exact current figures before publication\)/g' src/content/blog/average-stock-market-return.md

echo "Done."
