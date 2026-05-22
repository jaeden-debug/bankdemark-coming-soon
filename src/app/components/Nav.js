"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/pillars", label: "Pillars" },
    { href: "/calculators", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="site-nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          Bank<span>DeMark</span>
        </Link>

        <nav className="desktop-menu" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Join Newsletter
        </Link>

        <button
          type="button"
          className={`menu-btn ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}

        <Link href="/contact" className="mobile-cta" onClick={() => setOpen(false)}>
          Join Newsletter
        </Link>
      </nav>
    </>
  );
}
