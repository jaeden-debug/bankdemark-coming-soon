"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const toNumber = (value) => Number(value) || 0;

export default function NetWorthCalculator() {
  const [country, setCountry] = useState("canada");
  const [shareStatus, setShareStatus] = useState("idle");
  const [shareUrl, setShareUrl] = useState(null);
  const shareResetTimer = useRef(null);

  function scheduleShareReset(delay = 4000) {
    if (shareResetTimer.current) clearTimeout(shareResetTimer.current);
    shareResetTimer.current = setTimeout(() => {
      setShareStatus((s) => (s === "shared" || s === "copied" ? "ready" : s));
    }, delay);
  }

  const copyShareUrl = useCallback(async () => {
    if (!shareUrl) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        window.prompt("Copy this share link:", shareUrl);
      }
    } catch {
      window.prompt("Copy this share link:", shareUrl);
    }
    setShareStatus("copied");
    scheduleShareReset(4000);
  }, [shareUrl]);

  useEffect(() => {
  const id = requestAnimationFrame(() => {
    const localeText = [
      navigator.language || "",
      ...(navigator.languages || []),
      Intl.DateTimeFormat().resolvedOptions().locale || "",
      Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    ]
      .join(" ")
      .toLowerCase();

    if (
      localeText.includes("-ca") ||
      localeText.includes("en-ca") ||
      localeText.includes("fr-ca") ||
      localeText.includes("toronto") ||
      localeText.includes("vancouver") ||
      localeText.includes("montreal")
    ) {
      setCountry("canada");
      return;
    }

    if (
      localeText.includes("-us") ||
      localeText.includes("en-us") ||
      localeText.includes("america") ||
      localeText.includes("new_york") ||
      localeText.includes("los_angeles")
    ) {
      setCountry("usa");
    }
  });

  return () => cancelAnimationFrame(id);
}, []);
  const resultsRef = useRef(null);

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

  const hasRequiredInputs = [
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
  ].some((value) => String(value).trim() !== "");

  const result = useMemo(() => {
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

    const totalAssets =
      cashValue + investmentsValue + retirementValue + realEstateValue + vehiclesValue + businessAssetsValue + otherAssetsValue;

    const totalLiabilities =
      mortgageValue + creditCardsValue + loansValue + studentDebtValue + otherDebtValue;

    const netWorth = totalAssets - totalLiabilities;

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
      { label: "Cash", value: cashValue },
      { label: "Investments", value: investmentsValue },
      { label: "Retirement", value: retirementValue },
      { label: "Real Estate", value: realEstateValue },
      { label: "Vehicles", value: vehiclesValue },
      { label: "Business", value: businessAssetsValue },
      { label: "Other", value: otherAssetsValue },
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


  async function handleShareResults() {
    if (!hasRequiredInputs || typeof window === "undefined") return;

    setShareStatus("creating");

    // ── Step 1: Save to Supabase via /api/shares ──────────────
    let createdUrl = null;
    try {
      const res = await fetch("/api/shares", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          calculator: "net-worth-calculator",
          inputs: {
            Cash: String(cash ?? ""),
            Investments: String(investments ?? ""),
            "Retirement Accounts": String(retirement ?? ""),
            "Real Estate": String(realEstate ?? ""),
            Vehicles: String(vehicles ?? ""),
            "Business Assets": String(businessAssets ?? ""),
            "Other Assets": String(otherAssets ?? ""),
            Mortgage: String(mortgage ?? ""),
            "Credit Cards": String(creditCards ?? ""),
            Loans: String(loans ?? ""),
            "Student Debt": String(studentDebt ?? ""),
            "Other Debt": String(otherDebt ?? ""),
          },
          results: {
            "Net Worth": formatter.format(result.netWorth),
            "Total Assets": formatter.format(result.totalAssets),
            "Total Liabilities": formatter.format(result.totalLiabilities),
            "Liquid Assets": formatter.format(result.liquidAssets),
            "Investable Assets": formatter.format(result.investableAssets),
            Stage: String(result.stage ?? ""),
          },
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      createdUrl =
        data.absoluteUrl?.trim() ||
        (data.url ? `${window.location.origin}${data.url}` : null);

      if (!createdUrl?.startsWith("http")) throw new Error("Invalid share URL returned");
      setShareUrl(createdUrl);
    } catch (err) {
      console.error("[NetWorthCalculator] share create failed:", err?.message);
      setShareStatus("error");
      scheduleShareReset(5000);
      return;
    }

    // ── Step 2: Native share or clipboard ────────────────────
    const sharePayload = {
      title: "Net Worth Snapshot | BankDeMark",
      text: `View my Net Worth snapshot on BankDeMark:\n${createdUrl}`,
      url: createdUrl,
    };

    const canUseNativeShare =
      typeof navigator.share === "function" &&
      (!navigator.canShare || navigator.canShare(sharePayload));

    if (canUseNativeShare) {
      try {
        await navigator.share(sharePayload);
        setShareStatus("shared");
        scheduleShareReset(4000);
      } catch (shareErr) {
        if (shareErr?.name === "AbortError") {
          // User dismissed — keep URL available via Copy Link
          setShareStatus("ready");
        } else {
          // Real failure — fall back to clipboard
          try { await navigator.clipboard.writeText(createdUrl); } catch { window.prompt("Copy this share link:", createdUrl); }
          setShareStatus("copied");
          scheduleShareReset(3500);
        }
      }
    } else {
      try { await navigator.clipboard.writeText(createdUrl); } catch { window.prompt("Copy this share link:", createdUrl); }
      setShareStatus("copied");
      scheduleShareReset(3500);
    }
  }

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

      <div className="networth-panel">
        <div className="networth-inputs">
          <div className="networth-title">
            <span>{isCanada ? "🇨🇦" : "🇺🇸"}</span>
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
            <label><span>Cash / Emergency Fund</span><input type="number" inputMode="numeric" placeholder="$15,000" value={cash} onChange={(e) => setCash(e.target.value)} /></label>
            <label><span>Investments</span><input type="number" inputMode="numeric" placeholder="$50,000" value={investments} onChange={(e) => setInvestments(e.target.value)} /></label>
            <label><span>Retirement Accounts</span><input type="number" inputMode="numeric" placeholder="$120,000" value={retirement} onChange={(e) => setRetirement(e.target.value)} /></label>
            <label><span>Real Estate Value</span><input type="number" inputMode="numeric" placeholder="$450,000" value={realEstate} onChange={(e) => setRealEstate(e.target.value)} /></label>
            <label><span>Vehicles</span><input type="number" inputMode="numeric" placeholder="$18,000" value={vehicles} onChange={(e) => setVehicles(e.target.value)} /></label>
            <label><span>Business Assets</span><input type="number" inputMode="numeric" placeholder="$25,000" value={businessAssets} onChange={(e) => setBusinessAssets(e.target.value)} /></label>
            <label className="networth-wide"><span>Other Assets</span><input type="number" inputMode="numeric" placeholder="$5,000" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} /></label>
          </div>

          <div className="networth-section-label liabilities">Liabilities</div>

          <div className="networth-fields">
            <label><span>Mortgage Balance</span><input type="number" inputMode="numeric" placeholder="$320,000" value={mortgage} onChange={(e) => setMortgage(e.target.value)} /></label>
            <label><span>Credit Card Debt</span><input type="number" inputMode="numeric" placeholder="$4,500" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} /></label>
            <label><span>Personal / Auto Loans</span><input type="number" inputMode="numeric" placeholder="$12,000" value={loans} onChange={(e) => setLoans(e.target.value)} /></label>
            <label><span>Student Debt</span><input type="number" inputMode="numeric" placeholder="$18,000" value={studentDebt} onChange={(e) => setStudentDebt(e.target.value)} /></label>
            <label className="networth-wide"><span>Other Debt</span><input type="number" inputMode="numeric" placeholder="$2,500" value={otherDebt} onChange={(e) => setOtherDebt(e.target.value)} /></label>
          </div>

          <div className="share-btn-group">
            <button
              type="button"
              className={hasRequiredInputs ? "networth-share-btn ready" : "networth-share-btn"}
              onClick={handleShareResults}
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

        <div className="networth-results" ref={resultsRef}>
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

          <div className="networth-asset-mix-card">
            <span>Asset Mix</span>
            <div className="networth-asset-mix">
              {result.assetMix.map((item) => (
                <div className="networth-asset-pill" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.percent.toFixed(1)}%</strong>
                </div>
              ))}
            </div>
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

      <CommandCenterCTA />
    </section>
  );
}
