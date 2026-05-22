import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import BudgetCalculator from "../../components/BudgetCalculator";

export const metadata = {
  title: "Budget Calculator | Free Monthly Budget Planner",
  description:
    "Use BankDeMark's free budget calculator to estimate monthly cash flow, spending categories, savings rate, debt payments, and personal finance strategy.",
  alternates: { canonical: "/calculators/budget-calculator" },
};

const faq = [
  { q: "What is a budget calculator?", a: "A budget calculator estimates monthly cash flow by comparing income against housing, food, transportation, debt, savings, investing, and other expenses." },
  { q: "What is a good budget rule?", a: "A common starting point is the 50/30/20 rule, but the best budget depends on your income, debt, savings goals, housing costs, and financial priorities." },
  { q: "How do I know if my budget is healthy?", a: "A healthy budget creates positive monthly margin, covers essentials, pays down debt, builds savings, and leaves room for investing." },
  { q: "Should savings be in my budget?", a: "Yes. Savings and investing should be treated like planned monthly expenses, not leftovers." },
];

export default function BudgetCalculatorPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", name: "How to use a budget calculator", step: [{ "@type": "HowToStep", name: "Enter monthly income" }, { "@type": "HowToStep", name: "Add housing costs" }, { "@type": "HowToStep", name: "Add food and transportation" }, { "@type": "HowToStep", name: "Add debt and savings" }, { "@type": "HowToStep", name: "Review monthly cash flow" }] };

  return (
    <>
      <Script id="budget-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="budget-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Budget Calculator</h1>
        <p>Build a clear monthly budget, find your cash flow margin, and organize spending into a stronger personal finance system.</p>
      </div>

      <div className="pillar-page">
        <BudgetCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-budget-calculator">What a budget calculator is</a></li>
            <li><a href="#how-budgeting-works">How budgeting works</a></li>
            <li><a href="#budget-categories">Budget categories</a></li>
            <li><a href="#mistakes">Common mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-budget-calculator" className="pillar-section">
          <h2>What Is a Budget Calculator?</h2>
          <p>A budget calculator helps you compare income against spending, debt, saving, and investing so you can see whether your monthly cash flow is working for or against you.</p>
        </div>

        <div id="how-budgeting-works" className="pillar-section">
          <h2>How Budgeting Works</h2>
          <p>Budgeting gives every dollar a job. The goal is not restriction. The goal is control, margin, and progress.</p>
          <ul>
            <li><strong>Income:</strong> monthly take-home pay.</li>
            <li><strong>Needs:</strong> housing, food, transport, utilities.</li>
            <li><strong>Debt:</strong> required payments plus extra payoff.</li>
            <li><strong>Savings:</strong> emergency fund, investing, future goals.</li>
            <li><strong>Other spending:</strong> lifestyle and flexible costs.</li>
          </ul>
        </div>

        <div id="budget-categories" className="pillar-section">
          <h2>Budget Categories That Matter</h2>
          <p>A strong budget separates survival costs, lifestyle spending, debt payoff, and future-building money. This makes it easier to cut waste without hurting the parts of your life that matter.</p>
          <p>Pair this with the <Link href="/pillars/personal-finance">personal finance guide</Link>, <Link href="/pillars/debt-management">debt management guide</Link>, and <Link href="/calculators/debt-payoff-calculator">debt payoff calculator</Link>.</p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Budgeting Mistakes</h2>
          <ul>
            <li>Budgeting gross income instead of take-home income.</li>
            <li>Ignoring irregular expenses.</li>
            <li>Not tracking debt payments.</li>
            <li>Saving only whatever is left over.</li>
            <li>Making the budget too strict to follow.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Budget Calculator FAQ</h2>
          {faq.map((item) => <div key={item.q} style={{ marginBottom: "28px" }}><h3>{item.q}</h3><p>{item.a}</p></div>)}
        </div>
      </div>

      <CTABanner title="Turn your budget into a wealth-building system." sub="Use BankDeMark calculators and finance pillars to control cash flow, reduce debt, and build financial freedom." btnText="Join the Newsletter" btnHref="/contact" />
    </>
  );
}
