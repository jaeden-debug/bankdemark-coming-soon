"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/pillars", label: "Pillars" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="nav-wrapper">
      <nav className="nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Bank<span>DeMark</span>
        </Link>

        <div className="nav-links-desktop">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-item">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            Get Early Access
          </Link>
        </div>

        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <span className="ham-line"></span>
          <span className="ham-line"></span>
          <span className="ham-line"></span>
        </button>
      </nav>

      {open && (
        <div className="mobile-drawer">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-cta mobile-cta"
            onClick={() => setOpen(false)}
          >
            Get Early Access
          </Link>
        </div>
      )}
    </header>
  );
}
