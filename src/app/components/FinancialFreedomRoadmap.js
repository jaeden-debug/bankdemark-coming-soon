"use client";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";

export default function FinancialFreedomRoadmap() {
  const [country, setCountry] = useState("canada");
  const [shareStatus, setShareStatus] = useState("idle");

  const [cashFlow, setCashFlow] = useState("positive");
  const [debt, setDebt] = useState("some");
  const [emergency, setEmergency] = useState("partial");
  const [investing, setInvesting] = useState("some");
  const [goal, setGoal] = useState("freedom");
  const [timeline, setTimeline] = useState("medium");

  const isCanada = country === "canada";

  const result = useMemo(() => {
    let score = 0;

    if (cashFlow === "strong") score += 25;
    if (cashFlow === "positive") score += 18;
    if (cashFlow === "tight") score += 8;
    if (cashFlow === "negative") score += 2;

    if (debt === "none") score += 22;
    if (debt === "some") score += 12;
    if (debt === "heavy") score += 3;

    if (emergency === "full") score += 20;
    if (emergency === "partial") score += 10;
    if (emergency === "none") score += 2;

    if (investing === "strong") score += 20;
    if (investing === "some") score += 10;
    if (investing === "none") score += 2;

    if (timeline === "short") score += 6;
    if (timeline === "medium") score += 10;
    if (timeline === "long") score += 13;

    let stage = "Foundation Phase";
    let priority = "Stabilize cash flow, build emergency savings, and reduce financial pressure.";
    let nextMove = "Start with budget control, a starter emergency fund, and a debt payoff system.";

    if (score >= 80) {
      stage = "Optimization Phase";
      priority = "You have a strong base. Now focus on investing, tax efficiency, and freedom design.";
      nextMove = "Run FIRE, retirement, and net worth projections quarterly.";
    } else if (score >= 60) {
      stage = "Momentum Phase";
      priority = "You have traction. The next step is stronger consistency and better systems.";
      nextMove = "Increase investing, protect your emergency fund, and track net worth monthly.";
    } else if (score >= 40) {
      stage = "Growth Phase";
      priority = "You are moving forward, but one weak point is slowing the whole system.";
      nextMove = "Fix the weakest link: debt, cash flow, emergency savings, or investing consistency.";
    }

    return { score, stage, priority, nextMove };
  }, [cashFlow, debt, emergency, investing, timeline]);

  const hasRequiredInputs = true;

  async function handleShareResults() {
    if (typeof window === "undefined") return;

    const payload = {
      calculator: "financial-freedom-roadmap",
      country,
      inputs: { cashFlow, debt, emergency, investing, goal, timeline },
      results: result,
    };

    const encoded = encodeCalculatorState(payload);
    const shareUrl = `${window.location.origin}/share/financial-freedom-roadmap?data=${encodeURIComponent(encoded)}`;

    try {
      setShareStatus("creating");

      if (navigator.share && document.hasFocus()) {
        await navigator.share({
          title: "My Financial Freedom Roadmap | BankDeMark",
          text: "View this BankDeMark financial freedom roadmap.",
          url: shareUrl,
        });
        setShareStatus("shared");
      } else if (navigator.clipboard?.writeText && document.hasFocus()) {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus("copied");
      } else {
        window.location.href = shareUrl;
        return;
      }

      window.setTimeout(() => setShareStatus("idle"), 2200);
    } catch {
      setShareStatus("idle");
    }
  }

  return (
    <section className="roadmap-tool">
      <div className="country-toggle roadmap-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => setCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="roadmap-panel">
        <div className="roadmap-inputs">
          <div className="roadmap-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Financial Freedom Roadmap</h2>
              <p>Generate a simple roadmap based on cash flow, debt, savings, investing, goals, and timeline.</p>
            </div>
          </div>

          <div className="roadmap-fields">
            <label><span>Monthly Cash Flow</span><select value={cashFlow} onChange={(e) => setCashFlow(e.target.value)}><option value="strong">Strong surplus</option><option value="positive">Usually positive</option><option value="tight">Tight or inconsistent</option><option value="negative">Often negative</option></select></label>
            <label><span>Debt Situation</span><select value={debt} onChange={(e) => setDebt(e.target.value)}><option value="none">No consumer debt</option><option value="some">Some manageable debt</option><option value="heavy">Heavy debt pressure</option></select></label>
            <label><span>Emergency Fund</span><select value={emergency} onChange={(e) => setEmergency(e.target.value)}><option value="full">3–6+ months saved</option><option value="partial">Some savings</option><option value="none">Little or none</option></select></label>
            <label><span>Investing Habit</span><select value={investing} onChange={(e) => setInvesting(e.target.value)}><option value="strong">Consistent monthly investing</option><option value="some">Investing sometimes</option><option value="none">Not investing yet</option></select></label>
            <label><span>Main Goal</span><select value={goal} onChange={(e) => setGoal(e.target.value)}><option value="debt-free">Debt freedom</option><option value="stability">Financial stability</option><option value="wealth">Wealth building</option><option value="freedom">Financial freedom</option><option value="fire">FIRE / early retirement</option></select></label>
            <label><span>Timeline</span><select value={timeline} onChange={(e) => setTimeline(e.target.value)}><option value="short">Urgent: 0–12 months</option><option value="medium">Medium: 1–5 years</option><option value="long">Long-term: 5+ years</option></select></label>
          </div>

          <button type="button" className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"} onClick={handleShareResults}>
            {shareStatus === "creating" ? "Creating Share Link..." : shareStatus === "copied" ? "Link Copied" : shareStatus === "shared" ? "Shared" : "Share Results"}
          </button>
        </div>

        <div className="roadmap-results">
          <div className="roadmap-hero-card">
            <small>Your Freedom Stage</small>
            <strong>{result.stage}</strong>
            <p>{result.priority}</p>
          </div>

          <div className="roadmap-metrics">
            <div><span>Roadmap Score</span><strong>{result.score}/100</strong></div>
            <div><span>Primary Goal</span><strong>{goal.replace("-", " ")}</strong></div>
            <div><span>Country Mode</span><strong>{isCanada ? "Canada" : "United States"}</strong></div>
            <div><span>Next Move</span><strong>{result.nextMove}</strong></div>
          </div>

          <div className="roadmap-note">
            <strong>Roadmap note:</strong>
              <p><a href="https://command.bankdemark.com/command">Turn this roadmap into a live AI financial dashboard →</a></p>
            <p>This roadmap is a planning snapshot. Use it with the Budget Calculator, Money Health Score, Net Worth Calculator, FIRE Calculator, and Retirement Calculator.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
