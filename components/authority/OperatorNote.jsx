export default function OperatorNote({ children }) {
  return (
    <aside className="my-8 border-l-4 border-yellow-500 bg-yellow-500/5 p-6 rounded-r-2xl">
      <div className="mb-2 text-xs uppercase tracking-[0.25em] text-yellow-400">
        Operator Note
      </div>

      <div className="text-zinc-300 leading-7">
        {children}
      </div>
    </aside>
  );
}
