"use client";

import { useEffect, useState } from "react";

function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function GeneratedTOC({
  selector = ".content-body h2, .post-prose h2, .pillar-section h2",
  title = "Table of Contents",
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll(selector));
    const seen = new Map();

    const nextItems = headings
      .filter((h) => h.textContent?.trim())
      .map((h) => {
        const base = h.id || slugify(h.textContent);
        const count = seen.get(base) || 0;
        const id = count ? `${base}-${count + 1}` : base;

        seen.set(base, count + 1);
        h.id = id;

        return { id, text: h.textContent.trim() };
      });

    setItems(nextItems);
  }, [selector]);

  if (items.length < 2) return null;

  return (
    <nav className="generated-toc" aria-label={title}>
      <p>{title}</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
