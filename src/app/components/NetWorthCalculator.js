"use client";

import { useMemo, useState } from "react";

export default function NetWorthCalculator() {
  const [country, setCountry] = useState("canada");

  const [cash, setCash] = useState(12000);
  const [investments, setInvestments] = useState(45000);
  const [retirement, setRetirement] = useState(65000);
  const [realEstate, setRealEstate] = useState(420000);
  const [vehicles, setVehicles] = useState(18000);
  const [businessAssets, setBusinessAssets] = useState(10000);
  const [otherAssets, setOtherAssets] = useState(5000);

  const [mortgage, setMortgage] = useState(310000);
  const [creditCards, setCreditCards] = useState(6000);
  const [loans, setLoans] = useState(14000);
  const [studentDebt, setStudentDebt] = useState(0);
  const [otherDebt, setOtherDebt] = useState(0);

  const isCanada = country === "canada";
  const currency = isCanada ? "CAD" : "USD";

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  });

  const result = useMemo(() => {
    const totalAssets =
      cash + investments + retirement + realEstate + vehicles + businessAssets + otherAssets;

    const totalLiabilities =
      mortgage + creditCards + loans + studentDebt + otherDebt;

    const netWorth = totalAssets - totalLiabilities;
    const liquidAssets = cash + investments;
    const investableAssets = investments + retirement;
    const debtToAssetRatio = totalAssets > 0 ? totalLiabilities / totalAssets : 0;
    const liquidRatio = totalAssets > 0 ? liquidAssets / totalAssets : 0;

    let stage = "Negative Net Worth";
    let stageNote = "Your first milestone is getting liabilities below total assets.";
    let nextMove = "Focus on cash flow, emergency savings, and high-interest debt payoff.";

    if (netWorth >= 0) {
      stage = "Foundation Builder";
      stageNote = "You are above zero and building a financial base.";
      nextMove = "Build emergency savings and reduce expensive debt.";
    }

    if (netWorth >= 50000) {
      stage = "Momentum Builder";
      stageNote = "Your net worth is gaining traction.";
      nextMove = "Increase investing consistency and protect your monthly margin.";
    }

    if (netWorth >= 250000) {
      stage = "Wealth Builder";
      stageNote = "Your assets are starting to create serious financial leverage.";
      nextMove = "Optimize investments, taxes, retirement accounts, and debt structure.";
    }

    if (netWorth >= 1000000) {
      stage = "Millionaire Track";
      stageNote = "You have reached a major wealth milestone.";
      nextMove = "Focus on preservation, tax efficiency, estate planning, and freedom design.";
    }

    const assetMix = [
      { label: "Cash", value: cash },
      { label: "Investments", value: investments },
      { label: "Retirement", value: retirement },
      { label: "Real Estate", value: realEstate },
      { label: "Vehicles", value: vehicles },
      { label: "Business", value: businessAssets },
      { label: "Other", value: otherAssets },
    ].map((item) => ({
      ...item,
      percent: totalAssets > 0 ? (item.value / totalAssets) * 100 : 0,
    }));

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      liquidAssets,
      investableAssets,
      debtToAssetRatio,
      liquidRatio,
      stage,
      stageNote,
      nextMove,
      assetMix,
    };
  }, [
    cash,
    investments,
    retirement,
    realEstate,
    vehicles,
    businessAssets,
    otherAssets,
    mortgage,
    creditCards,
    loans,
    studentDebt,
    otherDebt,
  ]);

  return (
    <section className="networth-tool">
      <div className="country-toggle networth-country-toggle">
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

      <div className="networth-market-badge">
        {isCanada
          ? "🇨🇦 Net worth estimate shown in CAD."
          : "🇺🇸 Net worth estimate shown in USD."}
      </div>

      <div className="networth-panel">
        <div className="networth-inputs">
          <div className="networth-title">
            <span>◆</span>
            <div>
              <h2>Net Worth Tracker Calculator</h2>
              <p>
                Add your assets and liabilities to calculate net worth, wealth stage,
                debt load, liquidity, and asset mix.
              </p>
            </div>
          </div>

          <div className="networth-section-label">Assets</div>

          <div className="networth-fields">
            <label><span>Cash / Emergency Fund</span><input type="number" value={cash} onChange={(e) => setCash(Number(e.target.value))} /></label>
            <label><span>Investments</span><input type="number" value={investments} onChange={(e) => setInvestments(Number(e.target.value))} /></label>
            <label><span>Retirement Accounts</span><input type="number" value={retirement} onChange={(e) => setRetirement(Number(e.target.value))} /></label>
            <label><span>Real Estate Value</span><input type="number" value={realEstate} onChange={(e) => setRealEstate(Number(e.target.value))} /></label>
            <label><span>Vehicles</span><input type="number" value={vehicles} onChange={(e) => setVehicles(Number(e.target.value))} /></label>
            <label><span>Business Assets</span><input type="number" value={businessAssets} onChange={(e) => setBusinessAssets(Number(e.target.value))} /></label>
            <label className="networth-wide"><span>Other Assets</span><input type="number" value={otherAssets} onChange={(e) => setOtherAssets(Number(e.target.value))} /></label>
          </div>

          <div className="networth-section-label liabilities">Liabilities</div>

          <div className="networth-fields">
            <label><span>Mortgage Balance</span><input type="number" value={mortgage} onChange={(e) => setMortgage(Number(e.target.value))} /></label>
            <label><span>Credit Card Debt</span><input type="number" value={creditCards} onChange={(e) => setCreditCards(Number(e.target.value))} /></label>
            <label><span>Personal / Auto Loans</span><input type="number" value={loans} onChange={(e) => setLoans(Number(e.target.value))} /></label>
            <label><span>Student Debt</span><input type="number" value={studentDebt} onChange={(e) => setStudentDebt(Number(e.target.value))} /></label>
            <label className="networth-wide"><span>Other Debt</span><input type="number" value={otherDebt} onChange={(e) => setOtherDebt(Number(e.target.value))} /></label>
          </div>
        </div>

        <div className="networth-results">
          <div className="networth-hero-card">
            <small>Your Net Worth</small>
            <strong>{formatter.format(result.netWorth)}</strong>
            <p>{result.stageNote}</p>
          </div>

          <div className="networth-stage-card">
            <span>Wealth Stage</span>
            <h3>{result.stage}</h3>
            <p>{result.nextMove}</p>
          </div>

          <div className="networth-metrics">
            <div><span>Total Assets</span><strong>{formatter.format(result.totalAssets)}</strong></div>
            <div><span>Total Liabilities</span><strong>{formatter.format(result.totalLiabilities)}</strong></div>
            <div><span>Liquid Assets</span><strong>{formatter.format(result.liquidAssets)}</strong></div>
            <div><span>Investable Assets</span><strong>{formatter.format(result.investableAssets)}</strong></div>
            <div><span>Debt / Asset Ratio</span><strong>{(result.debtToAssetRatio * 100).toFixed(1)}%</strong></div>
            <div><span>Liquidity Ratio</span><strong>{(result.liquidRatio * 100).toFixed(1)}%</strong></div>
          </div>

          <div className="networth-breakdown">
            <span>Asset Mix</span>
            {result.assetMix.map((item) => (
              <div key={item.label}>
                <div className="networth-breakdown-row">
                  <p>{item.label}</p>
                  <strong>{item.percent.toFixed(1)}%</strong>
                </div>
                <div className="networth-bar">
                  <i style={{ width: `${item.percent}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="networth-note">
            <strong>Tracking note:</strong>
            <p>
              Net worth is a snapshot. Track it monthly to see whether your system
              is moving toward debt freedom, wealth building, retirement, or FIRE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
