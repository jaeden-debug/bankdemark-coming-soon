"use client";

import { useState } from "react";
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

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      alternates: {
    canonical: "/contact",
  },
};

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      <div className="page-hero">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact BankDeMark</h1>
        <p>
          Have a question, content suggestion, partnership inquiry, or want early
          access? We would love to hear from you.
        </p>
      </div>

      <div className="contact-form">
        {sent ? (
          <div className="form-success">
            Message received. We will be in touch within 1 to 2 business days.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
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
              <textarea id="message" name="message" required placeholder="Tell us what is on your mind..." />
            </div>

            {error ? <div className="form-error">{error}</div> : null}

            <button type="submit" className="form-submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="about-card">
          <p className="eyebrow">BankDeMark Intelligence</p>
          <h3>Join the finance intelligence newsletter.</h3>
          <p>
            Get new calculators, finance guides, business strategy, investing frameworks,
            and ZYLX-powered tools as they launch.
          </p>
          <NewsletterForm />
        </div>
      </section>
          <SEOLinkMap currentPath="/contact" />
    </>
  );
}
