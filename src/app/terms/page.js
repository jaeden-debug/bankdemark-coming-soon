import Link from "next/link";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Terms of Service | BankDeMark",
  description:
    "BankDeMark terms of service — the rules governing use of our finance intelligence platform, calculators, and content.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | BankDeMark",
    description:
      "The terms and conditions governing your use of the BankDeMark platform.",
    url: "https://bankdemark.com/terms",
    siteName: "BankDeMark",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-hero">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>
            The terms and conditions that govern your use of BankDeMark,
            including our calculators, guides, pillar content, and all
            platform features.
          </p>
          <span className="legal-datestamp">Last updated: May 2026</span>
        </div>

        <div className="legal-tools-strip">
          <span>BankDeMark</span>
          <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator →</Link>
          <Link href="/calculators/retirement-calculator">Retirement Calculator →</Link>
          <Link href="/calculators/investment-calculator">Investment Calculator →</Link>
          <Link href="/pillars/financial-freedom">Financial Freedom →</Link>
        </div>

        <div className="legal-shell">
          <div className="legal-card">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using BankDeMark (the &ldquo;Site&rdquo;), you
              agree to be bound by these Terms of Service and all applicable
              laws and regulations. If you do not agree to these terms, please
              do not use the Site.
            </p>
            <p>
              These terms apply to all visitors, users, and others who access
              or use the Site.
            </p>
          </div>

          <div className="legal-card">
            <h2>2. Use of the Site</h2>
            <p>
              You may use BankDeMark for lawful, personal, and non-commercial
              purposes only. You agree not to:
            </p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of any regulations</li>
              <li>Transmit harmful, offensive, or misleading content</li>
              <li>Attempt to gain unauthorized access to any portion of the Site or its systems</li>
              <li>Scrape, crawl, or harvest content in bulk without written permission</li>
              <li>Use the Site in any way that could damage, overburden, or impair it</li>
            </ul>
          </div>

          <div className="legal-card">
            <h2>3. Intellectual Property</h2>
            <p>
              All content on BankDeMark — including articles, calculator tools,
              pillar pages, guides, frameworks, graphics, and code — is the
              property of BankDeMark or its content contributors and is
              protected by applicable copyright and intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or republish any
              content from BankDeMark without express written permission. Brief
              quotations with attribution and a link to the source are
              permissible under standard fair use guidelines.
            </p>
          </div>

          <div className="legal-card">
            <h2>4. Educational Content Only</h2>
            <p>
              All content on BankDeMark is provided for educational and
              informational purposes only. Nothing on this Site constitutes
              financial advice, investment advice, tax advice, legal advice, or
              any other form of professional advice. See our{" "}
              <Link href="/disclaimer">Financial Disclaimer</Link> for full
              details.
            </p>
            <p>
              BankDeMark&rsquo;s calculators are illustrative tools designed to
              help you understand financial concepts. Calculator outputs should
              not be the sole basis for any financial decision.
            </p>
          </div>

          <div className="legal-card">
            <h2>5. Disclaimer of Warranties</h2>
            <p>
              BankDeMark is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without any warranties of any kind, express or
              implied. We do not warrant that the Site will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>
            <p>
              We make no representations about the accuracy, completeness, or
              suitability of any content for any particular purpose.
            </p>
          </div>

          <div className="legal-card">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, BankDeMark and
              its operators, contributors, and affiliates shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising out of or related to your use of, or inability to
              use, the Site or its content.
            </p>
            <p>
              This includes but is not limited to financial losses, investment
              decisions made based on Site content, or data loss.
            </p>
          </div>

          <div className="legal-card">
            <h2>7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites for reference
              or convenience. These links do not constitute an endorsement.
              BankDeMark is not responsible for the content, accuracy, or
              practices of any third-party site.
            </p>
            <p>
              When you leave BankDeMark, we encourage you to review the terms
              and privacy policy of any site you visit.
            </p>
          </div>

          <div className="legal-card">
            <h2>8. Affiliate Disclosure</h2>
            <p>
              BankDeMark may feature affiliate links or partnerships. When
              applicable, this will be clearly disclosed. Our editorial
              independence is maintained regardless of any commercial
              relationships. We do not accept payment to alter editorial
              coverage.
            </p>
          </div>

          <div className="legal-card">
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any
              time. When we make material changes, we will update the effective
              date on this page. Your continued use of the Site after changes
              are posted constitutes your acceptance of the revised terms.
            </p>
          </div>

          <div className="legal-card">
            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by applicable law. Any disputes arising
              from use of the Site shall be resolved in accordance with
              applicable law in the jurisdiction where BankDeMark operates.
            </p>
          </div>

          <div className="legal-card">
            <h2>11. Contact</h2>
            <p>
              Questions about these Terms of Service? Reach us through our{" "}
              <Link href="/contact">contact page</Link>. We respond within
              1–2 business days.
            </p>
          </div>
        </div>
      </div>

      <SEOLinkMap currentPath="/terms" />
    </>
  );
}
