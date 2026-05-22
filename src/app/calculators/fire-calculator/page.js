import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import FireCalculator from "../../components/FireCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "FIRE Calculator | Coast FIRE Calculator",
  description:
    "Use BankDeMark's free FIRE calculator and Coast FIRE calculator to estimate your FIRE number, time to financial independence, Coast FIRE age, and long-term wealth strategy.",
  alternates: { canonical: "/calculators/fire-calculator" },
};

const faq = [
  { q: "What is a FIRE calculator?", a: "A FIRE calculator estimates your financial independence number and timeline based on spending, invested assets, contributions, return assumptions, and withdrawal rate." },
  { q: "What is Coast FIRE?", a: "Coast FIRE means you may have enough invested that, without more contributions, it could grow to your FIRE number by traditional retirement age or a future target age." },
  { q: "How is a FIRE number calculated?", a: "A common shortcut is annual spending divided by withdrawal rate. At a 4% withdrawal rate, the FIRE number is annual spending multiplied by 25." },
  { q: "Is the 4% rule guaranteed?", a: "No. The 4% rule is a planning shortcut, not a guarantee. Taxes, inflation, fees, returns, and lifestyle changes all matter." },
];

export default function FireCalculatorPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to use a FIRE calculator", step: [{ "@type": "HowToStep", name: "Enter invested assets" }, { "@type": "HowToStep", name: "Enter annual spending" }, { "@type": "HowToStep", name: "Add monthly investing" }, { "@type": "HowToStep", name: "Choose return and withdrawal assumptions" }, { "@type": "HowToStep", name: "Review FIRE and Coast FIRE results" }] };

  return (
    <>
      <Script id="fire-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="fire-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>FIRE Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>Estimate your FIRE number, time to financial independence, Coast FIRE age, and long-term financial freedom path.</p>
      </div>

      <div className="pillar-page">
        <FireCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-fire-calculator">What a FIRE calculator is</a></li>
            <li><a href="#how-fire-works">How FIRE works</a></li>
            <li><a href="#coast-fire">What Coast FIRE means</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-fire-calculator" className="pillar-section">
          <h2>What Is a FIRE Calculator?</h2>
          <p>A FIRE calculator estimates how much invested wealth may be needed to cover your lifestyle without depending on traditional employment income.</p>
        </div>

        <div id="how-fire-works" className="pillar-section">
          <h2>How FIRE Works</h2>
          <p>FIRE stands for Financial Independence, Retire Early. The core idea is to build enough invested assets that withdrawals can fund your lifestyle.</p>
          <ul>
            <li><strong>Annual spending:</strong> your target lifestyle cost.</li>
            <li><strong>FIRE number:</strong> the portfolio target needed to support that spending.</li>
            <li><strong>Withdrawal rate:</strong> the assumed percentage withdrawn each year.</li>
            <li><strong>Invested assets:</strong> money already working toward financial independence.</li>
          </ul>
        </div>

        <div id="coast-fire" className="pillar-section">
          <h2>What Is Coast FIRE?</h2>
          <p>Coast FIRE means your current investments may be large enough to grow into your future FIRE number without requiring additional contributions, assuming your return and timeline assumptions hold.</p>
          <p>Pair this with the <Link href="/pillars/financial-freedom">financial freedom guide</Link>, <Link href="/calculators/retirement-calculator">retirement calculator</Link>, and <Link href="/calculators/investment-calculator">investment calculator</Link>.</p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common FIRE Planning Mistakes</h2>
          <ul>
            <li>Using unrealistic spending assumptions.</li>
            <li>Ignoring taxes, inflation, and healthcare.</li>
            <li>Assuming the 4% rule is guaranteed.</li>
            <li>Not stress-testing lower return scenarios.</li>
            <li>Forgetting housing, family, and lifestyle changes.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>FIRE Calculator FAQ</h2>
          {faq.map((item) => <div key={item.q} style={{ marginBottom: "28px" }}><h3>{item.q}</h3><p>{item.a}</p></div>)}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/fire-calculator" />

      <CTABanner title="Turn FIRE math into a financial freedom system." sub="Use BankDeMark calculators and finance pillars to compare investing, retirement, cash flow, debt, and financial independence." btnText="Join the Newsletter" btnHref="/contact" />
    </>
  );
}
