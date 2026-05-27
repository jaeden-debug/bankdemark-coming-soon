import Link from "next/link";
import Script from "next/script";
import FinancialFreedomQuiz from "../components/FinancialFreedomQuiz";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Financial Freedom Quiz | Money Personality & Wealth Stage",
  description:
    "Take BankDeMark's financial freedom quiz to find your money personality, wealth stage, financial score, and next best move.",
  alternates: { canonical: "/financial-freedom-quiz" },
};

const faq = [
  {
    q: "What is a financial freedom quiz?",
    a: "A financial freedom quiz helps assess your cash flow, debt, emergency savings, investing habits, goals, and confidence to estimate your current financial stage.",
  },
  {
    q: "What does the quiz score mean?",
    a: "The score is a directional snapshot of financial readiness based on stability, debt control, emergency savings, investing consistency, and confidence.",
  },
  {
    q: "Is this financial advice?",
    a: "No. The quiz is an educational planning tool and does not replace personalized financial, tax, or legal advice.",
  },
  {
    q: "What should I do after the quiz?",
    a: "Use the recommended BankDeMark calculators and guides to improve the weakest areas in your financial system.",
  },
];

export default function FinancialFreedomQuizPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Financial Freedom Quiz",
    url: "https://bankdemark.com/financial-freedom-quiz",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <Script id="financial-freedom-quiz-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="financial-freedom-quiz-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <FinancialFreedomQuiz />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-financial-freedom-quiz">What is the quiz?</a>
          <a href="#how-score-works">How the score works</a>
          <a href="#money-stages">Money stages</a>
          <a href="#next-steps">Next steps</a>
          <a href="#quiz-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-financial-freedom-quiz">
            <span className="calculator-seo-kicker">Financial Freedom Quiz</span>
            <h2>What Is a Financial Freedom Quiz?</h2>
            <p>
              A financial freedom quiz gives you a fast snapshot of your current money system.
              It looks at cash flow, debt, emergency savings, investing habits, goals, and confidence.
            </p>
            <p>
              The goal is not to label you permanently. The goal is to reveal your next best move.
            </p>
          </section>

          <section id="how-score-works">
            <h2>How the Financial Freedom Score Works</h2>
            <p>
              The quiz score is based on the major foundations of personal finance: monthly cash flow,
              consumer debt, safety savings, investing consistency, and confidence.
            </p>

            <div className="seo-two-column">
              <div><h3>Cash flow</h3><p>Shows whether your income creates margin or pressure.</p></div>
              <div><h3>Debt</h3><p>Measures how much debt is slowing financial progress.</p></div>
              <div><h3>Emergency savings</h3><p>Shows how protected you are from surprise expenses.</p></div>
              <div><h3>Investing</h3><p>Shows whether your money is building long-term wealth.</p></div>
            </div>
          </section>

          <section id="money-stages">
            <h2>Financial Freedom Stages</h2>
            <p>
              Most people move through stages: foundation, growth, momentum, and optimization.
              Each stage has a different priority.
            </p>
            <ul className="seo-steps">
              <li>Foundation: stabilize cash flow, debt, and emergency savings.</li>
              <li>Growth: fix the weakest link and start building consistency.</li>
              <li>Momentum: increase savings, investing, and net worth tracking.</li>
              <li>Optimization: improve investing strategy, taxes, retirement, and freedom planning.</li>
            </ul>
          </section>

          <section id="next-steps">
            <h2>What to Do After the Quiz</h2>
            <p>
              Use your result as a starting point, then run the tools that match your weakest area.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/money-health-score">Money Health Score</Link>,{" "}
              <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>,{" "}
              <Link href="/calculators/budget-calculator">Budget Calculator</Link>,{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>, and{" "}
              <Link href="/calculators/fire-calculator">FIRE Calculator</Link>.
            </p>
          </section>

          <section id="quiz-faq">
            <h2>Financial Freedom Quiz FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/financial-freedom-quiz" />
    </>
  );
}
