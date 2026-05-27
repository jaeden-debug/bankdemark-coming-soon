"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BrandText from "./BrandText";

const links = [
  { href: "/pillars", label: "Pillars" },
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [desktopNewsletterOpen, setDesktopNewsletterOpen] = useState(false);
  const [mobileNewsletterOpen, setMobileNewsletterOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());

  const navWrapRef = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll;

      if (open || desktopNewsletterOpen || currentScroll <= 20) {
        setVisible(true);
      } else if (scrollingDown) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open, desktopNewsletterOpen]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", open);
    return () => document.body.classList.remove("nav-menu-open");
  }, [open]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navWrapRef.current?.contains(event.target)) {
        setOpen(false);
        setMobileNewsletterOpen(false);
        setDesktopNewsletterOpen(false);
        setStatus("");
        setVisible(true);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const closeAll = () => {
    setOpen(false);
    setMobileNewsletterOpen(false);
    setDesktopNewsletterOpen(false);
    setStatus("");
    setVisible(true);
  };

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

  const newsletterForm = (
    <form className="final-newsletter-form" onSubmit={submitNewsletter}>
      <input
        className="newsletter-hp"
        type="text"
        name="website"
        tabIndex="-1"
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        aria-hidden="true"
      />
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
  );

  return (
    <div ref={navWrapRef} className="nav-system">
      <header className={`site-nav ${visible || open ? "nav-visible" : "nav-hidden"}`}>
        <Link href="/" className="brand" onClick={closeAll}>
          <BrandText />
        </Link>

        <nav className="desktop-menu" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeAll}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="premium-btn primary nav-newsletter-trigger"
          onClick={() => {
            setDesktopNewsletterOpen((current) => !current);
            setMobileNewsletterOpen(false);
            setOpen(false);
            setStatus("");
            setVisible(true);
          }}
        >
          Join Newsletter
        </button>

        <button
          type="button"
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => {
            setOpen((current) => !current);
            setMobileNewsletterOpen(false);
            setDesktopNewsletterOpen(false);
            setStatus("");
            setVisible(true);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`desktop-newsletter-panel ${desktopNewsletterOpen ? "open" : ""}`}>
        {newsletterForm}
      </div>

      <nav
        className={`mobile-menu ${open ? "open" : ""} ${mobileNewsletterOpen ? "newsletter-mode" : ""}`}
        aria-label="Mobile navigation"
      >
        {mobileNewsletterOpen ? (
          <>
            <button
              type="button"
              className="mobile-back-btn"
              onClick={() => {
                setMobileNewsletterOpen(false);
                setStatus("");
              }}
            >
              ← Back
            </button>

            {newsletterForm}
          </>
        ) : (
          <>
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeAll}>
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              className="premium-btn primary mobile-newsletter-trigger"
              onClick={() => {
                setMobileNewsletterOpen(true);
                setStatus("");
              }}
            >
              Join Newsletter
            </button>
          </>
        )}
      </nav>
    </div>
  );
}
