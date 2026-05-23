export default function FrameworkBlock({ title, children }) {
  return (
    <div className="my-10 rounded-3xl border border-zinc-700 bg-zinc-900/70 p-8">
      <div className="mb-4 text-2xl font-bold text-white">
        {title}
      </div>

      <div className="space-y-4 text-zinc-300 leading-8">
        {children}
      </div>
    </div>
  );
}