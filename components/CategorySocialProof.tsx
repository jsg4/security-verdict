import { CategoryConfig } from "@/data/types";

export default function CategorySocialProof({ config }: { config: CategoryConfig }) {
  return (
    <div className="max-w-[var(--content-width)] mx-auto px-5 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {config.stats.map((s, i) => (
          <div key={i} className="bg-white border border-[var(--gray-200)] rounded-[var(--radius-md)] p-4 text-center">
            <p className="text-[1.5rem] font-extrabold text-[var(--primary)] tracking-tight">{s.stat}</p>
            <p className="text-[12px] text-[var(--gray-500)] font-medium mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
      {config.referencedBy.length > 0 && (
        <div className="mt-5 flex flex-col items-center">
          <p className="text-[10px] font-semibold text-[var(--gray-400)] uppercase tracking-widest mb-2.5">
            Methodology Referenced By
          </p>
          <div className="flex items-center gap-6">
            {config.referencedBy.map((name) => (
              <span key={name} className="text-[12px] font-bold tracking-wide text-[var(--gray-400)]">
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
