import { CategoryConfig } from "@/data/types";

export default function CategoryBanner({ config }: { config: CategoryConfig }) {
  return (
    <section className="bg-[#0d47a1] py-10">
      <div className="max-w-[var(--content-width)] mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2">{config.bannerTitle}</h2>
          <p className="text-sm text-blue-200 max-w-2xl mx-auto">{config.bannerSubtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {config.bannerStats.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-[var(--radius-lg)] p-4 text-center border border-white/10">
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">{item.stat}</p>
              <p className="text-[11px] text-blue-200 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#top-picks" className="inline-flex items-center gap-2 bg-white text-[#0d47a1] font-bold text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
            See Our Top Recommendations
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
