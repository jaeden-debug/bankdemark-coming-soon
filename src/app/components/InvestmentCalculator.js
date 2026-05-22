"use client";

import { useMemo, useState } from "react";

export default function InvestmentCalculator() {
  const [country, setCountry] = useState("canada");
  const [startingAmount, setStartingAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);
  const [annualFee, setAnnualFee] = useState(0.25);
  const [taxDrag, setTaxDrag] = useState(0);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const grossRate = annualReturn / 100;
    const feeRate = annualFee / 100;
    const taxRate = taxDrag / 100;
    const netAnnualRate = Math.max(grossRate - feeRate - taxRate, -0.99);
    const monthlyRate = netAnnualRate / 12;
    const months = years * 12;

    const futureStarting =
      startingAmount * Math.pow(1 + monthlyRate, months);

    const futureContributions =
      monthlyRate === 0
        ? monthlyContribution * months
        : monthlyContribution *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const endingBalance = futureStarting + futureContributions;
    const totalInvested = startingAmount + monthlyContribution * months;
    const estimatedGain = endingBalance - totalInvested;
    const grossEndingNoFee = (() => {
      const grossMonthlyRate = grossRate / 12;
      const grossStart = startingAmount * Math.pow(1 + grossMonthlyRate, months);
      const grossContrib =
        grossMonthlyRate === 0
          ? monthlyContribution * months
          : monthlyContribution *
            ((Math.pow(1 + grossMonthlyRate, months) - 1) / grossMonthlyRate);
      return grossStart + grossContrib;
    })();

    const estimatedFeesAndDrag = grossEndingNoFee - endingBalance;

    return {
      endingBalance,
      totalInvested,
      estimatedGain,
      estimatedFeesAndDrag,
      netAnnualRate,
    };
  }, [startingAmount, monthlyContribution, annualReturn, years, annualFee, taxDrag]);

  return (
    <section className="investment-tool">
      <div className="country-toggle investment-country-toggle">
        <button
          type="button"
          className={isCanada ? "active" : ""}
          onClick={() => setCountry("canada")}
        >
          <span>🇨🇦</span> Canada
        </button>

        <button
          type="button"
          className={!isCanada ? "active" : ""}
          onClick={() => setCountry("usa")}
        >
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="investment-market-badge">
        {isCanada
          ? "🇨🇦 Canadian investment estimate shown in CAD. Useful for TFSA, RRSP, FHSA, RESP, and taxable accounts."
          : "🇺🇸 U.S. investment estimate shown in USD. Useful for 401(k), IRA, Roth IRA, brokerage, and taxable accounts."}
      </div>

      <div className="investment-panel">
        <div className="investment-left">
          <div className="investment-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>{isCanada ? "Canadian Investment Calculator" : "U.S. Investment Calculator"}</h2>
              <p>
                Estimate future portfolio value after contributions, return assumptions, fees, and optional tax drag.
              </p>
            </div>
          </div>

          <div className="investment-fields">
            <label>
              <span>Starting Investment</span>
              <input type="number" value={startingAmount} onChange={(e) => setStartingAmount(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Contribution</span>
              <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} />
            </label>

            <label>
              <span>Expected Annual Return (%)</span>
              <input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} />
            </label>

            <label>
              <span>Investment Timeline</span>
              <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} />
            </label>

            <label>
              <span>Annual Fees / MER (%)</span>
              <input type="number" step="0.01" value={annualFee} onChange={(e) => setAnnualFee(Number(e.target.value))} />
            </label>

            <label>
              <span>Optional Tax Drag (%)</span>
              <input type="number" step="0.1" value={taxDrag} onChange={(e) => setTaxDrag(Number(e.target.value))} />
            </label>
          </div>
        </div>

        <div className="investment-right">
          <div className="investment-result-hero">
            <small>{isCanada ? "Projected Portfolio Value in CAD" : "Projected Portfolio Value in USD"}</small>
            <strong>{formatter.format(result.endingBalance)}</strong>
            <p>
              Estimated final value after contributions, return, annual fees, and optional tax drag.
            </p>
          </div>

          <div className="investment-metrics">
            <div>
              <span>Total Invested</span>
              <strong>{formatter.format(result.totalInvested)}</strong>
            </div>
            <div>
              <span>Estimated Investment Gain</span>
              <strong>{formatter.format(result.estimatedGain)}</strong>
            </div>
            <div>
              <span>Estimated Fees / Drag</span>
              <strong>{formatter.format(result.estimatedFeesAndDrag)}</strong>
            </div>
            <div>
              <span>Net Annual Return</span>
              <strong>{(result.netAnnualRate * 100).toFixed(2)}%</strong>
            </div>
          </div>

          <div className="investment-note">
            <strong>{isCanada ? "Canada account examples:" : "U.S. account examples:"}</strong>
            <p>
              {isCanada
                ? "Use this to compare TFSA, RRSP, FHSA, RESP, non-registered investing, ETFs, index funds, and long-term portfolio scenarios."
                : "Use this to compare 401(k), IRA, Roth IRA, brokerage accounts, ETFs, index funds, and long-term portfolio scenarios."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
