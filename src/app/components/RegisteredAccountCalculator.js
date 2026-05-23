"use client";

import { useMemo, useState } from "react";

const toNumber = (value) => Number(value) || 0;

export default function RegisteredAccountCalculator({ mode = "rrsp" }) {
  const isRRSP = mode === "rrsp";

  const [accountType, setAccountType] = useState(mode);
  const [annualIncome, setAnnualIncome] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [contribution, setContribution] = useState("");
  const [unusedRoom, setUnusedRoom] = useState("");
  const [years, setYears] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [taxRate, setTaxRate] = useState("");

  const activeRRSP = accountType === "rrsp";

  const formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const rrspAnnualLimit = 33810;
    const tfsaAnnualLimit = 7000;

    const incomeValue = toNumber(annualIncome);
    const balanceValue = toNumber(currentBalance);
    const contributionValue = toNumber(contribution);
    const unusedRoomValue = toNumber(unusedRoom);
    const yearsValue = toNumber(years);
    const returnValue = toNumber(annualReturn);
    const taxRateValue = toNumber(taxRate);

    const estimatedRRSPRoom = Math.min(incomeValue * 0.18, rrspAnnualLimit) + unusedRoomValue;
    const estimatedTFSARoom = tfsaAnnualLimit + unusedRoomValue;
    const estimatedRoom = activeRRSP ? estimatedRRSPRoom : estimatedTFSARoom;

    const allowedContribution = Math.min(contributionValue, Math.max(estimatedRoom, 0));
    const overContribution = Math.max(contributionValue - estimatedRoom, 0);

    const taxRefund = activeRRSP ? allowedContribution * (taxRateValue / 100) : 0;

    const monthlyRate = returnValue / 100 / 12;
    const months = yearsValue * 12;

    const projectedCurrent =
      balanceValue * Math.pow(1 + monthlyRate, months);

    const projectedContribution =
      allowedContribution * Math.pow(1 + returnValue / 100, yearsValue);

    const projectedValue = projectedCurrent + projectedContribution;

    const taxFreeGrowth = activeRRSP ? 0 : Math.max(projectedValue - balanceValue - allowedContribution, 0);
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
    setContribution("");
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
              <input type="text" inputMode="decimal" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} />
            </label>

            <label>
              <span>Current {activeRRSP ? "RRSP" : "TFSA"} Balance</span>
              <input type="text" inputMode="decimal" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)} />
            </label>

            <label>
              <span>Planned Contribution</span>
              <input type="text" inputMode="decimal" value={contribution} onChange={(e) => setContribution(e.target.value)} />
            </label>

            <label>
              <span>Unused Contribution Room</span>
              <input type="text" inputMode="decimal" value={unusedRoom} onChange={(e) => setUnusedRoom(e.target.value)} />
            </label>

            <label>
              <span>Timeline</span>
              <input type="text" inputMode="decimal" value={years} onChange={(e) => setYears(e.target.value)} />
            </label>

            <label>
              <span>Expected Annual Return (%)</span>
              <input type="text" inputMode="decimal" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} />
            </label>

            {activeRRSP && (
              <label className="registered-wide">
                <span>Estimated Marginal Tax Rate (%)</span>
                <input type="text" inputMode="decimal" step="0.1" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} />
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
