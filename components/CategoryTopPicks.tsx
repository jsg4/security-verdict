import { CategoryConfig } from "@/data/types";
import ScoreRing from "./ScoreRing";
import StarRating from "./StarRating";
import BrandLogo from "./BrandLogo";

export default function CategoryTopPicks({ config }: { config: CategoryConfig }) {
  const products = config.products.slice(0, 3);

  return (
    <section id="top-picks" className="max-w-[var(--content-width)] mx-auto px-5 py-10">
      <h2 className="text-[1.5rem] md:text-[1.75rem] font-extrabold text-[var(--foreground)] tracking-tight mb-1.5">
        Our Top 3 Picks
      </h2>
      <p className="text-[var(--gray-500)] text-[15px] mb-8">
        Based on independent testing and research
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product, i) => (
          <div key={product.slug} className={`relative rounded-[var(--radius-lg)] border-2 p-5 flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5 ${i === 0 ? "border-[var(--gold)] bg-[var(--gold-light)]" : "border-[var(--gray-200)] bg-white"}`}>
            {(product.bestFor || product.badge) && (
              <span className={`absolute -top-3 left-4 px-3 py-0.5 rounded-[var(--radius-full)] text-[11px] font-bold shadow-sm ${i === 0 ? "bg-[var(--gold)] text-white" : "bg-[var(--primary)] text-white"}`}>
                {product.bestFor || product.badge}
              </span>
            )}
            <div className="mb-4 mt-1.5">
              <div className="flex items-center gap-3">
                <BrandLogo brand={product.slug} size={44} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-[16px] text-[var(--foreground)] tracking-tight leading-snug">{product.name}</h3>
                  <span className="text-[11px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-[var(--radius-sm)] inline-block mt-0.5">{product.ratingLabel}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <StarRating rating={product.stars} reviewCount={product.reviewCount} size={14} />
                <ScoreRing score={product.score} size={44} />
              </div>
            </div>
            {product.discount && (
              <div className="mb-3 flex items-center gap-2 bg-[var(--success-light)] border border-green-200 rounded-[var(--radius-md)] px-3 py-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--success)] flex-shrink-0" fill="currentColor">
                  <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                </svg>
                <span className="text-[12px] font-bold text-[var(--success)]">{product.discount}</span>
              </div>
            )}
            <p className="text-[13px] text-[var(--gray-600)] mb-4 flex-1 leading-relaxed">{product.tagline}</p>
            <div className="text-center">
              <p className="text-[13px] text-[var(--gray-500)] mb-3">
                Starting at <span className="text-[1.25rem] font-extrabold text-[var(--foreground)]">{product.annualMonthly}</span>
              </p>
              <a href={product.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta block w-full py-3 text-[15px]">
                Visit Site
                <svg viewBox="0 0 24 24" className="w-4 h-4 inline ml-1.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
              {product.phone && (
                <a href={`tel:${product.phone}`} className="mt-2 flex items-center justify-center gap-1.5 text-[13px] text-[var(--primary)] font-semibold hover:underline">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {product.phone}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
