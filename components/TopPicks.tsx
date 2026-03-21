import { Product } from "@/data/products";
import ScoreRing from "./ScoreRing";
import StarRating from "./StarRating";
import BrandLogo from "./BrandLogo";

export default function TopPicks({ products }: { products: Product[] }) {
  return (
    <section id="top-picks" className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-2">
        Our Top 3 Picks
      </h2>
      <p className="text-gray-500 text-base mb-8">
        Based on 200+ hours of independent testing and research
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product, i) => (
          <div
            key={product.slug}
            className={`relative rounded-2xl border-2 p-6 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 ${
              i === 0
                ? "border-[var(--gold)] bg-[var(--gold-light)]"
                : "border-gray-200 bg-white"
            }`}
          >
            {product.badge && (
              <span
                className={`absolute -top-3.5 left-4 px-4 py-1 rounded-full text-xs font-bold shadow-sm ${
                  i === 0
                    ? "bg-[var(--gold)] text-white"
                    : "bg-[var(--primary)] text-white"
                }`}
              >
                {product.badge}
              </span>
            )}

            <div className="flex items-center gap-3 mb-4 mt-2">
              <BrandLogo brand={product.slug} size={48} />
              <div className="flex-1">
                <h3 className="font-extrabold text-lg text-[var(--foreground)]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded">
                    {product.ratingLabel}
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <ScoreRing score={product.score} size={56} />
              </div>
            </div>

            <div className="mb-3">
              <StarRating rating={product.stars} reviewCount={product.reviewCount} size={15} />
            </div>

            {/* Discount callout */}
            {product.discount && (
              <div className="mb-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--success)] flex-shrink-0" fill="currentColor">
                  <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-[var(--success)]">
                  {product.discount}
                </span>
              </div>
            )}

            {/* Key features */}
            <ul className="space-y-2 mb-5 flex-1">
              {[
                `${product.identityInsurance} insurance`,
                product.creditMonitoring.split(" (")[0] + " credit monitoring",
                product.darkWebMonitoring ? "Dark web monitoring" : null,
                product.vpnIncluded ? "VPN included" : null,
              ]
                .filter(Boolean)
                .slice(0, 4)
                .map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--success)] flex-shrink-0" fill="currentColor">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
            </ul>

            {/* Price + CTA */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-3">
                Starting at <span className="text-xl font-extrabold text-[var(--foreground)]">{product.annualMonthly}</span>
              </p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-cta block w-full py-3.5 text-base rounded-xl"
              >
                Visit Site
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
