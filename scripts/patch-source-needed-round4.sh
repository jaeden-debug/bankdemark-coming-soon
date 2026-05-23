#!/usr/bin/env bash
set -e

echo "Patching round 4..."

# Financial freedom roadmap
perl -0pi -e 's/The empirical relationship between money and well-being is complex\. Beyond a threshold sufficient to meet basic needs comfortably, additional income has diminishing marginal returns to happiness\. \[SOURCE NEEDED\]/The relationship between money and well-being is complex. Once basic needs, safety, and reasonable comfort are covered, more income often produces smaller lifestyle gains than people expect./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/- Reduced financial stress — consistently identified as a major source of chronic anxiety \[SOURCE NEEDED\]/- Reduced financial stress — one of the most practical benefits of stronger cash flow, lower debt, and higher reserves/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/- Most high-net-worth individuals own businesses or significant equity in businesses \[SOURCE NEEDED\]/- Many high-net-worth individuals build wealth through business ownership, equity, real estate, or concentrated ownership before later diversifying/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/The primary wealth-building vehicle for most individual investors\. Accessible, liquid, low-cost via index ETFs, and historically the highest-returning asset class over long periods\. \[SOURCE NEEDED\]/A primary wealth-building vehicle for many individual investors. Public equities are accessible, liquid, and available through low-cost index ETFs, though returns vary by market, period, and risk level./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/The 4% rule originates primarily from the "Trinity Study" \(Cooley, Hubbard, and Walz, 1998\) \[SOURCE NEEDED\]/The 4% rule originates primarily from the Trinity Study \(Cooley, Hubbard, and Walz, 1998\)/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/, and some researchers suggest 3\.0–3\.5% may be more conservative\. \[SOURCE NEEDED\]/; many early-retirement planners use lower withdrawal assumptions for extra margin of safety./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/The 4% rule is based on US market data; Canadian investors may face different return profiles \[SOURCE NEEDED\]/The 4% rule is based largely on US market history; Canadian investors should account for Canadian tax rules, currency exposure, and portfolio mix/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/50% inclusion rate \[SOURCE NEEDED for current rate\]/verify current CRA capital gains inclusion rules/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/Long-term capital gains rates \(lower than income\) \[SOURCE NEEDED\]/verify current IRS long-term capital gains rules/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/healthcare costs are a major retirement risk \[SOURCE NEEDED\]/healthcare costs can be a major retirement risk/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/The Affordable Care Act \(ACA\) marketplace provides options, but premiums can be substantial depending on income and state\. \[SOURCE NEEDED\]/The Affordable Care Act \(ACA\) marketplace may provide options, but premiums depend on income, location, household size, and current rules./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/Humans adapt to consumption levels relatively quickly — new purchases provide a temporary boost in satisfaction that normalizes\. This "hedonic treadmill" means chasing lifestyle satisfaction through consumption is unlikely to produce lasting happiness\. \[SOURCE NEEDED\]/Humans adapt to consumption levels quickly. New purchases can feel exciting, then normal. That is why financial freedom has to be designed around time, autonomy, health, and relationships — not just more spending./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/- No formal "estate tax" or "inheritance tax" at the federal level \[SOURCE NEEDED\]/- Canada: verify current estate, deemed disposition, and probate rules with CRA and provincial sources/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/- Probate fees vary by province \[SOURCE NEEDED\]/- Probate fees vary by province; verify current provincial rules before publication/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/- State-level estate and inheritance taxes vary \[SOURCE NEEDED\]/- State-level estate and inheritance taxes vary; verify current state rules before publication/g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/\*\*Charitable remainder trusts:\*\* In the USA, provide income to the donor during their lifetime with the remainder going to charity at death\. \[SOURCE NEEDED\]/\*\*Charitable remainder trusts:\*\* In the USA, these may provide income to the donor during life with the remainder going to charity at death. Verify current IRS rules and get legal advice before using this strategy./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/\*\*Tax-loss harvesting:\*\* Selling investments at a loss to offset realized gains\. Most relevant in taxable brokerage accounts\. Requires care to avoid superficial loss \(Canada\) or wash sale \(USA\) rules\. \[SOURCE NEEDED\]/\*\*Tax-loss harvesting:\*\* Selling investments at a loss to offset realized gains. Most relevant in taxable brokerage accounts. Requires care to avoid superficial loss \(Canada\) or wash sale \(USA\) rules; verify current CRA and IRS rules before acting./g' src/content/blog/article-09-financial-freedom-roadmap.md

perl -0pi -e 's/\*\*Dividend tax credits \(Canada\):\*\* Canadian dividends from Canadian-controlled public companies receive preferential tax treatment in non-registered accounts\. Eligible dividends have a significantly lower effective tax rate than interest income at most income levels\. \[SOURCE NEEDED\]/\*\*Dividend tax credits \(Canada\):\*\* Eligible Canadian dividends may receive preferential tax treatment in non-registered accounts. Verify current CRA dividend tax credit rules before publication./g' src/content/blog/article-09-financial-freedom-roadmap.md

# Investment calculator guide
perl -0pi -e 's/Canada and US historical inflation has averaged approximately 2–3% annually over long periods \[SOURCE NEEDED\]/Canada and US central banks generally target inflation around 2%, while actual historical inflation varies by period/g' src/content/blog/investment-calculator-guide.md

perl -0pi -e 's/Research on investor behavior consistently shows that people who automate their contributions accumulate significantly more wealth than those who invest ad hoc, despite identical average income levels \[SOURCE NEEDED\]/Automation improves consistency by removing repeated decision-making from the investing process/g' src/content/blog/investment-calculator-guide.md

perl -0pi -e 's/given central bank inflation targets of approximately 2% \[SOURCE NEEDED\]/given the Bank of Canada and Federal Reserve long-run inflation target framework/g' src/content/blog/investment-calculator-guide.md

# Million article
perl -0pi -e 's/Long-run historical returns for diversified equity markets have averaged approximately 7–10% nominally \[SOURCE NEEDED\]/Long-run historical returns for diversified equity markets have often been discussed in the mid-to-high single digits or higher, depending on market, period, inflation, and fees/g' src/content/blog/compound-06-how-long-to-reach-1-million-investing.md

perl -0pi -e 's/The 4% rule — originating from the Trinity Study \[SOURCE NEEDED\]/The 4% rule — originating from the Trinity Study/g' src/content/blog/compound-06-how-long-to-reach-1-million-investing.md

perl -0pi -e 's/Using the 4% withdrawal rule, which is already calibrated to historical inflation-adjusted returns \[SOURCE NEEDED\]/Using the 4% withdrawal rule, which is based on historical stock\/bond withdrawal research/g' src/content/blog/compound-06-how-long-to-reach-1-million-investing.md

perl -0pi -e 's/Annual TFSA contribution room is \$7,000 in 2024 \(\$583\/month\) \[SOURCE NEEDED\]/Verify current annual TFSA contribution room directly with the CRA/g' src/content/blog/compound-06-how-long-to-reach-1-million-investing.md

perl -0pi -e 's/\*\*401\(k\) Maximization \(\$23,000\/year in 2024 = ~\$1,917\/month \[SOURCE NEEDED\]\):\*\*/\*\*401\(k\) Maximization:\*\*/g' src/content/blog/compound-06-how-long-to-reach-1-million-investing.md

echo "Round 4 done."
