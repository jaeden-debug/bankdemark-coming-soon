import Link from "next/link";
import Script from "next/script";
import CTABanner from "../components/CTABanner";
import FinancialFreedomQuiz from "../components/FinancialFreedomQuiz";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Financial Freedom Quiz | Find Your Money Personality",
  description:
    "Take BankDeMark's Financial Freedom Quiz to find your money personality, wealth stage, financial strengths, and next best financial move.",
  alternates: {
    canonical: "/financial-freedom-quiz",
  },
};

const faq = [
  {
    q: "What is the Financial Freedom Quiz?",
    a: "The Financial Freedom Quiz is a quick diagnostic that estimates your money personality, wealth stage, and next best financial move.",
  },
  {
    q: "Is this a financial plan?",
    a: "No. It is an educational diagnostic. Use it as a starting point with calculators, guides, and professional advice when needed.",
  },
  {
    q: "What money personalities can I get?",
    a: "Results can include The Stabilizer, The Climber, The Builder, and The Wealth Architect depending on your answers.",
  },
  {
    q: "What should I do after the quiz?",
    a: "Use the recommended tools, especially the Money Health Score, Financial Freedom Roadmap, Budget Calculator, and Net Worth Calculator.",
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

  return (
    <>
      <Script id="freedom-quiz-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="page-hero quiz-page-hero">
        <p className="eyebrow">Financial Freedom Diagnostic</p>
        <h1>Financial Freedom Quiz</h1>
        <p>
          Find your money personality, wealth stage, and the next financial move that
          can create the most momentum.
        </p>
      </div>

      <div className="pillar-page">
        <FinancialFreedomQuiz />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-it-is">What the quiz is</a></li>
            <li><a href="#personalities">Money personalities</a></li>
            <li><a href="#next-steps">Next steps</a></li>
            <li><a href="#lead-magnet">Email capture angle</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-it-is" className="pillar-section">
          <h2>What Is the Financial Freedom Quiz?</h2>
          <p>
            The Financial Freedom Quiz is a fast diagnostic that helps visitors identify
            their current money stage. It turns basic answers about cash flow, debt,
            savings, investing, and confidence into a simple result and recommended path.
          </p>
        </div>

        <div id="personalities" className="pillar-section">
          <h2>Money Personalities</h2>
          <ul>
            <li><strong>The Stabilizer:</strong> needs safety, structure, and margin.</li>
            <li><strong>The Climber:</strong> has progress but needs a sharper system.</li>
            <li><strong>The Builder:</strong> has traction and should scale consistency.</li>
            <li><strong>The Wealth Architect:</strong> should optimize investing, taxes, and freedom design.</li>
          </ul>
        </div>

        <div id="next-steps" className="pillar-section">
          <h2>What to Do After the Quiz</h2>
          <p>
            Use the quiz result as the entry point, then send visitors deeper into
            BankDeMark’s tool ecosystem.
          </p>
          <p>
            Start with the <Link href="/money-health-score">Money Health Score</Link>,{" "}
            <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>,{" "}
            <Link href="/calculators/budget-calculator">Budget Calculator</Link>, and{" "}
            <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>.
          </p>
        </div>

        <div id="lead-magnet" className="pillar-section">
          <h2>Email Capture Angle</h2>
          <p>
            This quiz is a strong lead magnet because the result feels personal. Later,
            connect the result to a newsletter form with a CTA like “Send me my custom
            financial freedom roadmap.”
          </p>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Financial Freedom Quiz FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/financial-freedom-quiz" />

      <CTABanner
        title="Turn your quiz result into a roadmap."
        sub="Use BankDeMark tools to diagnose your money system, build a plan, and move toward financial freedom."
        btnText="Generate Roadmap"
        btnHref="/financial-freedom-roadmap"
      />
    </>
  );
}
