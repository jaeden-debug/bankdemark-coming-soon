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
    <nav className="nav-wrapper">
      <div className="nav-inner">
        <Link href="/" className="brand">
          Bank<span>DeMark</span>
        </Link>
        <ul className="nav-links-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="nav-link-item">{l.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">Get Early Access</Link>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`ham-line ${open ? "open" : ""}`} />
          <span className={`ham-line ${open ? "open" : ""}`} />
          <span className={`ham-line ${open ? "open" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="mobile-drawer">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta mobile-cta" onClick={() => setOpen(false)}>
            Get Early Access
          </Link>
        </div>
      )}
    </nav>
  );
}
