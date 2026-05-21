export const metadata = {
  title: "Terms of Service",
  description: "BankDeMark terms of service governing use of our platform.",
};

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p>Last updated: May 2025</p>
      </div>
      <div className="prose">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using BankDeMark, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>
        <h2>2. Use of the Site</h2>
        <p>You may use BankDeMark for lawful purposes only. You agree not to use the Site to transmit harmful, illegal, or offensive content, or attempt to gain unauthorized access to any part of the Site.</p>
        <h2>3. Intellectual Property</h2>
        <p>All content on BankDeMark is the property of BankDeMark or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce or distribute content without express written permission.</p>
        <h2>4. Disclaimer of Warranties</h2>
        <p>BankDeMark is provided as is without any warranties, express or implied. We do not warrant that the Site will be uninterrupted or error-free.</p>
        <h2>5. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, BankDeMark shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site.</p>
        <h2>6. Third-Party Links</h2>
        <p>The Site may contain links to third-party websites for convenience only. BankDeMark does not endorse and is not responsible for the content of third-party sites.</p>
        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the Site after changes constitutes acceptance of the revised terms.</p>
        <h2>8. Governing Law</h2>
        <p>These terms are governed by applicable law. Any disputes shall be resolved through binding arbitration, except where prohibited by law.</p>
        <h2>9. Contact</h2>
        <p>Questions about these terms? <a href="/contact">Contact us here.</a></p>
      </div>
    </>
  );
}
