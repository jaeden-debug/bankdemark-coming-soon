"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("You’re on the early access list.");
    e.currentTarget.reset();
  }

  return (
    <>
      <header className="nav">
        <div className="brand">Bank<span>DeMark</span></div>
        <a href="#notify" className="nav-link">Early Access</a>
      </header>

      <main className="hero">
        <section className="hero-content">
          <p className="eyebrow">bankdemark.com</p>
          <h1>Modern finance intelligence is coming soon.</h1>
          <p className="subtitle">
            BankDeMark is preparing a refined digital finance experience built around clarity,
            trust, market insight, and smarter money decisions.
          </p>

          <form id="notify" className="signup" onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Get Notified</button>
          </form>

          <p className="message">{message}</p>

          <div className="trust-row">
            <span>Private Beta</span>
            <span>Market Insights</span>
            <span>Finance Tools</span>
          </div>
        </section>

        <section className="visual-card">
          <div className="card-top">
            <span>Portfolio Signal</span>
            <strong>+18.4%</strong>
          </div>

          <div className="chart">
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          <div className="mini-grid">
            <div><small>Assets</small><b>$248K</b></div>
            <div><small>Risk</small><b>Low</b></div>
            <div><small>Growth</small><b>Stable</b></div>
            <div><small>Outlook</small><b>Strong</b></div>
          </div>
        </section>
      </main>

      <footer>
        © 2026 BankDeMark. A new finance platform is being prepared.
      </footer>
    </>
  );
}
