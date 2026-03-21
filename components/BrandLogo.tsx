export default function BrandLogo({
  brand,
  size = 48,
}: {
  brand: string;
  size?: number;
}) {
  const logos: Record<string, { bg: string; text: string; label: string }> = {
    aura: { bg: "#6C5CE7", text: "#FFFFFF", label: "aura" },
    mcafee: { bg: "#C8102E", text: "#FFFFFF", label: "McAfee" },
    lifelock: { bg: "#FFC72C", text: "#1A1A2E", label: "LifeLock" },
    "identity-guard": { bg: "#00A4E4", text: "#FFFFFF", label: "ID Guard" },
    experian: { bg: "#1D4F91", text: "#FFFFFF", label: "Experian" },
  };

  const logo = logos[brand] || { bg: "#6B7280", text: "#FFFFFF", label: brand.charAt(0).toUpperCase() };

  // Render brand-specific SVG logos
  if (brand === "aura") {
    return (
      <div
        className="rounded-xl flex items-center justify-center shadow-sm"
        style={{ width: size, height: size, backgroundColor: logo.bg }}
      >
        <svg viewBox="0 0 40 40" width={size * 0.6} height={size * 0.6}>
          <circle cx="20" cy="20" r="8" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="20" cy="20" r="3" fill="white" />
          <path d="M20 8 L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 36 L20 32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 20 L4 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M36 20 L32 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (brand === "mcafee") {
    return (
      <div
        className="rounded-xl flex items-center justify-center shadow-sm"
        style={{ width: size, height: size, backgroundColor: logo.bg }}
      >
        <svg viewBox="0 0 40 40" width={size * 0.6} height={size * 0.6}>
          <path d="M20 6 L8 20 L20 34 L32 20 Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M14 20 L18 24 L26 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (brand === "lifelock") {
    return (
      <div
        className="rounded-xl flex items-center justify-center shadow-sm"
        style={{ width: size, height: size, backgroundColor: logo.bg }}
      >
        <svg viewBox="0 0 40 40" width={size * 0.6} height={size * 0.6}>
          <rect x="14" y="18" width="12" height="10" rx="2" fill="none" stroke="#1A1A2E" strokeWidth="2.5" />
          <path d="M16 18 V14 A4 4 0 0 1 24 14 V18" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="20" cy="23" r="1.5" fill="#1A1A2E" />
        </svg>
      </div>
    );
  }

  if (brand === "identity-guard") {
    return (
      <div
        className="rounded-xl flex items-center justify-center shadow-sm"
        style={{ width: size, height: size, backgroundColor: logo.bg }}
      >
        <svg viewBox="0 0 40 40" width={size * 0.6} height={size * 0.6}>
          <path d="M20 6 L32 12 V22 C32 28 27 33 20 36 C13 33 8 28 8 22 V12 L20 6Z" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M15 20 L18 23 L25 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  if (brand === "experian") {
    return (
      <div
        className="rounded-xl flex items-center justify-center shadow-sm"
        style={{ width: size, height: size, backgroundColor: logo.bg }}
      >
        <svg viewBox="0 0 40 40" width={size * 0.6} height={size * 0.6}>
          <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="2.5" />
          <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="sans-serif">E</text>
        </svg>
      </div>
    );
  }

  // Fallback
  return (
    <div
      className="rounded-xl flex items-center justify-center shadow-sm font-bold text-sm"
      style={{
        width: size,
        height: size,
        backgroundColor: logo.bg,
        color: logo.text,
      }}
    >
      {logo.label.charAt(0)}
    </div>
  );
}
