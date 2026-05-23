export default function DataInsight({ label = "Data Insight", stat, children }) {
  return (
    <aside className="my-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
      <div className="mb-2 text-xs uppercase tracking-[0.25em] text-blue-400">
        {label}
      </div>

      {stat && (
        <div className="mb-3 text-3xl font-bold text-white">
          {stat}
        </div>
      )}

      <div className="text-zinc-300 leading-7">
        {children}
      </div>
    </aside>
  );
}
