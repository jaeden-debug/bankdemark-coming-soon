"use client";

import { useMemo, useState } from "react";

export default function RentVsBuyCalculator() {
  const [country, setCountry] = useState("canada");
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.25);
  const [mortgageYears, setMortgageYears] = useState(25);
  const [monthlyRent, setMonthlyRent] = useState(2200);
  const [rentIncrease, setRentIncrease] = useState(3);
  const [propertyTax, setPropertyTax] = useState(4500);
  const [insurance, setInsurance] = useState(1800);
  const [maintenance, setMaintenance] = useState(1);
  const [homeGrowth, setHomeGrowth] = useState(3);
  const [investmentReturn, setInvestmentReturn] = useState(6);
  const [years, setYears] = useState(10);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const loan = Math.max(homePrice - downPayment, 0);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = mortgageYears * 12;

    const mortgagePayment =
      monthlyRate === 0
        ? loan / totalPayments
        : loan *
          (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1);

    let remainingMortgage = loan;
    let totalBuyingCost = downPayment;
    let totalRentCost = 0;
    let investedRentScenario = downPayment;
    let currentRent = monthlyRent;

    for (let year = 1; year <= years; year++) {
      const yearlyOwnerCosts =
        mortgagePayment * 12 +
        propertyTax +
        insurance +
        homePrice * (maintenance / 100);

      totalBuyingCost += yearlyOwnerCosts;
      totalRentCost += currentRent * 12;

      const rentSavings = Math.max(yearlyOwnerCosts - currentRent * 12, 0);
      investedRentScenario =
        investedRentScenario * (1 + investmentReturn / 100) + rentSavings;

      currentRent *= 1 + rentIncrease / 100;
    }

    for (let month = 1; month <= years * 12; month++) {
      const interest = remainingMortgage * monthlyRate;
      const principal = Math.max(mortgagePayment - interest, 0);
      remainingMortgage = Math.max(remainingMortgage - principal, 0);
    }

    const futureHomeValue = homePrice * Math.pow(1 + homeGrowth / 100, years);
    const ownerEquity = futureHomeValue - remainingMortgage;
    const renterNetWorth = investedRentScenario;
    const advantage = ownerEquity - renterNetWorth;

    return {
      loan,
      mortgagePayment,
      totalBuyingCost,
      totalRentCost,
      futureHomeValue,
      remainingMortgage,
      ownerEquity,
      renterNetWorth,
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

  return (
    <section className="rentbuy-tool">
      <div className="country-toggle rentbuy-country-toggle">
        <button
          type="button"
          className={isCanada ? "active" : ""}
          onClick={() => setCountry("canada")}
        >
          <span>🇨🇦</span> Canada
        </button>

        <button
          type="button"
          className={!isCanada ? "active" : ""}
          onClick={() => setCountry("usa")}
        >
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="rentbuy-market-badge">
        {isCanada
          ? "🇨🇦 Rent vs buy estimate shown in CAD."
          : "🇺🇸 Rent vs buy estimate shown in USD."}
      </div>

      <div className="rentbuy-panel">
        <div className="rentbuy-left">
          <div className="rentbuy-title">
            <span>⌂</span>
            <div>
              <h2>Rent vs Buy Calculator</h2>
              <p>
                Compare the long-term cost and wealth impact of renting versus
                buying a home.
              </p>
            </div>
          </div>

          <div className="rentbuy-section-label">Buying Inputs</div>
          <div className="rentbuy-fields">
            <label><span>Home Price</span><input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} /></label>
            <label><span>Down Payment</span><input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} /></label>
            <label><span>Mortgage Rate (%)</span><input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} /></label>
            <label><span>Mortgage Term / Amortization</span><input type="number" value={mortgageYears} onChange={(e) => setMortgageYears(Number(e.target.value))} /></label>
            <label><span>Annual Property Tax</span><input type="number" value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))} /></label>
            <label><span>Annual Insurance</span><input type="number" value={insurance} onChange={(e) => setInsurance(Number(e.target.value))} /></label>
            <label><span>Maintenance (% of home)</span><input type="number" step="0.1" value={maintenance} onChange={(e) => setMaintenance(Number(e.target.value))} /></label>
            <label><span>Home Growth (%)</span><input type="number" step="0.1" value={homeGrowth} onChange={(e) => setHomeGrowth(Number(e.target.value))} /></label>
          </div>

          <div className="rentbuy-section-label rent">Renting Inputs</div>
          <div className="rentbuy-fields">
            <label><span>Monthly Rent</span><input type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} /></label>
            <label><span>Annual Rent Increase (%)</span><input type="number" step="0.1" value={rentIncrease} onChange={(e) => setRentIncrease(Number(e.target.value))} /></label>
            <label><span>Investment Return (%)</span><input type="number" step="0.1" value={investmentReturn} onChange={(e) => setInvestmentReturn(Number(e.target.value))} /></label>
            <label><span>Compare Over Years</span><input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} /></label>
          </div>
        </div>

        <div className="rentbuy-right">
          <div className="rentbuy-hero-card">
            <small>Estimated Better Option</small>
            <strong>{result.winner}</strong>
            <p>
              {result.winner} is ahead by about{" "}
              <b>{formatter.format(Math.abs(result.advantage))}</b> after {years} years.
            </p>
          </div>

          <div className="rentbuy-compare-grid">
            <div>
              <span>Owner Equity</span>
              <strong>{formatter.format(result.ownerEquity)}</strong>
              <p>Future home value minus remaining mortgage.</p>
            </div>

            <div>
              <span>Renter Investment Value</span>
              <strong>{formatter.format(result.renterNetWorth)}</strong>
              <p>Down payment and ownership cost savings invested.</p>
            </div>
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
            <p>
              This is a planning estimate. Real results depend on taxes, closing
              costs, repairs, condo/HOA fees, moving costs, market returns, and
              local housing conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
