"use client";

import { useMemo, useState } from "react";

const starterCards = [
  { id: 1, name: "Card 1", balance: 4500, rate: 21.99, minPayment: 120 },
  { id: 2, name: "Card 2", balance: 2800, rate: 18.99, minPayment: 90 },
  { id: 3, name: "Card 3", balance: 1200, rate: 24.99, minPayment: 50 },
];

function simulatePayoff(cards, extraPayment, method) {
  let debts = cards
    .map((card) => ({
      ...card,
      balance: Number(card.balance) || 0,
      rate: Number(card.rate) || 0,
      minPayment: Number(card.minPayment) || 0,
    }))
    .filter((card) => card.balance > 0);

  let months = 0;
  let totalInterest = 0;
  const payoffOrder = [];

  if (debts.length === 0) {
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

    let snowballCash = extraPayment;

    debts = debts.map((debt) => {
      if (debt.balance <= 0) return debt;

      const payment = Math.min(debt.minPayment, debt.balance);
      return { ...debt, balance: debt.balance - payment };
    });

    debts.forEach((debt) => {
      if (debt.balance <= 0 && !payoffOrder.includes(debt.name)) {
        payoffOrder.push(debt.name);
      }
    });

    const refreshedTarget = debts.find((d) => d.id === target.id && d.balance > 0);

    if (refreshedTarget && snowballCash > 0) {
      const extra = Math.min(snowballCash, refreshedTarget.balance);
      refreshedTarget.balance -= extra;
    }

    debts = debts.map((debt) => {
      if (debt.id === refreshedTarget?.id) return refreshedTarget;
      return debt;
    });

    debts.forEach((debt) => {
      if (debt.balance <= 0 && !payoffOrder.includes(debt.name)) {
        payoffOrder.push(debt.name);
      }
    });
  }

  const startingBalance = cards.reduce((sum, card) => sum + (Number(card.balance) || 0), 0);

  return {
    months,
    years: months / 12,
    totalInterest,
    totalPaid: startingBalance + totalInterest,
    payoffOrder,
  };
}

const toNumber = (value) => Number(value) || 0;

export default function CreditCardPayoffOptimizer() {
  const [country, setCountry] = useState("canada");
  const [cards, setCards] = useState(starterCards);
  const [extraPayment, setExtraPayment] = useState("");

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
    const interestSaved = snowball.totalInterest - avalanche.totalInterest;
    const fasterMonths = snowball.months - avalanche.months;

    return {
      avalanche,
      snowball,
      interestSaved,
      fasterMonths,
      recommended: interestSaved >= 0 ? "Avalanche" : "Snowball",
    };
  }, [cards, extraPayment]);

  const updateCard = (id, field, value) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, [field]: field === "name" ? value : Number(value) } : card
      )
    );
  };

  const addCard = () => {
    const nextId = Math.max(...cards.map((card) => card.id), 0) + 1;
    setCards([
      ...cards,
      { id: nextId, name: `Card ${nextId}`, balance: 1000, rate: 19.99, minPayment: 40 },
    ]);
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <section className="cc-tool">
      <div className="country-toggle cc-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => setCountry("canada")}>
          <span>🇨🇦</span> Canada
        </button>

        <button type="button" className={!isCanada ? "active" : ""} onClick={() => setCountry("usa")}>
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="cc-market-badge">
        {isCanada
          ? "🇨🇦 Credit card payoff estimate shown in CAD."
          : "🇺🇸 Credit card payoff estimate shown in USD."}
      </div>

      <div className="cc-panel">
        <div className="cc-left">
          <div className="cc-title">
            <span>⇄</span>
            <div>
              <h2>Credit Card Payoff Optimizer</h2>
              <p>
                Compare avalanche vs snowball across multiple cards and find the strategy
                that saves the most interest or builds the fastest momentum.
              </p>
            </div>
          </div>

          <div className="cc-extra-row">
            <label>
              <span>Extra Monthly Payment</span>
              <input
                type="text" inputMode="decimal"
                value={extraPayment}
                onChange={(e) => setExtraPayment(e.target.value)}
              />
            </label>
            <button type="button" onClick={addCard}>+ Add Card</button>
          </div>

          <div className="cc-card-list">
            {cards.map((card) => (
              <div className="cc-card-input" key={card.id}>
                <div className="cc-card-top">
                  <input
                    aria-label="Card name"
                    value={card.name}
                    onChange={(e) => updateCard(card.id, "name", e.target.value)}
                  />
                  {cards.length > 1 && (
                    <button type="button" onClick={() => removeCard(card.id)}>Remove</button>
                  )}
                </div>

                <div className="cc-card-grid">
                  <label>
                    <span>Balance</span>
                    <input
                      type="text" inputMode="decimal"
                      value={card.balance}
                      onChange={(e) => updateCard(card.id, "balance", e.target.value)}
                    />
                  </label>

                  <label>
                    <span>APR (%)</span>
                    <input
                      type="text" inputMode="decimal"
                      step="0.01"
                      value={card.rate}
                      onChange={(e) => updateCard(card.id, "rate", e.target.value)}
                    />
                  </label>

                  <label>
                    <span>Minimum Payment</span>
                    <input
                      type="text" inputMode="decimal"
                      value={card.minPayment}
                      onChange={(e) => updateCard(card.id, "minPayment", e.target.value)}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cc-right">
          <div className="cc-hero-card">
            <small>Recommended Strategy</small>
            <strong>{result.recommended}</strong>
            <p>
              Avalanche usually saves the most interest. Snowball can be better for
              motivation when you need quick wins.
            </p>
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
            <p>
              {result.interestSaved >= 0
                ? "Potential interest saved by using avalanche instead of snowball."
                : "Snowball is estimated slightly cheaper with these inputs."}
            </p>
            <p>
              Timeline difference: <strong>{Math.abs(result.fasterMonths)} months</strong>
            </p>
          </div>

          <div className="cc-order-card">
            <span>Suggested Avalanche Order</span>
            <ol>
              {[...cards]
                .sort((a, b) => Number(b.rate) - Number(a.rate))
                .map((card) => (
                  <li key={card.id}>
                    {card.name} — {Number(card.rate).toFixed(2)}% APR
                  </li>
                ))}
            </ol>
          </div>

          <div className="cc-note">
            <strong>Optimizer note:</strong>
            <p>
              This is a planning estimate. Real credit card minimum payments can change
              as balances fall, and fees or promotional rates can affect the result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
