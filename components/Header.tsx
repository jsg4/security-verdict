"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <span className="font-bold text-lg text-[var(--foreground)] hidden sm:block">
            SecurityVerdict
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#top-picks" className="hover:text-[var(--primary)] transition-colors">
            Top Picks
          </a>
          <a href="#reviews" className="hover:text-[var(--primary)] transition-colors">
            Reviews
          </a>
          <a href="#comparison" className="hover:text-[var(--primary)] transition-colors">
            Compare
          </a>
          <a href="#methodology" className="hover:text-[var(--primary)] transition-colors">
            Methodology
          </a>
          <a href="#faq" className="hover:text-[var(--primary)] transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Updated Mar 2026
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {["Top Picks", "Reviews", "Compare", "Methodology", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block text-sm font-medium text-gray-600 hover:text-[var(--primary)]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
