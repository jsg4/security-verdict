import { CategoryConfig } from "@/data/types";
import BrandLogo from "./BrandLogo";

function Check() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 text-[var(--success)] mx-auto" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>;
}

function Cross() {
  return <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" /></svg>;
}

export default function CategoryComparisonTable({ config }: { config: CategoryConfig }) {
  const { products, comparisonRows } = config;

  return (
    <section id="comparison" className="max-w-[var(--content-width)] mx-auto px-5 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-2">Side-by-Side Comparison</h2>
      <p className="text-gray-500 text-base mb-6">Every feature, every plan, every price — at a glance.</p>
      <div className="overflow-x-auto border border-gray-200 rounded-[var(--radius-lg)] shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--gray-50)] border-b border-gray-200">
              <th className="text-left px-4 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide sticky left-0 bg-[var(--gray-50)] z-10 min-w-[140px]">Feature</th>
              {products.map((p) => (
                <th key={p.slug} className="px-4 py-4 text-center min-w-[130px]">
                  <div className="flex flex-col items-center gap-2">
                    <BrandLogo brand={p.slug} size={36} />
                    <span className="font-bold text-[var(--foreground)] text-sm">{p.name}</span>
                    {p.bestFor && <span className="text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-0.5 rounded-full">{p.bestFor}</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={row.label} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-[var(--gray-50)]"}`}>
                <td className={`px-4 py-3 font-medium text-gray-700 sticky left-0 z-10 ${i % 2 === 0 ? "bg-white" : "bg-[var(--gray-50)]"}`}>{row.label}</td>
                {products.map((p) => {
                  let content;
                  if (row.type === "score") {
                    content = (
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-white text-sm ${p.score >= 9 ? "bg-[var(--success)]" : p.score >= 8 ? "bg-[var(--primary)]" : "bg-[var(--warning)]"}`}>{p.score}</span>
                    );
                  } else if (row.type === "price") {
                    content = <span className="font-semibold">{p.annualMonthly}</span>;
                  } else {
                    const val = p.specs[row.key];
                    if (typeof val === "boolean") {
                      content = val ? <Check /> : <Cross />;
                    } else {
                      content = <span className="text-gray-700">{String(val ?? "—")}</span>;
                    }
                  }
                  return <td key={p.slug} className="px-4 py-3 text-center">{content}</td>;
                })}
              </tr>
            ))}
            <tr className="bg-[var(--primary-light)]">
              <td className="px-4 py-4 font-medium text-gray-700 sticky left-0 bg-[var(--primary-light)] z-10">Get Started</td>
              {products.map((p) => (
                <td key={p.slug} className="px-4 py-4 text-center">
                  <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="btn-cta text-xs px-4 py-2.5 rounded-lg">Visit Site</a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
