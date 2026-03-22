import { Product } from "@/data/types";
import BrandLogo from "./BrandLogo";
import StarRating from "./StarRating";

export default function QuickCompare({ products }: { products: Product[] }) {
  return (
    <section className="max-w-[var(--content-width)] mx-auto px-5 py-10">
      <div className="flex items-end justify-between mb-5">
        <div>
          <h2 className="text-[1.5rem] md:text-[1.75rem] font-extrabold text-[var(--foreground)] tracking-tight">
            Quick Compare
          </h2>
          <p className="text-[14px] text-[var(--gray-500)] mt-1">
            All {products.length} services at a glance
          </p>
        </div>
        <a href="#reviews" className="text-[13px] font-semibold text-[var(--primary)] hover:underline hidden sm:block">
          Full reviews &darr;
        </a>
      </div>

      <div className="space-y-2.5">
        {products.map((product, i) => {
          const isTop = i === 0;

          return (
            <a
              key={product.slug}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`block no-underline text-inherit rounded-[var(--radius-lg)] border overflow-hidden transition-all hover:shadow-md ${
                isTop
                  ? "border-[var(--gold)] bg-[var(--gold-light)] border-2"
                  : "border-[var(--gray-200)] bg-white hover:border-[var(--gray-300)]"
              }`}
            >
              {isTop && (
                <div className="bg-[var(--success)] text-white text-center py-1.5 text-[11px] font-bold tracking-wider uppercase">
                  Our Recommendation
                </div>
              )}

              <div className="px-4 py-3.5">
                {/* Main row */}
                <div className="flex items-center gap-3">
                  <span className="text-[18px] font-bold text-[var(--gray-300)] w-5 text-center flex-shrink-0 tabular-nums">
                    {i + 1}
                  </span>

                  <BrandLogo brand={product.slug} size={38} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[15px] font-bold text-[var(--foreground)] truncate">
                        {product.name}
                      </h3>
                      {product.bestFor && (
                        <span className="hidden sm:inline text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-[var(--radius-full)] whitespace-nowrap">
                          {product.bestFor}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <StarRating rating={product.stars} size={11} />
                      <span className="text-[11px] text-[var(--gray-400)]">
                        {product.externalReviewCount || product.reviewCount}
                      </span>
                    </div>
                  </div>

                  {/* Score */}
                  <div
                    className={`w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center font-bold text-white text-[13px] flex-shrink-0 ${
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
                  <div className="text-right flex-shrink-0 w-[60px]">
                    <p className="text-[15px] font-bold text-[var(--foreground)] leading-none">{product.annualMonthly}</p>
                    <p className="text-[10px] text-[var(--gray-400)] mt-0.5">/month</p>
                  </div>

                  {/* CTA */}
                  <span className="btn-cta text-[13px] px-4 py-2 hidden md:inline-flex flex-shrink-0">
                    Visit Site
                  </span>
                </div>

                {/* Deal line */}
                {(product.promoCode || product.discount) && (
                  <p className="mt-2 ml-[62px] text-[12px] font-semibold text-[var(--success)]">
                    {product.promoCode
                      ? `${product.discount} — Code: ${product.promoCode}`
                      : product.discount}
                  </p>
                )}

                {/* Visitor counter */}
                {isTop && product.weeklyVisitors && (
                  <p className="mt-1.5 ml-[62px] text-[11px] text-[var(--gray-400)] animate-fade-in-delayed">
                    <strong className="text-[var(--gray-500)]">{product.weeklyVisitors}</strong> people visited this week
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
