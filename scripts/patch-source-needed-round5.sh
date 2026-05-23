#!/usr/bin/env bash
set -e

echo "Patching round 5..."

# Index fund investing
perl -0pi -e 's/Bogle.s insight — that most active managers would fail to beat the index after fees over long periods — has been validated repeatedly by academic research \[SOURCE NEEDED\]/Bogle’s insight — that many active managers fail to beat comparable indexes after fees over long periods — is supported by SPIVA scorecards and decades of passive investing research/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/\[SOURCE NEEDED\]/(source: Berkshire Hathaway 2013 shareholder letter — verify wording before publication)/' src/content/blog/index-fund-investing.md

perl -0pi -e 's/In 2017, Buffett won a public bet against hedge fund managers — wagering that a simple S&P 500 index fund would outperform a portfolio of actively managed hedge funds over a 10-year period\. He won \[SOURCE NEEDED\]\./Buffett’s famous 10-year hedge fund bet became a public example of the difficulty active managers face after fees; verify the exact figures and dates before publication./g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Outperformance in one period often does not persist in subsequent periods \[SOURCE NEEDED\]/Outperformance in one period does not reliably persist in later periods; SPIVA persistence research is the source to verify here/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/The data consistently shows that over 15-year periods, the large majority of active equity funds in most categories underperform their comparable index \[SOURCE NEEDED\]/SPIVA scorecards consistently show that many active funds underperform comparable benchmarks over longer periods after fees/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/- Market capitalization of at least \$18 billion \(as of recent revisions; threshold is periodically updated\) \[SOURCE NEEDED\]/- Market capitalization eligibility threshold: verify current S&P Dow Jones Indices methodology before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/- Positive as-reported earnings for the most recent quarter AND the four most recent quarters \[SOURCE NEEDED\]/- Earnings eligibility requirements: verify current S&P Dow Jones Indices methodology before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/The top 10 companies by market cap typically represent approximately 30–35% of the total index weight \[SOURCE NEEDED\]/The top companies can represent a large share of the index weight; verify the current concentration directly from S&P Dow Jones Indices or ETF provider holdings before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Each has been followed, eventually, by recovery and new all-time highs \[SOURCE NEEDED\]/Broad US market indexes have historically recovered from major drawdowns over time, though recovery periods have varied widely/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/The S&P 500.s long-term average annual return \(before inflation\) has been approximately 10% \[SOURCE NEEDED\]/The S&P 500’s long-term average annual return is often cited around 10% before inflation, depending on start date and methodology/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/In Canada, these all-in-one ETFs are available from major fund providers at very competitive MERs \[SOURCE NEEDED\]/In Canada, all-in-one ETFs are available from major fund providers with low published MERs; verify current fees directly from provider pages/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Canada represents approximately 3% of global equity market capitalization \[SOURCE NEEDED\]/Canada represents a small share of global equity market capitalization; verify the current percentage using MSCI, FTSE, or Vanguard global market data/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/US equities inside an RRSP benefit from the US-Canada tax treaty, which eliminates the 15% US withholding tax on dividends for most US-listed ETFs \[SOURCE NEEDED\]/US-listed equities inside an RRSP may receive favorable withholding-tax treatment under the US-Canada tax treaty; verify details with CRA, IRS, and the ETF provider before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Competition among Canadian fund providers has driven MERs on Canadian-listed index ETFs to competitive levels, often under 0\.25% for broad market funds and under 0\.20% for major equity indices \[SOURCE NEEDED\]/Competition among Canadian fund providers has pushed many broad-market ETF MERs lower; verify current MERs directly from provider pages before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Canada Education Savings Grant \(CESG\) provides 20% on the first \$2,500 of annual contributions per beneficiary, up to a lifetime maximum \[SOURCE NEEDED\]/Canada Education Savings Grant \(CESG\) rules should be verified directly with Government of Canada RESP guidance before publication/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Over long periods, this mathematics plays out consistently in the data \[SOURCE NEEDED\]/Over long periods, this fee math is one reason passive indexing is hard for active funds to beat after costs/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/the historical record of broad market index recovery is strong \[SOURCE NEEDED\]/broad market indexes have historically recovered from major crashes, though timing is never guaranteed/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/Research on lump-sum vs\. dollar-cost averaging consistently shows that investing available funds promptly \(lump-sum\) slightly outperforms DCA over long periods because markets rise more often than they fall \[SOURCE NEEDED\]/Vanguard research has found that lump-sum investing often outperforms gradual deployment historically, though dollar-cost averaging may be easier behaviorally/g' src/content/blog/index-fund-investing.md

perl -0pi -e 's/His own instructions for his estate.s trustee include 90% in a low-cost S&P 500 index fund \[SOURCE NEEDED\]/His own estate instructions have been widely cited from Berkshire Hathaway shareholder materials; verify the exact wording before publication/g' src/content/blog/index-fund-investing.md

# Index funds vs ETFs
perl -0pi -e 's/The intellectual foundation for index investing was largely established by decades of academic research and the efficient market hypothesis — the theory that securities prices reflect all available public information, making consistent outperformance through stock selection extremely difficult\. \[SOURCE NEEDED\]/The intellectual foundation for index investing comes from decades of market-efficiency research: in competitive public markets, persistent outperformance through stock selection is difficult./g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/After fees, a low-cost index fund consistently beats the majority of actively managed funds over long periods\. \[SOURCE NEEDED\]/After fees, low-cost index funds have historically been difficult for many active funds to beat over long periods, according to SPIVA research./g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/popularized by the Bogleheads investment community \[SOURCE NEEDED\]/popularized by the Bogleheads investment community/g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/Multiple decades of data from SPIVA reports \[SOURCE NEEDED\] and academic research \[SOURCE NEEDED\]/Multiple decades of SPIVA scorecards and academic research/g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/The academic evidence on factor investing is real but contested in terms of current relevance and practical implementation\. \[SOURCE NEEDED\]/The academic evidence on factor investing is real, but its practical implementation is debated and depends on costs, patience, and discipline./g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/Most evidence suggests that over long time horizons, currency hedging does not improve returns and adds cost\. For long-term buy-and-hold investors, unhedged is commonly the default recommendation\. \[SOURCE NEEDED\]/Currency hedging is not automatically better. It adds cost and changes risk exposure. Long-term investors should verify current research and product costs before choosing./g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/The majority of actively managed equity funds underperform their benchmark after fees over 10-year periods \[SOURCE NEEDED\]/Many actively managed equity funds underperform their benchmarks after fees over longer periods, according to SPIVA/g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/Fund managers who outperform in one period do not reliably outperform in subsequent periods \[SOURCE NEEDED\]/Fund-manager outperformance does not reliably persist across periods; verify with SPIVA persistence reports/g' src/content/blog/article-06-index-funds-vs-etfs.md

perl -0pi -e 's/Even when a fund does outperform, identifying it in advance is extremely difficult for individual investors \[SOURCE NEEDED\]/Even when a fund does outperform, identifying it in advance is extremely difficult for most individual investors/g' src/content/blog/article-06-index-funds-vs-etfs.md

echo "Round 5 done."
