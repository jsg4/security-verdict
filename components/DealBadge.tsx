interface DealBadgeProps {
  deal: {
    text: string;
    active: boolean;
    promoCode?: string;
  };
}

export default function DealBadge({ deal }: DealBadgeProps) {
  if (!deal.active) return null;

  return (
    <span className="animate-fade-in-up inline-flex items-center gap-1.5 bg-[var(--success-light)] text-[var(--success)] border border-green-200 rounded-full px-3 py-1 text-xs font-semibold">
      {/* Tag icon */}
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.5 3A2.5 2.5 0 0 0 3 5.5v2.879a2.5 2.5 0 0 0 .732 1.767l6.5 6.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-6.5-6.5A2.5 2.5 0 0 0 8.38 3H5.5ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{deal.text}</span>
      {deal.promoCode && (
        <span className="font-mono tracking-wide">
          {" "}— Use code: {deal.promoCode}
        </span>
      )}
    </span>
  );
}
