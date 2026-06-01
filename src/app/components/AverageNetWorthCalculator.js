"use client";

import CommandCenterCTA from "@/app/components/CommandCenterCTA";
import { useMemo, useState } from "react";

const toNumber = (value) => Number(value) || 0;

const NET_WORTH_DATA = {
  "under-35": { label: "Under 35", median: 48700, mean: 130000, p10: 3200, p25: 10500, p75: 145000, p90: 310000, p95: 490000, p99: 820000 },
  "35-44":    { label: "35–44",    median: 234400, mean: 450000, p10: 12000, p25: 62000, p75: 520000, p90: 980000, p95: 1400000, p99: 2600000 },
  "45-54":    { label: "45–54",    median: 521400, mean: 850000, p10: 42000, p25: 148000, p75: 1050000, p90: 1900000, p95: 2700000, p99: 5200000 },
  "55-64":    { label: "55–64",    median: 690000, mean: 1100000, p10: 58000, p25: 198000, p75: 1380000, p90: 2500000, p95: 3600000, p99: 7000000 },
  "65-74":    { label: "65–74",    median: 610000, mean: 980000, p10: 46000, p25: 172000, p75: 1200000, p90: 2200000, p95: 3100000, p99: 6000000 },
  "75-plus":  { label: "75+",      median: 543000, mean: 900000, p10: 32000, p25: 130000, p75: 1060000, p90: 2000000, p95: 2800000, p99: 5500000 },
};

const AGE_BRACKETS = [
  { value: "under-35", label: "Under 35" },
  { value: "35-44", label: "35–44" },
  { value: "45-54", label: "45–54" },
  { value: "55-64", label: "55–64" },
  { value: "65-74", label: "65–74" },
  { value: "75-plus", label: "75 and older" },
];

const PROVINCES = [
  { value: "national", label: "National Average" },
  { value: "bc", label: "British Columbia" },
  { value: "ab", label: "Alberta" },
  { value: "on", label: "Ontario" },
  { value: "qc", label: "Québec" },
  { value: "mb", label: "Manitoba" },
  { value: "sk", label: "Saskatchewan" },
  { value: "ns", label: "Nova Scotia" },
  { value: "nb", label: "New Brunswick" },
  { value: "pe", label: "Prince Edward Island" },
  { value: "nl", label: "Newfoundland & Labrador" },
];

const PROVINCE_MULTIPLIERS = {
  national: 1.0, bc: 1.28, ab: 1.18, on: 1.22, qc: 0.85,
  mb: 0.88, sk: 0.92, ns: 0.78, nb: 0.74, pe: 0.72, nl: 0.76,
};

function getPercentileLabel(netWorth, data, multiplier) {
  const s = (v) => v * multiplier;
  if (netWorth >= s(data.p99)) return { label: "Top 1%", pct: 99, color: "money-green" };
  if (netWorth >= s(data.p95)) return { label: "Top 5%", pct: 95, color: "money-green" };
  if (netWorth >= s(data.p90)) return { label: "Top 10%", pct: 90, color: "money-green" };
  if (netWorth >= s(data.p75)) return { label: "Above Average (Top 25%)", pct: 75, color: "money-green" };
  if (netWorth >= s(data.median)) return { label: "Above Median (Top 50%)", pct: 50, color: "money-green" };
  if (netWorth >= s(data.p25)) return { label: "Below Median (Bottom 50%)", pct: 30, color: "" };
  if (netWorth >= s(data.p10)) return { label: "Below Average (Bottom 25%)", pct: 15, color: "" };
  return { label: "Bottom 10%", pct: 5, color: "money-red" };
}

export default function AverageNetWorthCalculator() {
  const [ageBracket, setAgeBracket] = useState("35-44");
  const [province, setProvince] = useState("national");
  const [userNetWorth, setUserNetWorth] = useState("");

  const formatter = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });

  const data = NET_WORTH_DATA[ageBracket];
  const multiplier = PROVINCE_MULTIPLIERS[province];

  const benchmarks = useMemo(() => ({
    median: Math.round(data.median * multiplier),
    mean: Math.round(data.mean * multiplier),
    p10: Math.round(data.p10 * multiplier),
    p25: Math.round(data.p25 * multiplier),
    p75: Math.round(data.p75 * multiplier),
    p90: Math.round(data.p90 * multiplier),
    p95: Math.round(data.p95 * multiplier),
    p99: Math.round(data.p99 * multiplier),
  }), [data, multiplier]);

  const comparison = useMemo(() => {
    const nw = toNumber(userNetWorth);
    if (!nw) return null;
    return getPercentileLabel(nw, data, multiplier);
  }, [userNetWorth, data, multiplier]);

  const userNW = toNumber(userNetWorth);
  const progressPct = userNW > 0 ? Math.min(Math.round((userNW / benchmarks.p90) * 100), 100) : 0;

  return (
    <section className="nwage-tool">
      <div className="nwage-controls">
        <label className="nwage-control-group">
          <span>Age Group</span>
          <select value={ageBracket} onChange={(e) => setAgeBracket(e.target.value)}>
            {AGE_BRACKETS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </label>
        <label className="nwage-control-group">
          <span>Province / Region</span>
          <select value={province} onChange={(e) => setProvince(e.target.value)}>
            {PROVINCES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
          </select>
        </label>
      </div>

      <div className="nwage-panel">
        <div className="nwage-left">
          <div className="nwage-title">
            <h2>Average Net Worth — Age {AGE_BRACKETS.find((b) => b.value === ageBracket)?.label}</h2>
            <p>Statistics Canada benchmark data for Canadian households. Figures are approximate planning references. (Statistics Canada, Survey of Financial Security (SFS), 2023)</p>
          </div>

          <div className="nwage-benchmark-grid">
            <div className="nwage-benchmark-card featured">
              <small>Median Net Worth</small>
              <strong className="money-green">{formatter.format(benchmarks.median)}</strong>
              <p>50% of Canadians in this age group have less.</p>
            </div>
            <div className="nwage-benchmark-card">
              <small>Average (Mean) Net Worth</small>
              <strong>{formatter.format(benchmarks.mean)}</strong>
              <p>Pulled higher by wealth concentration at the top.</p>
            </div>
          </div>

          <div className="nwage-pct-table">
            <div className="nwage-pct-header">
              <span>Percentile</span><span>Net Worth Threshold</span><span>What It Means</span>
            </div>
            {[
              { label: "Top 1%",       val: benchmarks.p99, desc: "Exceptional wealth accumulation", cls: "money-green" },
              { label: "Top 5%",       val: benchmarks.p95, desc: "High net worth territory",         cls: "money-green" },
              { label: "Top 10%",      val: benchmarks.p90, desc: "Strong wealth position",           cls: "money-green" },
              { label: "Top 25%",      val: benchmarks.p75, desc: "Above average for your age",       cls: "" },
              { label: "Median (50th)",val: benchmarks.median, desc: "Midpoint for this age group",   cls: "" },
              { label: "Bottom 25%",   val: benchmarks.p25, desc: "Below average accumulation",       cls: "" },
              { label: "Bottom 10%",   val: benchmarks.p10, desc: "Early stage or rebuilding",        cls: "money-red" },
            ].map((row) => (
              <div key={row.label} className={`nwage-pct-row${row.label === "Median (50th)" ? " median-row" : ""}`}>
                <span>{row.label}</span>
                <strong className={row.cls}>{formatter.format(row.val)}{row.label.startsWith("Top") ? "+" : ""}</strong>
                <span>{row.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="nwage-right">
          <div className="nwage-compare-card">
            <h3>How Do You Compare?</h3>
            <p>Enter your current net worth to see where you stand among Canadians in your age group.</p>
            <label>
              <span>Your Current Net Worth (CAD)</span>
              <input
                type="number"
                inputMode="numeric"
                placeholder="$250,000"
                value={userNetWorth}
                onChange={(e) => setUserNetWorth(e.target.value)}
              />
            </label>

            {userNW > 0 && comparison && (
              <div className="nwage-result">
                <div className="nwage-result-label">
                  <small>Your Position</small>
                  <strong className={comparison.color || ""}>{comparison.label}</strong>
                </div>
                <div className="nwage-progress-wrap">
                  <div className="nwage-progress-bar">
                    <div className="nwage-progress-fill" style={{ width: `${progressPct}%` }} />
                  </div>
                  <div className="nwage-progress-labels">
                    <span>$0</span>
                    <span>Median<br />{formatter.format(benchmarks.median)}</span>
                    <span>Top 10%<br />{formatter.format(benchmarks.p90)}</span>
                  </div>
                </div>

                <div className="nwage-gap-metrics">
                  <div>
                    <span>vs. Median</span>
                    <strong className={userNW >= benchmarks.median ? "money-green" : "money-red"}>
                      {userNW >= benchmarks.median ? "+" : ""}{formatter.format(userNW - benchmarks.median)}
                    </strong>
                  </div>
                  <div>
                    <span>vs. Top 10%</span>
                    <strong className={userNW >= benchmarks.p90 ? "money-green" : ""}>
                      {userNW >= benchmarks.p90 ? "+" : ""}{formatter.format(userNW - benchmarks.p90)}
                    </strong>
                  </div>
                  <div>
                    <span>vs. Top 1%</span>
                    <strong className={userNW >= benchmarks.p99 ? "money-green" : ""}>
                      {userNW >= benchmarks.p99 ? "+" : ""}{formatter.format(userNW - benchmarks.p99)}
                    </strong>
                  </div>
                </div>
              </div>
            )}

            {!userNW && (
              <p className="nwage-empty">Enter your net worth above to see your percentile ranking.</p>
            )}
          </div>

          <div className="bdm-note">
            <strong>Data note:</strong>
            <p>Benchmarks are estimates based on Statistics Canada Survey of Financial Security data. (Statistics Canada, Survey of Financial Security (SFS), 2023) Provincial figures use relative multipliers. These are planning references, not guarantees.</p>
          </div>
        </div>
      </div>

      <CommandCenterCTA />
    </section>
  );
}
