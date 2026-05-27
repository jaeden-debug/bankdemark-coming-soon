"use client";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function DebtPayoffCalculator() {
  const [country, setCountry] = useState("canada");
  const [shareStatus, setShareStatus] = useState("idle");

  const [balance, setBalance] = useState("");
  const [rate, setRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [extraPayment, setExtraPayment] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;
    setBalance((v) => convertCurrencyAmount(v, country, nextCountry));
    setMonthlyPayment((v) => convertCurrencyAmount(v, country, nextCountry));
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
    let remaining = toNumber(balance);
    let months = 0;
    let interest = 0;

    const payment = toNumber(monthlyPayment) + toNumber(extraPayment);
    const monthlyRate = toNumber(rate) / 100 / 12;

    if (remaining <= 0 || payment <= 0) {
      return { months: 0, years: 0, interest: 0, totalPaid: 0, payment, impossible: false };
    }

    if (monthlyRate > 0 && payment <= remaining * monthlyRate) {
      return { months: Infinity, years: Infinity, interest: Infinity, totalPaid: Infinity, payment, impossible: true };
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
      totalPaid: toNumber(balance) + interest,
      payment,
      impossible: false,
    };
  }, [balance, rate, monthlyPayment, extraPayment]);

  const hasRequiredInputs =
    toNumber(balance) > 0 &&
    toNumber(monthlyPayment) > 0 &&
    toNumber(rate) >= 0;

  async function handleShareResults() {
    if (!hasRequiredInputs || typeof window === "undefined") return;

    const payload = {
      calculator: "debt-payoff-calculator",
      country,
      inputs: { balance, rate, monthlyPayment, extraPayment },
      results: result,
    };

    const encoded = encodeCalculatorState(payload);
    const shareUrl = `${window.location.origin}/share/debt-payoff-calculator?data=${encodeURIComponent(encoded)}`;

    try {
      setShareStatus("creating");

      if (navigator.share && document.hasFocus()) {
        await navigator.share({
          title: "My Debt Payoff Snapshot | BankDeMark",
          text: "View this BankDeMark debt payoff snapshot.",
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
    <section className="bdm-tool debt-tool">
      <div className="country-toggle">
        <button className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")} type="button">🇨🇦 Canada</button>
        <button className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")} type="button">🇺🇸 United States</button>
      </div>

      <div className="bdm-panel">
        <div className="bdm-left">
          <div className="bdm-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Debt Payoff Calculator</h2>
              <p>Estimate payoff time, total interest, and how extra payments can accelerate debt freedom.</p>
            </div>
          </div>

          <div className="bdm-fields">
            <label><span>Debt Balance</span><input type="number" inputMode="numeric" placeholder="$12,000" value={balance} onChange={(e) => setBalance(e.target.value)} /></label>
            <label><span>Interest Rate (%)</span><input type="number" inputMode="decimal" step="0.01" placeholder="19.99" value={rate} onChange={(e) => setRate(e.target.value)} /></label>
            <label><span>Monthly Payment</span><input type="number" inputMode="numeric" placeholder="$400" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} /></label>
            <label><span>Extra Monthly Payment</span><input type="number" inputMode="numeric" placeholder="$100" value={extraPayment} onChange={(e) => setExtraPayment(e.target.value)} /></label>
          </div>

          <button
            type="button"
            className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"}
            onClick={handleShareResults}
          >
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

        <div className="bdm-right">
          <div className="bdm-result-hero">
            <small>Debt-Free Timeline</small>
            <strong>{result.impossible ? "Not enough" : `${result.months} months`}</strong>
            <p>{result.impossible ? "Your payment does not cover monthly interest." : `About ${result.years.toFixed(1)} years to debt freedom.`}</p>
          </div>

          <div className="bdm-metrics">
            <div><span>Total Interest</span><strong>{result.interest === Infinity ? "—" : formatter.format(result.interest)}</strong></div>
            <div><span>Total Paid</span><strong>{result.totalPaid === Infinity ? "—" : formatter.format(result.totalPaid)}</strong></div>
            <div><span>Monthly Strategy</span><strong>{formatter.format(result.payment)}</strong></div>
            <div><span>Extra Payment</span><strong>{formatter.format(toNumber(extraPayment))}</strong></div>
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
