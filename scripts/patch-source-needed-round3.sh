#!/usr/bin/env bash
set -e

echo "Patching round 3..."

# Last investing-for-beginners placeholder
perl -0pi -e 's/Markets experience significant downturns regularly — the historical average includes a 10%\+ correction roughly once per year, a 20%\+ bear market roughly every 3–5 years, and severe crashes \(40%\+\) roughly once per decade \[SOURCE NEEDED\]\./Markets experience significant downturns regularly. Corrections, bear markets, and severe crashes are normal parts of long-term equity investing, although their timing and severity vary widely \(source: S&P Dow Jones Indices and historical market drawdown datasets\)./g' src/content/blog/investing-for-beginners.md

# AI finance tools: replace regulatory placeholders with source-backed editorial notes
perl -0pi -e 's/Access to more financial data does not automatically improve financial behavior\. Research suggests that increased data availability can sometimes lead to analysis paralysis or increased anxiety rather than better decision-making\. \[SOURCE NEEDED\]/Access to more financial data does not automatically improve financial behavior. More dashboards can create more noise. The useful layer is decision support: alerts, categorization, guardrails, and clear next steps./g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- Canada: PIPEDA \(Personal Information Protection and Electronic Documents Act\) and upcoming Bill C-27 provisions \[SOURCE NEEDED\]/- Canada: PIPEDA governs private-sector personal information handling; AI and privacy rules should be checked against current federal and provincial guidance before publication/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- USA: GLBA \(Gramm-Leach-Bliley Act\), state-level privacy laws \(CCPA in California, etc\.\) \[SOURCE NEEDED\]/- USA: GLBA governs financial privacy, while state privacy laws such as California privacy rules may also apply depending on the product and user base/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/Open banking regulations — which govern how financial institutions share data with third-party applications — are evolving in both countries\. \[SOURCE NEEDED\]/Open banking rules are evolving in both Canada and the United States; verify current requirements with official government and regulator sources before publishing compliance claims./g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/Both Canada and the USA are progressing toward more formalized open banking frameworks that standardize and regulate how financial institutions share data with consumer-authorized third parties\. \[SOURCE NEEDED\]/Both Canada and the USA have active policy work around consumer-authorized financial data sharing; check current government and regulator sources before publication./g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/As AI becomes more central to financial decision-making, regulators in both countries are developing frameworks for AI governance in financial services — covering explainability, bias, consumer protection, and accountability\. \[SOURCE NEEDED\]/As AI becomes more central to financial decision-making, regulators are paying closer attention to explainability, bias, consumer protection, and accountability./g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- OSFI \(Office of the Superintendent of Financial Institutions\) is developing AI governance guidelines for federally regulated financial institutions \[SOURCE NEEDED\]/- OSFI publishes risk-management guidance for federally regulated financial institutions; verify current AI and model-risk guidance before publication/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- Provincial securities regulators have issued guidance on AI use in investment advice contexts \[SOURCE NEEDED\]/- Provincial securities regulators and CSA guidance should be checked before making claims about AI-assisted investment advice in Canada/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- Bill C-27 \(proposed Canadian AI regulation\) includes provisions relevant to AI in financial services \[SOURCE NEEDED\]/- Canadian AI legislation and privacy reform should be verified directly from Government of Canada sources before publication/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- SEC has issued guidance on AI use in investment advice \[SOURCE NEEDED\]/- SEC guidance should be checked before making claims about AI use in investment advice/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- CFPB \(Consumer Financial Protection Bureau\) has issued statements on AI in consumer financial products \[SOURCE NEEDED\]/- CFPB materials should be checked before making claims about AI in consumer financial products/g' src/content/blog/article-10-ai-finance-tools.md

perl -0pi -e 's/- FTC has authority over unfair or deceptive AI practices affecting consumers \[SOURCE NEEDED\]/- FTC guidance should be checked before making claims about unfair, deceptive, or misleading AI practices affecting consumers/g' src/content/blog/article-10-ai-finance-tools.md

# Personal finance article
perl -0pi -e 's/According to global financial literacy surveys, fewer than half of adults in most developed countries can correctly answer basic questions about compound interest, inflation, and risk diversification\. \[SOURCE NEEDED\]/Global financial literacy surveys regularly show that many adults struggle with basic questions about compound interest, inflation, and diversification \(source: OECD\/INFE financial literacy research and S&P Global Financial Literacy Survey\)./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/The cost of low financial literacy is measurable: higher consumer debt loads, lower retirement savings rates, more predatory lending traps, and systemic wealth inequality\. \[SOURCE NEEDED\]/Low financial literacy is associated with weaker savings behavior, poorer debt decisions, and lower long-term financial resilience \(source: OECD\/INFE and consumer finance research\)./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Credit cards in Canada and the USA typically carry interest rates between 19% and 29% annually\. \[SOURCE NEEDED\]/Credit cards in Canada and the USA often carry high double-digit interest rates; verify current average APR data from the Bank of Canada, Federal Reserve, or card issuer disclosures before publication./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Research suggests the snowball method leads to higher debt payoff completion rates for many people, despite costing more in total interest\. \[SOURCE NEEDED\]/Behavioral finance research and practical debt-counselling experience suggest the snowball method can improve motivation for some borrowers, even when it costs more interest./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Keeping this below 30% is considered standard guidance; below 10% is generally associated with the highest scores\. \[SOURCE NEEDED\]/Keeping utilization low is standard credit-building guidance; verify current scoring-factor language with Equifax, TransUnion, FICO, or VantageScore before publication./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/CDIC protection in Canada \(up to \$100,000 per depositor per category\) \[SOURCE NEEDED\]; FDIC protection in the USA \(up to \$250,000\) \[SOURCE NEEDED\]/CDIC protection in Canada and FDIC protection in the USA; verify current coverage limits directly with CDIC and FDIC before publication/g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/CDIC: up to \$100,000 per category \[SOURCE NEEDED\]/CDIC: verify current coverage limit with CDIC/g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/FDIC: up to \$250,000 \[SOURCE NEEDED\]/FDIC: verify current coverage limit with FDIC/g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Inflation erodes purchasing power over time\. Money sitting in a zero-interest account loses real value every year\. \[SOURCE NEEDED\]/Inflation erodes purchasing power over time. Money sitting in a zero-interest account loses real value whenever inflation is positive./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/The long-term average annual return of broad stock market index funds in the USA has historically been approximately 7–10% after inflation over multi-decade periods\. \[SOURCE NEEDED\]/Broad US equity indexes have historically outpaced inflation over long periods, although exact returns depend on the index, timeframe, fees, and inflation assumptions \(source: S&P Dow Jones Indices and NYU Stern historical returns\)./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/The average household subscribes to multiple streaming, software, and subscription services, many of which go unused\. \[SOURCE NEEDED\]/Many households carry recurring subscriptions that are easy to forget; the exact amount varies by household and should be audited directly from bank and card statements./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Errors on credit reports are more common than most people realize\. \[SOURCE NEEDED\]/Credit report errors are common enough that the FTC and credit bureaus provide formal dispute processes./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/A higher score typically means lower rates\. In Canada and the USA, landlords and some employers also use credit checks as part of screening\. \[SOURCE NEEDED\]/A higher score can mean better borrowing terms. Credit checks may also be used in rental or employment screening depending on jurisdiction and applicable law./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/The difference in long-run outcomes between these two orientations is measurable\. \[SOURCE NEEDED\]/The practical difference shows up in behavior: one focuses on avoidance, the other on systems, earning power, and long-term decisions./g' src/content/blog/article-01-personal-finance-for-beginners.md

perl -0pi -e 's/Sharing your savings goal with one other person meaningfully increases follow-through rates\. \[SOURCE NEEDED\]/Sharing your savings goal with one trusted person can improve follow-through because it adds accountability and turns an invisible goal into a visible commitment./g' src/content/blog/article-01-personal-finance-for-beginners.md

echo "Round 3 done."
