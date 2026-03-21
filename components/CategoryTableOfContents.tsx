import { CategoryConfig } from "@/data/types";

export default function CategoryTableOfContents({ config }: { config: CategoryConfig }) {
  const sections = [
    { id: "top-picks", label: "Top 3 Picks" },
    { id: "reviews", label: "Detailed Reviews" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "learn", label: `What Is ${config.title}?` },
    { id: "methodology", label: "How We Evaluate" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      <div className="bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-lg p-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">In this guide</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="text-sm text-[var(--primary)] hover:underline flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
