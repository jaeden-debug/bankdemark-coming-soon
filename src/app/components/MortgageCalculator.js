"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function MortgageCalculator() {
  const [country, setCountry] = useState("canada");

  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("25");
  const [termYears, setTermYears] = useState("5");
  const [taxes, setTaxes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [hoa, setHoa] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;

    setHomePrice((v) => convertCurrencyAmount(v, country, nextCountry));
    setDownPayment((v) => convertCurrencyAmount(v, country, nextCountry));
    setTaxes((v) => convertCurrencyAmount(v, country, nextCountry));
    setInsurance((v) => convertCurrencyAmount(v, country, nextCountry));
    setHoa((v) => convertCurrencyAmount(v, country, nextCountry));

    setYears(nextCountry === "canada" ? "25" : "30");
    setRate(nextCountry === "canada" ? "5.25" : "6.5");
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
    const price = toNumber(homePrice);
    const down = toNumber(downPayment);
    const baseLoan = Math.max(price - down, 0);
    const downPercent = price > 0 ? down / price : 0;

    let insurancePremium = 0;

    if (isCanada && downPercent > 0 && downPercent < 0.2) {
      if (downPercent >= 0.15) insurancePremium = baseLoan * 0.028;
      else if (downPercent >= 0.1) insurancePremium = baseLoan * 0.031;
      else insurancePremium = baseLoan * 0.04;
    }

    const loan = baseLoan + insurancePremium;
    const months = Math.max(toNumber(years) * 12, 1);
    const monthlyRate = toNumber(rate) / 100 / 12;

    const principalInterest =
      loan <= 0
        ? 0
        : monthlyRate === 0
          ? loan / months
          : loan *
            (monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);

    const monthlyTaxes = toNumber(taxes) / 12;
    const monthlyInsurance = toNumber(insurance) / 12;
    const monthlyFees = toNumber(hoa);
    const monthlyTotal = principalInterest + monthlyTaxes + monthlyInsurance + monthlyFees;
    const totalPaid = monthlyTotal * months;
    const totalInterest = Math.max(principalInterest * months - loan, 0);

    return {
      baseLoan,
      insurancePremium,
      loan,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyFees,
      monthlyTotal,
      totalPaid,
      totalInterest,
      downPercent,
    };
  }, [homePrice, downPayment, rate, years, taxes, insurance, hoa, isCanada]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "mortgage-calculator",
    getInputs: () => ({
        "Home Price": String(homePrice ?? ""),
        "Down Payment": String(downPayment ?? ""),
        "Interest Rate (%)": String(interestRate ?? ""),
        "Amortization (years)": String(amortizationYears ?? ""),
    }),
    getResults: () => ({
        "Monthly Payment": String(formatter.format(result.monthlyPayment)),
        "Total Interest": String(formatter.format(result.totalInterest)),
        "Total Cost": String(formatter.format(result.totalCost)),
    }),
  });


  const hasRequiredInputs = toNumber(homePrice) > 0 && toNumber(rate) > 0 && toNumber(years) > 0;

  return (
    <section className="mortgage-tool">
      <div className="country-toggle mortgage-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="mortgage-panel">
        <div className="mortgage-inputs">
          <div className="mortgage-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Mortgage Calculator</h2>
              <p>Estimate your monthly payment, loan amount, interest, taxes, insurance, and total home ownership cost.</p>
            </div>
          </div>

          <div className="mortgage-fields">
            <label><span>Home Price</span><input type="number" inputMode="numeric" placeholder="$500,000" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} /></label>
            <label><span>Down Payment</span><input type="number" inputMode="numeric" placeholder="$75,000" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} /></label>
            <label><span>Interest Rate (%)</span><input type="number" inputMode="decimal" placeholder="5.25" value={rate} onChange={(e) => setRate(e.target.value)} /></label>

            {isCanada && (
              <label>
                <span>Mortgage Term</span>
                <select value={termYears} onChange={(e) => setTermYears(e.target.value)}>
                  <option value="1">1 year</option>
                  <option value="2">2 years</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                </select>
              </label>
            )}

            <label>
              <span>{isCanada ? "Amortization Period" : "Loan Term"}</span>
              <select value={years} onChange={(e) => setYears(e.target.value)}>
                {isCanada ? (
                  <>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                    <option value="30">30 years</option>
                  </>
                ) : (
                  <>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="30">30 years</option>
                  </>
                )}
              </select>
            </label>

            <label><span>Annual Property Tax</span><input type="number" inputMode="numeric" placeholder="$4,500" value={taxes} onChange={(e) => setTaxes(e.target.value)} /></label>
            <label><span>Annual Home Insurance</span><input type="number" inputMode="numeric" placeholder="$1,800" value={insurance} onChange={(e) => setInsurance(e.target.value)} /></label>
            <label><span>{isCanada ? "Monthly Condo Fees" : "Monthly HOA Fees"}</span><input type="number" inputMode="numeric" placeholder="$250" value={hoa} onChange={(e) => setHoa(e.target.value)} /></label>
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

        <div className="mortgage-results">
          <div className="mortgage-main-result">
            <small>Estimated Monthly Payment</small>
            <strong>{formatter.format(result.monthlyTotal)}</strong>
            <p>Includes principal, interest, estimated property tax, insurance, and {isCanada ? "condo fees" : "HOA fees"}.</p>
          </div>

          <div className="mortgage-breakdown">
            <div><span>Base Loan</span><strong>{formatter.format(result.baseLoan)}</strong></div>
            <div><span>{isCanada ? "Default Insurance" : "PMI Estimate"}</span><strong>{formatter.format(isCanada ? result.insurancePremium : 0)}</strong></div>
            <div><span>Total Loan</span><strong>{formatter.format(result.loan)}</strong></div>
            <div><span>Principal + Interest</span><strong>{formatter.format(result.principalInterest)}</strong></div>
            <div><span>Monthly Taxes</span><strong>{formatter.format(result.monthlyTaxes)}</strong></div>
            <div><span>Total Interest</span><strong>{formatter.format(result.totalInterest)}</strong></div>
          </div>

          <div className="mortgage-country-note">
            <strong>{isCanada ? "Canada note:" : "U.S. note:"}</strong>
            <p>
              {isCanada
                ? `Canadian mortgages commonly use an amortization period and a shorter mortgage term. This estimate uses a ${termYears}-year term label while calculating payments over the selected amortization.`
                : "U.S. mortgages commonly use fixed 15-year or 30-year terms. Add lender-specific PMI manually if required."}
            </p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
