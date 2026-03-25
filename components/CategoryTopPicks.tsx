import { CategoryConfig } from "@/data/types";
import ScoreRing from "./ScoreRing";
import StarRating from "./StarRating";
import BrandLogo from "./BrandLogo";
import DealBadge from "./DealBadge";
import BestForBadge from "./BestForBadge";
import ClickToCall from "./ClickToCall";

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
            {i === 0 && (
              <div className="absolute -top-3 right-4 bg-[var(--success)] text-white text-[10px] font-bold px-2.5 py-1 rounded-[var(--radius-full)] shadow-sm flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" /></svg>
                Editor&apos;s Choice
              </div>
            )}
            {product.bestFor && (
              <div className="absolute -top-3 left-4">
                <BestForBadge bestFor={product.bestFor} variant={i === 0 ? "gold" : "default"} />
              </div>
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
            {product.deal && (
              <div className="mb-3">
                <DealBadge deal={product.deal} />
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
                <div className="mt-2 flex justify-center">
                  <ClickToCall phone={product.phone} productName={product.name} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
