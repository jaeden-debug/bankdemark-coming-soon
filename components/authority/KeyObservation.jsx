export default function KeyObservation({ children }) {
  return (
    <div className="my-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6">
      <div className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-400">
        Key Observation
      </div>

      <div className="text-zinc-200 leading-7">
        {children}
      </div>
    </div>
  );
}