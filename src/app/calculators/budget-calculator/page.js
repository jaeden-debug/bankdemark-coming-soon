import Link from "next/link";
import Script from "next/script";
import BudgetCalculator from "../../components/BudgetCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Budget Calculator | Monthly Income, Expenses & Cash Flow",
  description:
    "Use BankDeMark's free budget calculator to compare income, expenses, debt payments, savings, investing, and monthly cash flow.",
  alternates: {
    canonical: "/calculators/budget-calculator",
  },
};

const faq = [
  {
    q: "What is a budget calculator?",
    a: "A budget calculator estimates monthly cash flow by comparing income against housing, food, transportation, debt, savings, investing, and other expenses.",
  },
  {
    q: "What is a good budget rule?",
    a: "A common starting point is the 50/30/20 rule, but the best budget depends on your income, debt, savings goals, housing costs, and financial priorities.",
  },
  {
    q: "How do I know if my budget is healthy?",
    a: "A healthy budget creates positive monthly margin, covers essentials, pays down debt, builds savings, and leaves room for investing.",
  },
  {
    q: "Should savings be in my budget?",
    a: "Yes. Savings and investing should be treated like planned monthly expenses, not leftovers.",
  },
];

export default async function BudgetCalculatorPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const sharedData = resolvedSearchParams?.data || "";

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
    name: "How to use a budget calculator",
    description:
      "Calculate monthly cash flow by entering income, needs, debt payments, savings, investing, and other spending.",
    step: [
      { "@type": "HowToStep", name: "Enter monthly take-home income" },
      { "@type": "HowToStep", name: "Enter housing, food, and transportation costs" },
      { "@type": "HowToStep", name: "Add debt payments and savings contributions" },
      { "@type": "HowToStep", name: "Add lifestyle or other spending" },
      { "@type": "HowToStep", name: "Review remaining monthly margin and savings rate" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Budget Calculator",
    url: "https://bankdemark.com/calculators/budget-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="budget-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="budget-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="budget-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <BudgetCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-budget-calculator">What is a budget calculator?</a>
          <a href="#how-budgeting-works">How budgeting works</a>
          <a href="#budget-categories">Budget categories</a>
          <a href="#budget-mistakes">Common mistakes</a>
          <a href="#budget-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-budget-calculator">
            <span className="calculator-seo-kicker">Budget Calculator</span>
            <h2>What Is a Budget Calculator?</h2>
            <p>
              A budget calculator helps you compare income against spending, debt,
              saving, and investing so you can see whether your monthly cash flow
              is working for or against you.
            </p>
            <p>
              BankDeMark’s budget calculator is built to show your remaining
              monthly margin, total expenses, needs, debt payments, savings rate,
              and lifestyle spending in one clean snapshot.
            </p>
          </section>

          <section id="how-budgeting-works">
            <h2>How Budgeting Works</h2>
            <p>
              Budgeting gives every dollar a job. The goal is not restriction.
              The goal is control, margin, and progress.
            </p>

            <div className="seo-two-column">
              <div><h3>Income</h3><p>Monthly take-home pay after taxes and deductions.</p></div>
              <div><h3>Needs</h3><p>Housing, food, transportation, utilities, and core essentials.</p></div>
              <div><h3>Debt</h3><p>Required debt payments plus any extra payoff strategy.</p></div>
              <div><h3>Savings</h3><p>Emergency fund, investing, retirement, and future goals.</p></div>
            </div>
          </section>

          <section id="budget-categories">
            <h2>Budget Categories That Matter</h2>
            <p>
              A strong budget separates survival costs, lifestyle spending, debt
              payoff, and future-building money. This makes it easier to cut waste
              without hurting the parts of your life that matter.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/personal-finance">personal finance guide</Link>,{" "}
              <Link href="/pillars/debt-management">debt management guide</Link>, and{" "}
              <Link href="/calculators/debt-payoff-calculator">debt payoff calculator</Link>.
            </p>
          </section>

          <section id="budget-mistakes">
            <h2>Common Budgeting Mistakes</h2>
            <ul className="seo-steps">
              <li>Budgeting gross income instead of take-home income.</li>
              <li>Ignoring irregular expenses.</li>
              <li>Not tracking debt payments.</li>
              <li>Saving only whatever is left over.</li>
              <li>Making the budget too strict to follow.</li>
            </ul>
          </section>

          <section id="budget-faq">
            <h2>Budget Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/budget-calculator" />
    </>
  );
}
