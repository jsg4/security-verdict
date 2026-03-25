interface BestForBadgeProps {
  bestFor: string;
  variant?: "default" | "gold";
}

export default function BestForBadge({ bestFor, variant = "default" }: BestForBadgeProps) {
  const isGold = variant === "gold";

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5"
      style={{
        fontSize: "11px",
        fontWeight: 700,
        backgroundColor: isGold ? "var(--gold)" : "var(--primary)",
        color: "white",
        borderRadius: "var(--radius-full)",
        lineHeight: 1.4,
        letterSpacing: "0.01em",
      }}
    >
      {bestFor}
    </span>
  );
}
