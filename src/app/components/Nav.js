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
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScroll;

      if (currentScroll <= 20) {
        setVisible(true);
      } else if (scrollingDown) {
        setOpen(false);
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
    setVisible(true);
  };

  const toggleMenu = () => {
    setOpen((current) => {
      const next = !current;
      if (next) setVisible(true);
      return next;
    });
  };

  return (
    <>
      <header className={`site-nav ${visible || open ? "nav-visible" : "nav-hidden"}`}>
        <Link href="/" className="brand" onClick={closeMenu}>
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
          onClick={toggleMenu}
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
          <Link key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </Link>
        ))}

        <Link href="/contact" className="mobile-cta" onClick={closeMenu}>
          Join Newsletter
        </Link>
      </nav>
    </>
  );
}
