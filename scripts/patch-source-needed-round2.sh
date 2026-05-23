#!/usr/bin/env bash
set -e

echo "Patching round 2..."

# how-to-start-investing remaining market math / risk claims
perl -0pi -e 's/A \$100 investment at age 25 that grows at 7% annually will become approximately \$1,497 by age 65 — a 15x return on a single contribution \[SOURCE NEEDED\]\./A $100 investment at age 25 that grows at 7% annually becomes approximately $1,497 by age 65 — a simple compound-interest calculation, not a market guarantee./g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/- The US stock market has had a negative year roughly 25–30% of all calendar years \[SOURCE NEEDED\]/- The US stock market has had negative calendar years regularly throughout history \(source: S&P Dow Jones Indices and NYU Stern historical return datasets\)/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/- Corrections of 10%\+ happen roughly once per year on average \[SOURCE NEEDED\]/- Corrections of 10%+ are a normal part of equity investing \(source: S&P Dow Jones Indices and historical market drawdown research\)/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/- Bear markets \(20%\+ declines\) occur approximately every 3–5 years on average \[SOURCE NEEDED\]/- Bear markets \(20%+ declines\) occur periodically and should be expected in long-term equity investing \(source: S&P Dow Jones Indices and historical market drawdown research\)/g' src/content/blog/how-to-start-investing.md

perl -0pi -e 's/- Every bear market in history has been followed by a recovery to new highs — eventually \[SOURCE NEEDED\]/- Broad US equity markets have historically recovered from major bear markets over time, although recovery timing varies widely \(source: S&P Dow Jones Indices historical data\)/g' src/content/blog/how-to-start-investing.md

# investing-for-beginners core replacements
perl -0pi -e 's/Inflation is the slow erosion of your purchasing power over time\. Historically, inflation in Canada and the United States has averaged approximately 2–3% per year \[SOURCE NEEDED\]\./Inflation is the slow erosion of your purchasing power over time. Canada and the United States both use 2% inflation targets as central monetary policy anchors \(source: Bank of Canada and Federal Reserve\)./g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/Investing in diversified equities has historically delivered real \(inflation-adjusted\) returns of approximately 5–7% annually over the long term \[SOURCE NEEDED\]/Diversified equities have historically delivered positive real returns over long periods, though the exact return depends heavily on market, timeframe, fees, and asset allocation \(source: S&P Dow Jones Indices, NYU Stern historical returns, and Portfolio Visualizer\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/- Most individual investors underperform the market over the long run \[SOURCE NEEDED\]/- Many individual investors underperform the funds they own because of timing and behavior gaps \(source: Morningstar Mind the Gap research\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/typically better performance than most actively managed funds \[SOURCE NEEDED\]/competitive performance versus many actively managed funds over long horizons, largely because lower fees create a structural advantage \(source: SPIVA scorecards\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/The research on retail investor outcomes is consistent: the simpler the investment strategy, the better the long-term result for most individuals \[SOURCE NEEDED\]\./Retail investor behavior research consistently shows that complexity, timing, and emotional trading can damage realized returns \(source: Morningstar Mind the Gap and Vanguard investor behavior research\)./g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/The 2026 contribution limit is \$7,000 \(\$8,000 if age 50\+\) \[SOURCE NEEDED\]/Verify the current Roth IRA contribution limit with the IRS before publication/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/currently \$7,000 per year as of 2026 \[SOURCE NEEDED\]/verify the current TFSA contribution limit with the CRA before publication/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/MER typically under 0\.25%\) \[SOURCE NEEDED\]/MERs that can be checked directly from the fund provider before publication\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/- Historically, consistent contributors fare better than those who try to time the market \[SOURCE NEEDED\]/- Consistent contributors reduce timing risk and avoid the behavioral trap of waiting for perfect market conditions \(source: Vanguard and Morningstar investor behavior research\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/consistently fail to time the market reliably over the long term \[SOURCE NEEDED\]/often fail to outperform simple benchmark exposure after costs over long periods \(source: SPIVA scorecards\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/it is one of the most thoroughly documented phenomena in investment research \[SOURCE NEEDED\]/performance persistence is weak across many fund categories \(source: SPIVA persistence scorecards\)/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/Over 30 years, that 1\.9% annual difference can consume a significant portion of your total portfolio value \[SOURCE NEEDED\]\./Over 30 years, that 1.9% annual difference can consume a significant portion of your total portfolio value. This is direct compound math: fees compound against the investor every year./g' src/content/blog/investing-for-beginners.md

# account limit bullets
perl -0pi -e 's/- As of 2026, the cumulative contribution room for anyone who has been eligible since 2009 is significant \[SOURCE NEEDED\]/- Cumulative TFSA contribution room depends on eligibility history; verify the current total with the CRA/g' src/content/blog/investing-for-beginners.md

perl -0pi -e "s/- Contribution limit: 18% of your previous year's earned income, up to an annual maximum \[SOURCE NEEDED\]/- Contribution room is based on earned income and annual CRA limits; verify current RRSP rules with the CRA/g" src/content/blog/investing-for-beginners.md

perl -0pi -e 's/- 2026 contribution limit: \$7,000\/year \(\$8,000 for age 50\+\) \[SOURCE NEEDED\]/- Verify current IRA contribution limits directly with the IRS/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/- Income limits apply for direct contributions \(high earners can use "backdoor Roth" strategies\) \[SOURCE NEEDED\]/- Income limits apply for direct Roth IRA contributions; verify current IRS rules before publication/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/- 2026 contribution limit: \$23,500 \(employee\) \[SOURCE NEEDED\]/- Verify current 401\(k\) employee contribution limits directly with the IRS/g' src/content/blog/investing-for-beginners.md

perl -0pi -e 's/the historical probability of a positive outcome has been high \[SOURCE NEEDED\]/historical long-term outcomes have generally improved as holding periods lengthen \(source: S&P Dow Jones Indices and historical return datasets\)/g' src/content/blog/investing-for-beginners.md

echo "Round 2 done."
