import { CategoryConfig } from "@/data/types";

export default function CategoryMethodology({ config }: { config: CategoryConfig }) {
  return (
    <section id="methodology" className="bg-[var(--gray-50)] py-10">
      <div className="max-w-[var(--content-width)] mx-auto px-4 sm:px-5">
        {/* Trust signal header */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg sm:rounded-[var(--radius-lg)] p-5 sm:p-6 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">How We Test &amp; Evaluate</h2>
          <p className="text-blue-100 text-sm sm:text-base mb-4">Our score is calculated across weighted categories, based on hands-on testing and independent research.</p>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div>
                <p className="text-base sm:text-lg font-extrabold">200+</p>
                <p className="text-[10px] sm:text-[11px] text-blue-100">Hours of Testing</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </span>
              <div>
                <p className="text-base sm:text-lg font-extrabold">{config.products.length}+</p>
                <p className="text-[10px] sm:text-[11px] text-blue-100">Products Evaluated</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>
              </span>
              <div>
                <p className="text-base sm:text-lg font-extrabold">{config.scoringCriteria.length}</p>
                <p className="text-[10px] sm:text-[11px] text-blue-100">Scoring Criteria</p>
              </div>
            </div>
          </div>
        </div>

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
