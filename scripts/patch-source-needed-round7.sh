#!/usr/bin/env bash
set -e

echo "Patching round 7..."

# Canada compound article
perl -0pi -e 's/The 2024 limit is \$7,000 \[SOURCE NEEDED — verify with CRA\]\. Cumulative room since 2009 has grown to \$95,000\+ for Canadians who have been eligible since the beginning \[SOURCE NEEDED\]\./Verify the current TFSA annual and cumulative contribution room directly with CRA before publication./g' src/content/blog/compound-08-compound-interest-canada.md

perl -0pi -e 's/as of last known legislation \[SOURCE NEEDED\] — verify current rate with CRA/verify current capital gains treatment directly with CRA/g' src/content/blog/compound-08-compound-interest-canada.md

perl -0pi -e 's/According to surveys \[SOURCE NEEDED\], a significant percentage of TFSA holders keep their TFSA in a savings account or GIC earning low interest — rather than investing in equities or equity ETFs\./Many TFSA holders use the account like a savings account instead of an investment shelter. That is not automatically wrong, but it limits long-term compounding potential./g' src/content/blog/compound-08-compound-interest-canada.md

perl -0pi -e 's/capital gains inclusion rate — verify current rate as this is subject to legislative change \[SOURCE NEEDED\]/capital gains inclusion rate — verify current CRA rules before publication/g' src/content/blog/compound-08-compound-interest-canada.md

perl -0pi -e 's/CDIC insurance protection up to \$100,000 per category per institution \[SOURCE NEEDED\]/deposit insurance protection; verify current CDIC limits before publication/g' src/content/blog/compound-08-compound-interest-canada.md

perl -0pi -e 's/The 2024 annual limit is \$7,000 \[SOURCE NEEDED — verify with CRA\]\. Cumulative room for those eligible since 2009 is approximately \$95,000 \[SOURCE NEEDED\]\./Verify current annual and cumulative TFSA room directly with CRA before publication./g' src/content/blog/compound-08-compound-interest-canada.md

# Business credit cards
perl -0pi -e 's/Business card rates often range from 15%–29% variable\. \[SOURCE NEEDED\]/Business card rates can be high and vary by issuer, applicant profile, and market conditions./g' src/content/blog/article-08-best-business-credit-cards-new-business.md

perl -0pi -e 's/the card'\''s exchange rate is typically better than the merchant'\''s dynamic currency conversion rate\. \[SOURCE NEEDED\]/dynamic currency conversion is often less favorable than letting the card network handle the conversion./g' src/content/blog/article-08-best-business-credit-cards-new-business.md

perl -0pi -e 's/Time limits apply to disputes — typically 60–120 days from statement date \[SOURCE NEEDED\]/Time limits apply to disputes; verify the issuer and card-network rules before publication/g' src/content/blog/article-08-best-business-credit-cards-new-business.md

# $100 article
perl -0pi -e 's/is the structure most likely to produce returns in the 7–9% range over the long term \[SOURCE NEEDED\]/is a structure commonly used for long-term growth, though future returns are never guaranteed/g' src/content/blog/compound-09-how-much-will-100-a-month-grow.md

perl -0pi -e 's/- \$7,000 annual limit \(2024\) \[SOURCE NEEDED\] — \$100\/month is well within this limit/- Verify the current TFSA or IRA annual limit before publication — $100\/month is usually far below annual contribution limits/g' src/content/blog/compound-09-how-much-will-100-a-month-grow.md

# Emergency fund
perl -0pi -e 's/A 2023 survey found that a majority of Americans could not cover a \$1,000 emergency expense from savings\. \[SOURCE NEEDED\] In Canada, similar surveys have found that a significant portion of adults are within a few hundred dollars of financial crisis at any given time\. \[SOURCE NEEDED\]/Many households in both Canada and the United States struggle to absorb emergency expenses without debt. Verify current survey figures before publishing exact percentages./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Saving is behaviorally counter-intuitive\. The human brain is wired to value present rewards over future ones — a phenomenon called hyperbolic discounting\. \[SOURCE NEEDED\]/Saving is behaviorally counter-intuitive because present spending feels more urgent than future protection./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Research consistently shows that automated savings significantly outperforms manual savings in both consistency and cumulative amount\. \[SOURCE NEEDED\]/Automation usually improves consistency because it removes repeated decision-making from the process./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Research suggests that naming a savings account after its purpose \("Emergency Fund," "Vacation 2027," "House Down Payment"\) increases savings rates compared to anonymous accounts\. \[SOURCE NEEDED\]/Naming a savings account after its purpose makes the goal harder to ignore and easier to protect./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Annual IRS limit \[SOURCE NEEDED\]/verify current IRS limit/g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Typical household savings from subscription audit: \$50–\$200\/month\. \[SOURCE NEEDED\]/A subscription audit can reveal meaningful monthly savings, especially when unused apps, streaming services, and software renewals pile up./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Switching or negotiating typically saves 10–20%\. \[SOURCE NEEDED\]/Savings vary by provider, driving record, location, and coverage level./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Reducing dining out frequency by even 2 meals per week typically saves \$100–\$300\/month depending on market\. \[SOURCE NEEDED\]/Reducing dining out even slightly can free up meaningful monthly cash flow depending on local prices and household habits./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/There is a well-documented behavioral finance phenomenon sometimes called "savings momentum" — once a person consistently saves for 6\+ months, the behavior becomes self-reinforcing\. \[SOURCE NEEDED\]/Once a person saves consistently for several months, the behavior often becomes easier because it turns into a default routine./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

perl -0pi -e 's/Financial conversations in relationships are consistently cited among the most stressful — and most impactful — conversations couples have\. \[SOURCE NEEDED\]/Money conversations are often stressful because they combine security, values, habits, and long-term expectations./g' src/content/blog/article-03-how-to-save-money-emergency-fund.md

# Remaining insurance exact text
perl -0pi -e 's/\*\*CDIC insurance:\*\* The Canada Deposit Insurance Corporation insures deposits at CDIC member institutions up to \$100,000 per category per institution \[SOURCE NEEDED\]\. HISA deposits are covered\./**CDIC insurance:** Verify current CDIC deposit insurance limits directly with CDIC before publication./g' src/content/blog/compound-10-compound-interest-savings-account.md

perl -0pi -e 's/\*\*FDIC insurance:\*\* Federal Deposit Insurance Corporation insures up to \$250,000 per depositor per FDIC-member institution per account category \[SOURCE NEEDED\]\./**FDIC insurance:** Verify current FDIC deposit insurance limits directly with FDIC before publication./g' src/content/blog/compound-10-compound-interest-savings-account.md

# Business credit
perl -0pi -e 's/Some business insurance providers consider business credit in pricing commercial coverage\. \[SOURCE NEEDED\]/Some commercial insurers may consider business financial profile, claims history, industry risk, and credit-related factors when pricing coverage./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Some government procurement programs evaluate business credit as part of vendor qualification\. \[SOURCE NEEDED\]/Some procurement processes evaluate financial stability, vendor history, compliance, and business credibility before awarding contracts./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Incorporation in Canada provides a distinct legal identity\. A federally incorporated business has nationwide recognition; provincially incorporated businesses are recognized in the province of incorporation and in other provinces where extra-provincial registration is completed\. \[SOURCE NEEDED\]/Incorporation in Canada creates a distinct legal entity. Verify federal, provincial, and extra-provincial registration requirements with official government sources before publication./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Apply online at IRS\.gov\. Approval is typically immediate\. \[SOURCE NEEDED\]/Apply through the official IRS EIN application page and verify the current process directly with the IRS./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Register through the CRA Business Registration Online \(BRO\) portal or through a Service Canada office\. If you incorporate federally, you are automatically assigned a BN\. \[SOURCE NEEDED\]/Register through official CRA or government channels and verify the current BN process directly with CRA before publication./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Some lenders require a minimum average daily balance or minimum monthly deposit volume\. \[SOURCE NEEDED\]/Some lenders may require minimum balances, deposit activity, or operating history depending on the product./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Accessible via CreditSafe and others\. \[SOURCE NEEDED\]/Availability depends on provider and market./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Required for US federal government contracting \[SOURCE NEEDED\]/Required for many US federal contracting workflows; verify current SAM.gov requirements before publication/g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Canada'\''s bank for entrepreneurs, offering term loans, working capital, and advisory services with a mandate to support Canadian businesses that may not qualify for conventional bank financing\. \[SOURCE NEEDED\]/Canada'\''s development bank for entrepreneurs; verify current BDC products and eligibility directly with BDC before publication./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/business identity fraud is a growing risk \[SOURCE NEEDED\]/business identity fraud is a real operational risk/g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Some commercial insurers use business credit as a factor in commercial premium pricing\. \[SOURCE NEEDED\]/Some commercial insurers may consider credit-related or financial stability factors depending on jurisdiction and product./g' src/content/blog/article-07-how-to-build-business-credit.md

perl -0pi -e 's/Business identity theft is a growing problem\. Fraudsters can establish accounts in your business'\''s name, damage your credit, and access financing fraudulently\. \[SOURCE NEEDED\]/Business identity theft is a real risk. Fraudsters may attempt to open accounts, misuse company information, or damage the business'\''s credit profile./g' src/content/blog/article-07-how-to-build-business-credit.md

# Credit article
perl -0pi -e 's/Even a 0\.5% difference in mortgage rate can mean tens of thousands of dollars in additional interest over a 25-year amortization\. \[SOURCE NEEDED\]/Even a small mortgage-rate difference can mean tens of thousands of dollars in additional interest over a long amortization./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/In some jurisdictions, credit history is used as a factor in insurance pricing \[SOURCE NEEDED\]/In some jurisdictions, credit-related information may be used in insurance pricing; verify local rules before publication/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Some employers, particularly in financial sectors, conduct credit checks as part of background screening \[SOURCE NEEDED\]/Some employers, especially in finance-sensitive roles, may conduct credit checks where legally permitted/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/A single late payment can drop a score by 60–110\+ points, depending on your starting score and other factors\. \[SOURCE NEEDED\]/A single late payment can seriously damage a credit score, especially for someone with an otherwise clean file./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Hard inquiries remain on your report for approximately 2 years but typically only affect your score for 12 months\. \[SOURCE NEEDED\]/Hard inquiry treatment varies by bureau and scoring model; verify current Equifax, TransUnion, and FICO guidance before publication./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Errors are more common than most people realize\. \[SOURCE NEEDED\]/Credit report errors happen./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Disputes for actual errors are free and can be done yourself\. \[SOURCE NEEDED\]/Disputes for actual errors can usually be submitted directly through the credit bureau./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/PIPEDA \(Personal Information Protection and Electronic Documents Act\) governs data use \[SOURCE NEEDED\]/PIPEDA and applicable provincial rules may govern personal data use; verify current rules before publication/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/FCRA \(Fair Credit Reporting Act\) governs data use and dispute rights \[SOURCE NEEDED\]/FCRA governs many US credit reporting rights; verify current consumer rights with FTC and CFPB sources/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Free in both Canada and the USA \[SOURCE NEEDED\]/Credit report access rules vary; verify current free-report options in Canada and the USA before publication/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Credit report errors are more common than most consumers realize\. \[SOURCE NEEDED\]/Credit report errors are worth checking for because even one incorrect item can affect applications./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/On a credit card with a typical interest rate, paying only the minimum on a \$3,000 balance could take years to repay and cost significant interest\. \[SOURCE NEEDED\]/On a high-interest credit card, paying only the minimum can stretch repayment for years and create heavy interest cost./g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Bankruptcies remain on credit reports for 6–10 years depending on jurisdiction \[SOURCE NEEDED\]/Bankruptcy reporting timelines vary by jurisdiction and bureau; verify before publication/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Collections remain for 6–7 years typically \[SOURCE NEEDED\]/Collection reporting timelines vary by jurisdiction and bureau; verify before publication/g' src/content/blog/article-04-how-to-build-credit.md

perl -0pi -e 's/Insured mortgages \(with CMHC insurance, for down payments under 20%\) typically require a minimum score of 600–680 depending on lender \[SOURCE NEEDED\]/Insured mortgage qualification rules vary by lender, insurer, and borrower profile; verify current CMHC and lender requirements before publication/g' src/content/blog/article-04-how-to-build-credit.md

echo "Round 7 done."
