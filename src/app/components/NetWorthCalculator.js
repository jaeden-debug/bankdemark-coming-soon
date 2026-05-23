"use client";

import { useMemo, useState } from "react";

const toNumber = (value) => Number(value) || 0;

export default function NetWorthCalculator() {
  const [country, setCountry] = useState("canada");

  const [cash, setCash] = useState("");
  const [investments, setInvestments] = useState("");
  const [retirement, setRetirement] = useState("");
  const [realEstate, setRealEstate] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [businessAssets, setBusinessAssets] = useState("");
  const [otherAssets, setOtherAssets] = useState("");

  const [mortgage, setMortgage] = useState("");
  const [creditCards, setCreditCards] = useState("");
  const [loans, setLoans] = useState("");
  const [studentDebt, setStudentDebt] = useState("");
  const [otherDebt, setOtherDebt] = useState("");

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
    const cashValue = toNumber(cash);
    const investmentsValue = toNumber(investments);
    const retirementValue = toNumber(retirement);
    const realEstateValue = toNumber(realEstate);
    const vehiclesValue = toNumber(vehicles);
    const businessAssetsValue = toNumber(businessAssets);
    const otherAssetsValue = toNumber(otherAssets);
    const mortgageValue = toNumber(mortgage);
    const creditCardsValue = toNumber(creditCards);
    const loansValue = toNumber(loans);
    const studentDebtValue = toNumber(studentDebt);
    const otherDebtValue = toNumber(otherDebt);

    const liquidAssets = cashValue + investmentsValue;
    const investableAssets = investmentsValue + retirementValue;
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
            <label><span>Cash / Emergency Fund</span><input type="text" inputMode="decimal" value={cash} onChange={(e) => setCash(e.target.value)} /></label>
            <label><span>Investments</span><input type="text" inputMode="decimal" value={investments} onChange={(e) => setInvestments(e.target.value)} /></label>
            <label><span>Retirement Accounts</span><input type="text" inputMode="decimal" value={retirement} onChange={(e) => setRetirement(e.target.value)} /></label>
            <label><span>Real Estate Value</span><input type="text" inputMode="decimal" value={realEstate} onChange={(e) => setRealEstate(e.target.value)} /></label>
            <label><span>Vehicles</span><input type="text" inputMode="decimal" value={vehicles} onChange={(e) => setVehicles(e.target.value)} /></label>
            <label><span>Business Assets</span><input type="text" inputMode="decimal" value={businessAssets} onChange={(e) => setBusinessAssets(e.target.value)} /></label>
            <label className="networth-wide"><span>Other Assets</span><input type="text" inputMode="decimal" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} /></label>
          </div>

          <div className="networth-section-label liabilities">Liabilities</div>

          <div className="networth-fields">
            <label><span>Mortgage Balance</span><input type="text" inputMode="decimal" value={mortgage} onChange={(e) => setMortgage(e.target.value)} /></label>
            <label><span>Credit Card Debt</span><input type="text" inputMode="decimal" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} /></label>
            <label><span>Personal / Auto Loans</span><input type="text" inputMode="decimal" value={loans} onChange={(e) => setLoans(e.target.value)} /></label>
            <label><span>Student Debt</span><input type="text" inputMode="decimal" value={studentDebt} onChange={(e) => setStudentDebt(e.target.value)} /></label>
            <label className="networth-wide"><span>Other Debt</span><input type="text" inputMode="decimal" value={otherDebt} onChange={(e) => setOtherDebt(e.target.value)} /></label>
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
