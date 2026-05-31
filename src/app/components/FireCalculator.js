"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { useCalculatorShare } from "@/app/lib/useCalculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function FireCalculator() {
  const [country, setCountry] = useState("canada");

  const [age, setAge] = useState("");
  const [invested, setInvested] = useState("");
  const [annualSpending, setAnnualSpending] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [withdrawalRate, setWithdrawalRate] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setInvested((v) => convertCurrencyAmount(v, country, nextCountry));
    setAnnualSpending((v) => convertCurrencyAmount(v, country, nextCountry));
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
    const ageValue = toNumber(age);
    const investedValue = toNumber(invested);
    const annualSpendingValue = toNumber(annualSpending);
    const monthlyContributionValue = toNumber(monthlyContribution);
    const returnRateValue = toNumber(returnRate);
    const rawWithdrawalRateValue = toNumber(withdrawalRate) || 4;
    const withdrawalRateValue = Math.min(Math.max(rawWithdrawalRateValue, 1), 10);
    const unrealisticWithdrawal = rawWithdrawalRateValue > 10;

    const fireNumber = annualSpendingValue / (withdrawalRateValue / 100);
    const monthlyRate = returnRateValue / 100 / 12;

    let balance = investedValue;
    let months = 0;

    while (balance < fireNumber && months < 1200) {
      balance = balance * (1 + monthlyRate) + monthlyContributionValue;
      months++;
    }

    const coastYears =
      investedValue > 0 && returnRateValue > 0 && fireNumber > 0
        ? Math.max(Math.log(fireNumber / investedValue) / Math.log(1 + returnRateValue / 100), 0)
        : Infinity;

    return {
      fireNumber,
      withdrawalRateValue,
      unrealisticWithdrawal,
      monthsToFire: months >= 1200 ? Infinity : months,
      yearsToFire: months >= 1200 ? Infinity : months / 12,
      fireAge: months >= 1200 ? Infinity : ageValue + months / 12,
      coastYears,
      coastAge: coastYears === Infinity ? Infinity : ageValue + coastYears,
    };
  }, [age, invested, annualSpending, monthlyContribution, returnRate, withdrawalRate]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "fire-calculator",
    getInputs: () => ({
        "Annual Expenses": String(annualExpenses ?? ""),
        "Current Savings": String(currentSavings ?? ""),
        "Annual Savings": String(annualSavings ?? ""),
        "Annual Return (%)": String(annualReturn ?? ""),
    }),
    getResults: () => ({
        "FIRE Number": String(formatter.format(result.fireNumber)),
        "Years to FIRE": String(String(result.yearsToFire)),
    }),
  });


  const hasRequiredInputs =
    toNumber(age) > 0 &&
    toNumber(annualSpending) > 0 &&
    toNumber(returnRate) >= 0;

  return (
    <section className="bdm-tool fire-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>FIRE / Coast FIRE Calculator</h2>
              <p>Estimate your FIRE number, time to financial independence, and Coast FIRE timeline.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Current Age</span><input type="number" inputMode="numeric" placeholder="32" value={age} onChange={(e) => setAge(e.target.value)} /></label>
            <label><span>Current Invested Assets</span><input type="number" inputMode="numeric" placeholder="$75,000" value={invested} onChange={(e) => setInvested(e.target.value)} /></label>
            <label><span>Annual Spending Goal</span><input type="number" inputMode="numeric" placeholder="$55,000" value={annualSpending} onChange={(e) => setAnnualSpending(e.target.value)} /></label>
            <label><span>Monthly Investment</span><input type="number" inputMode="numeric" placeholder="$1,000" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} /></label>
            <label><span>Expected Annual Return (%)</span><input type="number" inputMode="decimal" step="0.1" placeholder="7" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} /></label>

            <label className={result.unrealisticWithdrawal ? "bdm-field-warning" : ""}>
              {result.unrealisticWithdrawal && (
                <div className="bdm-input-bubble">
                  That withdrawal rate looks aggressive. Most FIRE plans model around 3%–5%.
                </div>
              )}
              <span>Withdrawal Rate (%)</span>
              <input type="number" inputMode="decimal" step="0.1" placeholder="4" value={withdrawalRate} onChange={(e) => setWithdrawalRate(e.target.value)} />
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

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Your FIRE Number</small>
            <strong className="money-green">{result.fireNumber ? formatter.format(result.fireNumber) : "—"}</strong>
            <p>Based on annual spending and withdrawal rate.</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Years to FIRE</span><strong>{result.yearsToFire === Infinity ? "100+" : toNumber(result.yearsToFire).toFixed(1)}</strong></div>
            <div><span>Estimated FIRE Age</span><strong>{result.fireAge === Infinity ? "—" : toNumber(result.fireAge).toFixed(1)}</strong></div>
            <div><span>Coast FIRE Years</span><strong>{result.coastYears === Infinity ? "—" : toNumber(result.coastYears).toFixed(1)}</strong></div>
            <div><span>Coast FIRE Age</span><strong>{result.coastAge === Infinity ? "—" : toNumber(result.coastAge).toFixed(1)}</strong></div>
          </div>

          <div className="bdm-note">
            <strong>FIRE strategy note:</strong>
            <p>FIRE math is sensitive to spending, returns, inflation, taxes, and withdrawal assumptions. Test conservative scenarios before making life decisions.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
