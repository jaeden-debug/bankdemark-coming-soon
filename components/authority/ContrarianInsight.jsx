export default function ContrarianInsight({ children }) {
  return (
    <div className="my-8 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
      <div className="mb-3 text-xs uppercase tracking-[0.25em] text-red-400">
        Contrarian Insight
      </div>

      <div className="text-zinc-200 leading-7">
        {children}
      </div>
    </div>
  );
}