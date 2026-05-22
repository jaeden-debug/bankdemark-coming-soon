"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function GlobalCalculatorShare() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const isCalculatorPage =
    pathname?.startsWith("/calculators/") && pathname !== "/calculators";

  const isSpecialToolPage =
    pathname?.startsWith("/money-health-score") ||
    pathname?.startsWith("/financial-freedom-roadmap");

  const isToolPage = isCalculatorPage || isSpecialToolPage;

  if (!isToolPage) return null;

  const buildShareText = () => {
    const title =
      document.querySelector("h1")?.innerText?.trim() ||
      "BankDeMark Financial Tool Results";

    const resultSelectors = [
      ".result-card",
      ".mortgage-main-result",
      ".mortgage-breakdown",
      ".investment-result-hero",
      ".investment-metrics",
      ".retirement-result-hero",
      ".retirement-status",
      ".retirement-metrics",
      ".registered-result-hero",
      ".registered-alert",
      ".registered-metrics",
      ".bdm-result-hero",
      ".bdm-metrics",
      ".score-orb-card",
      ".health-metrics-grid",
      ".health-action-card",
      ".roadmap-hero-card",
      ".roadmap-metrics",
      ".roadmap-action-card",
      ".roadmap-plan-grid",
      ".roadmap-tools-card"
    ];

    const results = resultSelectors
      .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .map((node) => node.innerText.trim())
      .filter(Boolean)
      .join("\n\n");

    const url = window.location.href;

    return {
      title,
      text: `${title}\n\n${results}\n\nCalculated with BankDeMark:\n${url}`,
      url,
    };
  };

  const handleShare = async () => {
    const payload = buildShareText();

    try {
      if (navigator.share) {
        await navigator.share(payload);
      } else {
        await navigator.clipboard.writeText(payload.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      try {
        await navigator.clipboard.writeText(payload.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch {}
    }
  };

  return (
    <button type="button" className="global-share-results" onClick={handleShare}>
      <span>{copied ? "✓" : "↗"}</span>
      {copied ? "Results Copied" : "Share Results"}
    </button>
  );
}
