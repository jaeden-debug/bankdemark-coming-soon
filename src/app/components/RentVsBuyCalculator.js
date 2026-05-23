"use client";

import { useMemo, useState } from "react";

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

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const homePriceValue = toNumber(homePrice);
    const downPaymentValue = toNumber(downPayment);
    const interestRateValue = toNumber(interestRate);
    const mortgageYearsValue = toNumber(mortgageYears);
    const propertyTaxValue = toNumber(propertyTax);
    const insuranceValue = toNumber(insurance);
    const maintenanceValue = toNumber(maintenance);
    const homeGrowthValue = toNumber(homeGrowth);
    const monthlyRentValue = toNumber(monthlyRent);
    const rentIncreaseValue = toNumber(rentIncrease);
    const investmentReturnValue = toNumber(investmentReturn);
    const yearsValue = toNumber(years);

    const loan = Math.max(homePriceValue - downPaymentValue, 0);
    const monthlyRate = interestRateValue / 100 / 12;
    const totalPayments = mortgageYearsValue * 12;

    const mortgagePayment =
      monthlyRate === 0
        ? loan / totalPayments
        : loan *
          (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1);

    let remainingMortgage = loan;
    let totalBuyingCost = downPaymentValue;
    let totalRentCost = 0;
    let investedRentScenario = downPaymentValue;
    let currentRent = monthlyRentValue;

    for (let year = 1; year <= yearsValue; year++) {
      const yearlyOwnerCosts =
        mortgagePayment * 12 +
        propertyTaxValue +
        insuranceValue +
        homePriceValue * (maintenanceValue / 100);

      totalBuyingCost += yearlyOwnerCosts;
      totalRentCost += currentRent * 12;

      const rentSavings = Math.max(yearlyOwnerCosts - currentRent * 12, 0);
      investedRentScenario =
        investedRentScenario * (1 + investmentReturnValue / 100) + rentSavings;

      currentRent *= 1 + rentIncreaseValue / 100;
    }

    for (let month = 1; month <= yearsValue * 12; month++) {
      const interest = remainingMortgage * monthlyRate;
      const principal = Math.max(mortgagePayment - interest, 0);
      remainingMortgage = Math.max(remainingMortgage - principal, 0);
    }

    const futureHomeValue = homePriceValue * Math.pow(1 + homeGrowthValue / 100, yearsValue);
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
            <label><span>Home Price</span><input type="text" inputMode="decimal" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} /></label>
            <label><span>Down Payment</span><input type="text" inputMode="decimal" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} /></label>
            <label><span>Mortgage Rate (%)</span><input type="text" inputMode="decimal" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} /></label>
            <label><span>Mortgage Term / Amortization</span><input type="text" inputMode="decimal" value={mortgageYears} onChange={(e) => setMortgageYears(e.target.value)} /></label>
            <label><span>Annual Property Tax</span><input type="text" inputMode="decimal" value={propertyTax} onChange={(e) => setPropertyTax(e.target.value)} /></label>
            <label><span>Annual Insurance</span><input type="text" inputMode="decimal" value={insurance} onChange={(e) => setInsurance(e.target.value)} /></label>
            <label><span>Maintenance (% of home)</span><input type="text" inputMode="decimal" step="0.1" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} /></label>
            <label><span>Home Growth (%)</span><input type="text" inputMode="decimal" step="0.1" value={homeGrowth} onChange={(e) => setHomeGrowth(e.target.value)} /></label>
          </div>

          <div className="rentbuy-section-label rent">Renting Inputs</div>
          <div className="rentbuy-fields">
            <label><span>Monthly Rent</span><input type="text" inputMode="decimal" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} /></label>
            <label><span>Annual Rent Increase (%)</span><input type="text" inputMode="decimal" step="0.1" value={rentIncrease} onChange={(e) => setRentIncrease(e.target.value)} /></label>
            <label><span>Investment Return (%)</span><input type="text" inputMode="decimal" step="0.1" value={investmentReturn} onChange={(e) => setInvestmentReturn(e.target.value)} /></label>
            <label><span>Compare Over Years</span><input type="text" inputMode="decimal" value={years} onChange={(e) => setYears(e.target.value)} /></label>
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
