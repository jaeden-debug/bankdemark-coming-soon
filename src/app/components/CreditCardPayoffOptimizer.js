"use client";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

const starterCards = [
  { id: 1, name: "Card 1", balance: 4500, rate: 21.99, minPayment: 120 },
  { id: 2, name: "Card 2", balance: 2800, rate: 18.99, minPayment: 90 },
  { id: 3, name: "Card 3", balance: 1200, rate: 24.99, minPayment: 50 },
];

function simulatePayoff(cards, extraPayment, method) {
  let debts = cards
    .map((card) => ({
      ...card,
      balance: toNumber(card.balance),
      rate: toNumber(card.rate),
      minPayment: toNumber(card.minPayment),
    }))
    .filter((card) => card.balance > 0);

  let months = 0;
  let totalInterest = 0;
  const payoffOrder = [];

  if (!debts.length) {
    return { months: 0, years: 0, totalInterest: 0, totalPaid: 0, payoffOrder: [] };
  }

  while (debts.some((d) => d.balance > 0) && months < 1200) {
    months++;

    debts = debts.map((debt) => {
      if (debt.balance <= 0) return debt;
      const interest = debt.balance * (debt.rate / 100 / 12);
      totalInterest += interest;
      return { ...debt, balance: debt.balance + interest };
    });

    const activeDebts = debts.filter((d) => d.balance > 0);

    const target = [...activeDebts].sort((a, b) => {
      if (method === "avalanche") return b.rate - a.rate;
      return a.balance - b.balance;
    })[0];

    debts = debts.map((debt) => {
      if (debt.balance <= 0) return debt;
      const payment = Math.min(debt.minPayment, debt.balance);
      return { ...debt, balance: debt.balance - payment };
    });

    const refreshedTarget = debts.find((d) => d.id === target.id && d.balance > 0);

    if (refreshedTarget && toNumber(extraPayment) > 0) {
      refreshedTarget.balance -= Math.min(toNumber(extraPayment), refreshedTarget.balance);
    }

    debts = debts.map((debt) => (debt.id === refreshedTarget?.id ? refreshedTarget : debt));

    debts.forEach((debt) => {
      if (debt.balance <= 0 && !payoffOrder.includes(debt.name)) payoffOrder.push(debt.name);
    });
  }

  const startingBalance = cards.reduce((sum, card) => sum + toNumber(card.balance), 0);

  return {
    months,
    years: months / 12,
    totalInterest,
    totalPaid: startingBalance + totalInterest,
    payoffOrder,
  };
}

export default function CreditCardPayoffOptimizer() {
  const [country, setCountry] = useState("canada");
  const [shareStatus, setShareStatus] = useState("idle");
  const [cards, setCards] = useState(starterCards);
  const [extraPayment, setExtraPayment] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;

    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        balance: convertCurrencyAmount(card.balance, country, nextCountry),
        minPayment: convertCurrencyAmount(card.minPayment, country, nextCountry),
      }))
    );

    setExtraPayment((v) => convertCurrencyAmount(v, country, nextCountry));
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
    const avalanche = simulatePayoff(cards, extraPayment, "avalanche");
    const snowball = simulatePayoff(cards, extraPayment, "snowball");

    return {
      avalanche,
      snowball,
      interestSaved: snowball.totalInterest - avalanche.totalInterest,
      fasterMonths: snowball.months - avalanche.months,
      recommended: snowball.totalInterest - avalanche.totalInterest >= 0 ? "Avalanche" : "Snowball",
    };
  }, [cards, extraPayment]);

  const hasRequiredInputs = cards.some(
    (card) => toNumber(card.balance) > 0 && toNumber(card.rate) > 0 && toNumber(card.minPayment) > 0
  );

  const updateCard = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, [field]: value } : card))
    );
  };

  const addCard = () => {
    const nextId = Math.max(...cards.map((card) => card.id), 0) + 1;
    setCards([...cards, { id: nextId, name: `Card ${nextId}`, balance: "", rate: "", minPayment: "" }]);
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  async function handleShareResults() {
    if (!hasRequiredInputs || typeof window === "undefined") return;

    const payload = {
      calculator: "credit-card-payoff-calculator",
      country,
      inputs: { cards, extraPayment },
      results: result,
    };

    const encoded = encodeCalculatorState(payload);
    const shareUrl = `${window.location.origin}/share/credit-card-payoff-calculator?data=${encodeURIComponent(encoded)}`;

    try {
      setShareStatus("creating");

      if (navigator.share && document.hasFocus()) {
        await navigator.share({
          title: "My Credit Card Payoff Plan | BankDeMark",
          text: "View this BankDeMark credit card payoff plan.",
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
    <section className="cc-tool">
      <div className="country-toggle cc-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="cc-panel">
        <div className="cc-left">
          <div className="cc-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Credit Card Payoff Calculator</h2>
              <p>Compare avalanche vs snowball across multiple cards and estimate interest, payoff time, and strategy order.</p>
            </div>
          </div>

          <div className="cc-extra-row">
            <label>
              <span>Extra Monthly Payment</span>
              <input type="number" inputMode="numeric" placeholder="$250" value={extraPayment} onChange={(e) => setExtraPayment(e.target.value)} />
            </label>
            <button type="button" onClick={addCard}>+ Add Card</button>
          </div>

          <div className="cc-card-list">
            {cards.map((card) => (
              <div className="cc-card-input" key={card.id}>
                <div className="cc-card-top">
                  <input aria-label="Card name" value={card.name} onChange={(e) => updateCard(card.id, "name", e.target.value)} />
                  {cards.length > 1 && <button type="button" onClick={() => removeCard(card.id)}>Remove</button>}
                </div>

                <div className="cc-card-grid">
                  <label><span>Balance</span><input type="number" inputMode="numeric" placeholder="$4,500" value={card.balance} onChange={(e) => updateCard(card.id, "balance", e.target.value)} /></label>
                  <label><span>APR (%)</span><input type="number" inputMode="decimal" placeholder="21.99" value={card.rate} onChange={(e) => updateCard(card.id, "rate", e.target.value)} /></label>
                  <label><span>Minimum Payment</span><input type="number" inputMode="numeric" placeholder="$120" value={card.minPayment} onChange={(e) => updateCard(card.id, "minPayment", e.target.value)} /></label>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"} onClick={handleShareResults}>
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

        <div className="cc-right">
          <div className="cc-hero-card">
            <small>Recommended Strategy</small>
            <strong>{result.recommended}</strong>
            <p>Avalanche usually saves the most interest. Snowball can help if quick wins keep you consistent.</p>
          </div>

          <div className="cc-compare-grid">
            <div className="cc-method-card">
              <span>Avalanche</span>
              <h3>{result.avalanche.months} months</h3>
              <p>Total interest: <strong>{formatter.format(result.avalanche.totalInterest)}</strong></p>
              <p>Total paid: <strong>{formatter.format(result.avalanche.totalPaid)}</strong></p>
            </div>

            <div className="cc-method-card">
              <span>Snowball</span>
              <h3>{result.snowball.months} months</h3>
              <p>Total interest: <strong>{formatter.format(result.snowball.totalInterest)}</strong></p>
              <p>Total paid: <strong>{formatter.format(result.snowball.totalPaid)}</strong></p>
            </div>
          </div>

          <div className="cc-savings-card">
            <span>Strategy Difference</span>
            <h3>{formatter.format(Math.abs(result.interestSaved))}</h3>
            <p>{result.interestSaved >= 0 ? "Potential interest saved by using avalanche instead of snowball." : "Snowball is estimated slightly cheaper with these inputs."}</p>
            <p>Timeline difference: <strong>{Math.abs(result.fasterMonths)} months</strong></p>
          </div>

          <div className="cc-note">
            <strong>Optimizer note:</strong>
            <p>This is a planning estimate. Real card minimums, fees, promotional rates, and missed payments can change results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
