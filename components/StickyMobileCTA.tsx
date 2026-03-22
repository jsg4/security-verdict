"use client";

import { useState, useEffect } from "react";
import { Product } from "@/data/types";
import BrandLogo from "./BrandLogo";

export default function StickyMobileCTA({ product }: { product: Product }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-4 py-3 animate-slide-up">
      <div className="flex items-center gap-3 max-w-lg mx-auto">
        <BrandLogo brand={product.slug} size={36} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[var(--foreground)] truncate">{product.name}</p>
          <p className="text-xs text-gray-500">{product.annualMonthly}</p>
        </div>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-cta px-5 py-2.5 text-sm rounded-lg flex-shrink-0"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}
