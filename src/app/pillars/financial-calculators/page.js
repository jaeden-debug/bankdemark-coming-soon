import Link from "next/link";
import Script from "next/script";
import GeneratedTOC from "@/components/GeneratedTOC";
import CTABanner from "../../components/CTABanner";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "Financial Calculators: Every Wealth-Building Tool | BankDeMark",
  description:
    "Free financial calculators for compound interest, retirement planning, investment growth, FIRE, budgeting, net worth, debt payoff, and registered accounts — built for Canadians and Americans.",
  alternates: {
    canonical: "/pillars/financial-calculators",
  },
};

const faq = [
  {
    q: "What financial calculators does BankDeMark offer?",
    a: "BankDeMark offers calculators for compound interest, investment growth, retirement planning, FIRE projections, budgeting, net worth tracking, debt payoff, mortgage analysis, emergency fund sizing, and Canadian registered accounts (TFSA, RRSP).",
  },
  {
    q: "Are these financial calculators free?",
    a: "Yes. Every calculator in the BankDeMark suite is free to use. No login is required for basic calculations.",
  },
  {
    q: "Which calculator should I start with?",
    a: "Start with the compound interest calculator if you are focused on wealth building, the retirement calculator if you are planning for a specific retirement date, or the net worth calculator if you want a snapshot of where you stand today.",
  },
  {
    q: "Do these calculators work for Canadians?",
    a: "Yes. BankDeMark calculators are built for both Canadians and Americans. Canadian-specific calculators include TFSA and RRSP scenarios, and compound interest tools include Canadian registered account projections.",
  },
  {
    q: "What is the most important financial calculator?",
    a: "The compound interest calculator is arguably the most important for long-term wealth building. Understanding how your money compounds over time is foundational to every investment, retirement, and savings decision.",
  },
  {
    q: "How accurate are these calculators?",
    a: "The calculators use standard financial formulas (compound interest, annuity, loan amortization, etc.) with user-supplied inputs. Results are mathematical projections based on those inputs — they are planning tools, not predictions of actual market returns.",
  },
];

export default function FinancialCalculatorsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Financial Calculators: Every Wealth-Building Tool | BankDeMark",
    description:
      "Free financial calculators for compound interest, retirement, investing, FIRE, budgeting, net worth, debt payoff, and registered accounts — for Canadians and Americans.",
    author: { "@type": "Organization", name: "BankDeMark" },
    publisher: { "@type": "Organization", name: "BankDeMark" },
    mainEntityOfPage: "https://bankdemark.com/pillars/financial-calculators",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BankDeMark", item: "https://bankdemark.com" },
      { "@type": "ListItem", position: 2, name: "Finance Pillars", item: "https://bankdemark.com/pillars" },
      { "@type": "ListItem", position: 3, name: "Financial Calculators", item: "https://bankdemark.com/pillars/financial-calculators" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BankDeMark Financial Calculator Suite",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Compound Interest Calculator", url: "https://bankdemark.com/calculators/compound-interest-calculator" },
      { "@type": "ListItem", position: 2, name: "Investment Calculator", url: "https://bankdemark.com/calculators/investment-calculator" },
      { "@type": "ListItem", position: 3, name: "Retirement Calculator", url: "https://bankdemark.com/calculators/retirement-calculator" },
      { "@type": "ListItem", position: 4, name: "FIRE Calculator", url: "https://bankdemark.com/calculators/fire-calculator" },
      { "@type": "ListItem", position: 5, name: "Net Worth Calculator", url: "https://bankdemark.com/calculators/net-worth-calculator" },
      { "@type": "ListItem", position: 6, name: "Budget Calculator", url: "https://bankdemark.com/calculators/budget-calculator" },
      { "@type": "ListItem", position: 7, name: "Debt Payoff Calculator", url: "https://bankdemark.com/calculators/debt-payoff-calculator" },
      { "@type": "ListItem", position: 8, name: "Mortgage Calculator", url: "https://bankdemark.com/calculators/mortgage-calculator" },
    ],
  };

  return (
    <>
      <Script
        id="financial-calculators-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="financial-calculators-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="financial-calculators-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="financial-calculators-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">Calculator Hub</p>
        <h1>Financial Calculators: Every Tool You Need to Build Wealth</h1>
        <p>
          Free calculators for compound interest, retirement planning, investment growth, FIRE,
          budgeting, net worth, debt payoff, and Canadian registered accounts — built for both
          Canadians and Americans.
        </p>
      </div>

      <div className="pillar-page">
        <GeneratedTOC selector=".pillar-section h2" />

        <div id="why" className="content-body pillar-section">
          <h2>Why Financial Calculators Matter</h2>
          <p>
            Wealth is not built on intuition. Every major financial outcome — a paid-off mortgage, a
            funded retirement, financial independence — is the result of decisions made with accurate
            numbers. Financial calculators translate decisions into projections so you stop guessing
            and start planning with precision.
          </p>
          <p>
            The gap between knowing a concept and acting on it is almost always quantitative. You know
            compound interest is powerful. A calculator shows you exactly how powerful: that $500/month
            invested at 7% for 30 years produces $609,970 — of which $429,970 is interest you never
            contributed. That number changes behavior. Concepts alone do not.
          </p>
          <p>
            BankDeMark calculators are built around this principle: give people the numbers that turn
            financial literacy into financial action.
          </p>
        </div>

        <div id="how-wealth" className="content-body pillar-section">
          <h2>How Wealth Is Built: The Mathematical Foundation</h2>
          <p>
            Every wealth-building calculator in this suite rests on a small set of core mathematical
            relationships:
          </p>
          <ul>
            <li>
              <strong>Compound growth:</strong> A = P(1 + r/n)^(nt) — the foundation of every
              investment projection, savings estimate, and debt calculation.
            </li>
            <li>
              <strong>Annuity formula:</strong> FV = PMT × [(1 + r/n)^(nt) − 1] / (r/n) — models
              regular contributions over time, the pattern of most real investor behavior.
            </li>
            <li>
              <strong>Loan amortization:</strong> M = P × [r(1+r)^n] / [(1+r)^n − 1] — the engine
              behind every mortgage, debt payoff, and credit card calculation.
            </li>
            <li>
              <strong>The 4% rule / 25× rule:</strong> Retirement target = annual spending × 25.
              The foundational FIRE and retirement planning heuristic.
            </li>
            <li>
              <strong>Net worth:</strong> Total assets − total liabilities. The most honest single
              number in personal finance.
            </li>
          </ul>
          <p>
            Understanding which formula applies to your situation helps you choose the right
            calculator and interpret the output accurately.
          </p>
        </div>

        <div id="compound" className="content-body pillar-section">
          <h2>Compound Interest Calculators</h2>
          <p>
            The compound interest calculator suite is the most comprehensive section of the
            BankDeMark tool set. Compound interest is the single most important mathematical concept
            in personal finance — it governs how savings grow, how investments compound, and how
            debt accelerates when left unpaid.
          </p>
          <ul>
            <li>
              <Link href="/calculators/compound-interest-calculator">
                Compound Interest Calculator
              </Link>{" "}
              — Project any investment with daily, monthly, or annual compounding. With or without
              regular contributions.
            </li>
            <li>
              <Link href="/pillars/compound-interest-calculator">
                Compound Interest Calculator Guide
              </Link>{" "}
              — The complete guide to using the calculator, understanding the formula, and applying
              results to real decisions.
            </li>
          </ul>
          <p>Supporting compound interest guides:</p>
          <ul>
            <li><Link href="/blog/what-is-compound-interest">What Is Compound Interest?</Link></li>
            <li><Link href="/blog/compound-interest-formula">Compound Interest Formula Explained</Link></li>
            <li><Link href="/blog/compound-growth-calculator">Compound Growth Calculator Guide</Link></li>
            <li><Link href="/blog/daily-compound-interest">Daily Compound Interest</Link></li>
            <li><Link href="/blog/monthly-compound-interest">Monthly Compound Interest</Link></li>
            <li><Link href="/blog/compound-interest-examples">Compound Interest Examples</Link></li>
            <li><Link href="/blog/compound-interest-canada">Compound Interest in Canada</Link></li>
            <li><Link href="/blog/best-compound-interest-investments">Best Compound Interest Investments</Link></li>
            <li><Link href="/blog/how-much-will-100-a-month-grow">How Much Will $100/Month Grow?</Link></li>
            <li><Link href="/blog/how-much-will-500-a-month-grow">How Much Will $500/Month Grow?</Link></li>
            <li><Link href="/blog/how-long-to-reach-1-million-investing">How Long to Reach $1 Million?</Link></li>
          </ul>
        </div>

        <div id="retirement" className="content-body pillar-section">
          <h2>Retirement Calculators</h2>
          <p>
            Retirement planning calculators project whether your current savings rate, expected
            returns, and target retirement date produce a sufficient nest egg. They help answer the
            most important retirement questions: Am I saving enough? When can I retire? How long will
            my money last?
          </p>
          <ul>
            <li>
              <Link href="/calculators/retirement-calculator">Retirement Calculator</Link> —
              Project your retirement balance based on current savings, monthly contributions, expected
              return, and retirement age.
            </li>
            <li>
              <Link href="/calculators/rrsp-calculator">RRSP Calculator</Link> — Canadian
              retirement savings projections with tax-deferred compounding and contribution room.
            </li>
          </ul>
          <p>
            Key retirement concepts: the 25× rule (nest egg = 25× annual spending), the 4% safe
            withdrawal rate, sequence of returns risk, and the difference between nominal and
            inflation-adjusted portfolio values.
          </p>
        </div>

        <div id="investing" className="content-body pillar-section">
          <h2>Investment Calculators</h2>
          <p>
            Investment calculators model portfolio growth under different scenarios: varying return
            rates, contribution amounts, time horizons, and starting balances. They are the primary
            tool for comparing investment strategies before committing capital.
          </p>
          <ul>
            <li>
              <Link href="/calculators/investment-calculator">Investment Calculator</Link> — Model
              any investment portfolio with flexible inputs for lump sum, recurring contributions,
              and expected return.
            </li>
            <li>
              <Link href="/calculators/tfsa-calculator">TFSA Calculator</Link> — Project tax-free
              growth inside a Canadian TFSA with contribution room tracking.
            </li>
          </ul>
          <p>
            For context on how investment compounding works across different account types, see the{" "}
            <Link href="/pillars/investing">Investing pillar</Link>.
          </p>
        </div>

        <div id="fire" className="content-body pillar-section">
          <h2>FIRE Calculators</h2>
          <p>
            FIRE (Financial Independence, Retire Early) calculators compute your FIRE number — the
            portfolio size at which your investments generate enough income to cover your living
            expenses indefinitely. The standard formula: FIRE number = annual expenses × 25.
          </p>
          <ul>
            <li>
              <Link href="/calculators/fire-calculator">FIRE Calculator</Link> — Calculate your
              FIRE number, timeline to financial independence, and safe withdrawal sustainability.
            </li>
          </ul>
          <p>
            FIRE planning integrates compound interest projections, savings rate optimization, and
            withdrawal rate analysis. See the{" "}
            <Link href="/pillars/financial-freedom">Financial Freedom pillar</Link> for the full
            strategic framework.
          </p>
        </div>

        <div id="budgeting" className="content-body pillar-section">
          <h2>Budgeting Calculators</h2>
          <p>
            Budgeting calculators help allocate income across spending categories, savings goals,
            and debt obligations. They enforce the constraint that wealth building starts with
            controlling cash flow before it reaches investments.
          </p>
          <ul>
            <li>
              <Link href="/calculators/budget-calculator">Budget Calculator</Link> — Build a
              working monthly budget using the 50/30/20 framework or custom allocation targets.
            </li>
            <li>
              <Link href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</Link>{" "}
              — Determine the right emergency fund size for your income and expense profile.
            </li>
          </ul>
        </div>

        <div id="debt" className="content-body pillar-section">
          <h2>Debt Reduction Calculators</h2>
          <p>
            Debt calculators apply the same compound math that builds investment wealth — but in
            reverse, showing how interest compounds against you when balances are carried. They
            compare payoff strategies (avalanche vs. snowball) and quantify the interest saved by
            accelerated payments.
          </p>
          <ul>
            <li>
              <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link> —
              Compare payoff timelines and total interest across debt avalanche, snowball, and
              fixed-payment strategies.
            </li>
            <li>
              <Link href="/calculators/credit-card-payoff-calculator">
                Credit Card Payoff Calculator
              </Link>{" "}
              — See exactly how long minimum payments extend your credit card debt and how much
              interest you pay.
            </li>
          </ul>
          <p>
            See the <Link href="/pillars/debt-management">Debt Management pillar</Link> for the
            full debt elimination framework.
          </p>
        </div>

        <div id="networth" className="content-body pillar-section">
          <h2>Net Worth Tracking</h2>
          <p>
            Net worth is the single most comprehensive measure of financial health: total assets
            minus total liabilities. The net worth calculator aggregates all accounts and obligations
            into one number — updated as your situation changes.
          </p>
          <ul>
            <li>
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link> — Input
              your assets (cash, investments, real estate, vehicles) and liabilities (mortgages,
              loans, credit cards) to see your current net worth.
            </li>
          </ul>
        </div>

        <div id="housing" className="content-body pillar-section">
          <h2>Housing and Mortgage Calculators</h2>
          <p>
            The mortgage calculator and rent vs. buy calculator help with the largest financial
            decision most people make. They model monthly payments, total interest paid over the
            loan term, amortization schedules, and the break-even analysis between renting and
            buying.
          </p>
          <ul>
            <li>
              <Link href="/calculators/mortgage-calculator">Mortgage Calculator</Link> — Calculate
              monthly payments, total interest, and amortization schedule for any mortgage.
            </li>
            <li>
              <Link href="/calculators/rent-vs-buy-calculator">Rent vs. Buy Calculator</Link> —
              Model the true cost of renting vs. buying over your expected ownership horizon.
            </li>
          </ul>
          <p>
            Canadian note: Canadian mortgages compound semi-annually by law. The mortgage calculator
            accounts for this difference from the U.S. monthly compounding standard.
          </p>
        </div>

        <div id="registered" className="content-body pillar-section">
          <h2>Canadian Registered Account Calculators</h2>
          <p>
            Canada has a unique set of registered accounts — TFSA, RRSP, FHSA, RESP — that provide
            tax-free or tax-deferred compound growth. BankDeMark includes dedicated calculators for
            each.
          </p>
          <ul>
            <li>
              <Link href="/calculators/tfsa-calculator">TFSA Calculator</Link> — Project tax-free
              growth with contribution room tracking ($7,000/year in 2026, cumulative room $95,000).
            </li>
            <li>
              <Link href="/calculators/rrsp-calculator">RRSP Calculator</Link> — Project
              tax-deferred growth with the deduction multiplier built in (18% of earned income,
              max $31,560 in 2026).
            </li>
          </ul>
          <p>
            For a deep dive on Canadian account strategy, see{" "}
            <Link href="/blog/compound-interest-canada">Compound Interest in Canada</Link>.
          </p>
        </div>

        <div id="choosing" className="content-body pillar-section">
          <h2>Choosing the Right Calculator</h2>
          <p>
            The right calculator depends on the question you are trying to answer:
          </p>
          <ul>
            <li>
              <strong>How will my investment grow?</strong> →{" "}
              <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link>
            </li>
            <li>
              <strong>Am I on track for retirement?</strong> →{" "}
              <Link href="/calculators/retirement-calculator">Retirement Calculator</Link>
            </li>
            <li>
              <strong>When can I reach financial independence?</strong> →{" "}
              <Link href="/calculators/fire-calculator">FIRE Calculator</Link>
            </li>
            <li>
              <strong>What is my net worth?</strong> →{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>
            </li>
            <li>
              <strong>How long to pay off my debt?</strong> →{" "}
              <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link>
            </li>
            <li>
              <strong>Should I rent or buy?</strong> →{" "}
              <Link href="/calculators/rent-vs-buy-calculator">Rent vs. Buy Calculator</Link>
            </li>
            <li>
              <strong>How much emergency fund do I need?</strong> →{" "}
              <Link href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</Link>
            </li>
            <li>
              <strong>How does my Canadian TFSA/RRSP grow?</strong> →{" "}
              <Link href="/blog/compound-interest-canada">Compound Interest in Canada</Link>
            </li>
          </ul>
        </div>

        <div id="command" className="content-body pillar-section">
          <h2>Beyond Individual Calculators: Your Financial Dashboard</h2>
          <p>
            Individual calculators answer individual questions. But wealth building requires seeing
            all accounts, all projections, and all milestones in one place — updated as your
            numbers change.
          </p>
          <p>
            BankDeMark Command connects your accounts and builds a complete personal financial
            dashboard: compound growth projections, retirement tracking, net worth over time, and
            progress toward your FIRE number — all in one system.
          </p>
          <ul>
            <li>
              <a href="https://command.bankdemark.com/command" target="_blank" rel="noopener noreferrer">Build Your Personal Financial Dashboard — BankDeMark Command</a>
            </li>
            <li>
              <Link href="/calculators">Open the Full Calculator Hub</Link>
            </li>
          </ul>
        </div>

        <div id="faq" className="content-body pillar-section">
          <h2>Financial Calculators FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>

        <div className="content-body pillar-section">
          <h2>Continue Building Financial Intelligence</h2>
          <p>
            The calculator suite is one layer of the BankDeMark wealth-building system. Connect it
            with the full pillar framework to build the complete picture.
          </p>
          <ul>
            <li><Link href="/">BankDeMark Homepage</Link></li>
            <li><Link href="/pillars/compound-interest-calculator">Compound Interest Calculator Pillar</Link></li>
            <li><Link href="/pillars/investing">Investing Pillar</Link></li>
            <li><Link href="/pillars/personal-finance">Personal Finance Pillar</Link></li>
            <li><Link href="/pillars/financial-freedom">Financial Freedom Pillar</Link></li>
            <li><Link href="/pillars/debt-management">Debt Management Pillar</Link></li>
            <li><Link href="/pillars/banking">Banking Pillar</Link></li>
            <li><Link href="/calculators">Full Calculator Hub</Link></li>
            <li><Link href="/blog">Finance Blog</Link></li>
          </ul>
        </div>
      </div>

      <SEOLinkMap currentPath="/pillars/financial-calculators" />

      <CTABanner
        title="Stop guessing. Start calculating."
        sub="Use BankDeMark's free financial calculators to project compound growth, plan retirement, and track the numbers that matter."
        btnText="Open Calculator Hub"
        btnHref="/calculators"
      />
    </>
  );
}
