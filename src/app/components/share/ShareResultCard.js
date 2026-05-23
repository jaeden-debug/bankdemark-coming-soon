"use client";

export default function ShareResultCard({
  title,
  results,
}) {
  return (
    <div className="share-result-card">
      <div className="share-result-top">
        <p className="share-result-brand">BANKDEMARK</p>
        <h1>{title}</h1>
        <p className="share-result-sub">
          Interactive shared calculator snapshot
        </p>
      </div>

      <div className="share-result-grid">
        {Object.entries(results || {}).map(([key, value]) => (
          <div key={key} className="share-result-metric">
            <span>{key}</span>
            <strong>{String(value)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
