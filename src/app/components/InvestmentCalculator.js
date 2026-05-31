"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { useCalculatorShare } from "@/app/lib/useCalculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function InvestmentCalculator() {
  const [country, setCountry] = useState("canada");

  const [startingAmount, setStartingAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [annualFee, setAnnualFee] = useState("");
  const [taxDrag, setTaxDrag] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setStartingAmount((v) => convertCurrencyAmount(v, country, nextCountry));
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
    const start = toNumber(startingAmount);
    const monthly = toNumber(monthlyContribution);
    const annual = toNumber(annualReturn);
    const yearsValue = toNumber(years);
    const fee = toNumber(annualFee);
    const tax = toNumber(taxDrag);

    const netAnnualRate = Math.max(annual / 100 - fee / 100 - tax / 100, -0.99);
    const monthlyRate = netAnnualRate / 12;
    const months = yearsValue * 12;

    const futureStarting = start * Math.pow(1 + monthlyRate, months);

    const futureContributions =
      monthlyRate === 0
        ? monthly * months
        : monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const endingBalance = futureStarting + futureContributions;
    const totalInvested = start + monthly * months;
    const estimatedGain = endingBalance - totalInvested;

    const grossMonthlyRate = annual / 100 / 12;
    const grossEnding =
      start * Math.pow(1 + grossMonthlyRate, months) +
      (grossMonthlyRate === 0
        ? monthly * months
        : monthly * ((Math.pow(1 + grossMonthlyRate, months) - 1) / grossMonthlyRate));

    const estimatedFeesAndDrag = Math.max(grossEnding - endingBalance, 0);

    return {
      endingBalance,
      totalInvested,
      estimatedGain,
      estimatedFeesAndDrag,
      netAnnualRate,
    };
  }, [startingAmount, monthlyContribution, annualReturn, years, annualFee, taxDrag]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "investment-calculator",
    getInputs: () => ({
        "Initial Investment": String(initialInvestment ?? ""),
        "Monthly Contribution": String(monthlyContribution ?? ""),
        "Annual Return (%)": String(annualReturn ?? ""),
        "Timeline (years)": String(years ?? ""),
    }),
    getResults: () => ({
        "Future Value": String(formatter.format(result.futureValue)),
        "Total Invested": String(formatter.format(result.totalInvested)),
        "Total Growth": String(formatter.format(result.totalGrowth)),
    }),
  });


  const hasRequiredInputs =
    toNumber(startingAmount) > 0 ||
    (toNumber(monthlyContribution) > 0 && toNumber(years) > 0);

  return (
    <section className="investment-tool">
      <div className="country-toggle investment-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="investment-panel">
        <div className="investment-left">
          <div className="investment-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Investment Calculator</h2>
              <p>Estimate future portfolio value after contributions, return assumptions, fees, and optional tax drag.</p>
            </div>
          </div>

          <div className="investment-fields">
            <label><span>Starting Investment</span><input type="number" inputMode="numeric" placeholder="$10,000" value={startingAmount} onChange={(e) => setStartingAmount(e.target.value)} /></label>
            <label><span>Monthly Contribution</span><input type="number" inputMode="numeric" placeholder="$500" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} /></label>
            <label><span>Expected Annual Return (%)</span><input type="number" inputMode="decimal" placeholder="7" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} /></label>
            <label><span>Investment Timeline</span><input type="number" inputMode="numeric" placeholder="25" value={years} onChange={(e) => setYears(e.target.value)} /></label>
            <label><span>Annual Fees / MER (%)</span><input type="number" inputMode="decimal" placeholder="0.25" value={annualFee} onChange={(e) => setAnnualFee(e.target.value)} /></label>
            <label><span>Optional Tax Drag (%)</span><input type="number" inputMode="decimal" placeholder="0" value={taxDrag} onChange={(e) => setTaxDrag(e.target.value)} /></label>
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

        <div className="investment-right">
          <div className="investment-result-hero">
            <small>Projected Portfolio Value</small>
            <strong className="money-green">{formatter.format(result.endingBalance)}</strong>
            <p>Estimated final value after contributions, returns, annual fees, and optional tax drag.</p>
          </div>

          <div className="investment-metrics">
            <div><span>Total Invested</span><strong>{formatter.format(result.totalInvested)}</strong></div>
            <div><span>Estimated Gain</span><strong className={result.estimatedGain >= 0 ? "money-green" : "money-red"}>{formatter.format(result.estimatedGain)}</strong></div>
            <div><span>Fees / Drag</span><strong>{formatter.format(result.estimatedFeesAndDrag)}</strong></div>
            <div><span>Net Annual Return</span><strong>{(result.netAnnualRate * 100).toFixed(2)}%</strong></div>
          </div>

          <div className="investment-note">
            <strong>{isCanada ? "Canada examples:" : "U.S. examples:"}</strong>
            <p>
              {isCanada
                ? "Use this for TFSA, RRSP, FHSA, RESP, non-registered accounts, ETFs, index funds, and long-term portfolio scenarios."
                : "Use this for 401(k), IRA, Roth IRA, brokerage accounts, ETFs, index funds, and long-term portfolio scenarios."}
            </p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
