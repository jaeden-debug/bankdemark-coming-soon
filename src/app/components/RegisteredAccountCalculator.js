"use client";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";

const toNumber = (value) => Number(value) || 0;

export default function RegisteredAccountCalculator({ mode = "rrsp" }) {
  const [accountType, setAccountType] = useState(mode);
  const [shareStatus, setShareStatus] = useState("idle");

  const [annualIncome, setAnnualIncome] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [contribution, setContribution] = useState("");
  const [unusedRoom, setUnusedRoom] = useState("");
  const [years, setYears] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const activeRRSP = accountType === "rrsp";
  const calculatorSlug = activeRRSP ? "rrsp-calculator" : "tfsa-calculator";

  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const rrspAnnualLimit = 33810;
    const tfsaAnnualLimit = 7000;

    const income = toNumber(annualIncome);
    const balance = toNumber(currentBalance);
    const planned = toNumber(contribution);
    const unused = toNumber(unusedRoom);
    const timeline = toNumber(years);
    const annual = toNumber(annualReturn);
    const marginalTax = toNumber(taxRate);

    const estimatedRRSPRoom = Math.min(income * 0.18, rrspAnnualLimit) + unused;
    const estimatedTFSARoom = tfsaAnnualLimit + unused;
    const estimatedRoom = activeRRSP ? estimatedRRSPRoom : estimatedTFSARoom;

    const allowedContribution = Math.min(planned, Math.max(estimatedRoom, 0));
    const overContribution = Math.max(planned - estimatedRoom, 0);
    const taxRefund = activeRRSP ? allowedContribution * (marginalTax / 100) : 0;

    const monthlyRate = annual / 100 / 12;
    const months = timeline * 12;

    const projectedCurrent = balance * Math.pow(1 + monthlyRate, months);
    const projectedContribution = allowedContribution * Math.pow(1 + annual / 100, timeline);
    const projectedValue = projectedCurrent + projectedContribution;

    const growth = Math.max(projectedValue - balance - allowedContribution, 0);

    return {
      rrspAnnualLimit,
      tfsaAnnualLimit,
      estimatedRoom,
      allowedContribution,
      overContribution,
      taxRefund,
      projectedValue,
      taxFreeGrowth: activeRRSP ? 0 : growth,
      taxDeferredGrowth: activeRRSP ? growth : 0,
    };
  }, [annualIncome, currentBalance, contribution, unusedRoom, years, annualReturn, taxRate, activeRRSP]);

  const hasRequiredInputs =
    toNumber(currentBalance) > 0 ||
    (toNumber(contribution) > 0 && toNumber(years) > 0);

  const switchType = (type) => {
    setAccountType(type);
    setContribution("");
    setShareStatus("idle");
  };

  async function handleShareResults() {
    if (!hasRequiredInputs || typeof window === "undefined") return;

    const payload = {
      calculator: calculatorSlug,
      country: "canada",
      inputs: {
        accountType,
        annualIncome,
        currentBalance,
        contribution,
        unusedRoom,
        years,
        annualReturn,
        taxRate,
      },
      results: result,
    };

    const encoded = encodeCalculatorState(payload);
    const shareUrl = `${window.location.origin}/share/${calculatorSlug}?data=${encodeURIComponent(encoded)}`;

    try {
      setShareStatus("creating");

      if (navigator.share && document.hasFocus()) {
        await navigator.share({
          title: `My ${activeRRSP ? "RRSP" : "TFSA"} Projection | BankDeMark`,
          text: `View this BankDeMark ${activeRRSP ? "RRSP" : "TFSA"} projection.`,
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
    <section className="registered-tool">
      <div className="registered-toggle">
        <button type="button" className={activeRRSP ? "active" : ""} onClick={() => switchType("rrsp")}>🇨🇦 RRSP</button>
        <button type="button" className={!activeRRSP ? "active" : ""} onClick={() => switchType("tfsa")}>🇨🇦 TFSA</button>
      </div>

      <div className="registered-panel">
        <div className="registered-left">
          <div className="registered-title">
            <span>{activeRRSP ? "🇨🇦" : "🇨🇦"}</span>
            <div>
              <h2>{activeRRSP ? "RRSP Calculator" : "TFSA Calculator"}</h2>
              <p>
                {activeRRSP
                  ? "Estimate RRSP contribution room, refund potential, and tax-deferred retirement growth."
                  : "Estimate TFSA contribution room, tax-free growth, and long-term account value."}
              </p>
            </div>
          </div>

          <div className="registered-fields">
            <label><span>Annual Income</span><input type="number" inputMode="numeric" placeholder="$85,000" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} /></label>
            <label><span>Current {activeRRSP ? "RRSP" : "TFSA"} Balance</span><input type="number" inputMode="numeric" placeholder="$25,000" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} /></label>
            <label><span>Planned Contribution</span><input type="number" inputMode="numeric" placeholder="$7,000" value={contribution} onChange={(e) => setContribution(e.target.value)} /></label>
            <label><span>Unused Contribution Room</span><input type="number" inputMode="numeric" placeholder="$10,000" value={unusedRoom} onChange={(e) => setUnusedRoom(e.target.value)} /></label>
            <label><span>Timeline</span><input type="number" inputMode="numeric" placeholder="20" value={years} onChange={(e) => setYears(e.target.value)} /></label>
            <label><span>Expected Annual Return (%)</span><input type="number" inputMode="decimal" placeholder="6" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} /></label>

            {activeRRSP && (
              <label className="registered-wide">
                <span>Estimated Marginal Tax Rate (%)</span>
                <input type="number" inputMode="decimal" placeholder="35" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
              </label>
            )}
          </div>

          <button
            type="button"
            className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"}
            onClick={handleShareResults}
          >
            {!hasRequiredInputs
              ? "Results calculate automatically"
              : shareStatus === "creating"
                ? "Creating Share Link..."
                : shareStatus === "copied"
                  ? "Link Copied"
                  : shareStatus === "shared"
                    ? "Shared"
                    : "Share Results"}
          </button>
        </div>

        <div className="registered-right">
          <div className="registered-result-hero">
            <small>{activeRRSP ? "Projected RRSP Value" : "Projected TFSA Value"}</small>
            <strong>{formatter.format(result.projectedValue)}</strong>
            <p>Estimated future value after current balance, contribution, return, and timeline.</p>
          </div>

          <div className={result.overContribution > 0 ? "registered-alert danger" : "registered-alert safe"}>
            <small>{result.overContribution > 0 ? "Possible Over-Contribution" : "Estimated Room Check"}</small>
            <strong>{result.overContribution > 0 ? formatter.format(result.overContribution) : "Within estimate"}</strong>
            <p>
              {result.overContribution > 0
                ? "Reduce the contribution or confirm exact CRA room before contributing."
                : "Your planned contribution is within this calculator’s estimated room."}
            </p>
          </div>

          <div className="registered-metrics">
            <div><span>Estimated Contribution Room</span><strong>{formatter.format(result.estimatedRoom)}</strong></div>
            <div><span>Allowed Contribution Used</span><strong>{formatter.format(result.allowedContribution)}</strong></div>
            <div><span>{activeRRSP ? "Estimated Tax Refund" : "Estimated Tax-Free Growth"}</span><strong>{formatter.format(activeRRSP ? result.taxRefund : result.taxFreeGrowth)}</strong></div>
            <div><span>{activeRRSP ? "Tax-Deferred Growth" : "Withdrawal Treatment"}</span><strong>{activeRRSP ? formatter.format(result.taxDeferredGrowth) : "Tax-free"}</strong></div>
          </div>

          <div className="registered-note">
            <strong>{activeRRSP ? "RRSP note:" : "TFSA note:"}</strong>
            <p>
              {activeRRSP
                ? "RRSP contributions may reduce taxable income now, but withdrawals are taxable later. Confirm exact room with CRA before contributing."
                : "TFSA contributions are not tax-deductible, but eligible withdrawals are generally tax-free and added back to room the next year."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
