"use client";

import { useMemo, useState } from "react";

export default function DebtPayoffCalculator() {
  const [country, setCountry] = useState("canada");
  const [balance, setBalance] = useState(12000);
  const [rate, setRate] = useState(19.99);
  const [monthlyPayment, setMonthlyPayment] = useState(500);
  const [extraPayment, setExtraPayment] = useState(100);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    let remaining = balance;
    let months = 0;
    let interest = 0;
    const payment = monthlyPayment + extraPayment;
    const monthlyRate = rate / 100 / 12;

    if (payment <= remaining * monthlyRate) {
      return { months: Infinity, years: Infinity, interest: Infinity, totalPaid: Infinity };
    }

    while (remaining > 0 && months < 1200) {
      const monthlyInterest = remaining * monthlyRate;
      interest += monthlyInterest;
      remaining = remaining + monthlyInterest - payment;
      months++;
    }

    return {
      months,
      years: months / 12,
      interest,
      totalPaid: balance + interest,
    };
  }, [balance, rate, monthlyPayment, extraPayment]);

  return (
    <section className="bdm-tool debt-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => setCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-market-badge">
        {isCanada ? "🇨🇦 Debt payoff estimate shown in CAD." : "🇺🇸 Debt payoff estimate shown in USD."}
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>↓</span>
            <div>
              <h2>Debt Payoff Calculator</h2>
              <p>Estimate payoff time, total interest, and how extra payments can accelerate debt freedom.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Debt Balance</span><input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} /></label>
            <label><span>Interest Rate (%)</span><input type="number" step="0.01" value={rate} onChange={(e) => setRate(Number(e.target.value))} /></label>
            <label><span>Monthly Payment</span><input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(Number(e.target.value))} /></label>
            <label><span>Extra Monthly Payment</span><input type="number" value={extraPayment} onChange={(e) => setExtraPayment(Number(e.target.value))} /></label>
          </div>
        </div>

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Debt-Free Timeline</small>
            <strong>{result.months === Infinity ? "Not enough" : `${result.months} months`}</strong>
            <p>{result.months === Infinity ? "Your payment does not cover monthly interest." : `About ${result.years.toFixed(1)} years to debt freedom.`}</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Total Interest</span><strong>{result.interest === Infinity ? "—" : formatter.format(result.interest)}</strong></div>
            <div><span>Total Paid</span><strong>{result.totalPaid === Infinity ? "—" : formatter.format(result.totalPaid)}</strong></div>
            <div><span>Monthly Strategy</span><strong>{formatter.format(monthlyPayment + extraPayment)}</strong></div>
            <div><span>Extra Payment</span><strong>{formatter.format(extraPayment)}</strong></div>
          </div>

          <div className="bdm-note">
            <strong>Debt strategy note:</strong>
            <p>Use this for credit cards, lines of credit, personal loans, auto loans, or any debt with a balance, interest rate, and fixed monthly payment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
