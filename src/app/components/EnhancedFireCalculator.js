"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";
import { useMemo, useState } from "react";
import { useCalculatorShare } from "@/app/lib/useCalculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function EnhancedFireCalculator() {
  const [country, setCountry] = useState("canada");
  const [advancedMode, setAdvancedMode] = useState(false);

  // Core inputs
  const [currentAge, setCurrentAge] = useState("");
  const [currentPortfolio, setCurrentPortfolio] = useState("");
  const [annualExpenses, setAnnualExpenses] = useState("");
  const [monthlyInvesting, setMonthlyInvesting] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [withdrawalRate, setWithdrawalRate] = useState("");

  // Advanced inputs
  const [inflation, setInflation] = useState("2.5");
  const [taxDrag, setTaxDrag] = useState("0.5");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setCurrentPortfolio((v) => convertCurrencyAmount(v, country, nextCountry));
    setAnnualExpenses((v) => convertCurrencyAmount(v, country, nextCountry));
    setMonthlyInvesting((v) => convertCurrencyAmount(v, country, nextCountry));
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
    const age = toNumber(currentAge);
    const portfolio = toNumber(currentPortfolio);
    const expenses = toNumber(annualExpenses);
    const monthly = toNumber(monthlyInvesting);
    const returnPct = toNumber(expectedReturn) || 7;
    const rawWR = toNumber(withdrawalRate) || 4;
    const wr = Math.min(Math.max(rawWR, 0.5), 15);
    const inflationPct = advancedMode ? toNumber(inflation) : 2.5;
    const taxDragPct = advancedMode ? toNumber(taxDrag) : 0;
    const effectiveReturn = Math.max(returnPct - taxDragPct, 0.1);
    const unrealisticWR = rawWR > 10;

    // FIRE Number variants
    const fireNumber = expenses > 0 ? expenses / (wr / 100) : 0;
    const leanFireNumber = expenses > 0 ? (expenses * 0.6) / (wr / 100) : 0;
    const fatFireNumber = expenses > 0 ? (expenses * 1.75) / (wr / 100) : 0;

    // Inflation-adjusted FIRE number (real terms)
    // We use the nominal return for accumulation and show the target in today's dollars

    const monthlyRate = effectiveReturn / 100 / 12;

    // Years until FIRE (standard)
    let balance = portfolio;
    let months = 0;
    while (balance < fireNumber && months < 1200) {
      balance = balance * (1 + monthlyRate) + monthly;
      months++;
    }
    const yearsToFire = months >= 1200 ? Infinity : months / 12;
    const fireAge = yearsToFire === Infinity ? Infinity : age + yearsToFire;

    // Years until Lean FIRE
    let leanBalance = portfolio;
    let leanMonths = 0;
    while (leanBalance < leanFireNumber && leanMonths < 1200) {
      leanBalance = leanBalance * (1 + monthlyRate) + monthly;
      leanMonths++;
    }
    const yearsToLeanFire = leanMonths >= 1200 ? Infinity : leanMonths / 12;

    // Years until Fat FIRE
    let fatBalance = portfolio;
    let fatMonths = 0;
    while (fatBalance < fatFireNumber && fatMonths < 1200) {
      fatBalance = fatBalance * (1 + monthlyRate) + monthly;
      fatMonths++;
    }
    const yearsToFatFire = fatMonths >= 1200 ? Infinity : fatMonths / 12;

    // Coast FIRE: no more contributions needed, portfolio grows to FIRE number on its own
    const coastYears =
      portfolio > 0 && effectiveReturn > 0 && fireNumber > portfolio
        ? Math.max(Math.log(fireNumber / portfolio) / Math.log(1 + effectiveReturn / 100), 0)
        : portfolio >= fireNumber ? 0 : Infinity;
    const coastFireAge = coastYears === Infinity ? Infinity : age + coastYears;

    // Progress toward FIRE number
    const fireProgress = fireNumber > 0 ? Math.min((portfolio / fireNumber) * 100, 100) : 0;

    // Inflation-adjusted annual income at FIRE
    const realFireAnnualIncome = yearsToFire !== Infinity && expenses > 0
      ? expenses * Math.pow(1 + inflationPct / 100, yearsToFire)
      : 0;

    // Safe withdrawal annual/monthly at current portfolio
    const safeWithdrawalAnnual = portfolio * (wr / 100);
    const safeWithdrawalMonthly = safeWithdrawalAnnual / 12;

    return {
      fireNumber,
      leanFireNumber,
      fatFireNumber,
      yearsToFire,
      fireAge,
      yearsToLeanFire,
      leanFireAge: yearsToLeanFire === Infinity ? Infinity : age + yearsToLeanFire,
      yearsToFatFire,
      fatFireAge: yearsToFatFire === Infinity ? Infinity : age + yearsToFatFire,
      coastYears,
      coastFireAge,
      fireProgress,
      wr,
      unrealisticWR,
      effectiveReturn,
      realFireAnnualIncome,
      safeWithdrawalAnnual,
      safeWithdrawalMonthly,
    };
  }, [currentAge, currentPortfolio, annualExpenses, monthlyInvesting, expectedReturn, withdrawalRate, inflation, taxDrag, advancedMode]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "fire-calculator",
    getInputs: () => ({
      "Annual Expenses": String(annualExpenses ?? ""),
      "Current Portfolio": String(currentPortfolio ?? ""),
      "Monthly Investing": String(monthlyInvesting ?? ""),
      "Expected Return (%)": String(expectedReturn ?? ""),
      "Withdrawal Rate (%)": String(withdrawalRate ?? ""),
    }),
    getResults: () => ({
      "FIRE Number": String(formatter.format(result.fireNumber)),
      "Years to FIRE": result.yearsToFire === Infinity ? "100+" : String(result.yearsToFire.toFixed(1)),
    }),
  });

  const hasRequiredInputs =
    toNumber(annualExpenses) > 0 && toNumber(expectedReturn) > 0;

  const displayYears = (y) => y === Infinity ? "100+" : y.toFixed(1);
  const displayAge = (a) => a === Infinity ? "—" : a.toFixed(1);

  return (
    <section className="fire-pro-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>FIRE Calculator</h2>
              <p>Calculate your FIRE Number, Lean FIRE, Fat FIRE, Coast FIRE, and time to financial independence.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Current Age</span><input type="number" inputMode="numeric" placeholder="32" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} /></label>
            <label><span>Current Investment Portfolio</span><input type="number" inputMode="numeric" placeholder="$75,000" value={currentPortfolio} onChange={(e) => setCurrentPortfolio(e.target.value)} /></label>
            <label><span>Annual Expenses (Spending Goal)</span><input type="number" inputMode="numeric" placeholder="$50,000" value={annualExpenses} onChange={(e) => setAnnualExpenses(e.target.value)} /></label>
            <label><span>Monthly Investing</span><input type="number" inputMode="numeric" placeholder="$1,500" value={monthlyInvesting} onChange={(e) => setMonthlyInvesting(e.target.value)} /></label>
            <label><span>Expected Annual Return (%)</span><input type="number" inputMode="decimal" step="0.1" placeholder="7" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} /></label>
            <label className={result.unrealisticWR ? "bdm-field-warning" : ""}>
              {result.unrealisticWR && (
                <div className="bdm-input-bubble">
                  That withdrawal rate looks aggressive. Most FIRE plans model 3%–5%.
                </div>
              )}
              <span>Withdrawal Rate (%)</span>
              <input type="number" inputMode="decimal" step="0.1" placeholder="4" value={withdrawalRate} onChange={(e) => setWithdrawalRate(e.target.value)} />
            </label>
          </div>

          <button
            type="button"
            className={advancedMode ? "fire-advanced-toggle active" : "fire-advanced-toggle"}
            onClick={() => setAdvancedMode(!advancedMode)}
          >
            {advancedMode ? "▲ Hide Advanced Options" : "▼ Advanced: Inflation & Tax Drag"}
          </button>

          {advancedMode && (
            <div className="bdm-fields fire-advanced-fields">
              <label><span>Inflation Rate (%)</span><input type="number" inputMode="decimal" step="0.1" placeholder="2.5" value={inflation} onChange={(e) => setInflation(e.target.value)} /></label>
              <label><span>Annual Tax Drag (%)</span><input type="number" inputMode="decimal" step="0.1" placeholder="0.5" value={taxDrag} onChange={(e) => setTaxDrag(e.target.value)} /></label>
            </div>
          )}

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

        <div className="bdm-right">
          {/* FIRE Progress Bar */}
          {toNumber(currentPortfolio) > 0 && result.fireNumber > 0 && (
            <div className="fire-pro-progress-card">
              <small>FIRE Progress — {result.fireProgress.toFixed(1)}% of target</small>
              <div className="fire-pro-progress-bar">
                <div
                  className="fire-pro-progress-fill"
                  style={{ width: `${result.fireProgress}%` }}
                />
              </div>
              <div className="fire-pro-progress-labels">
                <span>{formatter.format(toNumber(currentPortfolio))}</span>
                <span>{formatter.format(result.fireNumber)}</span>
              </div>
            </div>
          )}

          {/* FIRE Number Hero */}
          <div className="bdm-result-hero">
            <small>Your FIRE Number</small>
            <strong className="money-green">
              {result.fireNumber > 0 ? formatter.format(result.fireNumber) : "—"}
            </strong>
            <p>Based on {formatter.format(toNumber(annualExpenses) || 0)}/year at {result.wr}% withdrawal rate.</p>
          </div>

          {/* FIRE Variants */}
          <div className="fire-pro-variants">
            <div className="fire-pro-variant lean">
              <small>Lean FIRE</small>
              <strong>{result.leanFireNumber > 0 ? formatter.format(result.leanFireNumber) : "—"}</strong>
              <span>{displayYears(result.yearsToLeanFire)} yrs · Age {displayAge(result.leanFireAge)}</span>
              <p>Minimal lifestyle (60% of current spending)</p>
            </div>
            <div className="fire-pro-variant standard active">
              <small>Standard FIRE</small>
              <strong className="money-green">{result.fireNumber > 0 ? formatter.format(result.fireNumber) : "—"}</strong>
              <span>{displayYears(result.yearsToFire)} yrs · Age {displayAge(result.fireAge)}</span>
              <p>Current spending maintained</p>
            </div>
            <div className="fire-pro-variant fat">
              <small>Fat FIRE</small>
              <strong>{result.fatFireNumber > 0 ? formatter.format(result.fatFireNumber) : "—"}</strong>
              <span>{displayYears(result.yearsToFatFire)} yrs · Age {displayAge(result.fatFireAge)}</span>
              <p>Premium lifestyle (175% of current spending)</p>
            </div>
          </div>

          {/* Coast FIRE */}
          <div className="fire-pro-coast">
            <div><span>Coast FIRE Age</span><strong>{displayAge(result.coastFireAge)}</strong></div>
            <div><span>Coast FIRE Years</span><strong>{displayYears(result.coastYears)}</strong></div>
            <div><span>Effective Return</span><strong>{result.effectiveReturn.toFixed(2)}%</strong></div>
            <div><span>Safe Withdrawal / Year</span><strong className="money-green">{result.safeWithdrawalAnnual > 0 ? formatter.format(result.safeWithdrawalAnnual) : "—"}</strong></div>
          </div>

          <div className="bdm-note">
            <strong>FIRE planning note:</strong>
            <p>FIRE math is sensitive to spending, returns, inflation, taxes, and sequence-of-returns risk. Test conservative return scenarios (4–5%) and model real lifestyle costs before making major financial decisions. This is a planning estimate, not financial advice.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
