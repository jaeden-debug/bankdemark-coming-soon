import Link from "next/link";
import Script from "next/script";
import AverageNetWorthCalculator from "@/app/components/AverageNetWorthCalculator";
import SEOLinkMap from "@/app/components/SEOLinkMap";
import CTABanner from "@/app/components/CTABanner";

export const metadata = {
  title: "Average Net Worth by Age in Canada | 2025 Benchmarks",
  description:
    "See average and median net worth by age in Canada. Compare your wealth against Statistics Canada benchmarks — top 10%, top 1%, and province-level data.",
  alternates: { canonical: "/average-net-worth-by-age-canada" },
  openGraph: {
    title: "Average Net Worth by Age in Canada — 2025 Benchmarks",
    description: "How does your net worth compare to other Canadians? See median, average, and top percentile benchmarks by age group.",
    url: "https://bankdemark.com/average-net-worth-by-age-canada",
  },
};

const faq = [
  {
    q: "What is the average net worth by age in Canada?",
    a: "Average (mean) net worth varies significantly by age. For Canadians under 35, the median is approximately $48,700. By ages 55–64, the median rises to roughly $690,000. Mean figures are higher due to wealth concentration among high-net-worth households. (Statistics Canada, Survey of Financial Security (SFS), 2023)",
  },
  {
    q: "What is considered a good net worth in Canada?",
    a: "A 'good' net worth depends on your age, lifestyle, and goals. Reaching or exceeding the median for your age group is a meaningful benchmark. Being in the top 25% for your age cohort — which requires a net worth above approximately $145,000 for under-35s and $1,380,000 for those aged 55–64 — indicates strong wealth accumulation.",
  },
  {
    q: "What is the median net worth in Canada?",
    a: "The national median net worth for all Canadian families is approximately $329,000, though this figure varies substantially by age group, province, and home ownership status. (Statistics Canada, Survey of Financial Security (SFS), 2023)",
  },
  {
    q: "What percentage of Canadians have a net worth over $1 million?",
    a: "Approximately 10% to 15% of Canadian households have a net worth exceeding $1 million, with the proportion higher among those aged 55 and older where home equity and pension values have had time to accumulate. (Statistics Canada, Survey of Financial Security (SFS), 2023)",
  },
  {
    q: "How does home ownership affect net worth in Canada?",
    a: "Home ownership is a major driver of net worth for most Canadians. Homeowners typically have significantly higher median net worth than renters at every age bracket, largely because real estate appreciation has historically added substantial equity over time.",
  },
  {
    q: "Which province has the highest average net worth in Canada?",
    a: "British Columbia and Ontario consistently show the highest average net worth figures, driven primarily by real estate values in major urban markets. Alberta also shows above-average wealth due to historically higher incomes. (Statistics Canada)",
  },
  {
    q: "How is net worth calculated in Canada?",
    a: "Net worth equals total assets minus total liabilities. Assets include real estate, registered accounts (RRSP, TFSA, RESP), non-registered investments, cash, and personal property. Liabilities include mortgages, car loans, student debt, credit cards, and other obligations.",
  },
  {
    q: "What counts as top 1% net worth in Canada?",
    a: "The threshold for the top 1% of net worth in Canada varies by age. For Canadians aged 45–54, the threshold is approximately $5 million or more in total net worth. (Statistics Canada, Survey of Financial Security (SFS), 2023)",
  },
];

export default function AverageNetWorthByAgeCanadaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Average Net Worth by Age in Canada — 2025 Benchmarks and Percentiles",
    description: "Statistics Canada-based benchmarks for median and average net worth by age group in Canada, including percentile comparisons and provincial data.",
    publisher: { "@type": "Organization", name: "BankDeMark", url: "https://bankdemark.com" },
    url: "https://bankdemark.com/average-net-worth-by-age-canada",
    mainEntityOfPage: "https://bankdemark.com/average-net-worth-by-age-canada",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BankDeMark", item: "https://bankdemark.com" },
      { "@type": "ListItem", position: 2, name: "Statistics", item: "https://bankdemark.com/statistics" },
      { "@type": "ListItem", position: 3, name: "Average Net Worth by Age Canada", item: "https://bankdemark.com/average-net-worth-by-age-canada" },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Average Net Worth by Age in Canada",
    url: "https://bankdemark.com/average-net-worth-by-age-canada",
    description: "See average and median Canadian net worth benchmarks by age group, percentile, and province.",
    isPartOf: { "@type": "WebSite", name: "BankDeMark", url: "https://bankdemark.com" },
  };

  return (
    <>
      <Script id="nwage-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="nwage-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="nwage-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="nwage-webpage-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <div className="page-hero hub-hero">
        <p className="eyebrow">Statistics Canada Data · 2025 Benchmarks</p>
        <h1>Average Net Worth by Age in Canada</h1>
        <p>
          Compare your net worth against Canadian benchmarks by age group and province.
          See median, average, top 10%, top 5%, and top 1% thresholds — all in one place.
        </p>
      </div>

      <div className="pillar-page">
        <AverageNetWorthCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#quick-answer">Quick Answer</a></li>
            <li><a href="#what-is-net-worth">What Is Net Worth?</a></li>
            <li><a href="#average-net-worth-by-age">Average Net Worth by Age</a></li>
            <li><a href="#median-vs-mean">Median vs. Mean</a></li>
            <li><a href="#how-to-build-net-worth">How to Build Net Worth</a></li>
            <li><a href="#home-ownership-impact">Home Ownership Impact</a></li>
            <li><a href="#retirement-impact">Net Worth and Retirement</a></li>
            <li><a href="#provincial-differences">Provincial Differences</a></li>
            <li><a href="#mistakes">Common Mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#conclusion">Conclusion</a></li>
          </ol>
        </div>

          <div id="quick-answer" className="pillar-section">
            <span className="calculator-seo-kicker">Quick Answer</span>
            <h2>Average Net Worth by Age in Canada — At a Glance</h2>
            <p>
              The median net worth for Canadians under 35 is approximately <strong>$48,700</strong>.
              For those aged 35–44, it rises to <strong>$234,400</strong>. The peak accumulation years
              are 55–64, where the median reaches approximately <strong>$690,000</strong>.
              These figures include all assets — real estate, registered accounts, investments, and
              personal property — minus all liabilities. (Statistics Canada, Survey of Financial Security (SFS), 2023)
            </p>
            <div className="formula-card">
              <strong>Net Worth = Total Assets − Total Liabilities</strong>
              <p>Assets include real estate, RRSP, TFSA, investments, and cash. Liabilities include mortgages, loans, and credit card balances.</p>
            </div>
          </div>

          <div id="what-is-net-worth" className="pillar-section">
            <h2>What Is Net Worth and Why Does It Matter?</h2>
            <p>
              Net worth is the single most comprehensive measure of financial progress available.
              It captures not just income, but the accumulated result of every financial decision
              you have ever made — savings rates, investment choices, debt management, real estate
              decisions, and spending patterns over time.
            </p>
            <p>
              Unlike income, which tells you what you earn in a year, net worth tells you how much
              wealth you have actually built. A person earning $200,000 per year but spending $210,000
              builds zero net worth. A person earning $60,000 per year but consistently investing the
              difference can build substantial wealth over a 20- to 30-year period.
            </p>
            <p>
              For Canadians, net worth is particularly important because it determines retirement
              readiness, financial resilience in an emergency, the ability to fund major life
              decisions, and ultimately the degree of financial independence achievable.
            </p>

            <h3>What Counts as an Asset in Canada?</h3>
            <p>
              In the Statistics Canada Survey of Financial Security framework, assets include:
              the primary residence and other real estate, RRSP and RRIF balances, TFSA balances,
              RESP balances, employer pension plan values (defined contribution), non-registered
              investment accounts, savings accounts, GICs, vehicles, and other personal property
              of significant value such as business ownership stakes.
            </p>

            <h3>What Counts as a Liability in Canada?</h3>
            <p>
              Liabilities include: mortgage balances on primary and secondary properties, home
              equity lines of credit, vehicle loans, student loans, credit card balances, personal
              loans, and any other outstanding debt obligations. Business liabilities may also
              be included when the business is part of the household financial picture.
            </p>

            <div className="seo-two-column">
              <div><h3>Assets (add)</h3><p>Real estate, RRSP, TFSA, investments, savings, vehicles, business equity</p></div>
              <div><h3>Liabilities (subtract)</h3><p>Mortgage, HELOC, car loans, student loans, credit cards, personal loans</p></div>
              <div><h3>Net Worth</h3><p>Assets minus liabilities — your true financial position</p></div>
              <div><h3>Why it matters</h3><p>Retirement readiness, financial resilience, and path to independence</p></div>
            </div>
          </div>

          <div id="average-net-worth-by-age" className="pillar-section">
            <h2>Average and Median Net Worth by Age in Canada — Full Breakdown</h2>
            <p>
              The following benchmarks are derived from Statistics Canada&apos;s Survey of Financial Security.
              All figures are approximate planning references. (Statistics Canada, Survey of Financial Security (SFS), 2023)
            </p>

            <h3>Under 35: Building the Foundation</h3>
            <p>
              Canadians under 35 are in the early accumulation phase. The median net worth is
              approximately $48,700, but this hides significant variation. Young Canadians who
              own real estate — particularly in Toronto, Vancouver, or Calgary — often show much
              higher net worth figures due to home equity. Those renting and investing consistently
              can also build strong positions through TFSA and RRSP contributions.
            </p>
            <p>
              The average (mean) net worth for under-35s is much higher — approximately $130,000 —
              because the mean is pulled upward by a small number of high-net-worth young Canadians
              who have inherited wealth or built early business success.
            </p>

            <h3>Ages 35–44: The High-Growth Decade</h3>
            <p>
              The 35–44 age bracket typically sees the most significant net worth growth of any
              decade. Income is rising, mortgages are being paid down, and investments have had
              time to compound. The median net worth is approximately $234,400, while the mean
              rises to approximately $450,000. Canadians who made consistent investment contributions
              in their 20s and 30s start to see meaningful compound growth during this period.
            </p>

            <h3>Ages 45–54: The Wealth Acceleration Phase</h3>
            <p>
              Between 45 and 54, many Canadians hit peak earning years. Mortgages are significantly
              reduced, children may be leaving the home, and both investment portfolios and real
              estate have appreciated. The median net worth reaches approximately $521,400, with
              the mean at approximately $850,000. This is when the gap between wealth accumulators
              and those who delayed investment becomes most visible.
            </p>

            <h3>Ages 55–64: Pre-Retirement Accumulation Peak</h3>
            <p>
              The 55–64 cohort shows the highest median net worth of any age group in Canada, at
              approximately $690,000. These are the final working years for most Canadians, when
              RRSP, RRIF, pension, and real estate values are near their peak. The mean reaches
              approximately $1,100,000 for this age group, reflecting the significant wealth held
              by the top 10% to 20% of accumulators.
            </p>

            <h3>Ages 65–74 and 75+: Drawdown and Stability</h3>
            <p>
              After age 65, net worth tends to decline slightly as Canadians begin drawing down
              registered accounts, converting RRSPs to RRIFs, and spending accumulated savings.
              However, those who maintain their real estate holdings and moderate their withdrawals
              can sustain their net worth well into retirement. The median for ages 65–74 is
              approximately $610,000. By age 75 and older, the median is roughly $543,000.
            </p>
          </div>

          <div id="median-vs-mean" className="pillar-section">
            <h2>Median vs. Mean Net Worth — Why the Gap Matters</h2>
            <p>
              One of the most important concepts in reading Canadian net worth data is understanding
              the difference between median and mean (average) figures. In every age group, the mean
              is substantially higher than the median — often by two to three times.
            </p>
            <p>
              This happens because net worth distribution in Canada (as in most countries) is highly
              skewed. A relatively small number of households — the top 1% and top 5% — hold an
              outsized share of total national wealth. Their massive wealth balances pull the mean
              upward, making it an unreliable benchmark for the typical Canadian.
            </p>
            <p>
              The <strong>median</strong> net worth is the more useful benchmark for most people.
              It tells you where the exact middle of the distribution falls — the point where 50%
              of Canadians in your age group have less than that amount, and 50% have more. If
              you are above the median for your age bracket, you are doing better than half of
              all Canadians in that cohort.
            </p>
            <p>
              When financial media reports that Canadians have high average net worth, they are
              typically reporting the mean — a figure significantly inflated by wealth concentration
              at the top. The median gives a more honest picture of what most Canadians have actually
              accumulated.
            </p>
          </div>

          <div id="how-to-build-net-worth" className="pillar-section">
            <h2>How to Build Net Worth in Canada — A Practical Framework</h2>
            <p>
              Building net worth in Canada is a function of three variables: your savings rate,
              your investment return, and time. Of these three, time is the most powerful because
              it determines how long compound growth has to work. Every decade of delay costs
              exponentially more to overcome.
            </p>

            <h3>Step 1 — Maximize Your Savings Rate</h3>
            <p>
              The savings rate — the percentage of your after-tax income that you save and invest —
              is the single variable most within your control. A person saving 20% of income
              consistently will outperform a higher earner saving 5%. Use the{" "}
              <Link href="/calculators/budget-calculator">Budget Calculator</Link> to identify
              margin and redirect it toward wealth building.
            </p>

            <h3>Step 2 — Use Tax-Advantaged Accounts First</h3>
            <p>
              Canada&apos;s registered account system — RRSP, TFSA, and RESP — offers significant tax
              advantages that accelerate net worth growth. RRSP contributions reduce current-year
              taxable income. TFSA growth is completely tax-free. Maximizing these accounts before
              investing in non-registered accounts is a foundational wealth-building strategy.
              Use the <Link href="/calculators/rrsp-calculator">RRSP Calculator</Link> and{" "}
              <Link href="/calculators/tfsa-calculator">TFSA Calculator</Link> to model the impact.
            </p>

            <h3>Step 3 — Invest Consistently Over Time</h3>
            <p>
              The power of compound growth requires consistent investing over long periods. Dollar-cost
              averaging — investing a fixed amount monthly regardless of market conditions — removes
              emotional decision-making from the equation and builds wealth systematically. The{" "}
              <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link>{" "}
              shows how small consistent contributions can grow dramatically over 20 to 30 years.
            </p>

            <h3>Step 4 — Aggressively Eliminate High-Cost Debt</h3>
            <p>
              Every dollar of debt is a negative asset that reduces your net worth. High-interest
              debt — credit cards, personal loans — destroys wealth accumulation by consuming
              cash flow that could otherwise be invested. The{" "}
              <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link> helps
              model the fastest path to debt elimination.
            </p>

            <h3>Step 5 — Make Strategic Real Estate Decisions</h3>
            <p>
              Home ownership has historically been a significant driver of net worth for Canadians.
              However, the decision to buy versus rent depends on local real estate markets, carrying
              costs, opportunity cost of the down payment, and individual financial circumstances.
              The <Link href="/calculators/rent-vs-buy-calculator">Rent vs. Buy Calculator</Link>{" "}
              models this decision in detail.
            </p>

            <h3>Step 6 — Track Your Net Worth Regularly</h3>
            <p>
              You cannot manage what you do not measure. Calculating and tracking your net worth
              quarterly or annually keeps you accountable and shows whether your wealth trajectory
              is on course. Use the{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link> to
              build a complete snapshot at any point.
            </p>
          </div>

          <div id="home-ownership-impact" className="pillar-section">
            <h2>How Home Ownership Impacts Canadian Net Worth</h2>
            <p>
              Home ownership is the single largest driver of net worth for most Canadian households.
              In major markets — Toronto, Vancouver, Ottawa, Calgary — decades of real estate
              appreciation have generated substantial equity gains for homeowners who purchased
              before or during major price run-ups.
            </p>
            <p>
              Statistics Canada data consistently shows a dramatic gap in median net worth between
              homeowners and renters at every age bracket. (Statistics Canada, Survey of Financial Security (SFS), 2023 —
              of Financial Security] Homeowners benefit from two simultaneous wealth-building
              mechanisms: mortgage principal reduction (forced savings) and property value appreciation.
            </p>
            <p>
              However, home ownership is not universally the optimal wealth-building strategy.
              In high-cost markets, the carrying cost premium over renting — when invested in a
              diversified portfolio — can sometimes produce competitive or superior long-term returns.
              The{" "}
              <Link href="/calculators/rent-vs-buy-calculator">Rent vs. Buy Calculator</Link>{" "}
              models this tradeoff across different assumptions.
            </p>
            <p>
              It is also important to note that Statistics Canada&apos;s net worth figures include the
              full market value of owner-occupied housing. For many Canadian retirees, 50% to 70%
              of total net worth is tied up in their primary residence — an illiquid asset that
              requires downsizing, a reverse mortgage, or death to monetize. Investors focused on
              financial independence should build investable net worth — liquid, income-producing
              assets — alongside real estate equity.
            </p>
          </div>

          <div id="retirement-impact" className="pillar-section">
            <h2>Net Worth and Retirement Readiness in Canada</h2>
            <p>
              Net worth and retirement readiness are related but distinct concepts. Net worth measures
              total wealth. Retirement readiness measures whether your invested (income-producing)
              wealth is sufficient to support your retirement lifestyle.
            </p>
            <p>
              A Canadian with $1,200,000 in net worth but $900,000 locked in their home and only
              $300,000 in liquid investments faces a very different retirement picture than someone
              with $900,000 in invested assets and a paid-off $300,000 home.
            </p>
            <p>
              The standard retirement planning framework for Canadians suggests accumulating
              approximately 10 times your final working income in investable assets by retirement.
              At a 4% withdrawal rate, this supports replacing 40% of your working income — the
              rest being supplemented by CPP, OAS, and any defined benefit pension income.
            </p>
            <p>
              Use the <Link href="/calculators/retirement-calculator">Retirement Calculator</Link> to
              model your specific retirement savings trajectory, and the{" "}
              <Link href="/average-retirement-savings-by-age">Average Retirement Savings by Age</Link>{" "}
              page to benchmark your savings against Canadian peers.
            </p>
          </div>

          <div id="provincial-differences" className="pillar-section">
            <h2>Provincial Net Worth Differences in Canada</h2>
            <p>
              Net worth varies substantially across Canadian provinces, driven primarily by differences
              in real estate values, income levels, cost of living, and local economic conditions.
            </p>
            <p>
              British Columbia and Ontario households consistently show the highest median net worth,
              largely because home values in Greater Vancouver and the Greater Toronto Area have
              appreciated significantly over the past two to three decades. A homeowner in Vancouver
              or Toronto who purchased a detached home twenty years ago may have accumulated
              $800,000 to over $1,500,000 in real estate equity alone. (Statistics Canada, Survey of Financial Security (SFS), 2023)
            </p>
            <p>
              Alberta shows above-average net worth due to historically high incomes in the energy
              sector, though real estate values are more moderate than BC and Ontario. Québec shows
              below-average net worth by most metrics, partially attributable to lower real estate
              values (particularly in Montréal compared to Toronto and Vancouver), though cost of
              living is also lower.
            </p>
            <p>
              Atlantic provinces — Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland
              — tend to show below-national-average net worth figures, driven by lower incomes,
              slower real estate appreciation, and older demographic profiles. However, lower
              costs of living mean that dollar thresholds for financial security are also lower.
            </p>
          </div>

          <div id="mistakes" className="pillar-section">
            <h2>Common Mistakes When Comparing Net Worth in Canada</h2>
            <ul className="seo-steps">
              <li><strong>Using mean instead of median as your benchmark.</strong> The national mean is inflated by extreme wealth at the top. The median is the more meaningful comparison for most Canadians.</li>
              <li><strong>Including illiquid assets as ready wealth.</strong> A $1,000,000 house does not provide monthly income unless you downsize or use a reverse mortgage. Track liquid and investable net worth separately.</li>
              <li><strong>Comparing net worth without adjusting for age.</strong> A 28-year-old with $80,000 in net worth is outperforming the median for their cohort. Comparison must always be age-adjusted.</li>
              <li><strong>Ignoring pension and defined benefit plan value.</strong> If you have a defined benefit pension through a public sector employer, its actuarial present value can represent hundreds of thousands of dollars in equivalent wealth that is not always captured in self-reported net worth calculations.</li>
              <li><strong>Focusing on income instead of net worth.</strong> High income does not automatically produce high net worth. Savings rate and investment discipline matter far more over long time horizons.</li>
              <li><strong>Comparing across provinces without cost-of-living adjustment.</strong> A $500,000 net worth in Halifax provides a different standard of living than the same amount in Toronto or Vancouver.</li>
            </ul>
          </div>

          <div id="faq" className="pillar-section">
            <h2>Average Net Worth by Age Canada — FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <div id="conclusion" className="pillar-section">
            <h2>Conclusion — What to Do With This Information</h2>
            <p>
              Benchmarking your net worth against Canadian averages is a useful reality check, but
              the more important question is whether your wealth trajectory is pointing in the right
              direction for your specific goals. Are you above or below the median for your age group?
              Are you building investable assets, not just home equity? Is your net worth growing
              consistently year over year?
            </p>
            <p>
              Use the tools on BankDeMark to build a complete financial picture:
            </p>
            <ul className="seo-steps">
              <li>Calculate your current net worth: <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link></li>
              <li>Model retirement savings: <Link href="/calculators/retirement-calculator">Retirement Calculator</Link></li>
              <li>Benchmark retirement savings: <Link href="/average-retirement-savings-by-age">Average Retirement Savings by Age</Link></li>
              <li>Plan financial independence: <Link href="/fire-calculator">FIRE Calculator</Link></li>
              <li>Track all metrics in one place: <Link href="https://command.bankdemark.com/command" target="_blank" rel="noopener noreferrer">Command by BankDeMark</Link></li>
            </ul>
            <p className="disclaimer-note">
              This content is educational only and is not personalized financial, investment, tax,
              legal, or credit advice. All benchmark figures are approximate planning references.
              Consult a qualified financial advisor for personalized guidance.
            </p>
        </div>
      </div>

      <SEOLinkMap currentPath="/average-net-worth-by-age-canada" />

      <CTABanner
        title="Build wealth faster with smarter tools."
        sub="Use BankDeMark calculators to track your net worth, model retirement savings, and plan your path to financial independence."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
