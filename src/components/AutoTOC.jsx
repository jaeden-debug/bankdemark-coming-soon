"use client";

import { useEffect, useState } from "react";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AutoTOC({
  selector = "article h2",
  title = "Table of Contents",
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll(selector));

    const nextItems = headings
      .filter((heading) => heading.textContent?.trim())
      .map((heading) => {
        if (!heading.id) heading.id = slugify(heading.textContent);
        return {
          id: heading.id,
          text: heading.textContent.trim(),
        };
      });

    setItems(nextItems);
  }, [selector]);

  return (
    <nav
      className={`auto-toc ${items.length < 2 ? "auto-toc-empty" : ""}`}
      aria-label={title}
    >
      {items.length >= 2 && (
        <>
          <p className="auto-toc-title">{title}</p>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
