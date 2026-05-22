export const metadata = {
  title: "Financial Disclaimer",
  description: "BankDeMark's financial disclaimer — important disclosures about the nature of our content and its limitations.",
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Financial Disclaimer</h1>
        <p>Please read this disclaimer carefully before relying on any content published on BankDeMark.</p>
      </div>

      <div className="prose">
        <h2>Not Financial Advice</h2>
        <p>The content published on BankDeMark — including articles, guides, pillar pages, blog posts, and all other materials — is provided for informational and educational purposes only. Nothing on this Site constitutes professional financial advice, investment advice, tax advice, legal advice, or any other form of professional advice.</p>

        <h2>No Client Relationship</h2>
        <p>Reading content on BankDeMark does not create a client-advisor relationship between you and BankDeMark or any of its contributors. You should not rely on information from this Site as a substitute for advice from a qualified financial professional who understands your individual circumstances.</p>

        <h2>Individual Circumstances Vary</h2>
        <p>Financial strategies, investment approaches, and money management techniques discussed on BankDeMark may not be appropriate for everyone. Your financial situation, risk tolerance, tax circumstances, and goals are unique to you. What works for one person may not be appropriate for another.</p>

        <h2>No Guarantees of Results</h2>
        <p>Any examples, case studies, or projections mentioned on BankDeMark are illustrative only. Past performance is not indicative of future results. Investing involves risk, including the possible loss of principal. There are no guarantees that any strategy described on this Site will achieve any particular outcome.</p>

        <h2>Please Consult Professionals</h2>
        <p>Before making any significant financial decision, we strongly encourage you to consult with qualified professionals — including a Certified Financial Planner (CFP), Certified Public Accountant (CPA), licensed attorney, or other relevant experts — who can evaluate your specific situation and provide personalized guidance.</p>

        <h2>Content Accuracy</h2>
        <p>We make reasonable efforts to ensure the accuracy of information published on BankDeMark. However, financial regulations, tax laws, interest rates, and market conditions change frequently. Information that was accurate at the time of publication may no longer reflect current conditions. Always verify important information with primary sources.</p>

        <h2>Affiliate Disclosure</h2>
        <p>BankDeMark may occasionally feature affiliate links or sponsored content. When this occurs, it will be clearly disclosed. Our editorial content is not influenced by commercial relationships. We only feature products and services we believe provide genuine value.</p>

        <h2>Questions</h2>
        <p>If you have questions about this disclaimer, please <a href="/contact">contact us</a>.</p>
      </div>
    </>
  );
}