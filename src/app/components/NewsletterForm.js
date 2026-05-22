"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        email: formData.get("email"),
      }),
    });

    setSending(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
      return;
    }

    setSuccess(true);
    form.reset();
  }

  if (success) {
    return <div className="form-success">You are on the BankDeMark Intelligence list.</div>;
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input name="firstName" type="text" placeholder="First name" />
      <input name="email" type="email" required placeholder="Email address" />
      <button type="submit" disabled={sending}>
        {sending ? "Joining..." : "Join Newsletter"}
      </button>
      {error ? <div className="form-error">{error}</div> : null}
    </form>
  );
}
