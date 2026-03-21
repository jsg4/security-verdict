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
  return (
    <a href={product.url} target="_blank" rel="noopener noreferrer nofollow" className="block mb-10 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all group no-underline text-inherit" id={product.slug}>
      {/* Header */}
      <div className="bg-[var(--gray-50)] border-b border-gray-200 px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <BrandLogo brand={product.slug} size={60} />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">#{rank} {product.name}</h3>
                {product.badge && <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full">{product.badge}</span>}
              </div>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{product.tagline}</p>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <StarRating rating={product.stars} reviewCount={product.reviewCount} size={16} />
                <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded">{product.ratingLabel}</span>
              </div>
              {product.discount && (
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
        {/* Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
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

        {/* Product Image */}
        {product.productImage && (
          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200">
            <Image src={product.productImage} alt={product.productImageAlt || `${product.name} screenshot`} width={800} height={500} className="w-full h-auto object-cover" />
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
          </div>
          <span className="btn-cta px-10 py-4 text-base rounded-xl flex-shrink-0 shadow-lg">
            Visit Site
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
