import Image from "next/image";
import { CategoryConfig } from "@/data/types";

export default function CategoryAuthor({ config }: { config: CategoryConfig }) {
  const { author } = config;
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mt-6">
      <div className="flex items-start gap-4">
        <Image src={author.photo} alt={author.name} width={80} height={80} className="rounded-full object-cover flex-shrink-0" style={{ width: 80, height: 80 }} />
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <h4 className="font-bold text-[var(--foreground)]">{author.name}</h4>
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="currentColor"><path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" /></svg>
            <span className="text-xs bg-[var(--primary-light)] text-[var(--primary)] font-semibold px-2 py-0.5 rounded-full ml-1">Verified Expert</span>
          </div>
          <p className="text-sm font-medium text-gray-600 mb-2">{author.title}</p>
          <p className="text-sm text-gray-500 leading-relaxed">{author.bio}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 flex-wrap">
            {author.credentials.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={c.icon} /></svg>
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
