import Link from "next/link";
import Script from "next/script";
import AutoTOC from "@/components/AutoTOC";
import CTABanner from "../../components/CTABanner";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "Investing Guide | Investing for Beginners, ETFs, Index Funds & Wealth Building",
  description:
    "A complete investing guide for beginners in Canada and the USA. Learn how to start investing, build a diversified portfolio, use index funds and ETFs, manage risk, and grow long-term wealth.",
  alternates: {
    canonical: "/pillars/investing",
  },
};
const faq = [
  {
    q: "What is investing?",
    a: "Investing is the process of putting money into assets such as stocks, ETFs, index funds, bonds, real estate, or businesses with the goal of growing wealth over time.",
  },
  {
    q: "How do beginners start investing?",
    a: "Beginners should first build financial stability, understand risk, choose the right account, start with simple diversified investments, invest consistently, and avoid trying to time the market.",
  },
  {
    q: "Are index funds and ETFs good for beginners?",
    a: "Index funds and ETFs are commonly used by beginners because they can offer broad diversification, lower costs, and simple exposure to entire markets.",
  },
  {
    q: "Should I invest or save first?",
    a: "Most people should save an emergency fund and pay down high-interest debt before investing aggressively. Saving protects short-term stability, while investing builds long-term wealth.",
  },
];

export default function InvestingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Investing Guide: Investing for Beginners, ETFs, Index Funds and Wealth Building",
    description:
      "A complete investing guide for beginners in Canada and the USA covering index funds, ETFs, portfolio construction, asset allocation, compound growth, and long-term investing strategy.",
    author: {
      "@type": "Organization",
      name: "BankDeMark",
    },
    publisher: {
      "@type": "Organization",
      name: "BankDeMark",
      url: "https://bankdemark.com",
    },
    mainEntityOfPage: "https://bankdemark.com/pillars/investing",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="investing-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="investing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Investing</p>
        <h1>Investing: The Complete Guide to Building Long-Term Wealth</h1>
        <p>
          Learn how to start investing, understand the stock market, compare index funds and ETFs,
          build a diversified portfolio, manage risk, and use long-term investing strategies to grow
          real wealth.
        </p>
      </div>

      <div className="pillar-page">
        <AutoTOC selector=".pillar-section h2" />

        <div id="definition" className="pillar-section">
          <h2>What Investing Is</h2>
          <p>
            Investing is the process of putting money into assets that have the potential to grow,
            generate income, or preserve purchasing power over time. Common investments include stocks,
            bonds, ETFs, index funds, mutual funds, real estate, businesses, and cash-equivalent assets.
          </p>
          <p>
            The purpose of investing is not to gamble, chase hype, or predict every market move. The
            purpose is to turn saved capital into productive capital. When money is invested well, it
            can compound, produce income, and help build financial independence.
          </p>
          <p>
            For beginners, investing should start with a clear system: understand your goals, control
            risk, choose the right account, keep costs low, diversify, and stay consistent.
          </p>
        </div>

        <div id="why" className="pillar-section">
          <h2>Why Investing Matters</h2>
          <p>
            Saving money is essential, but saving alone is usually not enough to build long-term wealth.
            Inflation reduces the purchasing power of cash over time. Investing helps fight that by
            giving your money exposure to assets that can grow faster than inflation.
          </p>
          <ul>
            <li>Investing can help build wealth over decades.</li>
            <li>It can support retirement planning and financial independence.</li>
            <li>It gives your money a chance to compound.</li>
            <li>It can create income through dividends, interest, or asset growth.</li>
            <li>It helps turn monthly savings into long-term capital.</li>
          </ul>
          <p>
            The strongest investors are usually not the people who guess perfectly. They are the people
            who start early, invest consistently, stay diversified, keep fees low, and avoid emotional
            decisions during market swings.
          </p>
        </div>

        <div id="before" className="pillar-section">
          <h2>Before You Start Investing</h2>
          <p>
            Investing works best when your financial foundation is stable. Before investing aggressively,
            most people should organize their cash flow, build an emergency fund, understand debt, and
            choose a basic money management system.
          </p>
          <ul>
            <li>
              Build a working budget using the{" "}
              <Link href="/pillars/personal-finance">personal finance pillar</Link>.
            </li>
            <li>Save an emergency fund before taking major investment risk.</li>
            <li>
              Pay attention to high-interest debt using the{" "}
              <Link href="/pillars/debt-management">debt management pillar</Link>.
            </li>
            <li>
              Keep checking and savings accounts organized through the{" "}
              <Link href="/pillars/banking">banking pillar</Link>.
            </li>
            <li>Understand your time horizon before choosing investments.</li>
          </ul>
          <p>
            Investing money you may need next month is not investing. That is speculation with short-term
            cash. Real investing is built around time, patience, and a plan.
          </p>
        </div>

        <div id="beginner" className="pillar-section">
          <h2>Investing for Beginners</h2>
          <p>
            Beginner investing should be simple. The biggest mistake new investors make is trying to
            copy advanced traders before they understand the basics. You do not need complex strategies
            to begin. You need a clear goal, a reliable account, a diversified investment, and a habit
            of contributing consistently.
          </p>
          <ul>
            <li>Decide why you are investing: retirement, wealth building, income, or freedom.</li>
            <li>Choose the right account before choosing the investment.</li>
            <li>Start with diversified investments instead of single-stock bets.</li>
            <li>Automate contributions when possible.</li>
            <li>Measure progress in years, not days.</li>
          </ul>
          <p>
            A beginner can start with a small amount if the system is strong. The amount matters less
            than the habit, the timeline, the risk level, and the ability to keep investing through
            different market conditions.
          </p>
        </div>

        <div id="stocks" className="pillar-section">
          <h2>Stock Market Investing</h2>
          <p>
            The stock market allows investors to own shares of public companies. When you buy a stock,
            you own a small piece of that company. If the company grows, becomes more profitable, or
            becomes more valuable to investors, the stock price may rise. Some companies also pay
            dividends.
          </p>
          <p>
            Stock market investing can build wealth, but it also carries risk. Prices move daily because
            of earnings, interest rates, inflation, investor psychology, economic data, news, and market
            expectations.
          </p>
          <p>
            For most beginners, the safest starting point is not trying to pick the next winning stock.
            A better foundation is broad exposure through ETFs, index funds, and diversified portfolios.
          </p>
        </div>

        <div id="index-etf" className="pillar-section">
          <h2>Index Funds & ETFs</h2>
          <p>
            Index funds and ETFs are core tools for long-term investors. They allow investors to buy a
            basket of assets instead of trying to select each individual stock. Many index funds and ETFs
            track major markets, sectors, countries, or asset classes.
          </p>
          <p>
            The keyword data strongly supports this section: index funds, ETF investing, best ETFs,
            index funds vs ETFs, low-cost index funds, and diversified portfolio are all valuable
            search themes.
          </p>
          <ul>
            <li>Index funds usually track a market index.</li>
            <li>ETFs trade on exchanges like stocks.</li>
            <li>Both can provide diversification.</li>
            <li>Both can be low-cost compared to many actively managed products.</li>
            <li>Both can be useful for passive investing and long-term wealth building.</li>
          </ul>
          <p>
            The main advantage is simplicity. Instead of betting on one company, investors can own
            exposure to hundreds or thousands of companies through one fund.
          </p>
        </div>

        <div id="allocation" className="pillar-section">
          <h2>Asset Allocation</h2>
          <p>
            Asset allocation is how you divide your portfolio across different types of investments.
            A basic portfolio may include stocks, bonds, cash, real estate exposure, or other assets.
            The right allocation depends on your age, goals, risk tolerance, income stability, and
            timeline.
          </p>
          <ul>
            <li>Stocks usually offer higher growth potential with higher volatility.</li>
            <li>Bonds may provide stability and income but often lower growth.</li>
            <li>Cash is useful for emergencies, not usually long-term wealth building.</li>
            <li>Real estate can add diversification but may require more capital and management.</li>
          </ul>
          <p>
            A strong investment portfolio is not built by chasing whatever performed best last year. It
            is built by matching your allocation to your actual financial life.
          </p>
        </div>

        <div id="risk" className="pillar-section">
          <h2>Risk Management in Investing</h2>
          <p>
            Risk management is what keeps investors alive long enough for compounding to work. Every
            investment carries some kind of risk: market risk, inflation risk, interest rate risk,
            liquidity risk, business risk, currency risk, and emotional risk.
          </p>
          <ul>
            <li>Diversify across assets, sectors, and geographies.</li>
            <li>Avoid investing money needed for short-term expenses.</li>
            <li>Do not overconcentrate in one stock, trend, or sector.</li>
            <li>Keep fees and taxes in mind.</li>
            <li>Use a written investment plan before emotions take over.</li>
          </ul>
          <p>
            The goal is not to remove risk completely. The goal is to take smart, intentional risk that
            matches your timeline and expected reward.
          </p>
        </div>

        <div id="accounts" className="pillar-section">
          <h2>Canada & USA Investment Accounts</h2>
          <p>
            The right account can matter as much as the investment itself. Canada and the United States
            have different investment account systems, tax rules, and retirement structures.
          </p>

          <h3>Common Canadian investing accounts</h3>
          <ul>
            <li>TFSA: flexible tax-free growth account.</li>
            <li>RRSP: retirement-focused account with tax deduction potential.</li>
            <li>FHSA: first home savings account for eligible home buyers.</li>
            <li>Non-registered account: taxable brokerage account with flexibility.</li>
          </ul>

          <h3>Common U.S. investing accounts</h3>
          <ul>
            <li>401(k): employer-sponsored retirement account.</li>
            <li>Traditional IRA: retirement account with potential tax deduction.</li>
            <li>Roth IRA: after-tax contributions with tax-free qualified withdrawals.</li>
            <li>Taxable brokerage account: flexible account without retirement limits.</li>
          </ul>

          <p>
            BankDeMark is built to cover both Canada and the USA clearly, including TFSA investing,
            RRSP investing, Roth IRA investing, 401k investing, brokerage accounts, retirement planning,
            and tax-advantaged accounts.
          </p>
        </div>

        <div id="compound" className="pillar-section">
          <h2>Compound Growth</h2>
          <p>
            Compound growth is one of the most powerful ideas in investing. It happens when investment
            gains begin producing their own gains. Over long periods, compounding can turn consistent
            contributions into significant wealth.
          </p>
          <p>
            The formula is simple, but the behavior is difficult: invest consistently, reinvest returns,
            avoid unnecessary withdrawals, keep fees low, and give the portfolio enough time to grow.
          </p>
          <p>
            This is why time matters so much. Starting earlier can reduce the amount required later
            because the portfolio has more years to compound.
          </p>
        </div>

        <div id="dca" className="pillar-section">
          <h2>Dollar Cost Averaging</h2>
          <p>
            Dollar cost averaging means investing a fixed amount on a regular schedule, regardless of
            market conditions. Instead of trying to guess the perfect moment, investors build the habit
            of buying consistently.
          </p>
          <ul>
            <li>It reduces the pressure to time the market.</li>
            <li>It builds discipline through automation.</li>
            <li>It can help investors stay consistent during volatility.</li>
            <li>It works well for monthly investing and retirement contributions.</li>
          </ul>
          <p>
            Dollar cost averaging does not guarantee profit or eliminate risk, but it can create a more
            repeatable investing system.
          </p>
        </div>

        <div id="comparisons" className="pillar-section">
          <h2>Key Investing Comparisons</h2>
          <p>
            Comparison keywords are a major SEO opportunity. Investors search for clear answers before
            choosing accounts, platforms, and strategies.
          </p>
          <ul>
            <li>Index funds vs ETFs</li>
            <li>ETF vs mutual fund</li>
            <li>Stocks vs ETFs</li>
            <li>Active vs passive investing</li>
            <li>Bonds vs stocks</li>
            <li>Growth stocks vs dividend stocks</li>
            <li>Robo advisor vs self-directed investing</li>
            <li>Wealthsimple vs Questrade</li>
            <li>Vanguard vs Fidelity</li>
          </ul>
          <p>
            This pillar page introduces these concepts. Later, each comparison should become its own
            supporting article that internally links back to this investing pillar.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Investing Mistakes</h2>
          <p>
            Most investing mistakes are behavioral. People panic during downturns, chase hot trends,
            overtrade, ignore fees, buy products they do not understand, or take risk without a plan.
          </p>
          <ul>
            <li>Trying to time the market.</li>
            <li>Investing without an emergency fund.</li>
            <li>Buying single stocks without understanding risk.</li>
            <li>Ignoring fees, taxes, and account structure.</li>
            <li>Selling during fear and buying during hype.</li>
            <li>Confusing trading with investing.</li>
            <li>Not diversifying.</li>
            <li>Waiting too long to start.</li>
          </ul>
        </div>

        <div id="roadmap" className="pillar-section">
          <h2>90-Day Investing Roadmap</h2>
          <p>
            The first 90 days should be focused on foundation, education, account setup, and consistent
            action.
          </p>

          <h3>Days 1–15: Build financial readiness</h3>
          <ul>
            <li>Review income, expenses, debt, and savings.</li>
            <li>Build or confirm your emergency fund.</li>
            <li>Decide your investing goal and timeline.</li>
          </ul>

          <h3>Days 16–30: Learn the core system</h3>
          <ul>
            <li>Study index funds, ETFs, asset allocation, and risk.</li>
            <li>Compare account types for your country.</li>
            <li>Choose between self-directed investing and managed investing.</li>
          </ul>

          <h3>Days 31–60: Open the right account</h3>
          <ul>
            <li>Choose a brokerage or investment platform.</li>
            <li>Open the proper account: TFSA, RRSP, Roth IRA, 401k, or brokerage.</li>
            <li>Create a simple investment policy for yourself.</li>
          </ul>

          <h3>Days 61–90: Start and automate</h3>
          <ul>
            <li>Make the first investment.</li>
            <li>Set a monthly contribution schedule.</li>
            <li>Track progress without obsessing over daily market movement.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Investing FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="pillar-section">
          <h2>Continue Building Financial Intelligence</h2>
          <p>
            Investing is one pillar of the BankDeMark system. To build the full picture, connect this
            guide with personal finance, banking, debt management, business credit, and financial
            freedom.
          </p>
          <ul>
            <li>
              <Link href="/">Return to the BankDeMark homepage</Link>
            </li>
            <li>
              <Link href="/about">Read about BankDeMark</Link>
            </li>
            <li>
              <Link href="/pillars/personal-finance">Explore personal finance</Link>
            </li>
            <li>
              <Link href="/pillars/banking">Explore banking optimization</Link>
            </li>
            <li>
              <Link href="/pillars/debt-management">Explore debt management</Link>
            </li>
            <li>
              <Link href="/pillars/business-credit">Explore business credit</Link>
            </li>
            <li>
              <Link href="/pillars/financial-freedom">Explore financial freedom</Link>
            </li>
            <li>
              <Link href="/contact">Join the BankDeMark newsletter</Link>
            </li>
          </ul>
        </div>
      </div>

      <SEOLinkMap currentPath="/pillars/investing" />

      <CTABanner
        title="Invest with a system, not emotion."
        sub="Use BankDeMark to understand investing, build financial discipline, and connect your portfolio to a larger wealth-building strategy."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
