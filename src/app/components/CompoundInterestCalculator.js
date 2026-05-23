"use client";

import { useMemo, useState } from "react";

const toNumber = (value) => Number(value) || 0;

export default function CompoundInterestCalculator() {
  const [country, setCountry] = useState("canada");
  const [principal, setPrincipal] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const principalValue = toNumber(principal);
    const monthlyContributionValue = toNumber(monthlyContribution);
    const annualReturnValue = toNumber(annualReturn);
    const yearsValue = toNumber(years);
    const frequencyValue = Math.max(toNumber(compoundFrequency), 1);

    const r = annualReturnValue / 100;
    const n = frequencyValue;
    const t = yearsValue;
    const months = yearsValue * 12;

    const futurePrincipal = principalValue * Math.pow(1 + r / n, n * t);

    const monthlyRate = r / 12;
    const futureContributions =
      monthlyRate === 0
        ? monthlyContributionValue * months
        : monthlyContributionValue *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const futureValue = futurePrincipal + futureContributions;
    const totalContributions = principalValue + monthlyContributionValue * months;
    const estimatedGrowth = futureValue - totalContributions;

    return {
      futureValue,
      totalContributions,
      estimatedGrowth,
    };
  }, [principal, monthlyContribution, annualReturn, years, compoundFrequency]);

  return (
    <section className="compound-tool">
      <div className="country-toggle compound-country-toggle">
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

      <div className="compound-market-badge">
        {isCanada
          ? "🇨🇦 Canadian estimate shown in CAD. Useful for TFSA, RRSP, FHSA, savings, and long-term investing."
          : "🇺🇸 U.S. estimate shown in USD. Useful for 401(k), IRA, brokerage accounts, savings, and long-term investing."}
      </div>

      <div className="tool-panel">
        <div className="tool-column tool-inputs">
          <div className="tool-step-title">
            <span>1</span>
            <div>
              <h2>Enter your growth scenario</h2>
              <p>
                Adjust your starting amount, monthly contribution, return rate,
                timeline, and compounding frequency.
              </p>
            </div>
          </div>

          <div className="tool-fields">
            <label className="tool-field">
              <div className="tool-icon">{isCanada ? "C$" : "$"}</div>
              <div className="tool-copy">
                <strong>Starting Amount</strong>
                <small>Your initial savings or investment balance.</small>
              </div>
              <input
                type="text" inputMode="decimal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <div className="tool-icon">+</div>
              <div className="tool-copy">
                <strong>Monthly Contribution</strong>
                <small>How much you plan to add every month.</small>
              </div>
              <input
                type="text" inputMode="decimal"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <div className="tool-icon">%</div>
              <div className="tool-copy">
                <strong>Annual Return</strong>
                <small>Estimated yearly return or savings interest rate.</small>
              </div>
              <input
                type="text" inputMode="decimal"
                step="0.1"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <div className="tool-icon">Y</div>
              <div className="tool-copy">
                <strong>Investment Timeline</strong>
                <small>How many years your money stays invested.</small>
              </div>
              <input
                type="text" inputMode="decimal"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </label>

            <label className="tool-field">
              <div className="tool-icon">↻</div>
              <div className="tool-copy">
                <strong>Compounding Frequency</strong>
                <small>
                  {isCanada
                    ? "Monthly for most estimates. Semi-annual is useful for some Canadian lending contexts."
                    : "Monthly is common for savings and investment projections."}
                </small>
              </div>
              <select
                value={compoundFrequency}
                onChange={(e) => setCompoundFrequency(e.target.value)}
              >
                <option value={1}>Annually</option>
                <option value={2}>Semi-annually</option>
                <option value={4}>Quarterly</option>
                <option value={12}>Monthly</option>
                <option value={365}>Daily</option>
              </select>
            </label>
          </div>

          <button className="tool-button" type="button">
            Calculate Growth
          </button>

          <p className="tool-privacy">
            No data is saved. This calculator runs directly in your browser.
          </p>
        </div>

        <div className="tool-column tool-results">
          <div className="result-card featured">
            <small>{isCanada ? "Future Value in CAD" : "Future Value in USD"}</small>
            <strong>{formatter.format(result.futureValue)}</strong>
            <p>
              Estimated account value after contributions and compound growth.
            </p>
          </div>

          <div className="result-card">
            <small>Total Contributions</small>
            <strong className="green">
              {formatter.format(result.totalContributions)}
            </strong>
            <p>Your starting amount plus monthly contributions.</p>
          </div>

          <div className="result-card">
            <small>Estimated Growth</small>
            <strong className="green">
              {formatter.format(result.estimatedGrowth)}
            </strong>
            <p>Potential growth generated by compounding.</p>
          </div>

          <div className="tool-note">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
            <p>
              <strong>{isCanada ? "Canada note:" : "U.S. note:"}</strong>
              {isCanada
                ? " Use this for CAD-based TFSA, RRSP, FHSA, RESP, taxable investing, high-interest savings, and long-term wealth planning."
                : " Use this for USD-based 401(k), IRA, Roth IRA, brokerage accounts, high-yield savings, and long-term investing scenarios."}
            </p>
          </div>
        </div>
      </div>

      <div className="how-card">
        <h2>How to use this compound interest calculator</h2>
        <div className="how-steps">
          <div>
            <span>1</span>
            <strong>Choose your country</strong>
            <p>Switch between CAD and USD planning.</p>
          </div>
          <div>
            <span>2</span>
            <strong>Add starting money</strong>
            <p>Enter your current savings or investment balance.</p>
          </div>
          <div>
            <span>3</span>
            <strong>Add monthly deposits</strong>
            <p>Estimate consistent monthly contributions.</p>
          </div>
          <div>
            <span>4</span>
            <strong>Set return and time</strong>
            <p>Test conservative and aggressive growth scenarios.</p>
          </div>
          <div>
            <span>5</span>
            <strong>Review results</strong>
            <p>Compare future value, contributions, and growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
