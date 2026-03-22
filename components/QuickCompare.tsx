import { Product } from "@/data/types";
import BrandLogo from "./BrandLogo";
import StarRating from "./StarRating";

export default function QuickCompare({ products }: { products: Product[] }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)]">
            Quick Compare
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            All {products.length} services ranked at a glance
          </p>
        </div>
        <a href="#reviews" className="text-sm font-semibold text-[var(--primary)] hover:underline hidden sm:block">
          See full reviews &darr;
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
              className={`block no-underline text-inherit rounded-xl border-2 overflow-hidden hover:shadow-lg transition-all ${
                isTop
                  ? "border-[var(--gold)] bg-[var(--gold-light)]"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {isTop && (
                <div className="bg-[var(--success)] text-white text-center py-1.5 text-xs font-bold tracking-wide">
                  Our Recommendation
                </div>
              )}

              <div className="p-4">
                {/* Row 1: Logo + Name + Score + Price + CTA */}
                <div className="flex items-center gap-3">
                  {/* Rank */}
                  <span className="text-xl font-extrabold text-gray-300 w-6 text-center flex-shrink-0">
                    {i + 1}
                  </span>

                  {/* Logo */}
                  <BrandLogo brand={product.slug} size={40} />

                  {/* Name + Rating */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-extrabold text-[var(--foreground)] truncate">
                        {product.name}
                      </h3>
                      {product.bestFor && (
                        <span className="hidden sm:inline text-[10px] font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-full whitespace-nowrap">
                          {product.bestFor}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StarRating rating={product.stars} size={12} />
                      <span className="text-[11px] text-gray-400 truncate">
                        {product.externalReviewCount || product.reviewCount} reviews
                      </span>
                    </div>
                  </div>

                  {/* Score badge */}
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center font-extrabold text-white text-sm flex-shrink-0 ${
                      product.score >= 9
                        ? "bg-[var(--success)]"
                        : product.score >= 8
                          ? "bg-[var(--primary)]"
                          : "bg-[var(--warning)]"
                    }`}
                  >
                    {product.score}
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0 w-16">
                    <p className="text-base font-extrabold text-[var(--foreground)] leading-tight">{product.annualMonthly}</p>
                    <p className="text-[10px] text-gray-400 leading-tight">/month</p>
                  </div>

                  {/* CTA — desktop only */}
                  <span className="btn-cta px-4 py-2 text-sm rounded-lg flex-shrink-0 hidden md:inline-flex">
                    Visit Site
                  </span>
                </div>

                {/* Row 2: Deal callout — only if exists */}
                {(product.promoCode || product.discount) && (
                  <div className="mt-2 ml-[76px] sm:ml-[76px]">
                    <span className="text-xs font-bold text-[var(--success)]">
                      {product.promoCode
                        ? `${product.discount} — Code: ${product.promoCode}`
                        : product.discount}
                    </span>
                  </div>
                )}

                {/* Visitor counter — #1 only */}
                {isTop && product.weeklyVisitors && (
                  <p className="mt-2 ml-[76px] text-[11px] text-gray-400 animate-fade-in-delayed">
                    <strong className="text-gray-500">{product.weeklyVisitors}</strong> people visited this week
                  </p>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
