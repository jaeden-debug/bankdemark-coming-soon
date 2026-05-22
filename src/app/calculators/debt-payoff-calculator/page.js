import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import DebtPayoffCalculator from "../../components/DebtPayoffCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "Debt Payoff Calculator | Free Debt Repayment Calculator",
  description:
    "Use BankDeMark's free debt payoff calculator to estimate debt-free date, total interest, monthly payments, and extra payment strategies.",
  alternates: { canonical: "/calculators/debt-payoff-calculator" },
};

const faq = [
  { q: "What is a debt payoff calculator?", a: "A debt payoff calculator estimates how long it may take to pay off debt based on balance, interest rate, payment amount, and extra payments." },
  { q: "How can I pay off debt faster?", a: "You can pay off debt faster by increasing monthly payments, adding extra payments, lowering interest rates, consolidating strategically, or using avalanche or snowball methods." },
  { q: "What is the debt avalanche method?", a: "The debt avalanche method focuses extra payments on the highest-interest debt first to reduce total interest." },
  { q: "What is the debt snowball method?", a: "The debt snowball method focuses extra payments on the smallest balance first to build momentum." },
];

export default function DebtPayoffCalculatorPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to use a debt payoff calculator", step: [{ "@type": "HowToStep", name: "Enter debt balance" }, { "@type": "HowToStep", name: "Enter interest rate" }, { "@type": "HowToStep", name: "Enter monthly payment" }, { "@type": "HowToStep", name: "Add extra payment" }, { "@type": "HowToStep", name: "Review payoff timeline" }] };

  return (
    <>
      <Script id="debt-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="debt-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Debt Payoff Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>Estimate your debt-free date, total interest cost, and how extra payments can accelerate your payoff plan.</p>
      </div>

      <div className="pillar-page">
        <DebtPayoffCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-debt-payoff-calculator">What a debt payoff calculator is</a></li>
            <li><a href="#how-debt-payoff-works">How debt payoff works</a></li>
            <li><a href="#avalanche-vs-snowball">Avalanche vs snowball</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-debt-payoff-calculator" className="pillar-section">
          <h2>What Is a Debt Payoff Calculator?</h2>
          <p>A debt payoff calculator estimates how long it may take to become debt-free using your balance, interest rate, monthly payment, and extra payment strategy.</p>
        </div>

        <div id="how-debt-payoff-works" className="pillar-section">
          <h2>How Debt Payoff Works</h2>
          <p>Debt payoff is a battle between interest and cash flow. The higher the interest rate, the more your monthly payment gets consumed before reducing principal.</p>
          <ul>
            <li><strong>Balance:</strong> what you currently owe.</li>
            <li><strong>Interest rate:</strong> the cost of carrying the debt.</li>
            <li><strong>Monthly payment:</strong> your base repayment amount.</li>
            <li><strong>Extra payment:</strong> additional money that speeds up payoff.</li>
          </ul>
        </div>

        <div id="avalanche-vs-snowball" className="pillar-section">
          <h2>Debt Avalanche vs Debt Snowball</h2>
          <p>The avalanche method targets the highest interest rate first. The snowball method targets the smallest balance first. Avalanche usually saves more interest, while snowball can build motivation faster.</p>
          <p>Pair this with the <Link href="/pillars/debt-management">debt management guide</Link> and <Link href="/calculators/budget-calculator">budget calculator</Link>.</p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Debt Payoff Mistakes</h2>
          <ul>
            <li>Paying only minimum payments.</li>
            <li>Ignoring interest rates.</li>
            <li>Adding new debt while paying old debt.</li>
            <li>Not building a small emergency buffer.</li>
            <li>Failing to track monthly cash flow.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Debt Payoff Calculator FAQ</h2>
          {faq.map((item) => <div key={item.q} style={{ marginBottom: "28px" }}><h3>{item.q}</h3><p>{item.a}</p></div>)}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/debt-payoff-calculator" />

      <CTABanner title="Turn debt payoff into a financial system." sub="Use BankDeMark calculators and guides to improve cash flow, reduce interest, and build long-term wealth." btnText="Join the Newsletter" btnHref="/contact" />
    </>
  );
}
