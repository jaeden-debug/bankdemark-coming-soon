import Link from "next/link";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Privacy Policy | BankDeMark",
  description:
    "BankDeMark privacy policy — how we collect, use, and protect your personal information on our finance intelligence platform.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | BankDeMark",
    description:
      "How BankDeMark collects, uses, and protects your personal information.",
    url: "https://bankdemark.com/privacy",
    siteName: "BankDeMark",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-hero">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>
            How BankDeMark collects, uses, and protects your information across
            our finance intelligence platform.
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
            <h2>1. Information We Collect</h2>
            <p>
              BankDeMark collects information you voluntarily provide when
              contacting us, signing up for our newsletter, or interacting with
              our platform. This may include your name, email address, and any
              content you include in messages.
            </p>
            <p>
              We also collect non-personal information automatically — including
              browser type, device type, pages visited, time on page, and
              referring URLs — through standard web analytics tools.
            </p>
          </div>

          <div className="legal-card">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use collected information to respond to inquiries, send
              newsletter updates you have explicitly opted into, improve our
              content and platform, and analyze how our tools are being used.
            </p>
            <p>
              We do not sell your personal information to third parties. We do
              not share your data for advertising purposes.
            </p>
          </div>

          <div className="legal-card">
            <h2>3. Cookies</h2>
            <p>
              BankDeMark uses cookies and similar tracking technologies to
              analyze site traffic, remember your preferences, and improve
              your experience. You can control cookie settings through your
              browser at any time.
            </p>
            <p>
              We use analytics cookies only — we do not use advertising or
              cross-site tracking cookies.
            </p>
          </div>

          <div className="legal-card">
            <h2>4. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, email management,
              and hosting infrastructure. These providers maintain their own
              privacy policies, which govern their data handling. We encourage
              you to review the policies of any third-party service you interact
              with through our platform.
            </p>
          </div>

          <div className="legal-card">
            <h2>5. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to
              fulfill the purposes described in this policy or as required by
              applicable law. You may request deletion of your personal
              information at any time by contacting us through our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </div>

          <div className="legal-card">
            <h2>6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access,
              correct, delete, or restrict the processing of your personal data.
              Residents of Canada (under PIPEDA), the European Economic Area
              (under GDPR), and California (under CCPA) may have additional
              rights.
            </p>
            <p>
              To exercise your rights, contact us through our{" "}
              <Link href="/contact">contact page</Link>. We will respond within
              30 days.
            </p>
          </div>

          <div className="legal-card">
            <h2>7. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your personal information against unauthorized access,
              disclosure, or loss. However, no internet transmission is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="legal-card">
            <h2>8. Children</h2>
            <p>
              BankDeMark is not directed at children under 13 years of age. We
              do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </div>

          <div className="legal-card">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy periodically to reflect changes
              in our practices or applicable law. When we do, we will post the
              revised policy on this page and update the effective date. We
              encourage you to review this page periodically.
            </p>
          </div>

          <div className="legal-card">
            <h2>10. Contact</h2>
            <p>
              Questions about this privacy policy or how we handle your
              information? Reach us through our{" "}
              <Link href="/contact">contact page</Link> and we will respond
              within 1–2 business days.
            </p>
          </div>
        </div>
      </div>

      <SEOLinkMap currentPath="/privacy" />
    </>
  );
}
