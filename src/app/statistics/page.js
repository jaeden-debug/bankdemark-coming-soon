import Link from "next/link";
import Script from "next/script";
import SEOLinkMap from "@/app/components/SEOLinkMap";
import BrandText from "@/app/components/BrandText";
import CTABanner from "@/app/components/CTABanner";

export const metadata = {
  title: "Canadian Financial Statistics Hub | Net Worth, Retirement, Debt",
  description:
    "Canadian financial statistics on net worth, retirement savings, debt, credit, investing, and wealth by age. Benchmarks, data, and context for every major financial metric.",
  alternates: { canonical: "/statistics" },
  openGraph: {
    title: "Canadian Financial Statistics — Net Worth, Retirement, Debt & Wealth Data",
    description: "The most comprehensive hub for Canadian financial statistics. Benchmarks for net worth, retirement savings, debt levels, credit scores, and wealth distribution.",
    url: "https://bankdemark.com/statistics",
  },
};

const sections = [
  {
    id: "net-worth",
    title: "Net Worth Statistics",
    icon: "📊",
    stats: [
      { label: "Median Canadian Net Worth (all ages)", value: "~$329,000", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Median Net Worth Under 35", value: "~$48,700", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Median Net Worth Ages 35–44", value: "~$234,400", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Median Net Worth Ages 45–54", value: "~$521,400", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Median Net Worth Ages 55–64", value: "~$690,000", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Share of wealth held by top 20%", value: "~67%", note: "(Statistics Canada)" },
    ],
    tools: [
      { href: "/calculators/net-worth-calculator", label: "Net Worth Calculator" },
      { href: "/average-net-worth-by-age-canada", label: "Average Net Worth by Age Canada" },
    ],
    articles: [
      { href: "/blog/what-is-compound-interest", label: "What Is Compound Interest" },
    ],
  },
  {
    id: "retirement",
    title: "Retirement Statistics",
    icon: "🏖️",
    stats: [
      { label: "Average Canadian Retirement Age", value: "~63–65", note: "(Statistics Canada)" },
      { label: "Average CPP Benefit at 65", value: "~$700–$900/mo", note: "(Government of Canada, Service Canada — canada.ca/cpp)" },
      { label: "Maximum CPP Benefit (2025)", value: "~$1,300/mo", note: "(Government of Canada, Service Canada — canada.ca/cpp)" },
      { label: "OAS Benefit at 65", value: "~$700/mo", note: "(Government of Canada, Service Canada — canada.ca/cpp)" },
      { label: "Average RRSP Balance at 55–59", value: "~$240,000", note: "(Statistics Canada)" },
      { label: "Canadians with no retirement savings", value: "~30%", note: "(Statistics Canada)" },
    ],
    tools: [
      { href: "/calculators/retirement-calculator", label: "Retirement Calculator" },
      { href: "/average-retirement-savings-by-age", label: "Average Retirement Savings by Age" },
      { href: "/calculators/rrsp-calculator", label: "RRSP Calculator" },
      { href: "/calculators/tfsa-calculator", label: "TFSA Calculator" },
    ],
    articles: [],
  },
  {
    id: "debt",
    title: "Debt Statistics",
    icon: "💳",
    stats: [
      { label: "Average Canadian Household Debt (incl. mortgage)", value: "~$85,000", note: "(Statistics Canada)" },
      { label: "Average Consumer Debt (excl. mortgage)", value: "~$21,000", note: "(Equifax / TransUnion Canada)" },
      { label: "Average Credit Card Debt per Holder", value: "~$4,200", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Average Student Loan at Graduation", value: "~$26,000", note: "(Government of Canada)" },
      { label: "Household Debt-to-Income Ratio", value: "~180%", note: "(Bank of Canada)" },
      { label: "Average Mortgage Balance", value: "~$250,000–$350,000", note: "(Canada Mortgage and Housing Corporation)" },
    ],
    tools: [
      { href: "/calculators/debt-payoff-calculator", label: "Debt Payoff Calculator" },
      { href: "/calculators/credit-card-payoff-calculator", label: "Credit Card Payoff Optimizer" },
      { href: "/calculators/mortgage-calculator", label: "Mortgage Calculator" },
    ],
    articles: [],
  },
  {
    id: "credit",
    title: "Credit Statistics",
    icon: "🏦",
    stats: [
      { label: "Average Canadian Credit Score", value: "~650–680", note: "(Equifax / TransUnion Canada)" },
      { label: "Credit Score Required for Best Mortgage Rates", value: "720+", note: "General industry benchmark" },
      { label: "% of Canadians with Excellent Credit (750+)", value: "~40%", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Average Number of Credit Accounts per Person", value: "~3–4", note: "(Equifax Canada)" },
      { label: "Credit Utilization — Best Practice", value: "Under 30%", note: "Industry standard recommendation" },
    ],
    tools: [
      { href: "/calculators/debt-payoff-calculator", label: "Debt Payoff Calculator" },
    ],
    articles: [],
  },
  {
    id: "investment",
    title: "Investment Statistics",
    icon: "📈",
    stats: [
      { label: "% of Canadians Who Invest in RRSP", value: "~60%", note: "(Statistics Canada)" },
      { label: "% of Canadians Who Invest in TFSA", value: "~65%", note: "(Statistics Canada)" },
      { label: "Average TFSA Balance", value: "~$32,000", note: "(Statistics Canada)" },
      { label: "TSX 60 Historical Average Annual Return (30yr)", value: "~8–10%", note: "(TMX Group / S&P/TSX Composite Index — historical data, gross pre-fee pre-tax)" },
      { label: "Global Equity Average Annual Return (long-term)", value: "~7–8%", note: "(MSCI World Index long-term historical average — not guaranteed)" },
      { label: "Management Expense Ratio — Average Canadian Mutual Fund", value: "~2.1%", note: "(Morningstar Canada)" },
    ],
    tools: [
      { href: "/calculators/investment-calculator", label: "Investment Calculator" },
      { href: "/calculators/compound-interest-calculator", label: "Compound Interest Calculator" },
      { href: "/calculators/tfsa-calculator", label: "TFSA Calculator" },
    ],
    articles: [
      { href: "/blog/what-is-compound-interest", label: "What Is Compound Interest" },
    ],
  },
  {
    id: "wealth",
    title: "Wealth Distribution Statistics",
    icon: "💎",
    stats: [
      { label: "Net Worth of Top 1% of Canadian Households", value: "$3.7M+ (median)", note: "(Statistics Canada)" },
      { label: "% of National Wealth Held by Top 1%", value: "~25%", note: "(Statistics Canada)" },
      { label: "% of National Wealth Held by Top 10%", value: "~55–60%", note: "(Statistics Canada)" },
      { label: "Homeowner vs. Renter Median Net Worth Gap", value: "~10:1", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
      { label: "Intergenerational Wealth Transfer (Expected)", value: "~$1 trillion over next decade", note: "(Statistics Canada, Survey of Financial Security (SFS), 2023)" },
    ],
    tools: [
      { href: "/average-net-worth-by-age-canada", label: "Average Net Worth by Age Canada" },
      { href: "/fire-calculator", label: "FIRE Calculator" },
      { href: "/calculators/net-worth-calculator", label: "Net Worth Calculator" },
    ],
    articles: [],
  },
  {
    id: "financial-independence",
    title: "Financial Independence Statistics",
    icon: "🔥",
    stats: [
      { label: "% of Canadians Living Paycheque to Paycheque", value: "~50%", note: "(Canadian Payroll Association / MNP Consumer Debt Index)" },
      { label: "Savings Rate Required for FIRE in 15 Years", value: "~60%+", note: "Based on 7% return assumption — varies by starting portfolio" },
      { label: "Savings Rate Required for FIRE in 30 Years", value: "~30–35%", note: "Based on 7% return assumption — varies by starting portfolio" },
      { label: "Average Canadian Household Savings Rate", value: "~6–8%", note: "(Statistics Canada)" },
      { label: "FIRE Community Active Participants Worldwide", value: "Millions", note: "r/financialindependence and related communities" },
    ],
    tools: [
      { href: "/fire-calculator", label: "FIRE Calculator" },
      { href: "/financial-freedom-roadmap", label: "Financial Freedom Roadmap" },
      { href: "/money-health-score", label: "Money Health Score" },
    ],
    articles: [],
  },
];

const faq = [
  {
    q: "What is the average Canadian net worth?",
    a: "The average (mean) net worth of Canadian families is significantly higher than the median due to wealth concentration at the top. The median net worth — a more representative figure for most Canadians — is approximately $329,000 for all age groups combined. (Statistics Canada, Survey of Financial Security (SFS), 2023)",
  },
  {
    q: "How much debt does the average Canadian carry?",
    a: "The average Canadian household carries approximately $85,000 in total debt including mortgage obligations, and approximately $21,000 in consumer debt excluding mortgages. The household debt-to-income ratio is approximately 180%, one of the highest among developed nations. (Bank of Canada / Statistics Canada)",
  },
  {
    q: "What percentage of Canadians are on track for retirement?",
    a: "Studies suggest that approximately 30% of Canadians have no retirement savings outside CPP and OAS. (Statistics Canada, Survey of Financial Security (SFS), 2023) The majority of Canadians are projected to have some retirement income shortfall relative to their pre-retirement lifestyle. CPP and OAS provide a meaningful income floor but are rarely sufficient alone for most lifestyle expectations.",
  },
  {
    q: "What is the average credit score in Canada?",
    a: "The average Canadian credit score is approximately 650–680, which falls in the 'good' range on most scoring models. Credit scores of 720 and above generally qualify for the best available mortgage rates and credit terms. (Equifax / TransUnion Canada)",
  },
  {
    q: "What percentage of Canadians have a TFSA?",
    a: "Approximately 65% of eligible Canadians have a Tax-Free Savings Account, though many hold cash rather than invested assets inside it. The average TFSA balance is approximately $32,000, well below the cumulative contribution room available for most Canadians. (Statistics Canada)",
  },
];

export default function StatisticsPage() {
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
    headline: "Canadian Financial Statistics — Net Worth, Retirement, Debt, Credit, and Wealth Data",
    description: "Comprehensive hub for Canadian financial statistics including average net worth by age, retirement savings benchmarks, debt levels, and wealth distribution data.",
    publisher: { "@type": "Organization", name: "BankDeMark", url: "https://bankdemark.com" },
    url: "https://bankdemark.com/statistics",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BankDeMark", item: "https://bankdemark.com" },
      { "@type": "ListItem", position: 2, name: "Statistics", item: "https://bankdemark.com/statistics" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Canadian Financial Statistics Categories",
    itemListElement: sections.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `https://bankdemark.com/statistics#${s.id}`,
    })),
  };

  return (
    <>
      <Script id="stats-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="stats-article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="stats-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="stats-itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="page-hero hub-hero">
        <p className="eyebrow"><BrandText dotcom /> · Canadian Financial Data</p>
        <h1>Canadian Financial Statistics</h1>
        <p>
          Benchmarks, data, and context for every major Canadian financial metric —
          net worth, retirement savings, debt, credit scores, investment returns, and wealth distribution.
        </p>
      </div>

      <nav className="stats-toc-nav">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="stats-toc-chip">
            {s.icon} {s.title}
          </a>
        ))}
      </nav>

      <div className="stats-hub">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="stats-section">
            <div className="stats-section-header">
              <span className="stats-section-icon">{section.icon}</span>
              <h2>{section.title}</h2>
            </div>

            <div className="stats-grid">
              {section.stats.map((stat, i) => (
                <div key={i} className="stats-card">
                  <strong className="stats-value">{stat.value}</strong>
                  <span className="stats-label">{stat.label}</span>
                  <small className="stats-note">{stat.note}</small>
                </div>
              ))}
            </div>

            <div className="stats-tools">
              <span>Related tools:</span>
              {section.tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="stats-tool-link">
                  {tool.label} →
                </Link>
              ))}
              {section.articles.map((article) => (
                <Link key={article.href} href={article.href} className="stats-tool-link article">
                  {article.label} →
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#about-data">About This Data</a></li>
            <li><a href="#net-worth-context">Net Worth in Context</a></li>
            <li><a href="#retirement-context">Retirement Context</a></li>
            <li><a href="#debt-context">Canadian Debt Landscape</a></li>
            <li><a href="#wealth-inequality">Wealth Inequality</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

          <div id="about-data" className="pillar-section">
            <span className="calculator-seo-kicker">Statistics Hub</span>
            <h2>About the Data on This Page</h2>
            <p>
              The statistics presented on this page are drawn from Statistics Canada surveys
              (particularly the Survey of Financial Security), Bank of Canada publications,
              Government of Canada benefit rate disclosures, and Canadian financial research.
              All figures marked (Statistics Canada, Survey of Financial Security (SFS), 2023) are approximate benchmarks based on publicly
              available data and should be verified against the most current primary sources
              before making financial decisions.
            </p>
            <p>
              Financial statistics change over time. Inflation adjusts nominal values. Market
              conditions affect average investment and retirement balances. Regulatory changes
              affect contribution limits and benefit rates. This page is intended to provide
              directional context and planning benchmarks, not definitive or legally precise figures.
            </p>
            <p>
              All figures are approximate planning references. This content is educational only
              and is not personalized financial, investment, tax, legal, or credit advice.
            </p>
          </div>

          <div id="net-worth-context" className="pillar-section">
            <h2>Understanding Canadian Net Worth Statistics</h2>
            <p>
              Canada&apos;s median net worth sits near the global top among developed nations, driven
              significantly by real estate wealth in major urban centres. British Columbia and
              Ontario account for a disproportionate share of total national household wealth,
              reflecting the extraordinary appreciation of real estate in Greater Vancouver and
              the Greater Toronto Area over the past three decades.
            </p>
            <p>
              However, the national median masks significant inequality. The top quintile (top 20%)
              of Canadian households holds approximately two-thirds of all national wealth. The
              bottom quintile holds close to zero or negative net worth. (Statistics Canada, Survey of Financial Security (SFS), 2023)
            </p>
            <p>
              For most Canadians, the primary wealth-building path runs through: building an
              emergency fund, contributing consistently to RRSP and TFSA, eliminating consumer debt,
              purchasing real estate when financially advantageous, and sustaining consistent
              investment contributions over decades.
            </p>
            <p>
              Track and benchmark your own net worth using the{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link> and
              compare against Canadian age benchmarks at{" "}
              <Link href="/average-net-worth-by-age-canada">Average Net Worth by Age Canada</Link>.
            </p>
          </div>

          <div id="retirement-context" className="pillar-section">
            <h2>The Canadian Retirement Savings Reality</h2>
            <p>
              Canada faces a significant retirement savings gap. Approximately 30% of Canadian
              workers approaching retirement have insufficient savings to maintain their pre-retirement
              lifestyle, relying heavily on CPP and OAS which — for most Canadians — are not
              sufficient alone to fund a comfortable retirement. (Statistics Canada, Survey of Financial Security (SFS), 2023)
            </p>
            <p>
              The good news is that Canada&apos;s retirement system provides meaningful support.
              CPP and OAS together can provide $15,000 to $25,000+ per year for average contributors
              — the equivalent of having $375,000 to $625,000 in investable assets at a 4%
              withdrawal rate. Combined with even moderate personal savings, a reasonable retirement
              income is achievable for most Canadians who plan and contribute consistently.
            </p>
            <p>
              The two most common retirement readiness failures are: starting too late and
              underestimating the compounding effect of delay, and holding retirement savings in
              cash or GICs that earn below-inflation returns rather than diversified invested assets.
            </p>
            <p>
              Use the <Link href="/calculators/retirement-calculator">Retirement Calculator</Link>{" "}
              and <Link href="/average-retirement-savings-by-age">Average Retirement Savings by Age</Link>{" "}
              to benchmark and project your position.
            </p>
          </div>

          <div id="debt-context" className="pillar-section">
            <h2>Canada&apos;s Debt Landscape</h2>
            <p>
              Canada&apos;s household debt-to-income ratio is among the highest in the developed world,
              driven primarily by mortgage debt in high-value real estate markets. While mortgage
              debt represents a liability, it is typically offset by real estate assets — making
              the net impact on household wealth more nuanced than raw debt figures suggest.
            </p>
            <p>
              Consumer debt — credit cards, personal loans, lines of credit — is more problematic.
              These carry high interest rates (typically 15% to 25% for credit cards) and produce
              no asset. Consumer debt elimination is almost always the highest-return financial
              action available. Paying off a 20% credit card is mathematically equivalent to
              earning a 20% guaranteed return on investment.
            </p>
            <p>
              Use the <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link>{" "}
              and <Link href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Optimizer</Link>{" "}
              to model your debt elimination plan.
            </p>
          </div>

          <div id="wealth-inequality" className="pillar-section">
            <h2>Wealth Inequality in Canada</h2>
            <p>
              Wealth concentration in Canada has increased over recent decades, a pattern
              consistent with most developed economies. The top 1% of Canadian households hold
              approximately 25% of total national wealth. The top 10% hold approximately 55–60%.
              (Statistics Canada)
            </p>
            <p>
              Wealth inequality in Canada is shaped by several structural factors: real estate
              wealth concentration in high-value markets, inheritance and intergenerational wealth
              transfer, the accumulation effect of long periods of consistent high-return investing,
              and business ownership.
            </p>
            <p>
              One of the most striking statistics in Canadian wealth data is the gap between
              homeowners and renters. At every age bracket, homeowner households have
              significantly higher median net worth than renter households — in some cohorts,
              by a factor of 10 to 1. (Statistics Canada, Survey of Financial Security (SFS), 2023)
              This gap reflects both real estate appreciation and the forced savings mechanism
              of mortgage principal reduction.
            </p>
          </div>

          <div id="faq" className="pillar-section">
            <h2>Canadian Financial Statistics — FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="stats-command-cta">
            <h3>Track Your Own Financial Statistics</h3>
            <p>
              BankDeMark&apos;s calculators turn national statistics into personal insights.
              Calculate your own net worth, retirement gap, and financial health score —
              then track everything in Command.
            </p>
            <div className="premium-actions">
              <Link href="/calculators/net-worth-calculator" className="premium-btn primary">
                Calculate Your Net Worth
              </Link>
              <a href="https://command.bankdemark.com/command" target="_blank" rel="noopener noreferrer" className="premium-btn secondary">
                Open Command Dashboard
              </a>
            </div>
          </div>

          <p className="disclaimer-note">
            All statistics on this page are approximate planning references based on publicly
            available data. (Statistics Canada, Survey of Financial Security (SFS), 2023) markers indicate figures requiring verification against
            the most current primary sources. This content is educational only and is not
            personalized financial, investment, tax, legal, or credit advice.
          </p>
      </div>

      <SEOLinkMap currentPath="/statistics" />

      <CTABanner
        title="Turn national statistics into personal insights."
        sub="Calculate your own net worth, retirement gap, and financial health score with BankDeMark\'s free tools."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
