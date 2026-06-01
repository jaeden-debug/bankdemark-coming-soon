"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";
import { useMemo, useState } from "react";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

// Retirement savings benchmarks by age (approximate Canadian planning data)
// Sources: Statistics Canada, Survey of Financial Security (SFS), 2023, Cat. no. 13-595-X
const RETIREMENT_BENCHMARKS = {
  "under-30": { label: "Under 30", recommended1x: 10000, recommended3x: 30000, avg: 15000, good: 45000, great: 85000 },
  "30-34": { label: "30–34", recommended1x: 30000, recommended3x: 90000, avg: 42000, good: 120000, great: 210000 },
  "35-39": { label: "35–39", recommended1x: 75000, recommended3x: 225000, avg: 98000, good: 280000, great: 470000 },
  "40-44": { label: "40–44", recommended1x: 140000, recommended3x: 420000, avg: 175000, good: 490000, great: 820000 },
  "45-49": { label: "45–49", recommended1x: 230000, recommended3x: 690000, avg: 270000, good: 750000, great: 1200000 },
  "50-54": { label: "50–54", recommended1x: 340000, recommended3x: 1020000, avg: 390000, good: 1050000, great: 1700000 },
  "55-59": { label: "55–59", recommended1x: 480000, recommended3x: 1440000, avg: 520000, good: 1380000, great: 2200000 },
  "60-64": { label: "60–64", recommended1x: 620000, recommended3x: 1860000, avg: 650000, good: 1650000, great: 2800000 },
  "65-plus": { label: "65 and older", recommended1x: 700000, recommended3x: 2100000, avg: 480000, good: 1200000, great: 2000000 },
};

const AGE_BRACKETS = Object.entries(RETIREMENT_BENCHMARKS).map(([v, d]) => ({ value: v, label: d.label }));

const PROVINCES = [
  { value: "national", label: "National Average" },
  { value: "bc", label: "British Columbia" },
  { value: "ab", label: "Alberta" },
  { value: "on", label: "Ontario" },
  { value: "qc", label: "Québec" },
  { value: "mb", label: "Manitoba" },
  { value: "sk", label: "Saskatchewan" },
  { value: "ns", label: "Nova Scotia" },
  { value: "nb", label: "New Brunswick" },
  { value: "pe", label: "Prince Edward Island" },
  { value: "nl", label: "Newfoundland & Labrador" },
];

// Standard retirement planning multiplier by salary
// Rule of thumb benchmarks (Fidelity-style): 1x salary by 30, 3x by 40, 6x by 50, 8x by 60, 10x at retirement
function getReadinessScore(currentSavings, benchmarks, annualIncome) {
  const incomeVal = toNumber(annualIncome);
  const target = incomeVal > 0 ? incomeVal * 10 : benchmarks.recommended3x * 3.3;
  const pct = target > 0 ? (currentSavings / target) * 100 : 0;

  if (pct >= 100) return { score: 100, label: "On Track or Ahead", color: "money-green", grade: "A" };
  if (pct >= 75) return { score: Math.round(pct), label: "Nearly On Track", color: "money-green", grade: "B" };
  if (pct >= 50) return { score: Math.round(pct), label: "Building — Needs Attention", color: "", grade: "C" };
  if (pct >= 25) return { score: Math.round(pct), label: "Below Benchmark", color: "", grade: "D" };
  return { score: Math.round(pct), label: "Significantly Behind", color: "money-red", grade: "F" };
}

export default function AverageRetirementSavingsCalculator() {
  const [country, setCountry] = useState("canada");
  const [ageBracket, setAgeBracket] = useState("40-44");
  const [province, setProvince] = useState("national");
  const [currentSavings, setCurrentSavings] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");
  const [retirementAge, setRetirementAge] = useState("65");
  const [annualReturn, setAnnualReturn] = useState("6");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setCurrentSavings((v) => convertCurrencyAmount(v, country, nextCountry));
    setAnnualIncome((v) => convertCurrencyAmount(v, country, nextCountry));
    setCountry(nextCountry);
  };

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const benchmarks = RETIREMENT_BENCHMARKS[ageBracket];

  const result = useMemo(() => {
    const savings = toNumber(currentSavings);
    const income = toNumber(annualIncome);
    const retAge = toNumber(retirementAge) || 65;
    const returnRate = toNumber(annualReturn) || 6;

    // Age mid-point for the bracket
    const ageMap = {
      "under-30": 27, "30-34": 32, "35-39": 37, "40-44": 42,
      "45-49": 47, "50-54": 52, "55-59": 57, "60-64": 62, "65-plus": 67,
    };
    const currentAge = ageMap[ageBracket] || 40;
    const yearsToRetirement = Math.max(retAge - currentAge, 0);

    // Project current savings to retirement
    const projectedSavings = savings * Math.pow(1 + returnRate / 100, yearsToRetirement);

    // Recommended target: 10x final income or 25x annual spending ($50k default)
    const incomeTarget = income > 0 ? income * 10 : 0;
    const defaultTarget = 800000; // fallback if no income entered
    const recommendedTarget = incomeTarget > 0 ? incomeTarget : defaultTarget;

    const gap = recommendedTarget - savings;
    const projectedGap = recommendedTarget - projectedSavings;

    // Required monthly contribution to close gap
    const monthlyRate = returnRate / 100 / 12;
    const months = yearsToRetirement * 12;
    const requiredMonthly = projectedGap > 0 && months > 0
      ? monthlyRate > 0
        ? projectedGap / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        : projectedGap / months
      : 0;

    const readiness = getReadinessScore(savings, benchmarks, annualIncome);

    return {
      currentAge,
      yearsToRetirement,
      projectedSavings,
      recommendedTarget,
      gap: Math.max(gap, 0),
      projectedGap: Math.max(projectedGap, 0),
      requiredMonthly: Math.max(requiredMonthly, 0),
      readiness,
      isOnTrack: savings >= benchmarks.recommended1x,
    };
  }, [currentSavings, annualIncome, retirementAge, annualReturn, ageBracket, benchmarks]);

  const savings = toNumber(currentSavings);

  return (
    <section className="retsavings-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Average Retirement Savings by Age</h2>
              <p>Compare your retirement savings against Canadian benchmarks and measure your retirement readiness.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label>
              <span>Age Group</span>
              <select value={ageBracket} onChange={(e) => setAgeBracket(e.target.value)}>
                {AGE_BRACKETS.map((b) => (
                  <option key={b.value} value={b.value}>{b.label}</option>
                ))}
              </select>
            </label>

            {isCanada && (
              <label>
                <span>Province</span>
                <select value={province} onChange={(e) => setProvince(e.target.value)}>
                  {PROVINCES.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </label>
            )}

            <label><span>Current Retirement Savings</span><input type="number" inputMode="numeric" placeholder="$175,000" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} /></label>
            <label><span>Annual Income</span><input type="number" inputMode="numeric" placeholder="$85,000" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} /></label>
            <label><span>Target Retirement Age</span><input type="number" inputMode="numeric" placeholder="65" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} /></label>
            <label className="bdm-wide"><span>Expected Annual Return (%)</span><input type="number" inputMode="decimal" placeholder="6" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} /></label>
          </div>
        </div>

        <div className="bdm-right">
          <div className="retsavings-readiness-card">
            <small>Retirement Readiness Score</small>
            <div className="retsavings-grade">{result.readiness.grade}</div>
            <strong className={result.readiness.color || ""}>{result.readiness.label}</strong>
            <div className="retsavings-progress">
              <div className="retsavings-progress-bar">
                <div className="retsavings-progress-fill" style={{ width: `${Math.min(result.readiness.score, 100)}%` }} />
              </div>
              <span>{result.readiness.score}% of recommended target</span>
            </div>
          </div>

          <div className="retsavings-benchmark">
            <div className="retsavings-benchmark-header">Age {benchmarks.label} — Canadian Benchmarks</div>
            <div className="bdm-metrics">
              <div><span>Minimum Benchmark</span><strong>{formatter.format(benchmarks.recommended1x)}</strong></div>
              <div><span>On-Track Target</span><strong>{formatter.format(benchmarks.recommended3x)}</strong></div>
              <div><span>Average Savings</span><strong>{formatter.format(benchmarks.avg)}</strong></div>
              <div><span>Strong Position</span><strong className="money-green">{formatter.format(benchmarks.great)}</strong></div>
            </div>
          </div>

          {savings > 0 && (
            <div className="retsavings-gap">
              <div className="bdm-metrics">
                <div><span>Your Current Savings</span><strong>{formatter.format(savings)}</strong></div>
                <div><span>Projected at Retirement</span><strong className="money-green">{formatter.format(result.projectedSavings)}</strong></div>
                <div><span>Recommended Target</span><strong>{formatter.format(result.recommendedTarget)}</strong></div>
                <div><span>Savings Gap</span><strong className={result.gap === 0 ? "money-green" : "money-red"}>{result.gap === 0 ? "On track" : formatter.format(result.gap)}</strong></div>
                {result.requiredMonthly > 0 && (
                  <div><span>Monthly Needed to Close Gap</span><strong>{formatter.format(result.requiredMonthly)}</strong></div>
                )}
                <div><span>Years to Retirement</span><strong>{result.yearsToRetirement} years</strong></div>
              </div>
            </div>
          )}

          <div className="bdm-note">
            <strong>Retirement savings note:</strong>
            <p>Benchmarks are approximate Canadian planning references. (Statistics Canada, Survey of Financial Security (SFS), 2023) Actual retirement needs depend on lifestyle, pensions, CPP/OAS/Social Security, taxes, housing, and healthcare costs. Use the retirement calculator for a full projection.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
