"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function MoneyHealthScore() {
  const [country, setCountry] = useState("canada");
  const [monthlyIncome, setMonthlyIncome] = useState(5500);
  const [monthlyExpenses, setMonthlyExpenses] = useState(4200);
  const [totalDebt, setTotalDebt] = useState(12000);
  const [monthlyDebtPayment, setMonthlyDebtPayment] = useState(450);
  const [emergencyFund, setEmergencyFund] = useState(8000);
  const [investedAssets, setInvestedAssets] = useState(35000);
  const [retirementContribution, setRetirementContribution] = useState(650);
  const [housingCost, setHousingCost] = useState(1600);
  const [creditRange, setCreditRange] = useState(720);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const surplus = monthlyIncome - monthlyExpenses;
    const savingsRate = monthlyIncome > 0 ? surplus / monthlyIncome : 0;
    const debtRatio = monthlyIncome > 0 ? monthlyDebtPayment / monthlyIncome : 1;
    const housingRatio = monthlyIncome > 0 ? housingCost / monthlyIncome : 1;
    const emergencyMonths = monthlyExpenses > 0 ? emergencyFund / monthlyExpenses : 0;
    const investingRate = monthlyIncome > 0 ? retirementContribution / monthlyIncome : 0;
    const netWorthEstimate = investedAssets + emergencyFund - totalDebt;

    const cashFlowScore = clamp((savingsRate / 0.25) * 20, 0, 20);
    const debtScore = clamp((1 - debtRatio / 0.35) * 18, 0, 18);
    const emergencyScore = clamp((emergencyMonths / 6) * 18, 0, 18);
    const investingScore = clamp((investingRate / 0.15) * 18, 0, 18);
    const housingScore = clamp((1 - housingRatio / 0.35) * 13, 0, 13);
    const creditScore = clamp(((creditRange - 550) / 250) * 13, 0, 13);

    const total = Math.round(
      cashFlowScore +
        debtScore +
        emergencyScore +
        investingScore +
        housingScore +
        creditScore
    );

    let phase = "Stabilize";
    let status = "Fix the foundation";
    if (total >= 85) {
      phase = "Wealth Architect";
      status = "High-performance money system";
    } else if (total >= 70) {
      phase = "Builder";
      status = "Strong foundation with optimization room";
    } else if (total >= 50) {
      phase = "Climber";
      status = "Progressing, but pressure points remain";
    }

    const categories = [
      { label: "Cash Flow", score: Math.round(cashFlowScore), max: 20 },
      { label: "Debt Control", score: Math.round(debtScore), max: 18 },
      { label: "Emergency Fund", score: Math.round(emergencyScore), max: 18 },
      { label: "Investing", score: Math.round(investingScore), max: 18 },
      { label: "Housing Load", score: Math.round(housingScore), max: 13 },
      { label: "Credit Strength", score: Math.round(creditScore), max: 13 },
    ];

    const weakest = [...categories].sort(
      (a, b) => a.score / a.max - b.score / b.max
    )[0];

    const recommendations = {
      "Cash Flow": [
        { href: "/calculators/budget-calculator", label: "Budget Calculator" },
        { href: "/pillars/personal-finance", label: "Personal Finance Guide" },
      ],
      "Debt Control": [
        { href: "/calculators/debt-payoff-calculator", label: "Debt Payoff Calculator" },
        { href: "/pillars/debt-management", label: "Debt Management Guide" },
      ],
      "Emergency Fund": [
        { href: "/calculators/budget-calculator", label: "Budget Calculator" },
        { href: "/pillars/banking", label: "Banking Guide" },
      ],
      "Investing": [
        { href: "/calculators/investment-calculator", label: "Investment Calculator" },
        { href: "/pillars/investing", label: "Investing Guide" },
      ],
      "Housing Load": [
        { href: "/calculators/mortgage-calculator", label: "Mortgage Calculator" },
        { href: "/pillars/personal-finance", label: "Personal Finance Guide" },
      ],
      "Credit Strength": [
        { href: "/pillars/business-credit", label: "Credit Guide" },
        { href: "/pillars/debt-management", label: "Debt Management Guide" },
      ],
    };

    return {
      total,
      phase,
      status,
      surplus,
      savingsRate,
      debtRatio,
      housingRatio,
      emergencyMonths,
      investingRate,
      netWorthEstimate,
      categories,
      weakest,
      recommendations: recommendations[weakest.label],
    };
  }, [
    monthlyIncome,
    monthlyExpenses,
    totalDebt,
    monthlyDebtPayment,
    emergencyFund,
    investedAssets,
    retirementContribution,
    housingCost,
    creditRange,
  ]);

  return (
    <section className="health-score-tool">
      <div className="country-toggle health-country-toggle">
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

      <div className="health-market-badge">
        {isCanada
          ? "🇨🇦 Canadian money health estimate shown in CAD."
          : "🇺🇸 U.S. money health estimate shown in USD."}
      </div>

      <div className="health-score-panel">
        <div className="health-input-side">
          <div className="health-title">
            <span>◆</span>
            <div>
              <h2>Money Health Diagnostic</h2>
              <p>
                Enter your numbers and get a live score across cash flow, debt,
                emergency savings, investing, housing load, and credit strength.
              </p>
            </div>
          </div>

          <div className="health-fields">
            <label>
              <span>Monthly Take-Home Income</span>
              <input type="number" value={monthlyIncome} onChange={(e) => setMonthlyIncome(Number(e.target.value))} />
            </label>

            <label>
              <span>Total Monthly Expenses</span>
              <input type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(Number(e.target.value))} />
            </label>

            <label>
              <span>Total Consumer Debt</span>
              <input type="number" value={totalDebt} onChange={(e) => setTotalDebt(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Debt Payments</span>
              <input type="number" value={monthlyDebtPayment} onChange={(e) => setMonthlyDebtPayment(Number(e.target.value))} />
            </label>

            <label>
              <span>Emergency Fund</span>
              <input type="number" value={emergencyFund} onChange={(e) => setEmergencyFund(Number(e.target.value))} />
            </label>

            <label>
              <span>Invested Assets</span>
              <input type="number" value={investedAssets} onChange={(e) => setInvestedAssets(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Investing / Retirement</span>
              <input type="number" value={retirementContribution} onChange={(e) => setRetirementContribution(Number(e.target.value))} />
            </label>

            <label>
              <span>Monthly Housing Cost</span>
              <input type="number" value={housingCost} onChange={(e) => setHousingCost(Number(e.target.value))} />
            </label>

            <label className="health-wide">
              <span>Credit Score Estimate</span>
              <select value={creditRange} onChange={(e) => setCreditRange(Number(e.target.value))}>
                <option value={560}>Below 580</option>
                <option value={620}>580–659</option>
                <option value={690}>660–719</option>
                <option value={750}>720–779</option>
                <option value={800}>780+</option>
              </select>
            </label>
          </div>
        </div>

        <div className="health-output-side">
          <div className="score-orb-card">
            <div
              className="score-orb"
              style={{
                background: `conic-gradient(var(--gold-light) ${result.total * 3.6}deg, rgba(255,255,255,0.08) 0deg)`,
              }}
            >
              <div>
                <strong>{result.total}</strong>
                <span>/100</span>
              </div>
            </div>

            <p className="score-phase">{result.phase}</p>
            <h3>{result.status}</h3>
            <p>
              Weakest area: <strong>{result.weakest.label}</strong>
            </p>
          </div>

          <div className="health-metrics-grid">
            <div>
              <span>Monthly Margin</span>
              <strong>{formatter.format(result.surplus)}</strong>
            </div>
            <div>
              <span>Savings Rate</span>
              <strong>{(result.savingsRate * 100).toFixed(1)}%</strong>
            </div>
            <div>
              <span>Emergency Fund</span>
              <strong>{result.emergencyMonths.toFixed(1)} mo</strong>
            </div>
            <div>
              <span>Debt Load</span>
              <strong>{(result.debtRatio * 100).toFixed(1)}%</strong>
            </div>
            <div>
              <span>Housing Load</span>
              <strong>{(result.housingRatio * 100).toFixed(1)}%</strong>
            </div>
            <div>
              <span>Net Worth Estimate</span>
              <strong>{formatter.format(result.netWorthEstimate)}</strong>
            </div>
          </div>

          <div className="health-breakdown">
            {result.categories.map((cat) => (
              <div key={cat.label}>
                <div className="health-breakdown-row">
                  <span>{cat.label}</span>
                  <strong>{cat.score}/{cat.max}</strong>
                </div>
                <div className="health-bar">
                  <i style={{ width: `${(cat.score / cat.max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="health-action-card">
            <span>Recommended next move</span>
            <h3>Fix {result.weakest.label} first.</h3>
            <p>
              Based on your score, this is the highest-leverage area to improve
              your financial system.
            </p>

            <div className="health-action-links">
              {result.recommendations.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
