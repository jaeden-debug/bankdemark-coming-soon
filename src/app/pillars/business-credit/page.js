import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Business Credit Guide",
  description: "Build business credit from scratch, separate personal and business finances, and unlock funding with BankDeMark complete business credit guide.",
};

export default function BusinessCreditPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Business Credit</p>
        <h1>Business Credit: Build Leverage for Your Business</h1>
        <p>Establish a powerful business credit profile that funds growth, protects your personal assets, and opens doors traditional financing will not.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#foundation">Setting the Foundation</a></li>
            <li><a href="#ein">EIN and Business Structure</a></li>
            <li><a href="#net30">Net 30 Accounts</a></li>
            <li><a href="#bureau">Business Credit Bureaus</a></li>
            <li><a href="#cards">Business Credit Cards</a></li>
            <li><a href="#funding">Unlocking Business Funding</a></li>
          </ol>
        </div>
        <div id="foundation" className="pillar-section">
          <h2>Setting the Foundation</h2>
          <p>Business credit is separate from personal credit. It is built under your Employer Identification Number, not your Social Security Number. The first step is ensuring your business looks legitimate and consistent across all channels.</p>
          <ul>
            <li>Register your business as an LLC or Corporation</li>
            <li>Get a dedicated business phone number</li>
            <li>Open a dedicated business bank account</li>
            <li>Establish a professional business address</li>
            <li>Build a basic business website</li>
          </ul>
        </div>
        <div id="ein" className="pillar-section">
          <h2>EIN and Business Structure</h2>
          <p>Your EIN is your business tax ID. You need it before you can build credit under your business name. Apply at IRS.gov for free. LLCs and Corporations have stronger legal separation between personal and business, which lenders prefer.</p>
        </div>
        <div id="net30" className="pillar-section">
          <h2>Net 30 Accounts</h2>
          <p>Net 30 accounts are trade lines that report to business credit bureaus. Start with 3 to 5 starter vendors that approve new businesses without requiring an existing credit score.</p>
          <ul>
            <li>Apply for 3 starter Net 30 accounts</li>
            <li>Make purchases and pay immediately</li>
            <li>Confirm they report to Dun and Bradstreet or Experian Business</li>
            <li>After 60 to 90 days, apply for higher-tier vendor accounts</li>
          </ul>
        </div>
        <div id="bureau" className="pillar-section">
          <h2>Business Credit Bureaus</h2>
          <p>The three primary business credit bureaus are Dun and Bradstreet, Experian Business, and Equifax Business. Your D-U-N-S Number from Dun and Bradstreet is especially important. Register for free at dnb.com.</p>
        </div>
        <div id="cards" className="pillar-section">
          <h2>Business Credit Cards</h2>
          <p>Once you have 6 or more months of business credit history, you can qualify for business credit cards. The goal is cards that report to business bureaus, not personal ones.</p>
        </div>
        <div id="funding" className="pillar-section">
          <h2>Unlocking Business Funding</h2>
          <p>With a solid business credit profile, funding options expand dramatically. You can qualify for business lines of credit, SBA loans, equipment financing, and more. The timeline is typically 6 to 18 months to build a fundable business credit profile from scratch.</p>
        </div>
      </div>
      <CTABanner
        title="Ready to build your business credit profile?"
        sub="Start with the foundation: structure, EIN, and your first trade lines."
        btnText="Read More Guides"
        btnHref="/blog"
      />
    </>
  );
}
