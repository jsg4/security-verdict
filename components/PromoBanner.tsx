import { Product } from "@/data/types";
import BrandLogo from "./BrandLogo";

export default function PromoBanner({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="block my-6 bg-gradient-to-r from-[var(--primary-light)] to-blue-50 border-2 border-[var(--primary)] border-dashed rounded-xl p-5 hover:shadow-lg transition-all no-underline text-inherit"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <BrandLogo brand={product.slug} size={48} />
        <div className="flex-1 text-center sm:text-left">
          <p className="text-lg font-extrabold text-[var(--foreground)]">
            Don&apos;t miss this deal on {product.name}
          </p>
          {product.promoCode ? (
            <p className="text-sm font-bold text-[var(--success)]">
              {product.discount} — Use code: <span className="bg-white px-2 py-0.5 rounded font-mono border border-green-200">{product.promoCode}</span>
            </p>
          ) : product.discount ? (
            <p className="text-sm font-bold text-[var(--success)]">{product.discount}</p>
          ) : (
            <p className="text-sm text-gray-500">See current pricing and exclusive offers</p>
          )}
        </div>
        <span className="btn-cta px-6 py-3 text-sm rounded-lg flex-shrink-0">
          Visit Site
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </span>
      </div>
    </a>
  );
}
