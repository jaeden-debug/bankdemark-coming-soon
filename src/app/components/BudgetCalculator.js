"use client";

import { useMemo, useState } from "react";

export default function BudgetCalculator() {
  const [country, setCountry] = useState("canada");
  const [income, setIncome] = useState(5000);
  const [housing, setHousing] = useState(1600);
  const [food, setFood] = useState(650);
  const [transport, setTransport] = useState(500);
  const [debt, setDebt] = useState(400);
  const [savings, setSavings] = useState(750);
  const [other, setOther] = useState(600);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const expenses = housing + food + transport + debt + savings + other;
    const leftover = income - expenses;
    const needs = housing + food + transport;
    const wants = other;
    const future = savings + debt;
    return { expenses, leftover, needs, wants, future };
  }, [income, housing, food, transport, debt, savings, other]);

  return (
    <section className="bdm-tool budget-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => setCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-market-badge">
        {isCanada ? "🇨🇦 Monthly budget estimate shown in CAD." : "🇺🇸 Monthly budget estimate shown in USD."}
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>≡</span>
            <div>
              <h2>Budget Calculator</h2>
              <p>Build a monthly money map across income, needs, debt, savings, and lifestyle spending.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Monthly Take-Home Income</span><input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} /></label>
            <label><span>Housing</span><input type="number" value={housing} onChange={(e) => setHousing(Number(e.target.value))} /></label>
            <label><span>Food / Groceries</span><input type="number" value={food} onChange={(e) => setFood(Number(e.target.value))} /></label>
            <label><span>Transportation</span><input type="number" value={transport} onChange={(e) => setTransport(Number(e.target.value))} /></label>
            <label><span>Debt Payments</span><input type="number" value={debt} onChange={(e) => setDebt(Number(e.target.value))} /></label>
            <label><span>Savings / Investing</span><input type="number" value={savings} onChange={(e) => setSavings(Number(e.target.value))} /></label>
            <label className="bdm-wide"><span>Other Spending</span><input type="number" value={other} onChange={(e) => setOther(Number(e.target.value))} /></label>
          </div>
        </div>

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Monthly Cash Flow</small>
            <strong>{formatter.format(result.leftover)}</strong>
            <p>{result.leftover >= 0 ? "Positive monthly margin." : "You are spending more than monthly income."}</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Total Expenses</span><strong>{formatter.format(result.expenses)}</strong></div>
            <div><span>Needs</span><strong>{formatter.format(result.needs)}</strong></div>
            <div><span>Debt + Future</span><strong>{formatter.format(result.future)}</strong></div>
            <div><span>Lifestyle / Other</span><strong>{formatter.format(result.wants)}</strong></div>
          </div>

          <div className="bdm-note">
            <strong>Budget strategy note:</strong>
            <p>A strong budget does not just track spending. It creates margin for debt payoff, emergency savings, investing, and financial freedom.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
