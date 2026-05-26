export const metadata = {
  title: "Privacy Policy",
  description: "BankDeMark privacy policy covering how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2025</p>
      </div>
      <div className="prose">
        <h2>1. Information We Collect</h2>
        <p>BankDeMark collects information you voluntarily provide when contacting us, signing up for updates, or interacting with our platform. This may include your name, email address, and any information you include in messages to us.</p>
        <p>We also collect non-personal information automatically, including browser type, device type, pages visited, and referring URLs through standard analytics tools.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use collected information to respond to inquiries, send updates you have opted into, improve our content and services, and analyze how our platform is used. We do not sell your personal information to third parties.</p>
        <h2>3. Cookies</h2>
        <p>We use cookies and similar tracking technologies to analyze site traffic and improve user experience. You can control cookie settings through your browser.</p>
        <h2>4. Third-Party Services</h2>
        <p>We may use third-party services for analytics, email management, and hosting. These providers have their own privacy policies, and we encourage you to review them.</p>
        <h2>5. Data Retention</h2>
        <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. You may request deletion of your personal information at any time by contacting us.</p>
        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us through our contact page and we will respond within 30 days.</p>
        <h2>7. Security</h2>
        <p>We implement reasonable technical and organizational measures to protect your personal information. However, no internet transmission is completely secure.</p>
        <h2>8. Children</h2>
        <p>BankDeMark is not directed at children under 13. We do not knowingly collect personal information from children.</p>
        <h2>9. Changes</h2>
        <p>We may update this privacy policy periodically. We will post the updated policy on this page with a revised effective date.</p>
        <h2>10. Contact</h2>
        <p>Questions about this privacy policy? Reach us through our <a href="/contact">contact page</a>.</p>
      </div>
    </>
  );
}
