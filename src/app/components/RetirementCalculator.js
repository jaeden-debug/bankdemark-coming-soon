"use client";

import { useMemo, useState } from "react";

export default function RetirementCalculator() {
  const [country, setCountry] = useState("canada");
  const [currentAge, setCurrentAge] = useState(35);
  const [retirementAge, setRetirementAge] = useState(65);
  const [lifeExpectancy, setLifeExpectancy] = useState(90);
  const [currentSavings, setCurrentSavings] = useState(75000);
  const [monthlyContribution, setMonthlyContribution] = useState(750);
  const [annualReturn, setAnnualReturn] = useState(6);
  const [inflation, setInflation] = useState(2.5);
  const [retirementSpending, setRetirementSpending] = useState(60000);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const yearsToRetirement = Math.max(retirementAge - currentAge, 0);
    const retirementYears = Math.max(lifeExpectancy - retirementAge, 1);
    const months = yearsToRetirement * 12;

    const monthlyReturn = annualReturn / 100 / 12;
    const futureSavings =
      currentSavings * Math.pow(1 + monthlyReturn, months);

    const futureContributions =
      monthlyReturn === 0
        ? monthlyContribution * months
        : monthlyContribution *
          ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);

    const projectedNestEgg = futureSavings + futureContributions;

    const inflationAdjustedSpending =
      retirementSpending * Math.pow(1 + inflation / 100, yearsToRetirement);

    const targetNestEgg = inflationAdjustedSpending * 25;
    const gap = projectedNestEgg - targetNestEgg;

    const safeAnnualWithdrawal = projectedNestEgg * 0.04;
    const safeMonthlyWithdrawal = safeAnnualWithdrawal / 12;

    return {
      yearsToRetirement,
      retirementYears,
      projectedNestEgg,
      targetNestEgg,
      gap,
      inflationAdjustedSpending,
      safeAnnualWithdrawal,
      safeMonthlyWithdrawal,
      totalContributions: currentSavings + monthlyContribution * months,
    };
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    currentSavings,
    monthlyContribution,
    annualReturn,
    inflation,
    retirementSpending,
  ]);

  const onCountry = (nextCountry) => {
    setCountry(nextCountry);

    if (nextCountry === "canada") {
      setRetirementSpending(60000);
    } else {
      setRetirementSpending(70000);
    }
  };

  return (
    <section className="retirement-tool">
      <div className="country-toggle retirement-country-toggle">
        <button
          type="button"
          className={isCanada ? "active" : ""}
          onClick={() => onCountry("canada")}
        >
          <span>🇨🇦</span> Canada
        </button>

        <button
          type="button"
          className={!isCanada ? "active" : ""}
          onClick={() => onCountry("usa")}
        >
          <span>🇺🇸</span> United States
        </button>
      </div>

      <div className="retirement-market-badge">
        {isCanada
          ? "🇨🇦 Canadian retirement estimate in CAD. Useful for TFSA, RRSP, FHSA, pension planning, and long-term financial freedom."
          : "🇺🇸 U.S. retirement estimate in USD. Useful for 401(k), IRA, Roth IRA, Social Security planning, and long-term financial freedom."}
      </div>

      <div className="retirement-panel">
        <div className="retirement-left">
          <div className="retirement-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <div>
              <h2>{isCanada ? "Canadian Retirement Calculator" : "U.S. Retirement Calculator"}</h2>
              <p>
                Estimate whether your current savings and contributions are on track for retirement.
              </p>
            </div>
          </div>

          <div className="retirement-fields">
            <label>
              <span>Current Age</span>
              <input type="number" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} />
            </label>

            <label>
              <span>Retirement Age</span>
              <input type="number" value={retirementAge} onChange={(e) => setRetirementAge(Number(e.target.value))} />
            </label>

            <label>
              <span>Life Expectancy</span>
              <input type="number" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(Number(e.target.value))} />
            </label>

            <label>
              <span>Current Retirement Savings</span>
              <input type="number" value={currentSavings} onChange={(e) => setCurrentSavings(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Contribution</span>
              <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} />
            </label>

            <label>
              <span>Expected Annual Return (%)</span>
              <input type="number" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(Number(e.target.value))} />
            </label>

            <label>
              <span>Inflation Estimate (%)</span>
              <input type="number" step="0.1" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} />
            </label>

            <label>
              <span>Desired Annual Retirement Spending</span>
              <input type="number" value={retirementSpending} onChange={(e) => setRetirementSpending(Number(e.target.value))} />
            </label>
          </div>
        </div>

        <div className="retirement-right">
          <div className="retirement-result-hero">
            <small>Projected Retirement Nest Egg</small>
            <strong>{formatter.format(result.projectedNestEgg)}</strong>
            <p>
              Estimated value at age {retirementAge} after savings, contributions, and investment growth.
            </p>
          </div>

          <div className={result.gap >= 0 ? "retirement-status positive" : "retirement-status negative"}>
            <small>{result.gap >= 0 ? "Projected Surplus" : "Projected Gap"}</small>
            <strong>{formatter.format(Math.abs(result.gap))}</strong>
            <p>
              Compared against a 25x annual spending target.
            </p>
          </div>

          <div className="retirement-metrics">
            <div>
              <span>Years to Retirement</span>
              <strong>{result.yearsToRetirement}</strong>
            </div>
            <div>
              <span>Retirement Years</span>
              <strong>{result.retirementYears}</strong>
            </div>
            <div>
              <span>Inflation-Adjusted Spending</span>
              <strong>{formatter.format(result.inflationAdjustedSpending)}</strong>
            </div>
            <div>
              <span>Target Nest Egg</span>
              <strong>{formatter.format(result.targetNestEgg)}</strong>
            </div>
            <div>
              <span>4% Annual Withdrawal</span>
              <strong>{formatter.format(result.safeAnnualWithdrawal)}</strong>
            </div>
            <div>
              <span>Monthly Withdrawal</span>
              <strong>{formatter.format(result.safeMonthlyWithdrawal)}</strong>
            </div>
          </div>

          <div className="retirement-note">
            <strong>{isCanada ? "Canada planning note:" : "U.S. planning note:"}</strong>
            <p>
              {isCanada
                ? "Use this with TFSA, RRSP, pension, CPP/OAS, and non-registered investment planning. This is a projection, not tax advice."
                : "Use this with 401(k), IRA, Roth IRA, Social Security, pensions, and taxable brokerage planning. This is a projection, not tax advice."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
