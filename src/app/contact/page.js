"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";
import SEOLinkMap from "../components/SEOLinkMap";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Fixed: alternates/canonical was accidentally embedded here previously
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSending(false);

    if (!res.ok) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSent(true);
    form.reset();
  }

  return (
    <>
      <div className="contact-page">
        {/* Hero */}
        <div className="legal-hero">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact BankDeMark</h1>
          <p>
            Questions, content suggestions, partnership inquiries, or early
            access requests — we read every message.
          </p>
        </div>

        {/* Internal tools strip */}
        <div className="legal-tools-strip">
          <span>Explore</span>
          <Link href="/calculators">Financial Calculators →</Link>
          <Link href="/blog">Finance Guides →</Link>
          <Link href="/pillars/financial-freedom">Financial Freedom →</Link>
          <Link href="/money-health-score">Money Health Score →</Link>
        </div>

        {/* Two-column contact grid */}
        <div className="contact-grid">
          {/* Info panel */}
          <aside className="contact-info-card">
            <h2>Let&rsquo;s talk finance.</h2>
            <p>
              BankDeMark is a finance intelligence platform built around six
              pillars: Personal Finance, Business Credit, Investing, Banking,
              Debt Management, and Financial Freedom.
            </p>
            <ul className="contact-info-list">
              <li>
                <strong>Response Time</strong>
                Within 1–2 business days
              </li>
              <li>
                <strong>Content Suggestions</strong>
                Article ideas, calculator requests, and topic feedback welcome
              </li>
              <li>
                <strong>Partnerships</strong>
                Open to collaborations aligned with our editorial mission
              </li>
              <li>
                <strong>Press &amp; Media</strong>
                Select the Press / Media subject in the form
              </li>
            </ul>
          </aside>

          {/* Form panel */}
          <div className="contact-form-card">
            {sent ? (
              <div className="form-success">
                ✓ Message received. We will be in touch within 1–2 business days.
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" required placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" required placeholder="Smith" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="jane@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option>General Inquiry</option>
                    <option>Early Access Request</option>
                    <option>Content Suggestion</option>
                    <option>Partnership / Collaboration</option>
                    <option>Press / Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Tell us what&apos;s on your mind..." />
                </div>

                {error && <div className="form-error">{error}</div>}

                <button type="submit" className="form-submit" disabled={sending}>
                  {sending ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter */}
        <section className="section" style={{ paddingTop: "48px" }}>
          <div className="about-intro-card" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="eyebrow">BankDeMark Intelligence</span>
            <h3>Join the finance intelligence newsletter.</h3>
            <p>
              New calculators, finance guides, business strategy, investing
              frameworks, and AI-powered tools — delivered as they launch.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </div>

      <SEOLinkMap currentPath="/contact" />
    </>
  );
}
