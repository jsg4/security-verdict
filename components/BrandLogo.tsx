"use client";

import Image from "next/image";
import { useState } from "react";

const BRAND_COLORS: Record<string, { bg: string; fallback: string }> = {
  // Identity Protection
  aura: { bg: "#6C5CE7", fallback: "A" },
  mcafee: { bg: "#C8102E", fallback: "M" },
  lifelock: { bg: "#003B64", fallback: "L" },
  "identity-guard": { bg: "#00A4E4", fallback: "IG" },
  experian: { bg: "#1D4F91", fallback: "E" },
  // Business Formation
  zenbusiness: { bg: "#FF6B35", fallback: "Z" },
  northwest: { bg: "#1B4D3E", fallback: "NW" },
  legalzoom: { bg: "#00857C", fallback: "LZ" },
  "tailor-brands": { bg: "#384CFF", fallback: "TB" },
  "rocket-lawyer": { bg: "#E31837", fallback: "RL" },
  // Online Therapy
  betterhelp: { bg: "#2E7D32", fallback: "BH" },
  talkspace: { bg: "#00BCD4", fallback: "TS" },
  "online-therapy": { bg: "#7B1FA2", fallback: "OT" },
  "online-therapy-com": { bg: "#7B1FA2", fallback: "OT" },
  calmerry: { bg: "#5C6BC0", fallback: "CA" },
  cerebral: { bg: "#FF7043", fallback: "CE" },
  // Website Builders
  wix: { bg: "#0C6EFC", fallback: "W" },
  squarespace: { bg: "#000000", fallback: "S" },
  shopify: { bg: "#96BF48", fallback: "S" },
  hostinger: { bg: "#673DE6", fallback: "H" },
  wordpress: { bg: "#21759B", fallback: "W" },
};

export default function BrandLogo({
  brand,
  size = 48,
}: {
  brand: string;
  size?: number;
}) {
  const info = BRAND_COLORS[brand] || { bg: "#6B7280", fallback: brand.charAt(0).toUpperCase() };
  const logoPath = `/logos/${brand}.svg`;
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className="rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0"
        style={{
          width: size,
          height: size,
          minWidth: size,
          minHeight: size,
          backgroundColor: info.bg,
        }}
      >
        <span
          className="font-bold text-white"
          style={{ fontSize: size * 0.35, letterSpacing: "-0.02em" }}
        >
          {info.fallback}
        </span>
      </div>
    );
  }

  return (
    <div
      className="rounded-[var(--radius-md)] flex items-center justify-center flex-shrink-0 overflow-hidden bg-white border border-[var(--gray-100)]"
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
      }}
    >
      <Image
        src={logoPath}
        alt={brand}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        style={{ padding: size * 0.04 }}
        onError={() => setImgError(true)}
      />
    </div>
  );
}
