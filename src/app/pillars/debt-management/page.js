import CTABanner from "../../components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Debt Management Guide",
  description: "Pay off debt faster, repair your credit, and escape the debt cycle with BankDeMark comprehensive debt management strategies.",
};

export default function DebtManagementPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Debt Management</p>
        <h1>Debt Management: Break Free and Rebuild</h1>
        <p>Proven strategies for eliminating debt faster, negotiating better terms, and rebuilding your credit profile.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#audit">Debt Audit</a></li>
            <li><a href="#avalanche">Debt Avalanche Method</a></li>
            <li><a href="#snowball">Debt Snowball Method</a></li>
            <li><a href="#negotiate">Negotiating With Creditors</a></li>
            <li><a href="#credit">Rebuilding Credit</a></li>
            <li><a href="#prevention">Preventing Future Debt</a></li>
          </ol>
        </div>
        <div id="audit" className="pillar-section">
          <h2>Debt Audit: Know What You Owe</h2>
          <p>You cannot eliminate what you have not mapped. Start by listing every debt: creditor name, total balance, interest rate, minimum payment, and due date. Order your free credit reports from AnnualCreditReport.com to confirm all accounts.</p>
        </div>
        <div id="avalanche" className="pillar-section">
          <h2>Debt Avalanche Method</h2>
          <p>The avalanche method prioritizes debts by interest rate, highest first. You pay minimums on everything and put every extra dollar toward the highest-rate debt. Mathematically, this is the fastest and cheapest path to debt freedom.</p>
        </div>
        <div id="snowball" className="pillar-section">
          <h2>Debt Snowball Method</h2>
          <p>The snowball method prioritizes debts by balance, smallest first. Pay minimums on everything, throw everything extra at the smallest balance. Psychologically powerful. Quick wins early in the process create momentum.</p>
        </div>
        <div id="negotiate" className="pillar-section">
          <h2>Negotiating With Creditors</h2>
          <p>Most people do not realize creditors and collection agencies negotiate. They prefer partial payment over no payment. Common strategies include goodwill deletion, pay-for-delete, settlement, and interest rate reduction requests.</p>
        </div>
        <div id="credit" className="pillar-section">
          <h2>Rebuilding Credit</h2>
          <p>Credit scores are driven primarily by payment history at 35% and credit utilization at 30%. The fastest way to improve your score: pay on time every time, and keep utilization below 10% of your available credit.</p>
        </div>
        <div id="prevention" className="pillar-section">
          <h2>Preventing Future Debt</h2>
          <p>Eliminating debt is only half the battle. Prevention requires building the systems that make debt unnecessary: an emergency fund, a budget, and automatic savings. Treat credit as a tool, not income.</p>
        </div>
      </div>
      <CTABanner
        title="Debt free is a destination, not a dream."
        sub="Start with your debt audit today. One spreadsheet changes everything."
        btnText="Read More Strategies"
        btnHref="/blog"
      />
    </>
  );
}
