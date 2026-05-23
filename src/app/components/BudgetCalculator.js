"use client";

import { useMemo, useState } from "react";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function BudgetCalculator() {
  const [country, setCountry] = useState("canada");
  const [income, setIncome] = useState("");
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [debt, setDebt] = useState("");
  const [savings, setSavings] = useState("");
  const [other, setOther] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setIncome((v) => convertCurrencyAmount(v, country, nextCountry));
    setHousing((v) => convertCurrencyAmount(v, country, nextCountry));
    setFood((v) => convertCurrencyAmount(v, country, nextCountry));
    setTransport((v) => convertCurrencyAmount(v, country, nextCountry));
    setDebt((v) => convertCurrencyAmount(v, country, nextCountry));
    setSavings((v) => convertCurrencyAmount(v, country, nextCountry));
    setOther((v) => convertCurrencyAmount(v, country, nextCountry));
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
    const expenses = toNumber(housing) + toNumber(food) + toNumber(transport) + toNumber(debt) + toNumber(savings) + toNumber(other);
    const leftover = toNumber(income) - expenses;
    const needs = toNumber(housing) + toNumber(food) + toNumber(transport);
    const wants = toNumber(other);
    const future = toNumber(savings) + toNumber(debt);
    return { expenses, leftover, needs, wants, future };
  }, [income, housing, food, transport, debt, savings, other]);

  return (
    <section className="bdm-tool budget-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
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
            <label><span>Monthly Take-Home Income</span><input type="text" inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} /></label>
            <label><span>Housing</span><input type="text" inputMode="decimal" value={housing} onChange={(e) => setHousing(e.target.value)} /></label>
            <label><span>Food / Groceries</span><input type="text" inputMode="decimal" value={food} onChange={(e) => setFood(e.target.value)} /></label>
            <label><span>Transportation</span><input type="text" inputMode="decimal" value={transport} onChange={(e) => setTransport(e.target.value)} /></label>
            <label><span>Debt Payments</span><input type="text" inputMode="decimal" value={debt} onChange={(e) => setDebt(e.target.value)} /></label>
            <label><span>Savings / Investing</span><input type="text" inputMode="decimal" value={savings} onChange={(e) => setSavings(e.target.value)} /></label>
            <label className="bdm-wide"><span>Other Spending</span><input type="text" inputMode="decimal" value={other} onChange={(e) => setOther(e.target.value)} /></label>
          </div>
        </div>

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Remaining Monthly Margin</small>
            <strong>{formatter.format(result.leftover)}</strong>
            <p>{result.leftover >= 0 ? "Money left after planned monthly expenses." : "You are spending more than monthly income."}</p>
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
