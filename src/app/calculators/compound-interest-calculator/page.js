import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import CompoundInterestCalculator from "../../components/CompoundInterestCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";

export const metadata = {
  title: "Compound Interest Calculator | Free Investment Growth Calculator",
  description:
    "Use BankDeMark's free compound interest calculator to estimate investment growth, savings growth, monthly contributions, and long-term wealth building.",
  alternates: {
    canonical: "/calculators/compound-interest-calculator",
  },
};

const faq = [
  {
    q: "What is a compound interest calculator?",
    a: "A compound interest calculator estimates how money grows when interest or investment returns are reinvested over time.",
  },
  {
    q: "How is compound interest calculated?",
    a: "Compound interest is calculated by applying growth to the original principal plus accumulated interest over repeated compounding periods.",
  },
  {
    q: "Is compound interest only for investing?",
    a: "No. Compound interest applies to savings accounts, high-yield savings accounts, certificates of deposit, retirement accounts, index funds, ETFs, and long-term investment portfolios.",
  },
  {
    q: "What return should I use?",
    a: "Use a conservative estimated annual return. Savings accounts may use current APY, while long-term investment examples often test 5%, 7%, or 8% scenarios.",
  },
];

export default function CompoundInterestCalculatorPage() {
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use a compound interest calculator",
    description:
      "Learn how to estimate long-term savings and investment growth using principal, contributions, return rate, time, and compounding frequency.",
    step: [
      { "@type": "HowToStep", name: "Enter your starting amount" },
      { "@type": "HowToStep", name: "Add your monthly contribution" },
      { "@type": "HowToStep", name: "Choose an estimated annual return" },
      { "@type": "HowToStep", name: "Select your investment timeline" },
      { "@type": "HowToStep", name: "Review future value, contributions, and estimated growth" },
    ],
  };

  return (
    <>
      <Script
        id="compound-interest-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="compound-interest-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Compound Interest Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Calculate how your savings, investments, monthly contributions, and
          long-term wealth can grow through the power of compound interest.
        </p>
      </div>

      <div className="pillar-page">
        <CompoundInterestCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-compound-interest">What compound interest is</a></li>
            <li><a href="#how-it-works">How compound growth works</a></li>
            <li><a href="#formula">Compound interest formula</a></li>
            <li><a href="#investing">Compound interest for investing</a></li>
            <li><a href="#savings">Compound interest for savings</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-compound-interest" className="pillar-section">
          <h2>What Is Compound Interest?</h2>
          <p>
            Compound interest is growth earned on both your original money and
            the growth that money has already produced. Instead of earning
            interest only on your starting balance, compounding allows your
            balance to keep building on itself.
          </p>
          <p>
            This is why compound interest is one of the most important concepts
            in personal finance, investing, retirement planning, wealth
            building, and financial freedom. A small amount invested consistently
            over a long period can become significantly larger because time does
            more of the work.
          </p>
          <p>
            BankDeMark’s compound interest calculator helps estimate that growth
            by combining your starting balance, monthly contributions, annual
            return, investment timeline, and compounding frequency.
          </p>
        </div>

        <div id="how-it-works" className="pillar-section">
          <h2>How Compound Growth Works</h2>
          <p>
            Compound growth works best when three forces work together: time,
            contribution consistency, and return rate. The longer your money
            stays invested, the more opportunities it has to generate additional
            growth.
          </p>
          <ul>
            <li><strong>Principal:</strong> the amount you start with.</li>
            <li><strong>Monthly contribution:</strong> the amount you add consistently.</li>
            <li><strong>Annual return:</strong> the estimated yearly growth rate.</li>
            <li><strong>Time horizon:</strong> how many years the money stays invested.</li>
            <li><strong>Compounding frequency:</strong> how often growth is applied.</li>
          </ul>
          <p>
            For investors, compounding can happen through reinvested dividends,
            capital gains, and long-term market growth. For savers, it can
            happen through savings account interest, high-yield savings account
            APY, CDs, or other interest-bearing accounts.
          </p>
        </div>

        <div id="formula" className="pillar-section">
          <h2>Compound Interest Formula</h2>
          <p>
            The standard compound interest formula is:
          </p>
          <p>
            <strong>A = P(1 + r/n)^(nt)</strong>
          </p>
          <ul>
            <li><strong>A</strong> = future value</li>
            <li><strong>P</strong> = starting principal</li>
            <li><strong>r</strong> = annual interest rate or return rate</li>
            <li><strong>n</strong> = number of compounding periods per year</li>
            <li><strong>t</strong> = number of years</li>
          </ul>
          <p>
            This calculator also accounts for recurring monthly contributions,
            which makes it more useful for real-world personal finance. Most
            people do not invest one lump sum and stop. They build wealth by
            contributing monthly over years.
          </p>
        </div>

        <div id="investing" className="pillar-section">
          <h2>Compound Interest for Investing</h2>
          <p>
            In investing, compound growth is one of the main reasons long-term
            investors focus on index funds, ETFs, retirement accounts, and
            disciplined monthly contributions. The goal is not to predict every
            short-term market move. The goal is to stay invested long enough for
            compounding to become meaningful.
          </p>
          <p>
            A long-term investor may use this calculator to test different
            scenarios: investing $100 per month, $500 per month, or $1,000 per
            month over 10, 20, 30, or 40 years. This makes it easier to connect
            today’s decisions with future wealth.
          </p>
          <p>
            For deeper strategy, read BankDeMark’s{" "}
            <Link href="/pillars/investing">investing guide</Link>,{" "}
            <Link href="/pillars/personal-finance">personal finance guide</Link>, and{" "}
            <Link href="/pillars/financial-freedom">financial freedom guide</Link>.
          </p>
        </div>

        <div id="savings" className="pillar-section">
          <h2>Compound Interest for Savings Accounts</h2>
          <p>
            Compound interest also applies to savings accounts. The difference
            between a low-interest account and a high-yield savings account can
            become meaningful over time, especially for emergency funds, cash
            reserves, tax savings, and short-term financial goals.
          </p>
          <p>
            If your cash is sitting in a traditional bank account earning almost
            nothing, you may be leaving money on the table. A better banking
            structure can help your emergency fund and savings work harder while
            still staying accessible.
          </p>
          <p>
            To build a stronger system, explore BankDeMark’s{" "}
            <Link href="/pillars/banking">banking guide</Link> and{" "}
            <Link href="/pillars/debt-management">debt management guide</Link>.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Compound Interest Mistakes</h2>
          <ul>
            <li>Starting too late and relying on large future contributions.</li>
            <li>Ignoring fees that reduce investment returns.</li>
            <li>Using unrealistic return assumptions.</li>
            <li>Stopping contributions during market volatility.</li>
            <li>Keeping long-term money in low-interest cash accounts.</li>
            <li>Confusing compound interest with guaranteed returns.</li>
          </ul>
          <p>
            Compound interest is powerful, but it is not magic. The strongest
            results come from a complete financial system: budgeting, saving,
            investing, banking optimization, debt control, and long-term
            financial planning.
          </p>
        </div>

        <div className="pillar-section">
          <h2>Build the Full BankDeMark System</h2>
          <p>
            This calculator is part of the BankDeMark financial intelligence
            system. Use it with the six core pillars to build a stronger
            foundation across money, banking, investing, business credit, debt,
            and financial freedom.
          </p>
          <ul>
            <li><Link href="/">Return to the BankDeMark homepage</Link></li>
            <li><Link href="/about">Learn about BankDeMark</Link></li>
            <li><Link href="/pillars">Explore all finance pillars</Link></li>
            <li><Link href="/contact">Join the newsletter</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Compound Interest Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/compound-interest-calculator" />

      <CTABanner
        title="Turn financial clarity into a system."
        sub="Use BankDeMark calculators, guides, and finance pillars to make smarter decisions with your money."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
