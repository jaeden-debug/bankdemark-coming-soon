import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import EmergencyFundCalculator from "../../components/EmergencyFundCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "Emergency Fund Calculator | Free Safety Savings Calculator",
  description:
    "Use BankDeMark's free emergency fund calculator to estimate how much emergency savings you need, your savings gap, current coverage, and time to goal.",
  alternates: {
    canonical: "/calculators/emergency-fund-calculator",
  },
};

const faq = [
  {
    q: "What is an emergency fund calculator?",
    a: "An emergency fund calculator estimates how much cash you should keep for emergencies based on monthly expenses, risk level, current savings, and target months.",
  },
  {
    q: "How much should I have in an emergency fund?",
    a: "Many people target 3 to 6 months of essential expenses, while variable-income or higher-risk households may prefer 6 to 12 months.",
  },
  {
    q: "Where should I keep my emergency fund?",
    a: "Emergency funds are usually kept in safe, liquid accounts such as high-interest savings accounts, not risky investments.",
  },
  {
    q: "Should I build an emergency fund before investing?",
    a: "A starter emergency fund usually comes before aggressive investing. Once stable, you can balance savings, debt payoff, and investing.",
  },
];

export default function EmergencyFundCalculatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use an emergency fund calculator",
    step: [
      { "@type": "HowToStep", name: "Enter monthly essential expenses" },
      { "@type": "HowToStep", name: "Enter current emergency savings" },
      { "@type": "HowToStep", name: "Choose target months" },
      { "@type": "HowToStep", name: "Add monthly savings contribution" },
      { "@type": "HowToStep", name: "Review emergency fund gap and timeline" },
    ],
  };

  return (
    <>
      <Script id="emergency-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="emergency-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero emergency-page-hero">
        <p className="eyebrow">Safety Fund Tool</p>
        <h1>Emergency Fund Calculator</h1>
        <p>
          Estimate how much emergency savings you need, how many months you have covered,
          and how long it may take to reach your safety fund target.
        </p>
      </div>

      <div className="pillar-page">
        <EmergencyFundCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-an-emergency-fund">What an emergency fund is</a></li>
            <li><a href="#how-much">How much you need</a></li>
            <li><a href="#where-to-keep-it">Where to keep it</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-an-emergency-fund" className="pillar-section">
          <h2>What Is an Emergency Fund?</h2>
          <p>
            An emergency fund is cash set aside for unexpected expenses or income disruption.
            It protects your financial system from job loss, urgent repairs, medical costs,
            family emergencies, and surprise bills.
          </p>
        </div>

        <div id="how-much" className="pillar-section">
          <h2>How Much Emergency Savings Do You Need?</h2>
          <p>
            A common target is 3 to 6 months of essential expenses. If your income is variable,
            your job is unstable, or you are self-employed, a larger buffer can make sense.
          </p>
        </div>

        <div id="where-to-keep-it" className="pillar-section">
          <h2>Where Should You Keep an Emergency Fund?</h2>
          <p>
            Emergency money should be safe, liquid, and easy to access. It is usually better suited
            for a high-interest savings account than volatile investments.
          </p>
          <p>
            Pair this with the <Link href="/pillars/banking">Banking Guide</Link>,{" "}
            <Link href="/calculators/budget-calculator">Budget Calculator</Link>, and{" "}
            <Link href="/money-health-score">Money Health Score</Link>.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Emergency Fund Mistakes</h2>
          <ul>
            <li>Keeping no cash buffer.</li>
            <li>Investing emergency money too aggressively.</li>
            <li>Using the fund for non-emergencies.</li>
            <li>Not rebuilding it after withdrawals.</li>
            <li>Ignoring variable income or unstable work risk.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Emergency Fund Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/emergency-fund-calculator" />

      <CTABanner
        title="Turn emergency savings into financial stability."
        sub="Use BankDeMark tools to build cash flow, safety, debt control, and long-term financial freedom."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
