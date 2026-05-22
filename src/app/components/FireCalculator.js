"use client";

import { useMemo, useState } from "react";

export default function FireCalculator() {
  const [country, setCountry] = useState("canada");
  const [age, setAge] = useState(32);
  const [invested, setInvested] = useState(75000);
  const [annualSpending, setAnnualSpending] = useState(50000);
  const [monthlyContribution, setMonthlyContribution] = useState(1500);
  const [returnRate, setReturnRate] = useState(7);
  const [withdrawalRate, setWithdrawalRate] = useState(4);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const fireNumber = annualSpending / (withdrawalRate / 100);
    const monthlyRate = returnRate / 100 / 12;
    let balance = invested;
    let months = 0;

    while (balance < fireNumber && months < 1200) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      months++;
    }

    const coastYears = invested > 0 && returnRate > 0
      ? Math.max(Math.log(fireNumber / invested) / Math.log(1 + returnRate / 100), 0)
      : Infinity;

    return {
      fireNumber,
      monthsToFire: months >= 1200 ? Infinity : months,
      yearsToFire: months >= 1200 ? Infinity : months / 12,
      fireAge: months >= 1200 ? Infinity : age + months / 12,
      coastYears,
      coastAge: coastYears === Infinity ? Infinity : age + coastYears,
    };
  }, [age, invested, annualSpending, monthlyContribution, returnRate, withdrawalRate]);

  return (
    <section className="bdm-tool fire-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => setCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-market-badge">
        {isCanada ? "🇨🇦 FIRE estimate shown in CAD." : "🇺🇸 FIRE estimate shown in USD."}
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>🔥</span>
            <div>
              <h2>FIRE / Coast FIRE Calculator</h2>
              <p>Estimate your FIRE number, time to financial independence, and Coast FIRE timeline.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Current Age</span><input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} /></label>
            <label><span>Current Invested Assets</span><input type="number" value={invested} onChange={(e) => setInvested(Number(e.target.value))} /></label>
            <label><span>Annual Spending Goal</span><input type="number" value={annualSpending} onChange={(e) => setAnnualSpending(Number(e.target.value))} /></label>
            <label><span>Monthly Investment</span><input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} /></label>
            <label><span>Expected Annual Return (%)</span><input type="number" step="0.1" value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))} /></label>
            <label><span>Withdrawal Rate (%)</span><input type="number" step="0.1" value={withdrawalRate} onChange={(e) => setWithdrawalRate(Number(e.target.value))} /></label>
          </div>
        </div>

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Your FIRE Number</small>
            <strong>{formatter.format(result.fireNumber)}</strong>
            <p>Based on annual spending and withdrawal rate.</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Years to FIRE</span><strong>{result.yearsToFire === Infinity ? "100+" : result.yearsToFire.toFixed(1)}</strong></div>
            <div><span>Estimated FIRE Age</span><strong>{result.fireAge === Infinity ? "—" : result.fireAge.toFixed(1)}</strong></div>
            <div><span>Coast FIRE Years</span><strong>{result.coastYears === Infinity ? "—" : result.coastYears.toFixed(1)}</strong></div>
            <div><span>Coast FIRE Age</span><strong>{result.coastAge === Infinity ? "—" : result.coastAge.toFixed(1)}</strong></div>
          </div>

          <div className="bdm-note">
            <strong>FIRE strategy note:</strong>
            <p>FIRE math is sensitive to spending, returns, inflation, taxes, and withdrawal assumptions. Test conservative scenarios before making life decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
