"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function EmergencyFundCalculator() {
  const [country, setCountry] = useState("canada");

  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [targetMonths, setTargetMonths] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [jobStability, setJobStability] = useState("medium");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setMonthlyExpenses((v) => convertCurrencyAmount(v, country, nextCountry));
    setCurrentSavings((v) => convertCurrencyAmount(v, country, nextCountry));
    setMonthlyContribution((v) => convertCurrencyAmount(v, country, nextCountry));
    setCountry(nextCountry);
  };


  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const recommendedMonths = jobStability === "low" ? 9 : jobStability === "high" ? 3 : 6;

    const expenses = toNumber(monthlyExpenses);
    const savings = toNumber(currentSavings);
    const months = toNumber(targetMonths) || recommendedMonths;
    const contribution = toNumber(monthlyContribution);

    const target = expenses * months;
    const recommendedTarget = expenses * recommendedMonths;
    const gap = Math.max(target - savings, 0);
    const monthsToGoal = contribution > 0 ? Math.ceil(gap / contribution) : Infinity;
    const currentCoverage = expenses > 0 ? savings / expenses : 0;

    let status = "Needs Work";
    let note = "Build your emergency fund before taking bigger financial risks.";

    if (currentCoverage >= months) {
      status = "Fully Funded";
      note = "Your emergency fund meets your selected target.";
    } else if (currentCoverage >= months / 2) {
      status = "Building";
      note = "You have a partial safety buffer and should keep funding it.";
    }

    return { recommendedMonths, target, recommendedTarget, gap, monthsToGoal, currentCoverage, status, note };
  }, [monthlyExpenses, currentSavings, targetMonths, monthlyContribution, jobStability]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "emergency-fund-calculator",
    getInputs: () => ({
        "Monthly Expenses": String(monthlyExpenses ?? ""),
        "Target Months": String(targetMonths ?? ""),
    }),
    getResults: () => ({
        "Target Fund": String(formatter.format(result.target)),
        "Current Savings": String(formatter.format(result.currentSavings)),
        "Gap": String(formatter.format(result.gap)),
    }),
  });


  const hasRequiredInputs = toNumber(monthlyExpenses) > 0 && toNumber(targetMonths || result.recommendedMonths) > 0;

  return (
    <section className="emergency-tool">
      <div className="country-toggle emergency-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="emergency-panel">
        <div className="emergency-left">
          <div className="emergency-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Emergency Fund Calculator</h2>
              <p>Calculate your safety fund target, current coverage, savings gap, and time to goal.</p>
            </div>
          </div>

          <div className="emergency-fields">
            <label><span>Monthly Essential Expenses</span><input type="number" inputMode="numeric" placeholder="$3,500" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} /></label>
            <label><span>Current Emergency Savings</span><input type="number" inputMode="numeric" placeholder="$5,000" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} /></label>
            <label><span>Target Months</span><input type="number" inputMode="numeric" placeholder="6" value={targetMonths} onChange={(e) => setTargetMonths(e.target.value)} /></label>
            <label><span>Monthly Contribution</span><input type="number" inputMode="numeric" placeholder="$500" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} /></label>

            <label className="emergency-wide">
              <span>Income Stability</span>
              <select value={jobStability} onChange={(e) => setJobStability(e.target.value)}>
                <option value="high">Stable income / low risk</option>
                <option value="medium">Average stability</option>
                <option value="low">Variable income / self-employed / higher risk</option>
              </select>
            </label>
          </div>

          <div className="share-btn-group">
            <button
              type="button"
              className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"}
              onClick={handleShare}
              disabled={shareStatus === "creating"}
            >
              {!hasRequiredInputs
                ? "Results calculate automatically"
                : shareStatus === "creating"
                  ? "Creating link…"
                  : shareStatus === "shared"
                    ? "✓ Shared on mobile"
                    : shareStatus === "copied"
                      ? "✓ Link copied to clipboard"
                      : shareStatus === "error"
                        ? "Share failed — try again"
                        : "Share Results"}
            </button>
            {shareUrl && (shareStatus === "ready" || shareStatus === "shared" || shareStatus === "copied") && (
              <div className="share-url-field">
                <input
                  type="text"
                  readOnly
                  value={shareUrl}
                  onClick={(e) => { e.target.select(); copyShareUrl(); }}
                  aria-label="Share link — click to copy"
                />
                <button type="button" onClick={copyShareUrl} className="share-url-copy-btn">
                  {shareStatus === "copied" ? "Copied!" : "Copy"}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="emergency-right">
          <div className="emergency-hero-card">
            <small>Emergency Fund Status</small>
            <strong>{result.status}</strong>
            <p>{result.note}</p>
          </div>

          <div className="emergency-metrics">
            <div><span>Your Target</span><strong className="money-green">{formatter.format(result.target)}</strong></div>
            <div><span>Savings Gap</span><strong className={result.gap > 0 ? "money-red" : "money-green"}>{formatter.format(result.gap)}</strong></div>
            <div><span>Current Coverage</span><strong>{result.currentCoverage.toFixed(1)} mo</strong></div>
            <div><span>Time to Goal</span><strong>{result.monthsToGoal === Infinity ? "—" : `${result.monthsToGoal} mo`}</strong></div>
            <div><span>Risk-Based Target</span><strong className="money-green">{formatter.format(result.recommendedTarget)}</strong></div>
            <div><span>Recommended Months</span><strong>{result.recommendedMonths} mo</strong></div>
          </div>

          <div className="emergency-note">
            <strong>Safety fund note:</strong>
            <p>A starter fund protects against small shocks. A full emergency fund protects against job loss, urgent repairs, income gaps, and major surprise expenses.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
