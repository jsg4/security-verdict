import Image from "next/image";
import { Product } from "@/data/types";
import ScoreRing from "./ScoreRing";
import StarRating from "./StarRating";
import BrandLogo from "./BrandLogo";
import ProConIcon from "./ProConIcon";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--success)] flex-shrink-0" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

export default function CategoryReview({ product, rank }: { product: Product; rank: number }) {
  const isTopPick = rank === 1;

  return (
    <div className={`mb-8 ${isTopPick ? "ring-2 ring-[var(--gold)]" : ""}`} id={product.slug}>
      {isTopPick && (
        <div className="bg-[var(--success)] text-white text-center py-2 px-4 text-[13px] font-bold tracking-wide rounded-t-[var(--radius-lg)]">
          <svg viewBox="0 0 24 24" className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="currentColor">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
          </svg>
          Our Recommendation
        </div>
      )}

      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`block border border-[var(--gray-200)] bg-white shadow-sm hover:shadow-lg transition-all no-underline text-inherit ${isTopPick ? "rounded-b-[var(--radius-lg)]" : "rounded-[var(--radius-lg)]"} overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-[var(--gray-50)] border-b border-[var(--gray-200)] px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <BrandLogo brand={product.slug} size={56} />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[1.25rem] sm:text-[1.5rem] font-extrabold text-[var(--foreground)] tracking-tight">#{rank} {product.name}</h3>
                  {product.bestFor && <span className="px-2.5 py-0.5 bg-[var(--primary)] text-white text-[11px] font-bold rounded-[var(--radius-full)]">{product.bestFor}</span>}
                  {!product.bestFor && product.badge && <span className="px-2.5 py-0.5 bg-[var(--primary)] text-white text-[11px] font-bold rounded-[var(--radius-full)]">{product.badge}</span>}
                </div>
                <p className="text-[14px] text-[var(--gray-500)] mt-1">{product.tagline}</p>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <StarRating rating={product.stars} reviewCount={product.externalReviewCount || product.reviewCount} size={14} />
                  {product.externalReviewSource && (
                    <span className="text-[11px] text-[var(--gray-400)]">on {product.externalReviewSource}</span>
                  )}
                  <span className="text-[11px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-[var(--radius-sm)]">{product.ratingLabel}</span>
                </div>
                {product.promoCode ? (
                  <p className="mt-2 text-[13px] font-bold text-[var(--success)] flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>
                    {product.discount} — Use code: <span className="bg-[var(--success-light)] px-1.5 py-0.5 rounded-[var(--radius-sm)] font-mono text-[var(--success)]">{product.promoCode}</span>
                  </p>
                ) : product.discount ? (
                  <p className="mt-2 text-[13px] font-bold text-[var(--success)] flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>
                    {product.discount}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <ScoreRing score={product.score} size={68} />
              <div className="text-right">
                <p className="text-[11px] text-[var(--gray-500)]">Score</p>
                <p className="text-[1.25rem] font-extrabold text-[var(--foreground)]">{product.score}/10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 py-6">
          {/* Score breakdown */}
          {product.scoreBreakdown && product.scoreBreakdown.length > 0 && (
            <div className="mb-6 grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {product.scoreBreakdown.map((sb) => (
                <div key={sb.label} className="bg-[var(--gray-50)] rounded-[var(--radius-md)] p-3 text-center">
                  <p className="text-[1.125rem] font-extrabold text-[var(--primary)]">{sb.score}</p>
                  <p className="text-[10px] text-[var(--gray-500)] font-medium mt-0.5">{sb.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--success-light)] rounded-[var(--radius-lg)] p-5 border border-green-200">
              <h4 className="text-[15px] font-extrabold text-[var(--success)] uppercase tracking-wider mb-3">What We Like</h4>
              <ul className="space-y-2.5">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ProConIcon icon={pro.icon} type="pro" />
                    <span className="text-[14px] font-medium text-[var(--gray-800)] leading-snug pt-0.5">{pro.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-[var(--radius-lg)] p-5 border border-red-200">
              <h4 className="text-[15px] font-extrabold text-[var(--danger)] uppercase tracking-wider mb-3">What We Don&apos;t Like</h4>
              <ul className="space-y-2.5">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <ProConIcon icon={con.icon} type="con" />
                    <span className="text-[14px] font-medium text-[var(--gray-800)] leading-snug pt-0.5">{con.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mid-content CTA */}
          <div className="mb-6 bg-[var(--primary-light)] border border-blue-200 rounded-[var(--radius-lg)] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-[15px] font-semibold text-[var(--foreground)]">
              Ready to get started with {product.name}?
            </p>
            <span className="btn-cta px-6 py-2.5 text-[14px] flex-shrink-0">
              Visit Site
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </span>
          </div>

          {/* Product Image */}
          {product.productImage && (
            <div className="mb-6 rounded-[var(--radius-lg)] overflow-hidden border border-[var(--gray-200)] max-h-[320px]">
              <Image src={product.productImage} alt={product.productImageAlt || `${product.name} screenshot`} width={800} height={320} className="w-full h-full object-cover object-top" />
            </div>
          )}

          {/* Review */}
          <div className="mb-6">
            <h4 className="text-[14px] font-bold text-[var(--foreground)] uppercase tracking-wider mb-2.5">Our Review</h4>
            <p className="text-[15px] text-[var(--gray-700)] leading-relaxed">{product.review}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-[14px] font-bold text-[var(--foreground)] uppercase tracking-wider mb-3">What&apos;s Included</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {product.features.map((f, i) => (
                <div key={i} className="border border-[var(--gray-200)] rounded-[var(--radius-md)] p-3.5 bg-white hover:shadow-sm transition-shadow">
                  <p className="text-[13px] font-bold text-[var(--foreground)] mb-0.5">{f.label}</p>
                  <p className="text-[12px] text-[var(--gray-500)] leading-relaxed">{f.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-[var(--radius-lg)] px-5 py-5 gap-4">
            <div>
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <span className="text-[1.75rem] font-extrabold text-[var(--foreground)]">{product.annualMonthly}</span>
                <span className="text-[14px] text-[var(--gray-500)]">billed at {product.annualPrice}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[13px] text-[var(--gray-500)]">
                {product.specs.freeTrial && String(product.specs.freeTrial) !== "None" && (
                  <span className="flex items-center gap-1.5"><Check /> {String(product.specs.freeTrial)} free trial</span>
                )}
                {product.specs.moneyBack && (
                  <span className="flex items-center gap-1.5"><Check /> {String(product.specs.moneyBack)} money-back guarantee</span>
                )}
              </div>
              {product.weeklyVisitors && (
                <p className="mt-2 text-[11px] text-[var(--gray-400)] flex items-center gap-1 animate-fade-in-delayed">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <strong className="text-[var(--gray-500)]">{product.weeklyVisitors}</strong> people visited this site this week
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <span className="btn-cta px-8 py-3.5 text-[15px] shadow-md">
                Visit Site
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
              {product.phone && (
                <span className="text-center text-[13px] text-[var(--primary)] font-semibold flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {product.phone}
                </span>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
