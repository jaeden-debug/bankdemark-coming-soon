#!/usr/bin/env bash
set -e

echo "Patching round 6..."

# Budget article
perl -0pi -e 's/Studies consistently show that people who budget accumulate more savings and carry less consumer debt than those who do not, controlling for income\. \[SOURCE NEEDED\]/Budgeting is most useful when it changes behavior: tracking cash flow, assigning jobs to dollars, and catching leaks before they become debt./g' src/content/blog/article-02-how-to-budget-money.md

perl -0pi -e 's/The gap between gross and net pay for employees can be 20–35% depending on your income level and jurisdiction\. \[SOURCE NEEDED\]/The gap between gross and net pay can be large once taxes, payroll deductions, benefits, and retirement contributions are included./g' src/content/blog/article-02-how-to-budget-money.md

perl -0pi -e 's/The 50\/30\/20 rule, popularized by Senator Elizabeth Warren and her daughter Amelia Warren Tyagi in their book \*All Your Worth\* \[SOURCE NEEDED\]/The 50\/30\/20 rule, popularized by Elizabeth Warren and Amelia Warren Tyagi in \*All Your Worth\*/g' src/content/blog/article-02-how-to-budget-money.md

perl -0pi -e 's/- Not a reason for self-criticism — this is a widely documented human behavioral pattern \[SOURCE NEEDED\]/- Not a reason for self-criticism — this is normal human behavior, especially when spending is invisible or automated/g' src/content/blog/article-02-how-to-budget-money.md

perl -0pi -e 's/federal \$10\/day childcare program being expanded \[SOURCE NEEDED\]/verify current federal and provincial childcare programs before publication/g' src/content/blog/article-02-how-to-budget-money.md

perl -0pi -e 's/In many major Canadian and American cities, this is not achievable, and many households allocate 35–45% to housing\. \[SOURCE NEEDED\]/In many major Canadian and American cities, this is not achievable, and many households allocate a much higher share to housing./g' src/content/blog/article-02-how-to-budget-money.md

# Compound best investments
perl -0pi -e 's/Over 20–30 years, reinvested dividends can account for a substantial portion of total investment returns \[SOURCE NEEDED\]/Over long periods, reinvested dividends can become a meaningful part of total return/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/For context only — past returns do not guarantee future results \[SOURCE NEEDED\]/For context only — past returns do not guarantee future results/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/S&P 500 \(USA\): Historical nominal annual return approximately 10% \[SOURCE NEEDED\]/S&P 500 \(USA\): long-term nominal return often cited around 10%, depending on period and methodology/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/TSX Composite \(Canada\): Historical nominal annual return approximately 8–9% \[SOURCE NEEDED\]/TSX Composite \(Canada\): verify current long-term return data before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/Global diversified equity portfolios: Approximately 7–9% \[SOURCE NEEDED\]/Global diversified equity portfolios: use conservative planning assumptions and verify current data before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/- \$7,000 annual limit \(2024\) \[SOURCE NEEDED\]/- Verify current TFSA or IRA annual contribution limits before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/- 401\(k\) limit: \$23,000 \(2024\) \[SOURCE NEEDED\]/- Verify current 401\(k\) contribution limits directly with the IRS before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/CDIC \(Canada Deposit Insurance Corporation\) insures up to \$100,000 per category per CDIC member institution \[SOURCE NEEDED\]/CDIC deposit insurance limits should be verified directly with CDIC before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/FDIC insures up to \$250,000 per depositor per FDIC-member institution \[SOURCE NEEDED\]/FDIC deposit insurance limits should be verified directly with FDIC before publication/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/Historically, bonds produce lower long-term returns than equities \[SOURCE NEEDED\]/Historically, bonds have usually produced lower long-term returns than equities/g' src/content/blog/compound-07-best-compound-interest-investments.md

perl -0pi -e 's/The majority of actively managed funds underperform their benchmark index over 15\+ year periods \[SOURCE NEEDED\]/SPIVA scorecards show many actively managed funds underperform benchmarks over long periods after fees/g' src/content/blog/compound-07-best-compound-interest-investments.md

# Compound 01
perl -0pi -e 's/a typical North American credit card rate \[SOURCE NEEDED\]/a common high-interest credit card scenario/g' src/content/blog/compound-01-how-compound-interest-works.md

perl -0pi -e 's/total interest paid often exceeds the original principal \[SOURCE NEEDED\]/total interest paid can exceed the original principal depending on rate and payment structure/g' src/content/blog/compound-01-how-compound-interest-works.md

perl -0pi -e 's/Historically return approximately 7–10% annually over long periods \[SOURCE NEEDED\]/have historically delivered strong long-term returns, though future returns are not guaranteed/g' src/content/blog/compound-01-how-compound-interest-works.md

perl -0pi -e 's/Over 20–30 years, reinvested dividends can account for a substantial portion of total portfolio returns \[SOURCE NEEDED\]/Over long periods, reinvested dividends can become a meaningful part of total portfolio return/g' src/content/blog/compound-01-how-compound-interest-works.md

perl -0pi -e 's/behavioral finance research shows most investors make costly mistakes \[SOURCE NEEDED\]/many investor mistakes happen during emotional decision points/g' src/content/blog/compound-01-how-compound-interest-works.md

perl -0pi -e 's/Capital gains are taxed at 50% inclusion rate \(as of last known rate \[SOURCE NEEDED\]\)/Capital gains tax treatment must be verified with CRA before publication/g' src/content/blog/compound-01-how-compound-interest-works.md

# Savings account insurance
perl -0pi -e 's/CDIC insurance:<\/strong> The Canada Deposit Insurance Corporation insures deposits at CDIC member institutions up to \$100,000 per category per institution \[SOURCE NEEDED\]/CDIC insurance:<\/strong> Verify current deposit insurance limits directly with CDIC before publication/g' src/content/blog/compound-10-compound-interest-savings-account.md

perl -0pi -e 's/FDIC insurance:<\/strong> Federal Deposit Insurance Corporation insures up to \$250,000 per depositor per FDIC-member institution per account category \[SOURCE NEEDED\]/FDIC insurance:<\/strong> Verify current deposit insurance limits directly with FDIC before publication/g' src/content/blog/compound-10-compound-interest-savings-account.md

# $500 article
perl -0pi -e 's/Historically, diversified stock market index funds have averaged approximately 7–10% annually before inflation \[SOURCE NEEDED\]/Diversified stock market index funds have historically produced strong long-term returns, but future returns are not guaranteed/g' src/content/blog/compound-05-how-much-will-500-a-month-grow.md

echo "Round 6 done."
