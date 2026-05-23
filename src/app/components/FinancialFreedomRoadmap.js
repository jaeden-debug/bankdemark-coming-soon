"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const toNumber = (value) => Number(value) || 0;

export default function FinancialFreedomRoadmap() {
  const [country, setCountry] = useState("canada");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [debt, setDebt] = useState("");
  const [emergencyFund, setEmergencyFund] = useState("");
  const [invested, setInvested] = useState("");
  const [monthlyInvesting, setMonthlyInvesting] = useState("");
  const [goal, setGoal] = useState("financial-freedom");
  const [risk, setRisk] = useState("balanced");

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const roadmap = useMemo(() => {
    const incomeValue = toNumber(income);
    const expensesValue = toNumber(expenses);
    const debtValue = toNumber(debt);
    const emergencyFundValue = toNumber(emergencyFund);
    const investedValue = toNumber(invested);
    const monthlyInvestingValue = toNumber(monthlyInvesting);

    const margin = incomeValue - expensesValue;
    const savingsRate = incomeValue > 0 ? margin / incomeValue : 0;
    const emergencyMonths = expensesValue > 0 ? emergencyFundValue / expensesValue : 0;
    const debtPressure = incomeValue > 0 ? debtValue / incomeValue : 0;
    const investRate = incomeValue > 0 ? monthlyInvestingValue / incomeValue : 0;
    const netWorth = emergencyFundValue + investedValue - debtValue;

    let phase = "Foundation Repair";
    let archetype = "Stabilizer";
    let mainPriority = "Create positive monthly cash flow";

    if (margin > 0 && emergencyMonths >= 1 && debtPressure < 3) {
      phase = "Momentum Builder";
      archetype = "Builder";
      mainPriority = "Attack debt while growing emergency savings";
    }

    if (margin > 0 && emergencyMonths >= 3 && debtPressure < 1.5 && investRate >= 0.08) {
      phase = "Wealth Builder";
      archetype = "Investor";
      mainPriority = "Increase investing consistency and protect the downside";
    }

    if (emergencyMonths >= 6 && debt <= 0 && investRate >= 0.15) {
      phase = "Financial Freedom Track";
      archetype = "Architect";
      mainPriority = "Optimize investing, taxes, retirement, and freedom timeline";
    }

    const priorities = [];

    if (margin <= 0) priorities.push("Fix monthly cash flow immediately");
    if (emergencyMonths < 1) priorities.push("Build a starter emergency fund");
    if (debtValue > 0) priorities.push("Create a debt payoff system");
    if (emergencyMonths < 3) priorities.push("Build 3 months of emergency reserves");
    if (investRate < 0.1) priorities.push("Increase monthly investing rate");
    priorities.push("Track net worth monthly");
    priorities.push("Run retirement and FIRE projections quarterly");

    const first30 = [];
    const next90 = [];
    const yearPlan = [];

    if (margin <= 0) {
      first30.push("Cut or restructure spending until monthly cash flow is positive.");
      first30.push("Use the Budget Calculator to identify the largest leaks.");
    } else {
      first30.push(`Protect your current monthly margin of ${formatter.format(margin)}.`);
      first30.push("Automate the first transfer toward debt, savings, or investing.");
    }

    if (debtValue > 0) {
      first30.push("List every debt by balance, interest rate, and minimum payment.");
      next90.push("Use the Debt Payoff Calculator and choose avalanche or snowball.");
    }

    if (emergencyMonths < 3) {
      next90.push("Build emergency savings toward 3 months of expenses.");
    } else {
      next90.push("Keep emergency savings separate from spending money.");
    }

    if (monthlyInvestingValue > 0) {
      next90.push("Keep monthly investing automatic and raise it by 1–3% if cash flow allows.");
    } else {
      next90.push("Start a small automatic monthly investment after the cash buffer is stable.");
    }

    yearPlan.push("Review net worth, debt balance, and savings rate every month.");
    yearPlan.push("Run the Retirement Calculator and FIRE Calculator every quarter.");
    yearPlan.push(
      isCanada
        ? "Compare TFSA, RRSP, FHSA, and non-registered investing strategy."
        : "Compare 401(k), IRA, Roth IRA, and taxable brokerage strategy."
    );
    yearPlan.push("Build a simple one-page financial freedom dashboard.");

    const recommendedTools = [
      { href: "/money-health-score", label: "Money Health Score" },
      { href: "/calculators/budget-calculator", label: "Budget Calculator" },
      { href: "/calculators/debt-payoff-calculator", label: "Debt Payoff Calculator" },
      { href: "/calculators/investment-calculator", label: "Investment Calculator" },
      { href: "/calculators/retirement-calculator", label: "Retirement Calculator" },
      { href: "/calculators/fire-calculator", label: "FIRE Calculator" },
    ];

    return {
      margin,
      savingsRate,
      emergencyMonths,
      debtPressure,
      investRate,
      netWorth,
      phase,
      archetype,
      mainPriority,
      priorities: priorities.slice(0, 6),
      first30,
      next90,
      yearPlan,
      recommendedTools,
    };
  }, [income, expenses, debt, emergencyFund, invested, monthlyInvesting, formatter, isCanada]);

  return (
    <section className="roadmap-tool">
      <div className="country-toggle roadmap-country-toggle">
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

      <div className="roadmap-market-badge">
        {isCanada
          ? "🇨🇦 Canadian roadmap shown in CAD with TFSA/RRSP/FHSA planning context."
          : "🇺🇸 U.S. roadmap shown in USD with 401(k)/IRA/Roth IRA planning context."}
      </div>

      <div className="roadmap-panel">
        <div className="roadmap-inputs">
          <div className="roadmap-title">
            <span>◇</span>
            <div>
              <h2>Financial Freedom Roadmap Generator</h2>
              <p>
                Answer the core money questions and generate a custom action
                plan based on your cash flow, debt, savings, investing, and goal.
              </p>
            </div>
          </div>

          <div className="roadmap-fields">
            <label>
              <span>Monthly Take-Home Income</span>
              <input type="text" inputMode="decimal" value={income} onChange={(e) => setIncome(e.target.value)} />
            </label>

            <label>
              <span>Total Monthly Expenses</span>
              <input type="text" inputMode="decimal" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
            </label>

            <label>
              <span>Total Consumer Debt</span>
              <input type="text" inputMode="decimal" value={debt} onChange={(e) => setDebt(e.target.value)} />
            </label>

            <label>
              <span>Emergency Fund</span>
              <input type="text" inputMode="decimal" value={emergencyFund} onChange={(e) => setEmergencyFund(e.target.value)} />
            </label>

            <label>
              <span>Invested Assets</span>
              <input type="text" inputMode="decimal" value={invested} onChange={(e) => setInvested(e.target.value)} />
            </label>

            <label>
              <span>Monthly Investing</span>
              <input type="text" inputMode="decimal" value={monthlyInvesting} onChange={(e) => setMonthlyInvesting(e.target.value)} />
            </label>

            <label>
              <span>Main Goal</span>
              <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                <option value="debt-free">Become debt-free</option>
                <option value="emergency-fund">Build safety first</option>
                <option value="investing">Invest aggressively</option>
                <option value="retirement">Retire comfortably</option>
                <option value="financial-freedom">Financial freedom</option>
                <option value="fire">FIRE / Coast FIRE</option>
              </select>
            </label>

            <label>
              <span>Risk Style</span>
              <select value={risk} onChange={(e) => setRisk(e.target.value)}>
                <option value="conservative">Conservative</option>
                <option value="balanced">Balanced</option>
                <option value="aggressive">Aggressive</option>
              </select>
            </label>
          </div>
        </div>

        <div className="roadmap-results">
          <div className="roadmap-hero-card">
            <small>Your Current Phase</small>
            <strong>{roadmap.phase}</strong>
            <p>
              Archetype: <b>{roadmap.archetype}</b> · Main priority:{" "}
              <b>{roadmap.mainPriority}</b>
            </p>
          </div>

          <div className="roadmap-metrics">
            <div><span>Monthly Margin</span><strong>{formatter.format(roadmap.margin)}</strong></div>
            <div><span>Savings Rate</span><strong>{(roadmap.savingsRate * 100).toFixed(1)}%</strong></div>
            <div><span>Emergency Fund</span><strong>{roadmap.emergencyMonths.toFixed(1)} mo</strong></div>
            <div><span>Investing Rate</span><strong>{(roadmap.investRate * 100).toFixed(1)}%</strong></div>
            <div><span>Debt / Income</span><strong>{roadmap.debtPressure.toFixed(1)}x</strong></div>
            <div><span>Net Worth Estimate</span><strong>{formatter.format(roadmap.netWorth)}</strong></div>
          </div>

          <div className="roadmap-action-card">
            <span>Priority Stack</span>
            <ol>
              {roadmap.priorities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="roadmap-plan-grid">
        <div className="roadmap-plan-card">
          <span>Next 30 Days</span>
          <h3>Stabilize</h3>
          <ul>
            {roadmap.first30.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="roadmap-plan-card">
          <span>Next 90 Days</span>
          <h3>Build Momentum</h3>
          <ul>
            {roadmap.next90.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="roadmap-plan-card">
          <span>Next 12 Months</span>
          <h3>Systemize</h3>
          <ul>
            {roadmap.yearPlan.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="roadmap-tools-card">
        <span>Recommended BankDeMark Tools</span>
        <div>
          {roadmap.recommendedTools.map((tool) => (
            <Link href={tool.href} key={tool.href}>
              {tool.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
