import { CategoryConfig } from "@/data/types";

export default function CategorySocialProof({ config }: { config: CategoryConfig }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {config.stats.map((s, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-extrabold text-[var(--primary)]">{s.stat}</p>
            <p className="text-xs text-gray-500 font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
          Methodology Referenced By
        </p>
        <div className="flex items-center gap-6 text-gray-300">
          {config.referencedBy.map((name) => (
            <span key={name} className="text-xs font-bold tracking-wide text-gray-400 hover:text-gray-500 transition-colors">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
