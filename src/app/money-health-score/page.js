import Link from "next/link";
import Script from "next/script";
import CTABanner from "../components/CTABanner";
import MoneyHealthScore from "../components/MoneyHealthScore";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Money Health Score | Free Financial Health Calculator",
  description:
    "Use BankDeMark's free Money Health Score tool to analyze your cash flow, debt, savings, investing, housing cost, credit strength, and next financial move.",
  alternates: {
    canonical: "/money-health-score",
  },
};

const faq = [
  {
    q: "What is a Money Health Score?",
    a: "A Money Health Score is a simple financial health rating based on cash flow, debt load, emergency savings, investing progress, housing cost, and credit strength.",
  },
  {
    q: "How is the Money Health Score calculated?",
    a: "The score estimates financial strength using weighted categories such as savings rate, debt payment ratio, emergency fund months, investing rate, housing load, and credit score range.",
  },
  {
    q: "Is this a credit score?",
    a: "No. This is not a credit score. It is a broader financial health estimate that includes budgeting, debt, savings, investing, housing, and credit strength.",
  },
  {
    q: "What score is considered good?",
    a: "A score above 70 suggests a stronger financial foundation, while a score above 85 suggests a high-performance money system. Lower scores usually mean there are clear improvement opportunities.",
  },
];

export default function MoneyHealthScorePage() {
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
    name: "How to use the Money Health Score tool",
    description:
      "Analyze your financial health using income, expenses, debt, emergency savings, investing, housing cost, and credit strength.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter income and expenses" },
      { "@type": "HowToStep", name: "Add debt and monthly debt payments" },
      { "@type": "HowToStep", name: "Add emergency fund and invested assets" },
      { "@type": "HowToStep", name: "Review your score and recommended next move" },
    ],
  };

  return (
    <>
      <Script
        id="money-health-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="money-health-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero health-hero">
        <p className="eyebrow">Financial Intelligence Tool</p>
        <h1>Money Health Score</h1>
        <p>
          Get a live financial health score, diagnose your weakest money system,
          and find the best BankDeMark tool to use next.
        </p>
      </div>

      <div className="pillar-page">
        <MoneyHealthScore />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-money-health">What money health means</a></li>
            <li><a href="#score-categories">Score categories</a></li>
            <li><a href="#how-to-improve">How to improve your score</a></li>
            <li><a href="#recommended-tools">Recommended tools</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-money-health" className="pillar-section">
          <h2>What Is Money Health?</h2>
          <p>
            Money health is the overall strength of your financial system. It is
            not just income, and it is not just credit score. A strong money
            system includes positive cash flow, controlled debt, emergency
            savings, consistent investing, reasonable housing costs, and a
            reliable credit foundation.
          </p>
          <p>
            The BankDeMark Money Health Score is designed to turn scattered
            money data into a clear diagnostic. Instead of guessing what to fix,
            you can see the weakest part of your system and move directly to the
            best next tool.
          </p>
        </div>

        <div id="score-categories" className="pillar-section">
          <h2>Money Health Score Categories</h2>
          <ul>
            <li><strong>Cash flow:</strong> whether monthly income creates margin.</li>
            <li><strong>Debt control:</strong> how much debt pressure exists in your monthly budget.</li>
            <li><strong>Emergency fund:</strong> how many months of expenses you can cover.</li>
            <li><strong>Investing:</strong> whether money is consistently going toward future wealth.</li>
            <li><strong>Housing load:</strong> whether housing costs are manageable.</li>
            <li><strong>Credit strength:</strong> whether your credit profile supports better options.</li>
          </ul>
        </div>

        <div id="how-to-improve" className="pillar-section">
          <h2>How to Improve Your Money Health Score</h2>
          <p>
            The fastest improvement usually comes from the weakest category. If
            debt pressure is high, focus on payoff strategy. If monthly margin is
            weak, fix budgeting and spending leaks. If emergency savings are low,
            build a cash buffer before taking aggressive risks.
          </p>
          <p>
            Once the foundation is stable, the score improves through investing,
            retirement contributions, better credit, and long-term financial
            freedom planning.
          </p>
        </div>

        <div id="recommended-tools" className="pillar-section">
          <h2>Recommended BankDeMark Tools</h2>
          <ul>
            <li><Link href="/calculators/budget-calculator">Budget Calculator</Link></li>
            <li><Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link></li>
            <li><Link href="/calculators/investment-calculator">Investment Calculator</Link></li>
            <li><Link href="/calculators/retirement-calculator">Retirement Calculator</Link></li>
            <li><Link href="/calculators/fire-calculator">FIRE Calculator</Link></li>
            <li><Link href="/calculators">View all financial calculators</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Money Health Score FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/money-health-score" />

      <CTABanner
        title="Turn your score into a smarter money system."
        sub="Use BankDeMark calculators and finance pillars to improve cash flow, reduce debt, invest better, and build financial freedom."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
