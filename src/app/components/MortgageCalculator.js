"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const toNumber = (value) => Number(value) || 0;

export default function MortgageCalculator() {
  const [country, setCountry] = useState("canada");
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [termYears, setTermYears] = useState("");
  const [taxes, setTaxes] = useState("");
  const [insurance, setInsurance] = useState("");
  const [hoa, setHoa] = useState("");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const baseLoan = Math.max(homePrice - downPayment, 0);
    const downPercent = homePrice > 0 ? downPayment / homePrice : 0;

    let insurancePremium = 0;

    if (isCanada && downPercent > 0 && downPercent < 0.2) {
      if (downPercent >= 0.15) insurancePremium = baseLoan * 0.028;
      else if (downPercent >= 0.1) insurancePremium = baseLoan * 0.031;
      else insurancePremium = baseLoan * 0.04;
    }

    const loan = baseLoan + insurancePremium;
    const months = toNumber(years) * 12;
    const monthlyRate = toNumber(rate) / 100 / 12;

    const principalInterest =
      monthlyRate === 0
        ? loan / months
        : loan *
          (monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

    const monthlyTaxes = toNumber(taxes) / 12;
    const monthlyInsurance = insurance / 12;
    const monthlyTotal = principalInterest + monthlyTaxes + monthlyInsurance + hoa;
    const totalPaid = monthlyTotal * months;
    const totalInterest = principalInterest * months - loan;

    return {
      loan,
      baseLoan,
      insurancePremium,
      principalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyTotal,
      totalPaid,
      totalInterest,
      downPercent,
    };
  }, [homePrice, downPayment, rate, years, taxes, insurance, hoa, isCanada]);

  return (
    <section className="mortgage-tool">
      <div className="country-toggle">
        <button
          type="button"
          className={isCanada ? "active" : ""}
          onClick={() => {
            setCountry("canada");
            setYears(25);
            setRate(5.25);
          }}
        >
          <span>🇨🇦</span> Canada
        </button>

        <button
          type="button"
          className={!isCanada ? "active" : ""}
          onClick={() => {
            setCountry("usa");
            setYears(30);
            setRate(6.5);
          }}
        >
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="mortgage-market-badge">
        {isCanada ? "🇨🇦 Canadian mortgage estimate with CMHC-style default insurance logic." : "🇺🇸 U.S. mortgage estimate with standard monthly payment logic."}
      </div>

      <div className="mortgage-panel">
        <div className="mortgage-inputs">
          <div className="mortgage-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>{isCanada ? "Canadian Mortgage Calculator" : "U.S. Mortgage Calculator"}</h2>
              <p>
                Estimate your monthly payment, loan amount, interest, taxes, insurance, and total ownership cost.
              </p>
            </div>
          </div>

          <div className="mortgage-fields">
            <label>
              <span>Home Price</span>
              <input type="text" inputMode="decimal" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} />
            </label>

            <label>
              <span>Down Payment</span>
              <input type="text" inputMode="decimal" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} />
            </label>

            <label>
              <span>Interest Rate (%)</span>
              <input type="text" inputMode="decimal" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} />
            </label>

            {isCanada && (
              <label>
                <span>Mortgage Term</span>
                <select value={termYears} onChange={(e) => setTermYears(e.target.value)}>
                  <option value={1}>1 year</option>
                  <option value={2}>2 years</option>
                  <option value={3}>3 years</option>
                  <option value={4}>4 years</option>
                  <option value={5}>5 years</option>
                </select>
              </label>
            )}

            <label>
              <span>{isCanada ? "Amortization Period" : "Loan Term"}</span>
              <select value={years} onChange={(e) => setYears(e.target.value)}>
                {isCanada ? (
                  <>
                    <option value={20}>20 years</option>
                    <option value={25}>25 years</option>
                    <option value={30}>30 years</option>
                  </>
                ) : (
                  <>
                    <option value={15}>15 years</option>
                    <option value={20}>20 years</option>
                    <option value={30}>30 years</option>
                  </>
                )}
              </select>
            </label>

            <label>
              <span>Annual Property Tax</span>
              <input type="text" inputMode="decimal" value={taxes} onChange={(e) => setTaxes(e.target.value)} />
            </label>

            <label>
              <span>Annual Home Insurance</span>
              <input type="text" inputMode="decimal" value={insurance} onChange={(e) => setInsurance(e.target.value)} />
            </label>

            <label>
              <span>{isCanada ? "Monthly Condo Fees" : "Monthly HOA Fees"}</span>
              <input type="text" inputMode="decimal" value={hoa} onChange={(e) => setHoa(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="mortgage-results">
          <div className="mortgage-main-result">
            <small>{isCanada ? "Estimated Canadian Monthly Payment" : "Estimated U.S. Monthly Payment"}</small>
            <strong>{formatter.format(result.monthlyTotal)}</strong>
            <p>
              Includes principal, interest, estimated property tax, insurance, and {isCanada ? "condo fees" : "HOA fees"}.
            </p>
          </div>

          <div className="mortgage-breakdown">
            <div><span>Base Loan</span><strong>{formatter.format(result.baseLoan)}</strong></div>
            <div><span>{isCanada ? "CMHC Estimate" : "PMI / Extra Insurance"}</span><strong>{formatter.format(isCanada ? result.insurancePremium : 0)}</strong></div>
            <div><span>Total Loan</span><strong>{formatter.format(result.loan)}</strong></div>
            <div><span>Principal + Interest</span><strong>{formatter.format(result.principalInterest)}</strong></div>
            <div><span>Monthly Taxes</span><strong>{formatter.format(result.monthlyTaxes)}</strong></div>
            <div><span>Total Interest</span><strong>{formatter.format(result.totalInterest)}</strong></div>
          </div>

          <div className="mortgage-country-note">
            <strong>{isCanada ? "Canada note:" : "U.S. note:"}</strong>
            <p>
              {isCanada
                ? `Canadian mortgages commonly use an amortization period and a shorter mortgage term. This estimate uses a ${termYears}-year term label for planning, while calculating payment over the selected amortization.`
                : "U.S. mortgages commonly use fixed 15-year or 30-year loan terms. PMI is not fully calculated in this V1, so add lender-specific PMI manually when needed."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
