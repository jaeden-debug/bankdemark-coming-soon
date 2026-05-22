"use client";

import { useMemo, useState } from "react";

export default function EmergencyFundCalculator() {
  const [country, setCountry] = useState("canada");
  const [monthlyExpenses, setMonthlyExpenses] = useState(4200);
  const [currentSavings, setCurrentSavings] = useState(8000);
  const [targetMonths, setTargetMonths] = useState(6);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [jobStability, setJobStability] = useState("medium");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const recommendedMonths =
      jobStability === "low" ? 9 : jobStability === "high" ? 3 : 6;

    const target = monthlyExpenses * targetMonths;
    const recommendedTarget = monthlyExpenses * recommendedMonths;
    const gap = Math.max(target - currentSavings, 0);
    const monthsToGoal =
      monthlyContribution > 0 ? Math.ceil(gap / monthlyContribution) : Infinity;
    const currentCoverage = monthlyExpenses > 0 ? currentSavings / monthlyExpenses : 0;

    let status = "Needs Work";
    let note = "Build your emergency fund before taking bigger financial risks.";

    if (currentCoverage >= targetMonths) {
      status = "Fully Funded";
      note = "Your emergency fund meets your selected target.";
    } else if (currentCoverage >= targetMonths / 2) {
      status = "Building";
      note = "You have a partial safety buffer and should keep funding it.";
    }

    return {
      recommendedMonths,
      target,
      recommendedTarget,
      gap,
      monthsToGoal,
      currentCoverage,
      status,
      note,
    };
  }, [monthlyExpenses, currentSavings, targetMonths, monthlyContribution, jobStability]);

  return (
    <section className="emergency-tool">
      <div className="country-toggle emergency-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => setCountry("canada")}>
          <span>🇨🇦</span> Canada
        </button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")}>
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="emergency-market-badge">
        {isCanada ? "🇨🇦 Emergency fund estimate shown in CAD." : "🇺🇸 Emergency fund estimate shown in USD."}
      </div>

      <div className="emergency-panel">
        <div className="emergency-left">
          <div className="emergency-title">
            <span>▣</span>
            <div>
              <h2>Emergency Fund Calculator</h2>
              <p>Calculate your safety fund target, current coverage, savings gap, and time to goal.</p>
            </div>
          </div>

          <div className="emergency-fields">
            <label>
              <span>Monthly Essential Expenses</span>
              <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} />
            </label>

            <label>
              <span>Current Emergency Savings</span>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} />
            </label>

            <label>
              <span>Target Months</span>
              <input type="number" value={targetMonths} onChange={(e) => setTargetMonths(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Contribution</span>
              <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} />
            </label>

            <label className="emergency-wide">
              <span>Income Stability</span>
              <select value={jobStability} onChange={(e) => setJobStability(e.target.value)}>
                <option value="high">Stable income / low risk</option>
                <option value="medium">Average stability</option>
                <option value="low">Variable income / self-employed / higher risk</option>
              </select>
            </label>
          </div>
        </div>

        <div className="emergency-right">
          <div className="emergency-hero-card">
            <small>Emergency Fund Status</small>
            <strong>{result.status}</strong>
            <p>{result.note}</p>
          </div>

          <div className="emergency-metrics">
            <div><span>Your Target</span><strong>{formatter.format(result.target)}</strong></div>
            <div><span>Savings Gap</span><strong>{formatter.format(result.gap)}</strong></div>
            <div><span>Current Coverage</span><strong>{result.currentCoverage.toFixed(1)} mo</strong></div>
            <div><span>Time to Goal</span><strong>{result.monthsToGoal === Infinity ? "—" : `${result.monthsToGoal} mo`}</strong></div>
            <div><span>Risk-Based Target</span><strong>{formatter.format(result.recommendedTarget)}</strong></div>
            <div><span>Recommended Months</span><strong>{result.recommendedMonths} mo</strong></div>
          </div>

          <div className="emergency-note">
            <strong>Safety fund note:</strong>
            <p>
              A starter fund can protect against small shocks. A full emergency fund protects against job loss,
              income gaps, urgent repairs, and major surprise expenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
