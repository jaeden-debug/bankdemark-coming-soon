"use client";

import { useMemo, useState } from "react";

export default function RegisteredAccountCalculator({ mode = "rrsp" }) {
  const isRRSP = mode === "rrsp";

  const [accountType, setAccountType] = useState(mode);
  const [annualIncome, setAnnualIncome] = useState(85000);
  const [currentBalance, setCurrentBalance] = useState(25000);
  const [contribution, setContribution] = useState(isRRSP ? 10000 : 7000);
  const [unusedRoom, setUnusedRoom] = useState(0);
  const [years, setYears] = useState(20);
  const [annualReturn, setAnnualReturn] = useState(6);
  const [taxRate, setTaxRate] = useState(30);

  const activeRRSP = accountType === "rrsp";

  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const rrspAnnualLimit = 33810;
    const tfsaAnnualLimit = 7000;

    const estimatedRRSPRoom = Math.min(annualIncome * 0.18, rrspAnnualLimit) + unusedRoom;
    const estimatedTFSARoom = tfsaAnnualLimit + unusedRoom;
    const estimatedRoom = activeRRSP ? estimatedRRSPRoom : estimatedTFSARoom;

    const allowedContribution = Math.min(contribution, Math.max(estimatedRoom, 0));
    const overContribution = Math.max(contribution - estimatedRoom, 0);

    const taxRefund = activeRRSP ? allowedContribution * (taxRate / 100) : 0;

    const monthlyRate = annualReturn / 100 / 12;
    const months = years * 12;

    const projectedCurrent =
      currentBalance * Math.pow(1 + monthlyRate, months);

    const projectedContribution =
      allowedContribution * Math.pow(1 + annualReturn / 100, years);

    const projectedValue = projectedCurrent + projectedContribution;

    const taxFreeGrowth = activeRRSP ? 0 : Math.max(projectedValue - currentBalance - allowedContribution, 0);
    const taxDeferredValue = activeRRSP ? projectedValue : 0;

    return {
      rrspAnnualLimit,
      tfsaAnnualLimit,
      estimatedRoom,
      allowedContribution,
      overContribution,
      taxRefund,
      projectedValue,
      taxFreeGrowth,
      taxDeferredValue,
    };
  }, [
    annualIncome,
    currentBalance,
    contribution,
    unusedRoom,
    years,
    annualReturn,
    taxRate,
    activeRRSP,
  ]);

  const switchType = (type) => {
    setAccountType(type);
    setContribution(type === "rrsp" ? 10000 : 7000);
  };

  return (
    <section className="registered-tool">
      <div className="registered-toggle">
        <button
          type="button"
          className={activeRRSP ? "active" : ""}
          onClick={() => switchType("rrsp")}
        >
          🇨🇦 RRSP
        </button>
        <button
          type="button"
          className={!activeRRSP ? "active" : ""}
          onClick={() => switchType("tfsa")}
        >
          🇨🇦 TFSA
        </button>
      </div>

      <div className="registered-market-badge">
        🇨🇦 Canada-only calculator shown in CAD. Uses 2026 default limits: RRSP ${result.rrspAnnualLimit.toLocaleString()} and TFSA ${result.tfsaAnnualLimit.toLocaleString()}.
      </div>

      <div className="registered-panel">
        <div className="registered-left">
          <div className="registered-title">
            <span>{activeRRSP ? "R" : "T"}</span>
            <div>
              <h2>{activeRRSP ? "RRSP Calculator" : "TFSA Calculator"}</h2>
              <p>
                {activeRRSP
                  ? "Estimate RRSP contribution room, tax refund potential, and tax-deferred retirement growth."
                  : "Estimate TFSA contribution room, tax-free growth, and long-term account value."}
              </p>
            </div>
          </div>

          <div className="registered-fields">
            <label>
              <span>Annual Income</span>
              <input type="number" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} />
            </label>

            <label>
              <span>Current {activeRRSP ? "RRSP" : "TFSA"} Balance</span>
              <input type="number" value={currentBalance} onChange={(e) => setCurrentBalance(Number(e.target.value))} />
            </label>

            <label>
              <span>Planned Contribution</span>
              <input type="number" value={contribution} onChange={(e) => setContribution(Number(e.target.value))} />
            </label>

            <label>
              <span>Unused Contribution Room</span>
              <input type="number" value={unusedRoom} onChange={(e) => setUnusedRoom(Number(e.target.value))} />
            </label>

            <label>
              <span>Timeline</span>
              <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </label>

            <label>
              <span>Expected Annual Return (%)</span>
              <input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} />
            </label>

            {activeRRSP && (
              <label className="registered-wide">
                <span>Estimated Marginal Tax Rate (%)</span>
                <input type="number" step="0.1" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
              </label>
            )}
          </div>
        </div>

        <div className="registered-right">
          <div className="registered-result-hero">
            <small>{activeRRSP ? "Projected RRSP Value" : "Projected TFSA Value"}</small>
            <strong>{formatter.format(result.projectedValue)}</strong>
            <p>
              Estimated future value after your current balance, planned contribution, return assumption, and timeline.
            </p>
          </div>

          <div className={result.overContribution > 0 ? "registered-alert danger" : "registered-alert safe"}>
            <small>{result.overContribution > 0 ? "Possible Over-Contribution" : "Estimated Room Check"}</small>
            <strong>{result.overContribution > 0 ? formatter.format(result.overContribution) : "Within estimate"}</strong>
            <p>
              {result.overContribution > 0
                ? "Reduce the contribution or confirm your exact CRA room before contributing."
                : "Your planned contribution is within this calculator’s estimated room."}
            </p>
          </div>

          <div className="registered-metrics">
            <div>
              <span>Estimated Contribution Room</span>
              <strong>{formatter.format(result.estimatedRoom)}</strong>
            </div>
            <div>
              <span>Allowed Contribution Used</span>
              <strong>{formatter.format(result.allowedContribution)}</strong>
            </div>
            <div>
              <span>{activeRRSP ? "Estimated Tax Refund" : "Estimated Tax-Free Growth"}</span>
              <strong>{formatter.format(activeRRSP ? result.taxRefund : result.taxFreeGrowth)}</strong>
            </div>
            <div>
              <span>{activeRRSP ? "Tax Treatment" : "Withdrawal Treatment"}</span>
              <strong>{activeRRSP ? "Tax-deferred" : "Tax-free"}</strong>
            </div>
          </div>

          <div className="registered-note">
            <strong>{activeRRSP ? "RRSP note:" : "TFSA note:"}</strong>
            <p>
              {activeRRSP
                ? "RRSP contributions may reduce taxable income now, but withdrawals are taxable later. Your exact room depends on your CRA Notice of Assessment and pension adjustments."
                : "TFSA contributions are not tax-deductible, but eligible withdrawals are generally tax-free. Withdrawals are added back to room on January 1 of the following year."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
