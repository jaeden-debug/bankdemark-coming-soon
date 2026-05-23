"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function GlobalCalculatorShare() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);

  const isCalculatorPage =
    pathname?.startsWith("/calculators/") && pathname !== "/calculators";

  if (!isCalculatorPage) return null;

  const calculatorSlug = pathname.split("/").filter(Boolean).pop();

  const extractResults = () => {
    const results = {};
    document.querySelectorAll(".bdm-metrics div, .mortgage-breakdown div, .investment-metrics div, .retirement-metrics div").forEach((node) => {
      const label = node.querySelector("span")?.innerText?.trim();
      const value = node.querySelector("strong")?.innerText?.trim();
      if (label && value) results[label] = value;
    });
    return results;
  };

  const extractInputs = () => {
    const inputs = {};
    document.querySelectorAll("input").forEach((input) => {
      const label = input.closest("label")?.querySelector("span")?.innerText?.trim();
      if (label) inputs[label] = input.value;
    });
    return inputs;
  };

  const createShareUrl = async () => {
    const res = await fetch("/api/shares", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        calculator: calculatorSlug,
        inputs: extractInputs(),
        results: extractResults(),
      }),
    });

    if (!res.ok) throw new Error("Share failed");

    const data = await res.json();
    return `${window.location.origin}${data.url}`;
  };

  const handleShare = async () => {
    setBusy(true);

    try {
      const shareUrl = await createShareUrl();

      console.log("SHARE URL:", shareUrl);

      if (navigator.share) {
        await navigator.share({
          title: "BankDeMark Calculator Results",
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      const shareUrl = await createShareUrl();
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button type="button" className="global-share-results" onClick={handleShare} disabled={busy}>
      <span>{copied ? "✓" : "↗"}</span>
      {busy ? "Creating Link..." : copied ? "Link Copied" : "Share Results"}
    </button>
  );
}
