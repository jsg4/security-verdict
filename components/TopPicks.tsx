import { Product } from "@/data/products";
import ScoreRing from "./ScoreRing";

export default function TopPicks({ products }: { products: Product[] }) {
  return (
    <section id="top-picks" className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
        Our Top 3 Picks
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Based on 200+ hours of independent testing and research
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product, i) => (
          <div
            key={product.slug}
            className={`relative rounded-xl border-2 p-5 flex flex-col transition-shadow hover:shadow-lg ${
              i === 0
                ? "border-[var(--gold)] bg-[var(--gold-light)]"
                : "border-gray-200 bg-white"
            }`}
          >
            {product.badge && (
              <span
                className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                  i === 0
                    ? "bg-[var(--gold)] text-white"
                    : "bg-[var(--primary)] text-white"
                }`}
              >
                {product.badge}
              </span>
            )}

            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg font-bold text-[var(--primary)]">
                {product.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-[var(--foreground)]">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500">#{i + 1} Ranked</p>
              </div>
              <div className="ml-auto">
                <ScoreRing score={product.score} size={52} />
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 flex-1">
              {product.tagline}
            </p>

            <div className="space-y-2 mb-4 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Starting price</span>
                <span className="font-semibold text-[var(--foreground)]">
                  {product.annualMonthly}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Insurance</span>
                <span className="font-semibold text-[var(--foreground)]">
                  {product.identityInsurance}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Credit monitoring</span>
                <span className="font-semibold text-[var(--foreground)]">
                  {product.creditMonitoring.split(" (")[0]}
                </span>
              </div>
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`block w-full text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                i === 0
                  ? "bg-[var(--gold)] text-white hover:brightness-110"
                  : "bg-[var(--primary)] text-white hover:brightness-110"
              }`}
            >
              {product.ctaText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
