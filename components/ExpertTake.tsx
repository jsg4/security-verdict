"use client";

import { useState } from "react";
import Image from "next/image";

interface ExpertTakeProps {
  content: string;
  authorName: string;
  authorPhoto: string;
}

export default function ExpertTake({ content, authorName, authorPhoto }: ExpertTakeProps) {
  const [expanded, setExpanded] = useState(false);

  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <div className="border-t border-[var(--gray-200)] mt-4 pt-3">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setExpanded((prev) => !prev);
        }}
        className="flex items-center gap-2 w-full text-left group"
        aria-expanded={expanded}
      >
        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-[var(--gray-200)]">
          <Image
            src={authorPhoto}
            alt={authorName}
            fill
            className="object-cover"
            sizes="24px"
          />
        </div>
        <span
          style={{ fontSize: "13px" }}
          className="font-semibold text-[var(--primary)] group-hover:underline flex-1"
        >
          Expert Take — {authorName}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-[var(--primary)] flex-shrink-0 transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {expanded && (
        <div className="mt-3 space-y-2">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              style={{ fontSize: "13px" }}
              className="text-[var(--gray-700)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
