export default function CaseStudy({ title, context, problem, strategy, results, children }) {
  return (
    <aside className="my-10 rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-7">
      <div className="mb-3 text-xs uppercase tracking-[0.25em] text-emerald-400">
        Real Case Study
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

      {context && <p className="mb-5 text-zinc-300 leading-7">{context}</p>}

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <div className="mb-2 font-semibold text-emerald-300">Problem</div>
          <div className="text-zinc-300 leading-7">{problem}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold text-emerald-300">Strategy</div>
          <div className="text-zinc-300 leading-7">{strategy}</div>
        </div>
        <div>
          <div className="mb-2 font-semibold text-emerald-300">Result</div>
          <div className="text-zinc-300 leading-7">{results}</div>
        </div>
      </div>

      {children && <div className="mt-6 text-zinc-300 leading-7">{children}</div>}
    </aside>
  );
}
