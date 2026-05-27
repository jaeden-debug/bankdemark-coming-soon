"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";

export default function FinancialFreedomQuiz() {
  const [country, setCountry] = useState("canada");
  const [shareStatus, setShareStatus] = useState("idle");

  const [cashFlow, setCashFlow] = useState("positive");
  const [debt, setDebt] = useState("some");
  const [emergency, setEmergency] = useState("partial");
  const [investing, setInvesting] = useState("some");
  const [goal, setGoal] = useState("freedom");
  const [confidence, setConfidence] = useState("medium");

  const isCanada = country === "canada";

  const result = useMemo(() => {
    let score = 0;

    if (cashFlow === "strong") score += 25;
    if (cashFlow === "positive") score += 18;
    if (cashFlow === "tight") score += 8;

    if (debt === "none") score += 20;
    if (debt === "some") score += 12;
    if (debt === "heavy") score += 3;

    if (emergency === "full") score += 20;
    if (emergency === "partial") score += 11;
    if (emergency === "none") score += 2;

    if (investing === "strong") score += 20;
    if (investing === "some") score += 11;
    if (investing === "none") score += 1;

    if (confidence === "high") score += 15;
    if (confidence === "medium") score += 9;
    if (confidence === "low") score += 3;

    let personality = "The Stabilizer";
    let stage = "Foundation Phase";
    let description = "Your best move is building safety, structure, and predictable cash flow.";
    let next = "Start with budget control, emergency savings, and debt clarity.";

    if (score >= 80) {
      personality = "The Wealth Architect";
      stage = "Optimization Phase";
      description = "You already have a strong base. Now the game is optimization, investing, tax awareness, and freedom design.";
      next = "Run retirement, FIRE, and net worth projections quarterly.";
    } else if (score >= 60) {
      personality = "The Builder";
      stage = "Momentum Phase";
      description = "You have traction. The next level is consistency, stronger investing, and better systems.";
      next = "Increase investing rate, protect emergency savings, and track net worth monthly.";
    } else if (score >= 40) {
      personality = "The Climber";
      stage = "Growth Phase";
      description = "You are moving forward, but one or two pressure points are slowing the system down.";
      next = "Fix the weakest link: debt, cash flow, emergency savings, or investing consistency.";
    }

    const tools = [
      { href: "/money-health-score", label: "Money Health Score" },
      { href: "/financial-freedom-roadmap", label: "Roadmap Generator" },
      { href: "/calculators/budget-calculator", label: "Budget Calculator" },
      { href: "/calculators/emergency-fund-calculator", label: "Emergency Fund Calculator" },
      { href: "/calculators/net-worth-calculator", label: "Net Worth Calculator" },
    ];

    return { score, personality, stage, description, next, tools };
  }, [cashFlow, debt, emergency, investing, confidence]);

  async function handleShareResults() {
    if (typeof window === "undefined") return;

    const payload = {
      calculator: "financial-freedom-quiz",
      country,
      inputs: { cashFlow, debt, emergency, investing, goal, confidence },
      results: result,
    };

    const encoded = encodeCalculatorState(payload);
    const shareUrl = `${window.location.origin}/share/financial-freedom-quiz?data=${encodeURIComponent(encoded)}`;

    try {
      setShareStatus("creating");

      if (navigator.share && document.hasFocus()) {
        await navigator.share({
          title: "My Financial Freedom Quiz Result | BankDeMark",
          text: "View this BankDeMark financial freedom quiz result.",
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
    <section className="quiz-tool">
      <div className="country-toggle quiz-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => setCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="quiz-panel">
        <div className="quiz-left">
          <div className="quiz-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Financial Freedom Quiz</h2>
              <p>Find your money personality, wealth stage, score, and next best financial move.</p>
            </div>
          </div>

          <div className="quiz-fields">
            <label><span>Monthly Cash Flow</span><select value={cashFlow} onChange={(e) => setCashFlow(e.target.value)}><option value="strong">Strong surplus every month</option><option value="positive">Usually positive</option><option value="tight">Tight or inconsistent</option><option value="negative">Often negative</option></select></label>
            <label><span>Debt Situation</span><select value={debt} onChange={(e) => setDebt(e.target.value)}><option value="none">No consumer debt</option><option value="some">Some manageable debt</option><option value="heavy">Heavy debt pressure</option></select></label>
            <label><span>Emergency Fund</span><select value={emergency} onChange={(e) => setEmergency(e.target.value)}><option value="full">3–6+ months saved</option><option value="partial">Some savings</option><option value="none">Little or none</option></select></label>
            <label><span>Investing Habit</span><select value={investing} onChange={(e) => setInvesting(e.target.value)}><option value="strong">Consistent monthly investing</option><option value="some">Investing sometimes</option><option value="none">Not investing yet</option></select></label>
            <label><span>Main Goal</span><select value={goal} onChange={(e) => setGoal(e.target.value)}><option value="debt-free">Debt freedom</option><option value="stability">Financial stability</option><option value="wealth">Wealth building</option><option value="freedom">Financial freedom</option><option value="fire">FIRE / early retirement</option></select></label>
            <label><span>Money Confidence</span><select value={confidence} onChange={(e) => setConfidence(e.target.value)}><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option></select></label>
          </div>

          <button type="button" className="networth-share-btn ready" onClick={handleShareResults}>
            {shareStatus === "creating"
              ? "Creating Share Link..."
              : shareStatus === "copied"
                ? "Link Copied"
                : shareStatus === "shared"
                  ? "Shared"
                  : "Share Results"}
          </button>
        </div>

        <div className="quiz-right">
          <div className="quiz-hero-card">
            <small>Your Money Personality</small>
            <strong>{result.personality}</strong>
            <p>{result.description}</p>
          </div>

          <div className="quiz-score-card">
            <div className="quiz-score-ring" style={{ background: `conic-gradient(var(--gold-light) ${result.score * 3.6}deg, rgba(255,255,255,0.08) 0deg)` }}>
              <div><strong>{result.score}</strong><span>/100</span></div>
            </div>
            <h3>{result.stage}</h3>
            <p>{result.next}</p>
          </div>

          <div className="quiz-tools-card">
            <span>Recommended Next Tools</span>
              <a href="https://command.bankdemark.com/command" className="networth-share-btn ready">Open your AI Financial Dashboard →</a>
            <div>
              {result.tools.map((tool) => (
                <Link href={tool.href} key={tool.href}>{tool.label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
