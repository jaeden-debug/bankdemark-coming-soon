"use client";

import { useMemo, useState } from "react";

const toNumber = (value) => Number(value) || 0;

export default function RetirementCalculator() {
  const [country, setCountry] = useState("canada");
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [lifeExpectancy, setLifeExpectancy] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [inflation, setInflation] = useState("");
  const [retirementSpending, setRetirementSpending] = useState("");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const currentAgeValue = toNumber(currentAge);
    const retirementAgeValue = toNumber(retirementAge);
    const lifeExpectancyValue = toNumber(lifeExpectancy);
    const currentSavingsValue = toNumber(currentSavings);
    const monthlyContributionValue = toNumber(monthlyContribution);
    const annualReturnValue = toNumber(annualReturn);
    const inflationValue = toNumber(inflation);
    const retirementSpendingValue = toNumber(retirementSpending);

    const yearsToRetirement = Math.max(retirementAgeValue - currentAgeValue, 0);
    const retirementYears = Math.max(lifeExpectancyValue - retirementAgeValue, 1);
    const months = yearsToRetirement * 12;

    const monthlyReturn = annualReturnValue / 100 / 12;
    const futureSavings =
      currentSavingsValue * Math.pow(1 + monthlyReturn, months);

    const futureContributions =
      monthlyReturn === 0
        ? monthlyContributionValue * months
        : monthlyContributionValue *
          ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn);

    const projectedNestEgg = futureSavings + futureContributions;

    const inflationAdjustedSpending =
      retirementSpendingValue * Math.pow(1 + inflationValue / 100, yearsToRetirement);

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
      totalContributions: currentSavingsValue + monthlyContributionValue * months,
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
              <input type="text" inputMode="decimal" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} />
            </label>

            <label>
              <span>Retirement Age</span>
              <input type="text" inputMode="decimal" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} />
            </label>

            <label>
              <span>Life Expectancy</span>
              <input type="text" inputMode="decimal" value={lifeExpectancy} onChange={(e) => setLifeExpectancy(e.target.value)} />
            </label>

            <label>
              <span>Current Retirement Savings</span>
              <input type="text" inputMode="decimal" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} />
            </label>

            <label>
              <span>Monthly Contribution</span>
              <input type="text" inputMode="decimal" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} />
            </label>

            <label>
              <span>Expected Annual Return (%)</span>
              <input type="text" inputMode="decimal" step="0.1" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} />
            </label>

            <label>
              <span>Inflation Estimate (%)</span>
              <input type="text" inputMode="decimal" step="0.1" value={inflation} onChange={(e) => setInflation(e.target.value)} />
            </label>

            <label>
              <span>Desired Annual Retirement Spending</span>
              <input type="text" inputMode="decimal" value={retirementSpending} onChange={(e) => setRetirementSpending(e.target.value)} />
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
