"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useMemo, useState } from "react";
import { encodeCalculatorState } from "@/app/lib/calculatorShare";
import { convertCurrencyAmount } from "@/app/lib/currencyConversion";

const toNumber = (value) => Number(value) || 0;

export default function RentVsBuyCalculator() {
  const [country, setCountry] = useState("canada");

  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageYears, setMortgageYears] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [rentIncrease, setRentIncrease] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [homeGrowth, setHomeGrowth] = useState("");
  const [investmentReturn, setInvestmentReturn] = useState("");
  const [years, setYears] = useState("");

  const switchCountry = (nextCountry) => {
    if (nextCountry === country) return;

    setHomePrice((v) => convertCurrencyAmount(v, country, nextCountry));
    setDownPayment((v) => convertCurrencyAmount(v, country, nextCountry));
    setMonthlyRent((v) => convertCurrencyAmount(v, country, nextCountry));
    setPropertyTax((v) => convertCurrencyAmount(v, country, nextCountry));
    setInsurance((v) => convertCurrencyAmount(v, country, nextCountry));

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
    const rate = toNumber(interestRate);
    const mortgageTerm = Math.max(toNumber(mortgageYears), 1);
    const rent = toNumber(monthlyRent);
    const rentGrowth = toNumber(rentIncrease);
    const tax = toNumber(propertyTax);
    const ins = toNumber(insurance);
    const maint = toNumber(maintenance);
    const homeAppreciation = toNumber(homeGrowth);
    const investReturn = toNumber(investmentReturn);
    const compareYears = Math.max(toNumber(years), 0);

    const loan = Math.max(price - down, 0);
    const monthlyRate = rate / 100 / 12;
    const payments = mortgageTerm * 12;

    const mortgagePayment =
      loan <= 0
        ? 0
        : monthlyRate === 0
          ? loan / payments
          : loan *
            (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
            (Math.pow(1 + monthlyRate, payments) - 1);

    let remainingMortgage = loan;
    let totalBuyingCost = down;
    let totalRentCost = 0;
    let renterInvestmentValue = down;
    let currentRent = rent;

    for (let year = 1; year <= compareYears; year++) {
      const yearlyBuyingCost =
        mortgagePayment * 12 +
        tax +
        ins +
        price * (maint / 100);

      const yearlyRentCost = currentRent * 12;

      totalBuyingCost += yearlyBuyingCost;
      totalRentCost += yearlyRentCost;

      const investableDifference = Math.max(yearlyBuyingCost - yearlyRentCost, 0);
      renterInvestmentValue =
        renterInvestmentValue * (1 + investReturn / 100) + investableDifference;

      currentRent *= 1 + rentGrowth / 100;
    }

    for (let month = 1; month <= compareYears * 12; month++) {
      const interest = remainingMortgage * monthlyRate;
      const principal = Math.max(mortgagePayment - interest, 0);
      remainingMortgage = Math.max(remainingMortgage - principal, 0);
    }

    const futureHomeValue = price * Math.pow(1 + homeAppreciation / 100, compareYears);
    const ownerEquity = futureHomeValue - remainingMortgage;
    const advantage = ownerEquity - renterInvestmentValue;

    return {
      loan,
      mortgagePayment,
      totalBuyingCost,
      totalRentCost,
      futureHomeValue,
      remainingMortgage,
      ownerEquity,
      renterInvestmentValue,
      advantage,
      winner: advantage >= 0 ? "Buying" : "Renting",
    };
  }, [
    homePrice,
    downPayment,
    interestRate,
    mortgageYears,
    monthlyRent,
    rentIncrease,
    propertyTax,
    insurance,
    maintenance,
    homeGrowth,
    investmentReturn,
    years,
  ]);

  const { shareStatus, shareUrl, handleShare, copyShareUrl } = useCalculatorShare({
    calculator: "rent-vs-buy-calculator",
    getInputs: () => ({
        "Home Price": String(homePrice ?? ""),
        "Monthly Rent": String(monthlyRent ?? ""),
        "Down Payment (%)": String(downPaymentPct ?? ""),
    }),
    getResults: () => ({
        "Buy Total Cost": String(formatter.format(result.buyTotalCost)),
        "Rent Total Cost": String(formatter.format(result.rentTotalCost)),
    }),
  });


  const hasRequiredInputs =
    toNumber(homePrice) > 0 &&
    toNumber(monthlyRent) > 0 &&
    toNumber(years) > 0;

  return (
    <section className="rentbuy-tool">
      <div className="country-toggle rentbuy-country-toggle">
        <button type="button" className={isCanada ? "active" : ""} onClick={() => switchCountry("canada")}>🇨🇦 Canada</button>
        <button type="button" className={!isCanada ? "active" : ""} onClick={() => switchCountry("usa")}>🇺🇸 United States</button>
      </div>

      <div className="rentbuy-panel">
        <div className="rentbuy-left">
          <div className="rentbuy-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>Rent vs Buy Calculator</h2>
              <p>Compare the long-term cost, equity, investment value, and wealth impact of renting versus buying.</p>
            </div>
          </div>

          <div className="rentbuy-section-label">Buying Inputs</div>
          <div className="rentbuy-fields">
            <label><span>Home Price</span><input type="number" inputMode="numeric" placeholder="$500,000" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} /></label>
            <label><span>Down Payment</span><input type="number" inputMode="numeric" placeholder="$50,000" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} /></label>
            <label><span>Mortgage Rate (%)</span><input type="number" inputMode="decimal" placeholder="5" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} /></label>
            <label><span>Mortgage Term / Amortization</span><input type="number" inputMode="numeric" placeholder="25" value={mortgageYears} onChange={(e) => setMortgageYears(e.target.value)} /></label>
            <label><span>Annual Property Tax</span><input type="number" inputMode="numeric" placeholder="$4,500" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} /></label>
            <label><span>Annual Insurance</span><input type="number" inputMode="numeric" placeholder="$1,500" value={insurance} onChange={(e) => setInsurance(e.target.value)} /></label>
            <label><span>Maintenance (% of home)</span><input type="number" inputMode="decimal" placeholder="1" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} /></label>
            <label><span>Home Growth (%)</span><input type="number" inputMode="decimal" placeholder="3" value={homeGrowth} onChange={(e) => setHomeGrowth(e.target.value)} /></label>
          </div>

          <div className="rentbuy-section-label rent">Renting Inputs</div>
          <div className="rentbuy-fields">
            <label><span>Monthly Rent</span><input type="number" inputMode="numeric" placeholder="$2,200" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} /></label>
            <label><span>Annual Rent Increase (%)</span><input type="number" inputMode="decimal" placeholder="3" value={rentIncrease} onChange={(e) => setRentIncrease(e.target.value)} /></label>
            <label><span>Investment Return (%)</span><input type="number" inputMode="decimal" placeholder="6" value={investmentReturn} onChange={(e) => setInvestmentReturn(e.target.value)} /></label>
            <label><span>Compare Over Years</span><input type="number" inputMode="numeric" placeholder="10" value={years} onChange={(e) => setYears(e.target.value)} /></label>
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

        <div className="rentbuy-right">
          <div className="rentbuy-hero-card">
            <small>Estimated Better Option</small>
            <strong>{result.winner}</strong>
            <p>{result.winner} is ahead by about <b>{formatter.format(Math.abs(result.advantage))}</b> after {toNumber(years)} years.</p>
          </div>

          <div className="rentbuy-compare-grid">
            <div><span>Owner Equity</span><strong>{formatter.format(result.ownerEquity)}</strong><p>Future home value minus remaining mortgage.</p></div>
            <div><span>Renter Investment Value</span><strong>{formatter.format(result.renterInvestmentValue)}</strong><p>Down payment and ownership cost savings invested.</p></div>
          </div>

          <div className="rentbuy-metrics">
            <div><span>Monthly Mortgage</span><strong>{formatter.format(result.mortgagePayment)}</strong></div>
            <div><span>Loan Amount</span><strong>{formatter.format(result.loan)}</strong></div>
            <div><span>Future Home Value</span><strong>{formatter.format(result.futureHomeValue)}</strong></div>
            <div><span>Remaining Mortgage</span><strong>{formatter.format(result.remainingMortgage)}</strong></div>
            <div><span>Total Buying Cost</span><strong>{formatter.format(result.totalBuyingCost)}</strong></div>
            <div><span>Total Rent Paid</span><strong>{formatter.format(result.totalRentCost)}</strong></div>
          </div>

          <div className="rentbuy-note">
            <strong>Rent vs buy note:</strong>
            <p>This is a planning estimate. Real results depend on taxes, closing costs, repairs, condo fees, moving costs, market returns, and local housing conditions.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
