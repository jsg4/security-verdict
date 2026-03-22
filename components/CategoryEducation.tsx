import { CategoryConfig } from "@/data/types";

export default function CategoryEducation({ config }: { config: CategoryConfig }) {
  return (
    <section id="learn" className="max-w-[var(--content-width)] mx-auto px-5 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-8">{config.educationalTitle}</h2>
      {config.educationalSections.map((section, i) => {
        if (section.type === "text") {
          return (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{section.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          );
        }
        if (section.type === "types" && section.items) {
          return (
            <div key={i} className="mb-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-4">{section.title}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {section.items.map((item, j) => (
                  <div key={j} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[var(--primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                      </div>
                      <h4 className="font-bold text-sm text-[var(--foreground)]">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        if (section.type === "warning" && section.warnings) {
          return (
            <div key={i} className="bg-[var(--gold-light)] border border-[var(--gold)] rounded-[var(--radius-lg)] p-6 mb-8">
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{section.title}</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {section.warnings.map((w, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5" fill="currentColor"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        if (section.type === "cta") {
          return (
            <div key={i}>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">{section.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
}
