import Link from "next/link";
import Script from "next/script";
import GeneratedTOC from "@/components/GeneratedTOC";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "Command by BankDeMark: Financial Operating System",
  description:
    "Command by BankDeMark is your personal financial operating system — net worth tracking, retirement planning, investment forecasting, debt optimization, FIRE planning, and wealth projection in one dashboard.",
  alternates: {
    canonical: "/pillars/command",
  },
};

const faq = [
  {
    q: "What is Command by BankDeMark?",
    a: "Command by BankDeMark is a personal financial operating system — a centralized dashboard that combines net worth tracking, retirement planning, investment forecasting, debt optimization, FIRE planning, and financial health scoring into a single command center. It replaces spreadsheets, standalone calculators, and disconnected banking apps.",
  },
  {
    q: "How is Command different from a budgeting app like YNAB or Mint?",
    a: "Budgeting apps focus on tracking past spending. Command focuses on projecting your financial future — where your net worth is heading, when you will reach retirement readiness, what your FIRE timeline looks like, and how your debt payoff affects your freedom timeline. It is a forward-looking financial operating system, not a backward-looking expense tracker.",
  },
  {
    q: "Is Command free to use?",
    a: "Command offers a free tier that includes core net worth tracking, financial health scoring, and basic projections. Premium tiers unlock advanced wealth forecasting, full retirement planning, business dashboard features, and AI-powered financial insights.",
  },
  {
    q: "Does Command work for Canadians?",
    a: "Yes. Command is purpose-built for both Canadians and Americans. Canadian users get TFSA, RRSP, and FHSA tracking, CPP/OAS retirement projections, and Canadian tax-aware planning tools. American users get 401(k), Roth IRA, HSA, and Social Security integration.",
  },
  {
    q: "What is a financial operating system?",
    a: "A financial operating system (FinOS) is a centralized platform that connects every dimension of personal finance — income, assets, liabilities, investments, retirement accounts, and goals — into one system that can model your current situation, forecast your trajectory, and surface actionable intelligence. Command is BankDeMark's implementation of that concept.",
  },
  {
    q: "How does Command calculate my FIRE number?",
    a: "Command uses the standard 4% Safe Withdrawal Rule as the baseline: FIRE Number = Annual Spending × 25. It then layers in Coast FIRE, Lean FIRE, and Fat FIRE variants, adjusts for inflation, models different withdrawal rates, and shows you exactly how many months remain at your current savings rate before you cross each threshold.",
  },
  {
    q: "Can Command track my investment portfolio?",
    a: "Yes. Command tracks TFSA, RRSP, FHSA, brokerage accounts, ETFs, individual stocks, and other investment vehicles. It shows portfolio growth over time, asset allocation, projected future values at various return assumptions, and contribution room remaining for registered accounts.",
  },
  {
    q: "How does Command's retirement planning work?",
    a: "Command projects your retirement nest egg based on current savings, contribution rate, expected return, and timeline. It models income needs in retirement, applies inflation adjustments, calculates safe withdrawal amounts, and compares your projected portfolio against a 25× annual spending target — giving you a clear surplus or gap figure.",
  },
  {
    q: "What is the financial health score in Command?",
    a: "The Financial Health Score is a 0–100 composite score that evaluates your savings rate, emergency fund coverage, debt load, housing cost ratio, investment activity, and net worth trajectory. It surfaces your weakest financial dimension and recommends specific improvements.",
  },
  {
    q: "How does Command differ from Personal Capital or Empower?",
    a: "Personal Capital and Empower focus primarily on investment tracking with a U.S.-centric view. Command is built for both Canadians and Americans, incorporates registered account intelligence specific to the Canadian tax system, integrates FIRE planning as a first-class feature, and is designed as a complete financial operating system rather than an investment aggregator.",
  },
];

export default function CommandPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Command by BankDeMark: The Personal Financial Operating System",
    description:
      "Command by BankDeMark is a personal financial operating system combining net worth tracking, retirement planning, investment forecasting, debt optimization, FIRE planning, and wealth projection in one dashboard.",
    author: { "@type": "Organization", name: "BankDeMark" },
    publisher: { "@type": "Organization", name: "BankDeMark" },
    mainEntityOfPage: "https://bankdemark.com/pillars/command",
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
      { "@type": "ListItem", position: 3, name: "Command", item: "https://bankdemark.com/pillars/command" },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Command by BankDeMark",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description:
      "Command is a personal financial operating system that combines net worth tracking, retirement planning, investment forecasting, debt optimization, FIRE planning, and financial health scoring into one dashboard.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      description: "Free tier available. Premium features unlocked with paid plan.",
    },
    url: "https://command.bankdemark.com/command",
    publisher: { "@type": "Organization", name: "BankDeMark", url: "https://bankdemark.com" },
  };

  return (
    <div className="pillar-page">
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-content">
          <p className="pillar-eyebrow">
            <Link href="/pillars">Finance Pillars</Link> → Command
          </p>
          <h1>Command by BankDeMark</h1>
          <p className="pillar-subtitle">
            Your Personal Financial Operating System
          </p>
          <p className="pillar-description">
            Most people manage their money across a dozen disconnected tools — banking apps, spreadsheets,
            standalone calculators, retirement trackers, investment platforms, and budgeting software.
            They see account balances. They do not see their financial picture.
            Command changes that. One system. Every number. Your entire financial life, projected forward.
          </p>
          <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://command.bankdemark.com/command"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              See Your Entire Financial Life — Launch Command →
            </a>
          </div>
        </div>
      </div>

      <div className="pillar-layout">
        <aside className="pillar-toc">
          <GeneratedTOC />
        </aside>

        <div className="pillar-content">

          {/* Quick Answer */}
          <div className="content-body pillar-section">
            <div className="quick-answer-box">
              <strong>Quick Answer:</strong> Command by BankDeMark is a personal financial operating system —
              a single dashboard that unifies net worth tracking, retirement planning, investment forecasting,
              FIRE planning, debt optimization, and financial health scoring. Instead of jumping between
              spreadsheets, banking apps, and standalone calculators, users get one system that shows
              where they stand today and exactly where they are headed.
            </div>
          </div>

          {/* Section 1 — What Is Command */}
          <div id="what-is-command" className="content-body pillar-section">
            <h2>What Is Command by BankDeMark?</h2>
            <p>
              Command by BankDeMark is a <strong>financial operating system</strong> — a centralized platform
              that brings every dimension of personal finance into a single, intelligent dashboard. It is not
              a budgeting app. It is not a calculator. It is not a bank. It is the system that sits above all
              of those tools and creates a unified, forward-looking picture of your entire financial life.
            </p>
            <p>
              The term <em>financial operating system</em> is deliberate. Just as an operating system manages
              hardware, software, memory, and processes across your computer, a financial operating system
              manages income, assets, liabilities, investments, retirement accounts, and goals across your
              financial life. Command is BankDeMark&apos;s implementation of that concept.
            </p>
            <p>
              At its core, Command is built around a single premise: <strong>most people know their account
              balances but they do not know their financial reality</strong>. They do not know their true net
              worth. They do not know whether they are on track for retirement. They do not know what their
              financial freedom timeline looks like. They do not know whether their debt payoff strategy is
              optimal or whether their savings rate will actually get them to financial independence.
            </p>
            <p>
              Command answers all of those questions in one place.
            </p>

            <h3>Command as a Financial Operating System</h3>
            <p>
              The concept of a financial operating system (FinOS) represents the next generation of personal
              finance software. Earlier generations of tools solved narrow problems: Mint tracked spending,
              Personal Capital tracked investments, Excel tracked net worth, and retirement calculators
              projected nest eggs. Each tool was useful in isolation. None of them spoke to each other. None
              of them showed the full picture.
            </p>
            <p>
              A financial operating system solves the integration problem. It pulls every financial dimension
              into one system — cash, debt, investments, retirement accounts, goals, and projections — and
              then uses that integrated data to surface intelligence that no single-purpose tool can provide.
            </p>
            <p>
              Command includes the following integrated modules:
            </p>
            <ul>
              <li><strong>Net Worth Command Center</strong> — total assets, liabilities, and net worth over time</li>
              <li><strong>Retirement Intelligence Engine</strong> — retirement readiness, nest egg projections, income modeling</li>
              <li><strong>Investment Command Center</strong> — portfolio tracking, growth projections, allocation analysis</li>
              <li><strong>Debt Command Center</strong> — payoff strategies, interest optimization, debt freedom timeline</li>
              <li><strong>FIRE Planning Engine</strong> — FIRE number, Coast FIRE, Lean FIRE, Fat FIRE, and freedom timeline</li>
              <li><strong>Financial Health Score</strong> — composite scoring across savings, debt, investments, and goals</li>
              <li><strong>Wealth Forecasting Engine</strong> — trajectory modeling at various return and savings assumptions</li>
              <li><strong>Goal Tracking System</strong> — milestone planning tied to real financial data</li>
              <li><strong>Business Dashboard</strong> — (premium) cash flow, revenue, expense, and profit visibility for entrepreneurs</li>
            </ul>
          </div>

          {/* Section 2 — The Problem */}
          <div id="the-problem" className="content-body pillar-section">
            <h2>Why Most People Never See Their Full Financial Picture</h2>
            <p>
              The average household in Canada or the United States manages their money across a surprisingly
              large number of disconnected systems. A typical financial life might include:
            </p>
            <ul>
              <li>One or two bank accounts (chequing, savings)</li>
              <li>A workplace retirement account (RRSP group plan, 401k, pension)</li>
              <li>A TFSA or Roth IRA managed separately</li>
              <li>An investment brokerage account</li>
              <li>A mortgage or rent commitment</li>
              <li>Student loan or car loan balances</li>
              <li>Credit card balances across one to three cards</li>
              <li>A benefits package with life insurance and disability coverage</li>
              <li>Possibly a side business or freelance income</li>
            </ul>
            <p>
              Each of these financial elements lives in a different institution, a different app, and a
              different mental model. Checking your financial picture requires logging into five to ten
              separate platforms — and even then, none of them tell you the integrated story.
            </p>
            <p>
              The result is that most people operate financially by feel rather than by data. They have a
              rough sense of whether they are doing well. They check account balances before large purchases.
              They worry about retirement but rarely model it. They know they should invest more but do not
              know how much more would actually change their timeline.
            </p>
            <p>
              <strong>Command solves the integration problem.</strong> It creates a single source of truth
              for your entire financial life — and then uses that unified data to answer the questions that
              actually matter.
            </p>

            <h3>The Questions Most Financial Tools Cannot Answer</h3>
            <p>
              Traditional financial apps are good at answering &quot;What happened?&quot; — how much did I spend
              last month, what is my account balance, how much did my portfolio return this year. These are
              backward-looking questions. They describe the past.
            </p>
            <p>
              Command is designed to answer &quot;What happens next?&quot; — the forward-looking questions that
              actually determine whether you reach your financial goals:
            </p>
            <ul>
              <li>If I keep saving at my current rate, when do I reach financial independence?</li>
              <li>Am I on track to retire at 65 — or 55, or 45?</li>
              <li>What does my net worth look like in 10 years if I increase my savings rate by 5%?</li>
              <li>Which debt should I pay off first to minimize total interest and accelerate my freedom timeline?</li>
              <li>What is my FIRE number, and how many months away am I at my current pace?</li>
              <li>If markets return 6% instead of 8%, does my retirement plan still hold?</li>
              <li>How much of my monthly surplus should go to debt payoff versus investment?</li>
            </ul>
            <p>
              These are the questions that a financial operating system is built to answer. Command answers
              all of them from a single dashboard.
            </p>
          </div>

          {/* Section 3 — The Problem With Spreadsheets */}
          <div id="problem-with-spreadsheets" className="content-body pillar-section">
            <h2>The Problem With Spreadsheets</h2>
            <p>
              Spreadsheets are the most common tool for managing personal finances beyond basic budgeting
              apps. Sophisticated savers build elaborate Excel or Google Sheets models to track net worth,
              model retirement projections, calculate FIRE timelines, and visualize investment growth.
              Spreadsheets are powerful. They are also fundamentally limited as a financial operating system.
            </p>

            <h3>Spreadsheets Break Down at Scale</h3>
            <p>
              A personal finance spreadsheet that works at 25 — tracking a single investment account and a
              student loan — becomes increasingly unwieldy at 35, when you are managing a mortgage, three
              investment accounts, a TFSA, an RRSP, employer benefits, a car loan, and a growing portfolio
              across multiple asset classes. The models get complex. Updates become a chore. Formulas break.
              The manual effort required to maintain accuracy grows, so most people stop maintaining the model.
            </p>

            <h3>Spreadsheets Require Manual Data Entry</h3>
            <p>
              Every change in account balances, investment values, debt payoffs, and income requires manual
              input. In a dynamic financial life, values change constantly. Most people update their
              spreadsheets infrequently — monthly at best, quarterly in practice — which means the model
              is always operating on stale data. Planning decisions made on stale data produce stale
              conclusions.
            </p>

            <h3>Spreadsheets Cannot Integrate Dynamic Projections</h3>
            <p>
              A spreadsheet can model a specific scenario — &quot;If I invest $500/month at 7% for 30 years&quot; —
              but it cannot dynamically update that projection as your actual savings rate changes, as
              markets move, or as you add new financial goals. Building a truly dynamic projection engine
              in a spreadsheet requires advanced formula work that most people do not have the time or
              technical skill to maintain.
            </p>

            <h3>Command Replaces the Spreadsheet</h3>
            <p>
              Command provides everything a personal finance spreadsheet tries to do — net worth tracking,
              investment projections, retirement modeling, FIRE calculations, debt payoff analysis —
              in a maintained, integrated system that updates dynamically and surfaces intelligence
              automatically. You provide the data; Command does the modeling.
            </p>
          </div>

          {/* Section 4 — Problem With Traditional Apps */}
          <div id="problem-with-traditional-apps" className="content-body pillar-section">
            <h2>The Problem With Traditional Financial Apps</h2>
            <p>
              The personal finance software market is crowded. YNAB, Mint, Monarch Money, Rocket Money,
              Personal Capital, Empower, Wealthica, and dozens of others compete for the attention of
              financially engaged users. Each of these products solves a piece of the problem. None of them
              solves the whole problem.
            </p>

            <h3>Budgeting Apps Track the Past</h3>
            <p>
              YNAB, Mint, Monarch Money, and Rocket Money are budgeting and expense tracking tools.
              Their primary function is to categorize past transactions, surface spending patterns, and help
              users stay within monthly budget envelopes. These are valuable capabilities — but they are
              backward-looking by design. They tell you what happened. They do not tell you what is about
              to happen or whether your current financial behavior will get you to your goals.
            </p>

            <h3>Investment Trackers Focus Narrowly on Portfolios</h3>
            <p>
              Personal Capital (now Empower) and similar investment aggregators focus on portfolio tracking
              and retirement planning. They answer &quot;How is my portfolio performing?&quot; well. But they rarely
              integrate debt dynamics, FIRE planning, Canadian registered account intelligence, or
              comprehensive financial health scoring into a unified system. They are investment-first
              platforms with financial planning bolted on.
            </p>

            <h3>Canadian Users Are Underserved</h3>
            <p>
              Most personal finance software is built for American users and the American tax-advantaged
              account ecosystem (401k, IRA, HSA). Canadian users — managing TFSA contribution room, RRSP
              deduction limits, FHSA eligibility, CPP projections, and provincial tax implications — are
              systematically underserved by U.S.-centric tools. Command is purpose-built for both markets,
              with native Canadian registered account intelligence alongside American account types.
            </p>

            <h3>No Single Tool Answers the Full Financial Picture</h3>
            <p>
              The fundamental problem with the existing ecosystem is fragmentation. A financially engaged
              person might use YNAB for budgeting, Wealthica for investment tracking, a spreadsheet for
              net worth, an online FIRE calculator for freedom planning, and their bank app for day-to-day
              balances. Five tools, five logins, five partial pictures. Command replaces all five with one
              integrated financial operating system.
            </p>
          </div>

          {/* Section 5 — Net Worth Command Center */}
          <div id="net-worth-command-center" className="content-body pillar-section">
            <h2>Net Worth Command Center</h2>
            <p>
              Net worth is the foundational metric of personal finance. It is the single number that captures
              your complete financial position: total assets minus total liabilities. Understanding your net
              worth — and tracking how it changes over time — is the starting point for every other financial
              planning decision.
            </p>
            <p>
              Command&apos;s Net Worth Command Center provides:
            </p>
            <ul>
              <li><strong>Real-time net worth calculation</strong> — total assets, total liabilities, and net worth updated as your data changes</li>
              <li><strong>Asset breakdown</strong> — liquid assets (cash, HISA), investable assets (TFSA, RRSP, brokerage), real estate, vehicles, and other assets categorized and valued</li>
              <li><strong>Liability breakdown</strong> — mortgage, car loans, student loans, credit card balances, and other debts tracked and summed</li>
              <li><strong>Net worth trajectory</strong> — your net worth plotted over time, showing the direction and rate of change</li>
              <li><strong>Wealth stage classification</strong> — where you sit on the wealth-building spectrum, from early accumulation through financial independence</li>
              <li><strong>Actionable next move</strong> — the specific financial action that would have the greatest impact on your net worth trajectory</li>
            </ul>
            <p>
              Net worth is not just a snapshot — it is a velocity problem. Growing your net worth at a
              meaningful rate requires understanding which financial moves accelerate it most. Command&apos;s
              net worth intelligence surfaces that insight automatically.
            </p>
            <p>
              You can start building your net worth picture right now with the{" "}
              <Link href="/calculators/net-worth-calculator">BankDeMark Net Worth Calculator</Link> — then
              bring your full financial picture into Command for trajectory modeling and ongoing tracking.
            </p>
          </div>

          {/* Section 6 — Retirement Intelligence */}
          <div id="retirement-intelligence-engine" className="content-body pillar-section">
            <h2>Retirement Intelligence Engine</h2>
            <p>
              Retirement planning is the most consequential long-term financial decision most people make.
              Getting it wrong — saving too little, retiring too early, withdrawing at an unsustainable rate —
              has irreversible consequences. Getting it right requires accurate, dynamic modeling that
              accounts for savings, investment growth, inflation, income needs, and withdrawal strategy.
            </p>
            <p>
              Command&apos;s Retirement Intelligence Engine projects:
            </p>
            <ul>
              <li><strong>Projected nest egg at retirement</strong> — based on current savings, monthly contributions, expected return, and years to retirement</li>
              <li><strong>Target nest egg</strong> — calculated as 25× your inflation-adjusted annual spending, using the 4% Safe Withdrawal Rule as the baseline</li>
              <li><strong>Retirement surplus or gap</strong> — the difference between projected portfolio and target, expressed in dollars and as a percentage</li>
              <li><strong>Safe withdrawal amounts</strong> — annual and monthly income your portfolio can sustainably generate in retirement</li>
              <li><strong>Inflation-adjusted spending</strong> — what your current spending level will cost in future dollars at retirement age</li>
              <li><strong>Retirement readiness score</strong> — a clear, actionable signal of whether you are on track, ahead, or behind your retirement target</li>
            </ul>

            <h3>Canadian Retirement Intelligence</h3>
            <p>
              Canadian retirement planning involves unique variables that U.S.-focused tools handle poorly.
              Command incorporates:
            </p>
            <ul>
              <li><strong>RRSP optimization</strong> — contribution room tracking, deduction limit modeling, and tax-deferred growth projections</li>
              <li><strong>TFSA as retirement vehicle</strong> — tax-free growth projections and withdrawal flexibility modeling</li>
              <li><strong>CPP and OAS estimation</strong> — government benefit projections layered into retirement income modeling</li>
              <li><strong>Pension integration</strong> — defined benefit and defined contribution pension values incorporated into nest egg calculations</li>
            </ul>

            <h3>American Retirement Intelligence</h3>
            <p>
              For American users, Command integrates:
            </p>
            <ul>
              <li><strong>401(k) and 403(b) projections</strong> — including employer match modeling</li>
              <li><strong>Traditional and Roth IRA tracking</strong> — with contribution limit awareness and tax treatment distinctions</li>
              <li><strong>HSA as stealth retirement account</strong> — triple tax-advantaged growth projected into retirement income</li>
              <li><strong>Social Security estimation</strong> — benefit projections at different claiming ages incorporated into income modeling</li>
            </ul>
            <p>
              Use the <Link href="/calculators/retirement-calculator">BankDeMark Retirement Calculator</Link>{" "}
              to project your nest egg right now, then bring your full retirement picture into Command for
              ongoing tracking and intelligent adjustment as your circumstances change.
            </p>
          </div>

          {/* Section 7 — Investment Command Center */}
          <div id="investment-command-center" className="content-body pillar-section">
            <h2>Investment Command Center</h2>
            <p>
              The Investment Command Center is the module where your long-term wealth building comes into
              focus. It tracks every investment account you hold — registered, tax-advantaged, and taxable
              — and projects where that capital is heading based on real compounding math.
            </p>
            <p>
              Command&apos;s Investment Command Center provides:
            </p>
            <ul>
              <li><strong>Portfolio value tracking</strong> — total portfolio value across all accounts, updated as you add transactions</li>
              <li><strong>Account-level breakdown</strong> — TFSA, RRSP, FHSA, brokerage, 401(k), Roth IRA, HSA — each tracked separately with consolidated totals</li>
              <li><strong>Growth projections</strong> — compound growth curves at multiple return assumptions (conservative, moderate, aggressive) out to your target horizon</li>
              <li><strong>Asset allocation visualization</strong> — equity, fixed income, cash, and alternative allocation ratios with drift monitoring</li>
              <li><strong>Contribution room tracking</strong> — TFSA and RRSP room remaining, with over-contribution alerts for Canadian users</li>
              <li><strong>Projected future portfolio values</strong> — what your portfolio is worth in 5, 10, 20, and 30 years at various contribution and return scenarios</li>
            </ul>
            <p>
              The foundation of long-term investment success is compound growth. Understand the math behind
              your portfolio&apos;s trajectory with the{" "}
              <Link href="/calculators/investment-calculator">BankDeMark Investment Calculator</Link> and the{" "}
              <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link> —
              then connect your accounts in Command for live tracking.
            </p>

            <h3>The Compound Growth Engine at the Heart of Command</h3>
            <p>
              Every projection in Command&apos;s Investment Command Center is powered by compound growth
              mathematics. The fundamental formula — <strong>A = P(1 + r/n)^(nt)</strong> — is applied across
              each account, with contributions modeled as end-of-period annuities:
              <strong> FV = PMT × [((1 + r/n)^(nt) − 1) / (r/n)]</strong>. The system compounds principal
              at account-appropriate frequencies and adds contribution annuity values to produce combined
              future value projections.
            </p>
            <p>
              This is the same math that underlies the BankDeMark calculator suite. Command takes that math
              and applies it dynamically across your real account data, updating projections as your balances,
              contributions, and return assumptions evolve.
            </p>
            <p>
              For a deep understanding of the compounding mechanics powering Command&apos;s projections, see the{" "}
              <Link href="/pillars/compound-interest-calculator">Compound Interest Calculator Guide</Link>.
            </p>
          </div>

          {/* Section 8 — Debt Command Center */}
          <div id="debt-command-center" className="content-body pillar-section">
            <h2>Debt Command Center</h2>
            <p>
              Debt is the single largest drag on wealth building for most households. The interest paid on
              mortgages, car loans, student loans, and credit card balances represents real capital leaving
              your financial system — capital that could otherwise compound into long-term wealth. Managing
              debt intelligently is not just about paying it off; it is about sequencing payoff to minimize
              total interest, free up cash flow at the right time, and align debt elimination with your
              broader financial freedom timeline.
            </p>
            <p>
              Command&apos;s Debt Command Center tracks:
            </p>
            <ul>
              <li><strong>All debt types</strong> — mortgage, car loans, student loans, credit cards, lines of credit, personal loans</li>
              <li><strong>Total outstanding balance</strong> — combined debt across all liabilities with payoff timeline</li>
              <li><strong>Monthly payment obligations</strong> — minimum payments, extra payments, and total debt service cost</li>
              <li><strong>Debt payoff strategies</strong> — Avalanche (highest interest first) vs. Snowball (lowest balance first) with time and interest comparisons</li>
              <li><strong>Interest optimization</strong> — identifies which debt is costing you most and models the savings from accelerated payoff</li>
              <li><strong>Debt freedom timeline</strong> — the date at which you become fully debt-free under each strategy</li>
              <li><strong>Debt impact on FIRE timeline</strong> — models how accelerating debt payoff affects your financial independence date</li>
            </ul>
            <p>
              Use the <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link> or{" "}
              <Link href="/calculators/credit-card-payoff-calculator">Credit Card Payoff Calculator</Link>{" "}
              to model your strategy now, then track your progress in Command.
            </p>
          </div>

          {/* Section 9 — FIRE Command Center */}
          <div id="fire-command-center" className="content-body pillar-section">
            <h2>FIRE Planning Engine</h2>
            <p>
              Financial Independence, Retire Early (FIRE) has moved from a fringe movement to a mainstream
              financial goal. The core insight is simple: if your invested assets generate enough passive
              income to cover your living expenses, work becomes optional. The math — accumulated wealth of
              25× annual spending, withdrawn at 4% annually — is straightforward. The execution is complex,
              personal, and requires ongoing modeling to stay on track.
            </p>
            <p>
              Command&apos;s FIRE Planning Engine calculates:
            </p>
            <ul>
              <li>
                <strong>Your FIRE Number</strong> — the portfolio size at which your investments generate enough
                passive income to sustain your lifestyle indefinitely, typically calculated as
                Annual Spending × 25 (4% withdrawal rate)
              </li>
              <li>
                <strong>Coast FIRE Number</strong> — the amount at which, if you stop contributing today and let
                compound growth run, you will still reach full FIRE by traditional retirement age
              </li>
              <li>
                <strong>Lean FIRE</strong> — the minimal FIRE threshold for a simplified, frugal lifestyle
              </li>
              <li>
                <strong>Fat FIRE</strong> — the premium FIRE threshold for a comfortable, unconstrained lifestyle
              </li>
              <li>
                <strong>Years to FIRE</strong> — how long until you cross your FIRE number at your current savings rate
              </li>
              <li>
                <strong>FIRE age</strong> — the age at which you reach financial independence based on current trajectory
              </li>
              <li>
                <strong>Monthly target</strong> — the contribution amount required to reach FIRE by a specific target date
              </li>
              <li>
                <strong>FIRE scenario modeling</strong> — what your FIRE timeline looks like at different savings rates, return assumptions, and spending levels
              </li>
            </ul>
            <p>
              FIRE planning is not just about aggressive savings — it is about understanding the relationship
              between savings rate, investment return, spending level, and time. Command makes that
              relationship visible and actionable.
            </p>
            <p>
              Start modeling your FIRE number with the{" "}
              <Link href="/calculators/fire-calculator">BankDeMark FIRE Calculator</Link>, then bring
              your FIRE goal into Command for milestone tracking and adaptive planning.
            </p>
            <p>
              For comprehensive reading on financial freedom strategy, see the{" "}
              <Link href="/pillars/financial-freedom">Financial Freedom Pillar</Link> and the{" "}
              <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>.
            </p>
          </div>

          {/* Section 10 — Financial Health Score */}
          <div id="financial-health-score-system" className="content-body pillar-section">
            <h2>Financial Health Score System</h2>
            <p>
              The Financial Health Score is Command&apos;s composite assessment of how strong your financial
              position is across six critical dimensions. It produces a 0–100 score that gives you a single,
              actionable signal — and identifies exactly which financial dimension needs the most attention.
            </p>
            <p>
              The six scoring dimensions:
            </p>
            <ul>
              <li><strong>Savings Rate</strong> — what percentage of your income you are saving and investing</li>
              <li><strong>Emergency Fund Coverage</strong> — how many months of expenses your liquid reserves cover</li>
              <li><strong>Debt Load Ratio</strong> — your total monthly debt obligations as a percentage of income</li>
              <li><strong>Housing Cost Ratio</strong> — what percentage of income goes to housing (rent or mortgage)</li>
              <li><strong>Investment Activity</strong> — whether you are actively investing and growing long-term wealth</li>
              <li><strong>Net Worth Trajectory</strong> — whether your net worth is growing, flat, or declining</li>
            </ul>
            <p>
              Each dimension is scored individually and weighted into the composite. The system then
              surfaces the <em>weakest dimension</em> — the financial area where targeted improvement would
              produce the greatest overall impact — and recommends a specific next action.
            </p>
            <p>
              Get your Financial Health Score right now with the{" "}
              <Link href="/money-health-score">Money Health Score tool</Link>, then track your score over
              time as you make financial improvements in Command.
            </p>
          </div>

          {/* Section 11 — Wealth Forecasting Engine */}
          <div id="wealth-forecasting-engine" className="content-body pillar-section">
            <h2>Wealth Forecasting Engine</h2>
            <p>
              Command&apos;s Wealth Forecasting Engine is the most powerful forward-looking module in the
              system. It takes your current financial data — net worth, savings rate, investment allocation,
              debt obligations, income, and spending — and projects your complete financial trajectory
              across multiple scenarios and time horizons.
            </p>
            <p>
              The forecasting engine models:
            </p>
            <ul>
              <li><strong>Net worth trajectory</strong> — where your total net worth is heading at your current pace</li>
              <li><strong>Future investment portfolio value</strong> — your portfolio in 5, 10, 20, and 30 years</li>
              <li><strong>Scenario analysis</strong> — how your trajectory changes with different savings rates, returns, or spending levels</li>
              <li><strong>Inflation-adjusted projections</strong> — future values in today&apos;s purchasing power, not nominal dollars</li>
              <li><strong>Sensitivity modeling</strong> — what happens if markets return 5% vs. 8%, or if you increase your savings rate by 3%</li>
              <li><strong>Debt payoff impact</strong> — how eliminating specific debts changes your net worth trajectory</li>
            </ul>
            <p>
              The distinction between tracking and forecasting is the difference between knowing where you
              are and knowing where you are going. Most financial tools offer the former. Command offers both.
            </p>
          </div>

          {/* Section 12 — Goal Tracking */}
          <div id="goal-tracking-system" className="content-body pillar-section">
            <h2>Goal Tracking System</h2>
            <p>
              Financial goals without financial data are aspirations. Financial goals tied to real data —
              current balances, savings rates, compound growth projections — become plans. Command&apos;s Goal
              Tracking System bridges the gap between financial aspiration and executable planning.
            </p>
            <p>
              The goal tracking system supports:
            </p>
            <ul>
              <li><strong>Retirement date goals</strong> — target date and nest egg tied to live retirement modeling</li>
              <li><strong>FIRE milestone goals</strong> — FIRE number, Coast FIRE, and intermediate milestones tracked against projected portfolio</li>
              <li><strong>Debt elimination goals</strong> — specific debt payoff targets with projected completion dates</li>
              <li><strong>Net worth milestones</strong> — first $100k, first $500k, first $1M — tracked and projected</li>
              <li><strong>Emergency fund goals</strong> — target coverage months tracked against current liquid savings</li>
              <li><strong>Savings rate goals</strong> — target savings rate with current-rate comparison and monthly surplus modeling</li>
              <li><strong>Home purchase goals</strong> — down payment accumulation tracking with rent-vs-buy analysis</li>
            </ul>
            <p>
              Goals in Command are not static targets. They are living projections that update as your
              financial data changes — surfacing whether you are ahead of pace, on track, or need to
              make adjustments to stay on course.
            </p>
          </div>

          {/* Section 13 — Business Dashboard */}
          <div id="business-dashboard" className="content-body pillar-section">
            <h2>Business Dashboard (Premium)</h2>
            <p>
              Entrepreneurs and business owners face a financial complexity that personal finance software
              largely ignores: the intersection of business cash flow and personal financial planning.
              Business income is variable. Tax obligations are significant and often quarterly. Business
              expenses and personal expenses intermingle in ways that make both harder to manage. Business
              assets (equipment, inventory, receivables) affect personal net worth but are rarely tracked
              in personal finance systems.
            </p>
            <p>
              Command&apos;s Business Dashboard — available as a premium feature — provides:
            </p>
            <ul>
              <li><strong>Business cash flow tracking</strong> — revenue, expenses, and profit monitored over time</li>
              <li><strong>Tax reserve management</strong> — automated calculation of HST/GST, corporate tax, and payroll obligations with reserve tracking</li>
              <li><strong>Owner&apos;s equity tracking</strong> — business value and equity incorporated into total net worth</li>
              <li><strong>Revenue trend analysis</strong> — month-over-month and year-over-year business performance</li>
              <li><strong>Business vs. personal integration</strong> — a unified view of both business and personal financial health in one dashboard</li>
              <li><strong>Profit distribution planning</strong> — salary vs. dividend optimization modeling for incorporated business owners</li>
            </ul>
            <p>
              The business dashboard reflects BankDeMark&apos;s commitment to serving the financial complexity
              of entrepreneurs — a segment that existing personal finance software almost universally
              underserves.
            </p>
            <p>
              For foundational business credit intelligence, see the{" "}
              <Link href="/pillars/business-credit">Business Credit Pillar</Link>.
            </p>
          </div>

          {/* Section 14 — Why Command Is Different */}
          <div id="why-command-is-different" className="content-body pillar-section">
            <h2>Why Command Is Different From Every Other Financial Tool</h2>
            <p>
              The personal finance software landscape is populated with capable, well-designed products that
              solve narrow problems well. Command is different in three fundamental ways.
            </p>

            <h3>Integration vs. Aggregation</h3>
            <p>
              Most financial aggregators pull in account data and display it in one place. That is
              aggregation. Command does something different: it integrates financial data across modules
              to produce intelligence that no single module could generate alone. Your debt payoff
              acceleration affects your investment contribution capacity, which affects your retirement
              timeline, which affects your FIRE date, which affects your goal tracking — and Command
              models all of those interdependencies dynamically.
            </p>

            <h3>Forward-Looking vs. Backward-Looking</h3>
            <p>
              Transaction categorization, spending analysis, and account balance tracking answer one type
              of question: What happened? Command answers the other type: What happens next? The
              Wealth Forecasting Engine, Retirement Intelligence Engine, and FIRE Planning Engine are all
              built around projections, scenarios, and trajectories rather than historical summaries.
            </p>

            <h3>Built for Both Canada and the United States</h3>
            <p>
              No other personal financial operating system treats Canada and the United States as co-equal
              first-class markets. Command is built from the ground up with native support for:
            </p>
            <ul>
              <li>TFSA — Tax-Free Savings Account contribution room tracking and growth projections</li>
              <li>RRSP — Registered Retirement Savings Plan deduction limits and tax-deferred growth</li>
              <li>FHSA — First Home Savings Account for first-time home buyer planning</li>
              <li>CPP/OAS — Canada Pension Plan and Old Age Security retirement income estimation</li>
              <li>401(k) and IRA — American retirement account tracking and projection</li>
              <li>HSA — Health Savings Account as triple-tax-advantaged retirement vehicle</li>
              <li>Social Security — U.S. benefit projection incorporated into retirement income modeling</li>
            </ul>
          </div>

          {/* Section 15 — How Command Helps Different Users */}
          <div id="who-command-helps" className="content-body pillar-section">
            <h2>Who Command Is Built For</h2>

            <h3>How Command Helps Families</h3>
            <p>
              Families managing a household budget, a mortgage, children&apos;s education savings, and combined
              retirement accounts need a system that can model multiple financial goals simultaneously.
              Command provides a household-level net worth view, models education savings alongside
              retirement planning, tracks mortgage paydown as part of net worth growth, and scores overall
              household financial health — giving families a clear, unified financial picture.
            </p>

            <h3>How Command Helps Young Professionals</h3>
            <p>
              Young professionals in their 20s and early 30s are making the financial decisions that will
              compound for decades. The choice between accelerating student loan payoff, maximizing TFSA
              or Roth IRA contributions, or building an emergency fund has enormous long-term implications.
              Command models the financial impact of those choices explicitly — showing the net worth
              trajectory and retirement timeline under each scenario — so that decisions are made with
              full awareness of their compounding consequences.
            </p>

            <h3>How Command Helps Entrepreneurs</h3>
            <p>
              Entrepreneurs face the unique challenge of managing variable income, business assets, tax
              obligations, and personal financial goals simultaneously. Command&apos;s Business Dashboard
              integrates business cash flow with personal net worth tracking, models the tax impact of
              income distribution decisions, and gives entrepreneurs a unified view of their total financial
              position — business and personal together.
            </p>

            <h3>How Command Helps Investors</h3>
            <p>
              Investors managing multiple accounts across multiple asset classes need portfolio-level
              visibility alongside personal finance intelligence. Command tracks portfolio allocation,
              models growth projections with realistic return assumptions, and integrates investment
              performance into the broader net worth and retirement picture — moving beyond individual
              account tracking to holistic wealth management.
            </p>

            <h3>How Command Helps FIRE Pursuers</h3>
            <p>
              Financial independence seekers live by numbers — savings rate, FIRE number, years remaining,
              Coast FIRE threshold. Command&apos;s FIRE Planning Engine makes those numbers live and dynamic.
              Instead of recalculating a FIRE spreadsheet every month, FIRE pursuers see their trajectory
              update automatically as their portfolio grows, their savings rate changes, and their spending
              evolves. The system surfaces exactly which financial lever — savings rate, spending reduction,
              return optimization — would move the FIRE date most.
            </p>

            <h3>How Command Helps Pre-Retirees</h3>
            <p>
              The decade before retirement is the period where planning precision matters most. A portfolio
              that is slightly underfunded at 55 can be corrected with targeted increases in savings rate
              and delayed retirement date. A portfolio that is misunderstood — because the planning was
              done on stale spreadsheet data — can lead to premature retirement followed by a forced return
              to work. Command&apos;s Retirement Intelligence Engine provides the planning precision that the
              pre-retirement decade demands.
            </p>

            <h3>How Command Helps Canadians</h3>
            <p>
              Canadian financial planning requires native understanding of the registered account ecosystem:
              TFSA contribution room, RRSP deduction limits, FHSA eligibility windows, and CPP/OAS
              retirement income integration. No American-built tool handles these correctly. Command is
              purpose-built for the Canadian context while remaining fully functional for American users.
            </p>

            <h3>How Command Helps Americans</h3>
            <p>
              American users benefit from Command&apos;s native 401(k), Roth IRA, Traditional IRA, HSA, and
              Social Security integration alongside the full financial operating system capabilities.
              The 401k employer match optimization, Roth conversion modeling, and HSA-as-retirement-account
              projections give American users a planning depth that most domestic tools do not provide.
            </p>
          </div>

          {/* Section 16 — The Command Ecosystem */}
          <div id="command-ecosystem" className="content-body pillar-section">
            <h2>The BankDeMark Ecosystem That Feeds Command</h2>
            <p>
              Command does not exist in isolation. It sits at the center of a comprehensive financial
              education and tooling ecosystem built by BankDeMark — one in which every calculator,
              article, pillar page, and educational resource connects to Command as the natural next step.
            </p>

            <h3>The Calculator Suite</h3>
            <p>
              BankDeMark&apos;s{" "}
              <Link href="/calculators">calculator suite</Link> provides standalone tools for every major
              financial calculation. Users who calculate their compound interest, model their retirement
              nest egg, or project their FIRE number in a BankDeMark calculator can immediately bring
              those numbers into Command for ongoing tracking. The calculators are the entry point;
              Command is the destination.
            </p>
            <p>
              Key calculators that feed directly into Command&apos;s modules:
            </p>
            <ul>
              <li><Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link> → Net Worth Command Center</li>
              <li><Link href="/calculators/retirement-calculator">Retirement Calculator</Link> → Retirement Intelligence Engine</li>
              <li><Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link> → Investment Command Center</li>
              <li><Link href="/calculators/investment-calculator">Investment Calculator</Link> → Investment Command Center</li>
              <li><Link href="/calculators/fire-calculator">FIRE Calculator</Link> → FIRE Planning Engine</li>
              <li><Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link> → Debt Command Center</li>
              <li><Link href="/calculators/budget-calculator">Budget Calculator</Link> → Financial Health Score</li>
              <li><Link href="/calculators/emergency-fund-calculator">Emergency Fund Calculator</Link> → Financial Health Score</li>
              <li><Link href="/calculators/mortgage-calculator">Mortgage Calculator</Link> → Debt Command Center + Net Worth</li>
              <li><Link href="/calculators/rrsp-calculator">RRSP Calculator</Link> → Canadian Retirement Intelligence</li>
              <li><Link href="/calculators/tfsa-calculator">TFSA Calculator</Link> → Canadian Investment Command Center</li>
            </ul>

            <h3>The Pillar Content Architecture</h3>
            <p>
              BankDeMark&apos;s six finance pillars — Personal Finance, Investing, Business Credit, Banking,
              Debt Management, and Financial Freedom — provide the educational depth that supports informed
              use of Command. Each pillar produces a body of knowledge that prepares users to make better
              financial decisions and understand the data Command surfaces.
            </p>
            <ul>
              <li><Link href="/pillars/personal-finance">Personal Finance Pillar</Link> — foundational money management that defines Command&apos;s Financial Health Score framework</li>
              <li><Link href="/pillars/investing">Investing Pillar</Link> — capital allocation intelligence underlying Command&apos;s Investment Command Center</li>
              <li><Link href="/pillars/financial-freedom">Financial Freedom Pillar</Link> — FIRE strategy and independence planning feeding Command&apos;s FIRE engine</li>
              <li><Link href="/pillars/debt-management">Debt Management Pillar</Link> — payoff strategy intelligence powering Command&apos;s Debt Command Center</li>
              <li><Link href="/pillars/banking">Banking Pillar</Link> — account optimization knowledge for Command&apos;s cash management module</li>
              <li><Link href="/pillars/business-credit">Business Credit Pillar</Link> — business financial intelligence for Command&apos;s Business Dashboard</li>
              <li><Link href="/pillars/financial-calculators">Financial Calculators Pillar</Link> — the complete calculator ecosystem that feeds data into Command</li>
            </ul>
          </div>

          {/* Section 17 — Topical Authority */}
          <div id="command-topical-authority" className="content-body pillar-section">
            <h2>Command as a Topical Authority Asset</h2>
            <p>
              From a search and AI perspective, Command represents BankDeMark&apos;s clearest expression of
              topical authority across the full personal finance space. By building a product that
              integrates net worth tracking, retirement planning, investment forecasting, debt optimization,
              FIRE planning, and financial health scoring — and by building extensive educational content
              around each of those dimensions — BankDeMark creates a semantic network that Google and AI
              systems can recognize and reward.
            </p>
            <p>
              The entity definitions that Command establishes:
            </p>
            <ul>
              <li><strong>Command = Financial Operating System</strong></li>
              <li><strong>Command = Personal Financial Dashboard</strong></li>
              <li><strong>Command = Wealth Planning Platform</strong></li>
              <li><strong>Command = Financial Command Center</strong></li>
              <li><strong>Command = Net Worth + Retirement + Investing + Debt + Freedom Planning System</strong></li>
            </ul>
            <p>
              These entity associations — reinforced across hundreds of articles, calculator pages, pillar
              content, and tool CTAs — build the topical authority moat that positions BankDeMark as the
              authoritative source for financial operating system content in both English-language markets.
            </p>

            <h3>The Keywords Command Owns</h3>
            <p>
              Command is positioned to capture organic search traffic across several high-value keyword clusters:
            </p>
            <ul>
              <li><em>Personal finance dashboard, money dashboard, wealth dashboard, financial dashboard</em></li>
              <li><em>Financial operating system, personal financial operating system, FinOS</em></li>
              <li><em>Net worth tracker, wealth tracker, net worth dashboard</em></li>
              <li><em>Retirement planner, retirement dashboard, retirement planning software</em></li>
              <li><em>FIRE dashboard, financial independence tracker, FIRE planning tool</em></li>
              <li><em>Investment tracker, investment dashboard, portfolio tracker</em></li>
              <li><em>Financial command center, financial planning software</em></li>
            </ul>
          </div>

          {/* Section 18 — CTA */}
          <div id="get-command" className="content-body pillar-section">
            <h2>See Your Entire Financial Life in One Place</h2>
            <p>
              Stop jumping between spreadsheets, banking apps, retirement calculators, and investment
              trackers. Every time you switch tools, you lose the integrated picture. You see pieces.
              You do not see the whole.
            </p>
            <p>
              Command gives you one system. One dashboard. One source of truth for:
            </p>
            <ul>
              <li>Your true net worth — updated in real time</li>
              <li>Your retirement readiness — projected to your target date</li>
              <li>Your FIRE timeline — calculated to the month</li>
              <li>Your investment trajectory — compounded forward across all accounts</li>
              <li>Your debt freedom date — modeled under the optimal payoff strategy</li>
              <li>Your financial health score — scored across six dimensions with actionable recommendations</li>
            </ul>
            <p>
              Know where you stand. Know where you are going. Know what to do next.
            </p>
            <div style={{ margin: "28px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href="https://command.bankdemark.com/command"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-block", width: "fit-content" }}
              >
                Launch Command — Build Your Financial Dashboard →
              </a>
            </div>
            <p>
              Not ready to connect your accounts? Start with a free calculator to build your first
              financial projection:
            </p>
            <ul>
              <li><Link href="/calculators/net-worth-calculator">Calculate your net worth →</Link></li>
              <li><Link href="/calculators/retirement-calculator">Project your retirement nest egg →</Link></li>
              <li><Link href="/calculators/fire-calculator">Calculate your FIRE number →</Link></li>
              <li><Link href="/money-health-score">Get your Money Health Score →</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div id="faq" className="content-body pillar-section">
            <h2>Command by BankDeMark — Frequently Asked Questions</h2>
            {faq.map((item) => (
              <div key={item.q} style={{ marginBottom: "28px" }}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="content-body pillar-section">
            <h2>Explore the BankDeMark Ecosystem</h2>
            <ul>
              <li><Link href="/calculators">Full Calculator Suite</Link></li>
              <li><Link href="/pillars/financial-calculators">Financial Calculators Pillar</Link></li>
              <li><Link href="/pillars/compound-interest-calculator">Compound Interest Calculator Guide</Link></li>
              <li><Link href="/pillars/financial-freedom">Financial Freedom Pillar</Link></li>
              <li><Link href="/pillars/investing">Investing Pillar</Link></li>
              <li><Link href="/pillars/personal-finance">Personal Finance Pillar</Link></li>
              <li><Link href="/pillars/debt-management">Debt Management Pillar</Link></li>
              <li><Link href="/pillars/banking">Banking Pillar</Link></li>
              <li><Link href="/pillars/business-credit">Business Credit Pillar</Link></li>
              <li><Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link></li>
              <li><Link href="/money-health-score">Money Health Score</Link></li>
            </ul>
          </div>

          <section className="cta-banner">
            <div className="cta-banner-inner">
              <span className="eyebrow">BankDeMark Intelligence</span>
              <h2>Your Financial Operating System Is Waiting.</h2>
              <p>Net worth. Retirement. Investments. Debt. Freedom timeline. One dashboard.</p>
              <a
                href="https://command.bankdemark.com/command"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-large"
              >
                Launch Command →
              </a>
            </div>
          </section>

          <SEOLinkMap currentPath="/pillars/command" />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="content-body" style={{ maxWidth: "860px", margin: "0 auto", padding: "24px 24px 48px" }}>
        <p style={{ fontSize: "0.8rem", opacity: 0.5 }}>
          This content is educational only and is not personalized financial, investment, tax, legal, or credit advice.
          Command by BankDeMark is a financial planning and projection tool. Projections are mathematical estimates
          based on user-supplied inputs and assumed return rates — they are not guarantees of actual investment
          performance. Consult a qualified financial advisor before making financial decisions.
        </p>
      </div>
    </div>
  );
}
