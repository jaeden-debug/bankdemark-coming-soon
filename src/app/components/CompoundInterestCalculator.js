"use client";

import { useMemo, useState } from "react";
import { triggerCalculatorShare } from "@/app/lib/triggerCalculatorShare";

const toNumber = (value) => Number(value) || 0;

export default function CompoundInterestCalculator() {
  const [country, setCountry] = useState("canada");
  const [principal, setPrincipal] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("12");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const hasRequiredInputs =
    principal !== "" &&
    monthlyContribution !== "" &&
    annualReturn !== "" &&
    years !== "";

  const result = useMemo(() => {
    const principalValue = toNumber(principal);
    const monthlyContributionValue = toNumber(monthlyContribution);
    const annualReturnValue = toNumber(annualReturn);
    const yearsValue = toNumber(years);
    const frequencyValue = Math.max(toNumber(compoundFrequency), 1);

    const r = annualReturnValue / 100;
    const n = frequencyValue;
    const t = yearsValue;
    const months = yearsValue * 12;

    const futurePrincipal = principalValue * Math.pow(1 + r / n, n * t);
    const monthlyRate = r / 12;

    const futureContributions =
      monthlyRate === 0
        ? monthlyContributionValue * months
        : monthlyContributionValue *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const futureValue = futurePrincipal + futureContributions;
    const totalContributions = principalValue + monthlyContributionValue * months;
    const estimatedGrowth = futureValue - totalContributions;

    return {
      futureValue,
      totalContributions,
      estimatedGrowth,
    };
  }, [principal, monthlyContribution, annualReturn, years, compoundFrequency]);

  return (
    <section className="compound-tool">
      <div className="country-toggle compound-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => setCountry("canada")}>
          🇨🇦 Canada
        </button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")}>
          🇺🇸 United States
        </button>
      </div>

      <div className="tool-panel">
        <div className="tool-column tool-inputs">
          <div className="tool-step-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Compound Interest Calculator</h2>
              <p>
                Estimate future value from starting money, monthly contributions,
                return rate, timeline, and compounding frequency.
              </p>
            </div>
          </div>

          <div className="tool-fields">
            <label className="tool-field">
              <div className="tool-copy"><strong>Starting Amount</strong><small>Example: $5,000</small></div>
              <input type="number" inputMode="numeric" placeholder="$5,000" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </label>

            <label className="tool-field">
              <div className="tool-copy"><strong>Monthly Contribution</strong><small>Example: $500</small></div>
              <input type="number" inputMode="numeric" placeholder="$500" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} />
            </label>

            <label className="tool-field">
              <div className="tool-copy"><strong>Annual Return (%)</strong><small>Example: 7%</small></div>
              <input type="number" inputMode="decimal" step="0.1" placeholder="7" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} />
            </label>

            <label className="tool-field">
              <div className="tool-copy"><strong>Timeline</strong><small>Years invested</small></div>
              <input type="number" inputMode="numeric" placeholder="25" value={years} onChange={(e) => setYears(e.target.value)} />
            </label>

            <label className="tool-field">
              <div className="tool-copy"><strong>Compounding Frequency</strong><small>Monthly is common</small></div>
              <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)}>
                <option value={1}>Annually</option>
                <option value={2}>Semi-annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </label>
          </div>

          <button
            type="button"
            className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"}
            onClick={() => hasRequiredInputs && triggerCalculatorShare()}
          >
            {hasRequiredInputs ? "Share Results" : "Results calculate automatically"}
          </button>
        </div>

        <div className="tool-column tool-results">
          <div className="result-card featured">
            <small>{isCanada ? "Future Value in CAD" : "Future Value in USD"}</small>
            <strong className="money-green">{formatter.format(result.futureValue)}</strong>
            <p>Estimated value after contributions and compound growth.</p>
          </div>

          <div className="compound-metrics bdm-metrics">
            <div><span>Total Contributions</span><strong>{formatter.format(result.totalContributions)}</strong></div>
            <div><span>Estimated Growth</span><strong>{formatter.format(result.estimatedGrowth)}</strong></div>
          </div>

          <div className="tool-note">
            <strong>Compound growth note:</strong>
            <p>
              Compound interest rewards time, consistency, and reinvested growth.
              Use conservative assumptions and compare multiple scenarios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
