"use client";

import { useState } from "react";

interface ClickToCallProps {
  phone: string;
  productName: string;
  variant?: "inline" | "prominent";
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ClickToCall({ phone, productName, variant = "inline" }: ClickToCallProps) {
  const [copied, setCopied] = useState(false);

  const isMobile = typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);

  const handleDesktopClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleMobileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (variant === "prominent") {
    if (isMobile) {
      return (
        <a
          href={`tel:${phone.replace(/\D/g, "")}`}
          onClick={handleMobileClick}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)] font-semibold text-sm transition-colors hover:bg-[var(--primary)] hover:text-white"
          aria-label={`Call ${productName} at ${phone}`}
        >
          <PhoneIcon className="w-5 h-5" />
          <span>{phone}</span>
        </a>
      );
    }

    return (
      <button
        onClick={handleDesktopClick}
        className="inline-flex items-center gap-2 px-4 py-3 rounded-[var(--radius-md)] bg-[var(--primary-light)] text-[var(--primary)] font-semibold text-sm transition-colors hover:bg-[var(--primary)] hover:text-white"
        aria-label={`Copy ${productName} phone number: ${phone}`}
      >
        <PhoneIcon className="w-5 h-5" />
        <span>{phone}</span>
        <span className="text-xs font-normal opacity-70 ml-1">
          {copied ? "Copied!" : "click to copy"}
        </span>
      </button>
    );
  }

  // inline variant
  if (isMobile) {
    return (
      <a
        href={`tel:${phone.replace(/\D/g, "")}`}
        onClick={handleMobileClick}
        className="inline-flex items-center gap-1 text-[var(--primary)] text-sm hover:underline"
        aria-label={`Call ${productName} at ${phone}`}
      >
        <PhoneIcon className="w-4 h-4" />
        <span>{phone}</span>
      </a>
    );
  }

  return (
    <button
      onClick={handleDesktopClick}
      className="inline-flex items-center gap-1 text-[var(--primary)] text-sm hover:underline cursor-pointer"
      aria-label={`Copy ${productName} phone number: ${phone}`}
    >
      <PhoneIcon className="w-4 h-4" />
      <span>{phone}</span>
      {copied && <span className="text-xs text-[var(--success)] ml-1">Copied!</span>}
    </button>
  );
}
