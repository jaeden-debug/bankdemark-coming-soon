"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
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
    const incomeValue = toNumber(income);
    const expenses =
      toNumber(housing) +
      toNumber(food) +
      toNumber(transport) +
      toNumber(debt) +
      toNumber(savings) +
      toNumber(other);

    const leftover = incomeValue - expenses;
    const needs = toNumber(housing) + toNumber(food) + toNumber(transport);
    const future = toNumber(savings) + toNumber(debt);
    const wants = toNumber(other);
    const savingsRate = incomeValue > 0 ? (toNumber(savings) / incomeValue) * 100 : 0;
    const expenseRate = incomeValue > 0 ? (expenses / incomeValue) * 100 : 0;

    return { incomeValue, expenses, leftover, needs, future, wants, savingsRate, expenseRate };
  }, [income, housing, food, transport, debt, savings, other]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "budget-calculator",
    getInputs: () => ({
        "Monthly Income": String(income ?? ""),
    }),
    getResults: () => ({
        "Monthly Savings": String(formatter.format(result.savings)),
        "Savings Rate": String(result.savingsRate.toFixed(1) + '%'),
    }),
  });


  const hasRequiredInputs =
    toNumber(income) > 0 &&
    [housing, food, transport, debt, savings, other].some((v) => toNumber(v) > 0);

  return (
    <section className="bdm-tool budget-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Budget Calculator</h2>
              <p>Build a monthly money map across income, needs, debt, savings, and lifestyle spending.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Monthly Take-Home Income</span><input type="number" inputMode="numeric" placeholder="$5,000" value={income} onChange={(e) => setIncome(e.target.value)} /></label>
            <label><span>Housing</span><input type="number" inputMode="numeric" placeholder="$1,600" value={housing} onChange={(e) => setHousing(e.target.value)} /></label>
            <label><span>Food / Groceries</span><input type="number" inputMode="numeric" placeholder="$700" value={food} onChange={(e) => setFood(e.target.value)} /></label>
            <label><span>Transportation</span><input type="number" inputMode="numeric" placeholder="$450" value={transport} onChange={(e) => setTransport(e.target.value)} /></label>
            <label><span>Debt Payments</span><input type="number" inputMode="numeric" placeholder="$300" value={debt} onChange={(e) => setDebt(e.target.value)} /></label>
            <label><span>Savings / Investing</span><input type="number" inputMode="numeric" placeholder="$750" value={savings} onChange={(e) => setSavings(e.target.value)} /></label>
            <label className="bdm-wide"><span>Other Spending</span><input type="number" inputMode="numeric" placeholder="$500" value={other} onChange={(e) => setOther(e.target.value)} /></label>
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

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Remaining Monthly Margin</small>
            <strong className={result.leftover >= 0 ? "money-green" : "money-red"}>{formatter.format(result.leftover)}</strong>
            <p>{result.leftover >= 0 ? "Money left after planned monthly expenses." : "You are spending more than monthly income."}</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Total Income</span><strong className="money-green">{formatter.format(result.incomeValue)}</strong></div>
            <div><span>Total Expenses</span><strong>{formatter.format(result.expenses)}</strong></div>
            <div><span>Needs</span><strong>{formatter.format(result.needs)}</strong></div>
            <div><span>Debt + Future</span><strong>{formatter.format(result.future)}</strong></div>
            <div><span>Savings Rate</span><strong>{result.savingsRate.toFixed(1)}%</strong></div>
            <div><span>Expense Rate</span><strong>{result.expenseRate.toFixed(1)}%</strong></div>
          </div>

          <div className="bdm-note">
            <strong>Budget strategy note:</strong>
            <p>A strong budget creates margin for debt payoff, emergency savings, investing, and financial freedom.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
