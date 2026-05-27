"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrandText from "./BrandText";

export default function NewsletterCTA() {
  const [formOpen, setFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());
  const wrapRef = useRef(null);


  useEffect(() => {
    if (!formOpen) return;

    const handlePointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setFormOpen(false);
        setStatus("");
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [formOpen]);

  const submitNewsletter = async (event) => {
    event.preventDefault();
    setStatus("Saving...");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, startedAt, source: "newsletter" }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data?.error || "Something went wrong.");
        return;
      }

      setEmail("");
      setStatus(data?.alreadyJoined ? "You’re already on the list." : "Thanks for joining.");
    } catch {
      setStatus("Could not save right now.");
    }
  };

  return (
    <section ref={wrapRef} className={`premium-final-cta site-newsletter-cta ${formOpen ? "form-open" : ""}`}>
      <div className="premium-final-brand">
        <div className="premium-final-logo">
          <Image
            src="/branding/transparent-BankDeMark-logo.png"
            alt="BankDeMark Logo"
            width={82}
            height={82}
          />
        </div>

        <div className="premium-final-copy">
          <BrandText className="newsletter-brand-title" />

          <h2>Weekly business and wealth intelligence.</h2>

          <p>
            Powered by{" "}
            <a
              href="https://zylx.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--bdm-gold)", fontWeight: 700, textDecoration: "none" }}
            >
              zylx.ai
            </a>
          </p>
        </div>
      </div>

      {formOpen ? (
        <form className="final-newsletter-form" onSubmit={submitNewsletter}>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit">Join</button>
          {status ? <p>{status}</p> : null}
        </form>
      ) : (
        <button
          type="button"
          className="premium-btn primary"
          onClick={() => setFormOpen(true)}
        >
          Join Newsletter
        </button>
      )}
    </section>
  );
}
