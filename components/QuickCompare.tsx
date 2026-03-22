"use client";

import { Product } from "@/data/types";
import BrandLogo from "./BrandLogo";
import StarRating from "./StarRating";

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--success)] flex-shrink-0" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

export default function QuickCompare({ products }: { products: Product[] }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)]">
            Quick Compare
          </h2>
          <p className="text-base text-gray-500">
            All {products.length} services ranked at a glance
          </p>
        </div>
        <a href="#reviews" className="text-sm font-semibold text-[var(--primary)] hover:underline hidden sm:block">
          Skip to detailed reviews
        </a>
      </div>

      <div className="space-y-3">
        {products.map((product, i) => {
          const isTop = i === 0;

          return (
            <a
              key={product.slug}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`block no-underline text-inherit rounded-xl border-2 hover:shadow-lg transition-all ${
                isTop
                  ? "border-[var(--gold)] bg-[var(--gold-light)]"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Recommendation ribbon for #1 */}
              {isTop && (
                <div className="bg-[var(--success)] text-white text-center py-1.5 px-4 text-xs font-bold tracking-wide rounded-t-[10px]">
                  Our Recommendation
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-4 sm:px-5 py-4">
                {/* Rank + Logo + Info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="text-2xl font-extrabold text-gray-300 w-8 text-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <BrandLogo brand={product.slug} size={44} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-extrabold text-[var(--foreground)]">
                        {product.name}
                      </h3>
                      {product.bestFor && (
                        <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-full">
                          {product.bestFor}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={product.stars} size={13} />
                      <span className="text-xs text-gray-400">
                        {product.externalReviewCount || product.reviewCount} reviews
                        {product.externalReviewSource && ` on ${product.externalReviewSource}`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key benefits — desktop only */}
                <div className="hidden md:flex items-center gap-4 text-xs text-gray-600 flex-shrink-0">
                  {product.features.slice(0, 3).map((f, fi) => (
                    <span key={fi} className="flex items-center gap-1 whitespace-nowrap">
                      <Check />
                      {f.label}
                    </span>
                  ))}
                </div>

                {/* Score + Price + CTA */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  {/* Discount */}
                  {product.discount && (
                    <span className="hidden lg:block text-xs font-bold text-[var(--success)] max-w-[120px] text-right leading-tight">
                      {product.promoCode
                        ? `Code: ${product.promoCode}`
                        : product.discount}
                    </span>
                  )}

                  {/* Score badge */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-white text-sm flex-shrink-0 ${
                    product.score >= 9
                      ? "bg-[var(--success)]"
                      : product.score >= 8
                        ? "bg-[var(--primary)]"
                        : "bg-[var(--warning)]"
                  }`}>
                    {product.score}
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-lg font-extrabold text-[var(--foreground)]">{product.annualMonthly}</p>
                    <p className="text-[10px] text-gray-400">per month</p>
                  </div>

                  {/* CTA */}
                  <span className="btn-cta px-5 py-2.5 text-sm rounded-lg flex-shrink-0 hidden sm:inline-flex">
                    Visit Site
                  </span>
                </div>
              </div>

              {/* Visitor counter for #1 */}
              {isTop && product.weeklyVisitors && (
                <div className="px-5 pb-3 text-xs text-gray-400 animate-fade-in-delayed">
                  <strong className="text-gray-500">{product.weeklyVisitors}</strong> people visited this site this week
                </div>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
