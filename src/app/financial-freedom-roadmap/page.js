import Link from "next/link";
import Script from "next/script";
import CTABanner from "../components/CTABanner";
import FinancialFreedomRoadmap from "../components/FinancialFreedomRoadmap";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Financial Freedom Roadmap Generator | Free Money Plan Tool",
  description:
    "Use BankDeMark's Financial Freedom Roadmap Generator to create a custom step-by-step money plan for budgeting, debt payoff, investing, retirement, and FIRE.",
  alternates: {
    canonical: "/financial-freedom-roadmap",
  },
};

const faq = [
  {
    q: "What is a financial freedom roadmap?",
    a: "A financial freedom roadmap is a step-by-step plan that shows what to fix first across cash flow, debt, emergency savings, investing, retirement, and long-term independence.",
  },
  {
    q: "How does the roadmap generator work?",
    a: "The generator reviews income, expenses, debt, emergency savings, invested assets, monthly investing, goals, and risk style to create a custom priority stack and action plan.",
  },
  {
    q: "Is this the same as a retirement calculator?",
    a: "No. A retirement calculator focuses on future retirement numbers. A financial freedom roadmap focuses on the order of operations: what to do next, what to fix first, and which tools to use.",
  },
  {
    q: "Does this work for Canada and the United States?",
    a: "Yes. The roadmap can switch between Canadian and U.S. planning contexts, currencies, and account examples.",
  },
];

export default function FinancialFreedomRoadmapPage() {
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
    name: "How to use the Financial Freedom Roadmap Generator",
    description:
      "Generate a custom financial freedom plan using income, expenses, debt, savings, investments, goals, and risk style.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter income and expenses" },
      { "@type": "HowToStep", name: "Add debt, savings, and investments" },
      { "@type": "HowToStep", name: "Choose your financial goal and risk style" },
      { "@type": "HowToStep", name: "Review your 30-day, 90-day, and 12-month roadmap" },
    ],
  };

  return (
    <>
      <Script
        id="roadmap-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="roadmap-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero roadmap-page-hero">
        <p className="eyebrow">Financial Freedom Tool</p>
        <h1>Financial Freedom Roadmap Generator</h1>
        <p>
          Generate a custom step-by-step money plan based on your cash flow,
          debt, savings, investing, and long-term freedom goal.
        </p>
      </div>

      <div className="pillar-page">
        <FinancialFreedomRoadmap />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-roadmap">What a financial freedom roadmap is</a></li>
            <li><a href="#order-of-operations">The financial order of operations</a></li>
            <li><a href="#canada-vs-us">Canada vs U.S. planning</a></li>
            <li><a href="#tools">Recommended tools</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-roadmap" className="pillar-section">
          <h2>What Is a Financial Freedom Roadmap?</h2>
          <p>
            A financial freedom roadmap turns your current money situation into
            a practical action plan. Instead of trying to fix everything at once,
            it identifies the strongest next move based on cash flow, debt,
            emergency savings, investing, retirement planning, and financial
            independence goals.
          </p>
        </div>

        <div id="order-of-operations" className="pillar-section">
          <h2>The Financial Freedom Order of Operations</h2>
          <p>
            Most people do not need more random financial tips. They need order.
            A strong roadmap usually starts with cash flow, then emergency
            savings, debt control, investing, retirement planning, tax strategy,
            and finally financial independence optimization.
          </p>
          <ul>
            <li><strong>Stabilize:</strong> stop negative cash flow and create margin.</li>
            <li><strong>Protect:</strong> build emergency savings and reduce risk.</li>
            <li><strong>Attack:</strong> pay down high-interest debt.</li>
            <li><strong>Build:</strong> invest consistently and increase savings rate.</li>
            <li><strong>Optimize:</strong> improve accounts, taxes, credit, and FIRE timeline.</li>
          </ul>
        </div>

        <div id="canada-vs-us" className="pillar-section">
          <h2>Canada vs U.S. Financial Freedom Planning</h2>
          <p>
            The core system is similar in both countries: spend less than you
            earn, reduce expensive debt, build reserves, invest consistently,
            and track net worth. The account strategy changes by country.
          </p>
          <p>
            Canadian planning may include TFSA, RRSP, FHSA, RESP, CPP, OAS, and
            non-registered accounts. U.S. planning may include 401(k), IRA, Roth
            IRA, HSA, Social Security, and taxable brokerage accounts.
          </p>
        </div>

        <div id="tools" className="pillar-section">
          <h2>Recommended BankDeMark Tools</h2>
          <ul>
            <li><Link href="/money-health-score">Money Health Score</Link></li>
            <li><Link href="/calculators/budget-calculator">Budget Calculator</Link></li>
            <li><Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link></li>
            <li><Link href="/calculators/investment-calculator">Investment Calculator</Link></li>
            <li><Link href="/calculators/retirement-calculator">Retirement Calculator</Link></li>
            <li><Link href="/calculators/fire-calculator">FIRE Calculator</Link></li>
            <li><Link href="/calculators">View all calculators</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Financial Freedom Roadmap FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/financial-freedom-roadmap" />

      <CTABanner
        title="Turn your roadmap into a financial freedom system."
        sub="Use BankDeMark calculators, guides, and money diagnostics to build a smarter path from cash flow to financial independence."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
