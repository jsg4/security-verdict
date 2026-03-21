import Image from "next/image";
import { Product } from "@/data/products";
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

function Cross() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-300 flex-shrink-0" fill="currentColor">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
    </svg>
  );
}

export default function DetailedReview({
  product,
  rank,
}: {
  product: Product;
  rank: number;
}) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block mb-10 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all group no-underline text-inherit"
      id={product.slug}
    >
      {/* Header */}
      <div className="bg-[var(--gray-50)] border-b border-gray-200 px-4 sm:px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <BrandLogo brand={product.slug} size={60} />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)]">
                  #{rank} {product.name}
                </h3>
                {product.badge && (
                  <span className="px-3 py-1 bg-[var(--primary)] text-white text-xs font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-sm sm:text-base text-gray-500 mt-1">{product.tagline}</p>
              <div className="flex items-center gap-3 mt-2 flex-wrap">
                <StarRating rating={product.stars} reviewCount={product.reviewCount} size={16} />
                <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded">
                  {product.ratingLabel}
                </span>
              </div>
              {product.discount && (
                <p className="mt-2 text-sm font-bold text-[var(--success)] flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.318-4.318a2.25 2.25 0 000-3.182l-9.58-9.581A3 3 0 008.568 2.25H5.25zm1.5 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                  </svg>
                  {product.discount}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <ScoreRing score={product.score} size={72} />
            <div className="text-right">
              <p className="text-xs text-gray-500">Security Score</p>
              <p className="text-xl font-extrabold text-[var(--foreground)]">
                {product.score}/10
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 py-6">
        {/* Enhanced Pros and Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* PROS */}
          <div className="bg-[var(--success-light)] rounded-xl p-5 sm:p-6 border border-green-200">
            <h4 className="text-lg font-extrabold text-[var(--success)] uppercase tracking-wide mb-4 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
              What We Like
            </h4>
            <ul className="space-y-3">
              {product.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProConIcon icon={pro.icon} type="pro" />
                  <span className="text-base font-medium text-gray-800 leading-snug pt-0.5">
                    {pro.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONS */}
          <div className="bg-red-50 rounded-xl p-5 sm:p-6 border border-red-200">
            <h4 className="text-lg font-extrabold text-[var(--danger)] uppercase tracking-wide mb-4 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
              What We Don&apos;t Like
            </h4>
            <ul className="space-y-3">
              {product.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ProConIcon icon={con.icon} type="con" />
                  <span className="text-base font-medium text-gray-800 leading-snug pt-0.5">
                    {con.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Image */}
        {product.productImage && (
          <div className="mb-6 rounded-xl overflow-hidden border border-gray-200 max-h-[320px]">
            <Image
              src={product.productImage}
              alt={product.productImageAlt || `${product.name} product screenshot`}
              width={800}
              height={320}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Review */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-[var(--foreground)] uppercase tracking-wide mb-3">
            Our Review
          </h4>
          <p className="text-base text-gray-700 leading-relaxed">{product.review}</p>
        </div>

        {/* Features & Protection Coverage */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">
            What&apos;s Included
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.features.map((f, i) => {
              const featureIcons: Record<string, { icon: string; color: string }> = {
                "Identity Monitoring": { icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", color: "#6C5CE7" },
                "Financial Monitoring": { icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z", color: "#00B894" },
                "Credit Monitoring": { icon: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z", color: "#0984E3" },
                "Insurance Coverage": { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", color: "#E17055" },
                "Digital Security": { icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z", color: "#6C5CE7" },
                "Data Broker Removal": { icon: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0", color: "#E84393" },
                "Ransomware Coverage": { icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z", color: "#D63031" },
                "AI Detection": { icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z", color: "#00B894" },
                "Family Coverage": { icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z", color: "#0984E3" },
                "Unique Features": { icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z", color: "#FDCB6E" },
                "FICO Score": { icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z", color: "#00B894" },
                "Credit Lock": { icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z", color: "#6C5CE7" },
                "Dark Web Monitoring": { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", color: "#2D3436" },
              };
              const fi = featureIcons[f.label] || { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", color: "#0984E3" };
              return (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${fi.color}15` }}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={fi.color} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                        <path d={fi.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--foreground)] mb-0.5">{f.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Protection Coverage — visual grid replacing bland checkmarks */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-[var(--foreground)] uppercase tracking-wide mb-4">
            Protection Coverage
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Dark Web", sub: "Monitoring", value: product.darkWebMonitoring, icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" },
              { label: "SSN", sub: "Monitoring", value: product.ssnMonitoring, icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" },
              { label: "Credit", sub: "Lock", value: product.creditLock, icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" },
              { label: "VPN", sub: "Included", value: product.vpnIncluded, icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
              { label: "Password", sub: "Manager", value: product.passwordManager, icon: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" },
              { label: "Antivirus", sub: "Protection", value: product.antivirus, icon: "M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" },
              { label: "Data", sub: "Cleanup", value: product.personalDataCleanup, icon: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" },
              { label: "Family", sub: "Plans", value: product.familyPlan, icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772" },
            ].map((spec, i) => (
              <div
                key={i}
                className={`rounded-xl p-3 text-center border transition-colors ${
                  spec.value
                    ? "bg-[var(--success-light)] border-green-200"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex justify-center mb-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      spec.value ? "bg-white" : "bg-gray-100"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4.5 h-4.5"
                      style={{ width: 18, height: 18 }}
                      fill="none"
                      stroke={spec.value ? "var(--success)" : "#9CA3AF"}
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={spec.icon} />
                    </svg>
                  </div>
                </div>
                <p className={`text-xs font-bold ${spec.value ? "text-[var(--foreground)]" : "text-gray-400"}`}>
                  {spec.label}
                </p>
                <p className={`text-[10px] ${spec.value ? "text-gray-500" : "text-gray-300"}`}>
                  {spec.sub}
                </p>
                {!spec.value && (
                  <p className="text-[10px] text-gray-400 mt-1 font-medium">Not included</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[var(--gray-50)] border border-gray-200 rounded-xl px-5 sm:px-6 py-5 gap-4">
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-3xl font-extrabold text-[var(--foreground)]">
                {product.annualMonthly}
              </span>
              <span className="text-base text-gray-500">
                billed at {product.annualPrice}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              {product.freeTrial !== "None" && (
                <span className="flex items-center gap-1.5">
                  <Check /> {product.freeTrial} free trial
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Check /> {product.moneyBack} money-back guarantee
              </span>
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
