"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const SUBJECTS = [
  "Editorial",
  "Business/Partnerships",
  "Corrections",
  "Other",
] as const;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(
          (json as { error?: string }).error ||
            "Something went wrong. Please try again or email us at contact@trustedscorecard.com."
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your message. Please email us directly at contact@trustedscorecard.com."
      );
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-[var(--success-light)] border border-green-200 rounded-[var(--radius-md)] p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[var(--success)] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-extrabold text-[var(--success)] mb-1">Message Sent</h3>
        <p className="text-sm text-[var(--gray-600)]">
          We&apos;ll get back to you within 2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-[var(--radius-md)] border border-[var(--gray-200)] bg-white text-[var(--foreground)] text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 placeholder:text-[var(--gray-400)]";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-[var(--foreground)] mb-1.5"
        >
          Name <span className="text-[var(--danger)]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-semibold text-[var(--foreground)] mb-1.5"
        >
          Email <span className="text-[var(--danger)]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block text-sm font-semibold text-[var(--foreground)] mb-1.5"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          className={inputClass}
          defaultValue="Editorial"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[var(--foreground)] mb-1.5"
        >
          Message <span className="text-[var(--danger)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={inputClass}
          style={{ resize: "vertical" }}
        />
      </div>

      {/* Error message */}
      {formState === "error" && errorMessage && (
        <p className="text-sm text-[var(--danger)] bg-red-50 border border-red-200 rounded-[var(--radius-md)] px-4 py-3">
          {errorMessage}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-cta w-full py-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {formState === "submitting" ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
