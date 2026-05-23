"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const links = [
    { href: "/pillars", label: "Pillars" },
    { href: "/calculators", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 20) {
        setVisible(true);
      } else if (currentScroll > lastScroll) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`site-nav ${visible ? "nav-visible" : "nav-hidden"}`}>
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

      <nav
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mobile-cta"
          onClick={() => setOpen(false)}
        >
          Join Newsletter
        </Link>
      </nav>
    </>
  );
}