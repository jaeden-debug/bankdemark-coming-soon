"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Get in Touch</p>
        <h1>Contact BankDeMark</h1>
        <p>Have a question, content suggestion, partnership inquiry, or want early access? We would love to hear from you.</p>
      </div>
      <div className="contact-form">
        {sent ? (
          <div className="form-success">Message received. We will be in touch within 1 to 2 business days.</div>
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
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        )}
      </div>
    </>
  );
}
