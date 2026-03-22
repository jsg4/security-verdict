import { CategoryConfig } from "@/data/types";

export default function CategoryMethodology({ config }: { config: CategoryConfig }) {
  return (
    <section id="methodology" className="bg-[var(--gray-50)] py-10">
      <div className="max-w-[var(--content-width)] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-2">How We Evaluate</h2>
        <p className="text-base text-gray-500 mb-6">Our score is calculated across weighted categories, based on hands-on testing and independent research.</p>
        <div className="space-y-4 mb-8">
          {config.scoringCriteria.map((c) => (
            <div key={c.label} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                <span className="inline-flex items-center justify-center w-12 h-8 bg-[var(--primary-light)] text-[var(--primary)] text-sm font-bold rounded">{c.weight}</span>
                <span className="font-semibold text-sm text-[var(--foreground)]">{c.label}</span>
              </div>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
