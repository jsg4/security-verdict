import { CategoryConfig } from "@/data/types";

export default function CategoryShowcase({ config }: { config: CategoryConfig }) {
  return (
    <section className="max-w-[var(--content-width)] mx-auto px-5 py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className="bg-gradient-to-br from-[var(--primary-light)] to-blue-100 rounded-[var(--radius-lg)] p-6 md:p-8 flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-[var(--radius-lg)] shadow-lg mx-auto mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <p className="text-sm font-bold text-[var(--primary)]">{config.title}</p>
            <p className="text-xs text-gray-500 mt-1">Independently Tested & Reviewed</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3">{config.showcaseLabel}</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-4 leading-tight">{config.showcaseTitle}</h2>
          <p className="text-base text-gray-600 leading-relaxed mb-6">{config.showcaseSubtitle}</p>
          <div className="space-y-4">
            {config.showcaseFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--primary-light)] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--foreground)]">{f.title}</h4>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
