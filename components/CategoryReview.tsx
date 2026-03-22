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
    <div className={`mb-10 ${isTopPick ? "ring-2 ring-[var(--gold)]" : ""}`} id={product.slug}>
      {/* #1 Ribbon for top product — GAP #7 */}
      {isTopPick && (
        <div className="bg-[var(--success)] text-white text-center py-2 px-4 text-sm font-bold tracking-wide rounded-t-xl">
          <svg viewBox="0 0 24 24" className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="currentColor">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
          </svg>
          Our Recommendation
        </div>
      )}

      <div className={`flex flex-col lg:flex-row gap-0 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all ${isTopPick ? "rounded-b-xl" : "rounded-xl"} overflow-hidden`}>
        {/* Main content */}
        <a href={product.url} target="_blank" rel="noopener noreferrer nofollow" className="flex-1 no-underline text-inherit block min-w-0">
          {/* Header */}
          <div className="bg-[var(--gray-50)] border-b border-gray-200 px-4 sm:px-6 py-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <BrandLogo brand={product.slug} size={60} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">#{rank} {product.name}</h3>
                    {product.bestFor && <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full">{product.bestFor}</span>}
                    {!product.bestFor && product.badge && <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full">{product.badge}</span>}
                  </div>
                  <p className="text-sm sm:text-base text-gray-500 mt-1">{product.tagline}</p>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <StarRating rating={product.stars} reviewCount={product.externalReviewCount || product.reviewCount} size={16} />
                    {/* GAP #3: External review source */}
                    {product.externalReviewSource && (
                      <span className="text-[11px] text-gray-400">on {product.externalReviewSource}</span>
                    )}
                    <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded">{product.ratingLabel}</span>
                  </div>
                  {/* GAP #6: Promo code */}
                  {product.promoCode && (
                    <p className="mt-2 text-sm font-bold text-[var(--success)] flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>
                      {product.discount} — Use code: <span className="bg-[var(--success-light)] px-2 py-0.5 rounded font-mono text-[var(--success)]">{product.promoCode}</span>
                    </p>
                  )}
                  {!product.promoCode && product.discount && (
                    <p className="mt-2 text-sm font-bold text-[var(--success)] flex items-center gap-1.5">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg>
                      {product.discount}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <ScoreRing score={product.score} size={72} />
                <div className="text-right">
                  <p className="text-xs text-gray-500">Score</p>
                  <p className="text-xl font-extrabold text-[var(--foreground)]">{product.score}/10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 py-6">
            {/* GAP #9: Score breakdown sub-ratings */}
            {product.scoreBreakdown && product.scoreBreakdown.length > 0 && (
              <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {product.scoreBreakdown.map((sb) => (
                  <div key={sb.label} className="bg-[var(--gray-50)] rounded-lg p-3 text-center">
                    <p className="text-lg font-extrabold text-[var(--primary)]">{sb.score}</p>
                    <p className="text-[11px] text-gray-500 font-medium">{sb.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[var(--success-light)] rounded-xl p-5 sm:p-6 border border-green-200">
                <h4 className="text-lg font-extrabold text-[var(--success)] uppercase tracking-wide mb-4">What We Like</h4>
                <ul className="space-y-3">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ProConIcon icon={pro.icon} type="pro" />
                      <span className="text-base font-medium text-gray-800 leading-snug pt-0.5">{pro.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-200">
                <h4 className="text-lg font-extrabold text-[var(--danger)] uppercase tracking-wide mb-4">What We Don&apos;t Like</h4>
                <ul className="space-y-3">
                  {product.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ProConIcon icon={con.icon} type="con" />
                      <span className="text-base font-medium text-gray-800 leading-snug pt-0.5">{con.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* GAP #10: Mid-content CTA after pros/cons */}
            <div className="mb-6 bg-[var(--primary-light)] border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-base font-semibold text-[var(--foreground)]">
                Ready to get started with {product.name}?
              </p>
              <span className="btn-cta px-6 py-3 text-sm rounded-lg flex-shrink-0">
                Visit Site
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </span>
            </div>

            {/* Product Image */}
            {product.productImage && (
              <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 max-h-[320px]">
                <Image src={product.productImage} alt={product.productImageAlt || `${product.name} screenshot`} width={800} height={320} className="w-full h-full object-cover object-top" />
              </div>
            )}

            {/* Review */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-[var(--foreground)] uppercase tracking-wide mb-3">Our Review</h4>
              <p className="text-base text-gray-700 leading-relaxed">{product.review}</p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">What&apos;s Included</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.features.map((f, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-sm transition-shadow">
                    <p className="text-sm font-bold text-[var(--foreground)] mb-0.5">{f.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[var(--gray-50)] border border-gray-200 rounded-xl px-5 sm:px-6 py-5 gap-4">
              <div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-3xl font-extrabold text-[var(--foreground)]">{product.annualMonthly}</span>
                  <span className="text-base text-gray-500">billed at {product.annualPrice}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  {product.specs.freeTrial && String(product.specs.freeTrial) !== "None" && (
                    <span className="flex items-center gap-1.5"><Check /> {String(product.specs.freeTrial)} free trial</span>
                  )}
                  {product.specs.moneyBack && (
                    <span className="flex items-center gap-1.5"><Check /> {String(product.specs.moneyBack)} money-back guarantee</span>
                  )}
                </div>
                {/* GAP #2: Visitor counter */}
                {product.weeklyVisitors && (
                  <p className="mt-2 text-xs text-gray-400 flex items-center gap-1 animate-fade-in-delayed">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    <strong className="text-gray-500">{product.weeklyVisitors}</strong> people visited this site this week
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <span className="btn-cta px-10 py-4 text-base rounded-xl shadow-lg">
                  Visit Site
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
                {/* Phone CTA — GAP #1 from competitive analysis */}
                {product.phone && (
                  <span className="text-center text-sm text-[var(--primary)] font-semibold flex items-center justify-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call {product.phone}
                  </span>
                )}
              </div>
            </div>
          </div>
        </a>

        {/* GAP #1: Sticky sidebar with CTA (desktop only) */}
        <div className="hidden lg:block w-[260px] flex-shrink-0 border-l border-gray-200 bg-[var(--gray-50)]">
          <div className="sticky top-20 p-5">
            <div className="flex flex-col items-center text-center">
              <BrandLogo brand={product.slug} size={52} />
              <h4 className="font-bold text-[var(--foreground)] mt-3">{product.name}</h4>
              <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded mt-1">{product.ratingLabel}</span>
              <ScoreRing score={product.score} size={56} />
              <p className="text-2xl font-extrabold text-[var(--foreground)] mt-2">{product.annualMonthly}</p>
              <p className="text-xs text-gray-500 mb-3">Starting price</p>

              {/* Key specs */}
              <div className="w-full space-y-2 mb-4 text-left text-xs">
                {product.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <Check />
                    <span className="text-gray-600">{f.label}</span>
                  </div>
                ))}
              </div>

              <a href={product.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta w-full py-3 text-sm rounded-lg mb-2">
                Visit Site
              </a>

              {product.phone && (
                <a href={`tel:${product.phone.replace(/[^0-9]/g, "")}`} className="text-xs text-[var(--primary)] font-semibold flex items-center justify-center gap-1 mt-1 no-underline">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {product.phone}
                </a>
              )}

              {product.weeklyVisitors && (
                <p className="text-[10px] text-gray-400 mt-3">
                  <strong>{product.weeklyVisitors}</strong> visited this week
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
