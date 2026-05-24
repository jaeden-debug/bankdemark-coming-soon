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
    document
      .querySelectorAll(".bdm-metrics div, .mortgage-breakdown div, .investment-metrics div, .retirement-metrics div")
      .forEach((node) => {
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

  const copyShareUrl = async (shareUrl) => {
    try {
      if (document.hasFocus() && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
        return;
      }
    } catch {}

    window.prompt("Copy this share link:", shareUrl);
  };

  const handleShare = async () => {
    setBusy(true);

    try {
      const shareUrl = await createShareUrl();

      if (navigator.share && document.hasFocus()) {
        try {
          await navigator.share({
            title: "BankDeMark Calculator Results",
            url: shareUrl,
          });
          return;
        } catch {}
      }

      await copyShareUrl(shareUrl);
    } catch (error) {
      console.error("Share failed:", error);
      alert("Could not create a share link. Please try again.");
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
