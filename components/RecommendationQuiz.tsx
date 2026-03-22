"use client";

import { useState, useMemo, useCallback } from "react";
import type { CategoryConfig, Product } from "@/data/types";
import ScoreRing from "./ScoreRing";
import BrandLogo from "./BrandLogo";

type QuizState = "teaser" | "quiz" | "results";

interface Question {
  title: string;
  options: { label: string; value: string }[];
}

const QUESTIONS: Question[] = [
  {
    title: "What\u2019s most important to you?",
    options: [
      { label: "Best value for money", value: "value" },
      { label: "Most features", value: "features" },
      { label: "Easiest to use", value: "easy" },
      { label: "Best reputation", value: "reputation" },
    ],
  },
  {
    title: "What\u2019s your monthly budget?",
    options: [
      { label: "Under $15/mo", value: "under15" },
      { label: "$15\u201330/mo", value: "15to30" },
      { label: "$30\u201350/mo", value: "30to50" },
      { label: "Price isn\u2019t the main factor", value: "any" },
    ],
  },
  {
    title: "Who is this for?",
    options: [
      { label: "Just me", value: "personal" },
      { label: "Me and my partner/family", value: "family" },
      { label: "My business", value: "business" },
      { label: "I\u2019m comparing for someone else", value: "comparing" },
    ],
  },
  {
    title: "How quickly do you need to get started?",
    options: [
      { label: "Today \u2014 I\u2019m ready now", value: "today" },
      { label: "This week", value: "week" },
      { label: "Just researching for now", value: "researching" },
      { label: "Not sure yet", value: "unsure" },
    ],
  },
];

function parsePrice(price: string): number {
  const match = price.replace(/[^0-9.]/g, "");
  return match ? parseFloat(match) : Infinity;
}

function parseReviewCount(count: string): number {
  const cleaned = count.replace(/[^0-9]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function scorePriority(product: Product, priority: string): number {
  switch (priority) {
    case "value": {
      const price = parsePrice(product.annualMonthly || product.monthlyPrice);
      return price === Infinity ? 0 : Math.max(0, 10 - price * 0.15);
    }
    case "features":
      return product.score;
    case "easy":
      return product.score;
    case "reputation":
      return Math.min(10, parseReviewCount(product.reviewCount) / 5000);
    default:
      return 0;
  }
}

function matchesBudget(product: Product, budget: string): boolean {
  const price = parsePrice(product.annualMonthly || product.monthlyPrice);
  switch (budget) {
    case "under15":
      return price < 15;
    case "15to30":
      return price >= 15 && price <= 30;
    case "30to50":
      return price >= 30 && price <= 50;
    default:
      return true;
  }
}

function generateFitReason(product: Product, answers: string[]): string {
  const priority = answers[0];
  const audience = answers[2];
  const urgency = answers[3];

  const parts: string[] = [];

  if (priority === "value") {
    parts.push(`offers strong value at ${product.annualMonthly || product.monthlyPrice}/mo`);
  } else if (priority === "features") {
    parts.push(`scored ${product.score}/10 in our feature-rich testing`);
  } else if (priority === "easy") {
    parts.push(`rated ${product.score}/10 for its intuitive experience`);
  } else if (priority === "reputation") {
    parts.push(`trusted by ${product.reviewCount} verified reviewers`);
  }

  if (audience === "family") {
    parts.push("works well for families and shared accounts");
  } else if (audience === "business") {
    parts.push("popular with business users");
  }

  if (urgency === "today" || urgency === "week") {
    parts.push("with fast setup to get you started quickly");
  }

  return parts.length > 0
    ? `${product.name} ${parts.join(", ")}.`
    : `${product.name} is a top-rated option with a score of ${product.score}/10.`;
}

function rankProducts(products: Product[], answers: string[]): Product[] {
  const [priority, budget] = answers;

  return [...products]
    .map((product) => {
      let total = product.score * 10;
      total += scorePriority(product, priority) * 3;
      if (matchesBudget(product, budget)) total += 5;
      return { product, total };
    })
    .sort((a, b) => b.total - a.total)
    .slice(0, 3)
    .map((entry) => entry.product);
}

export default function RecommendationQuiz({ config }: { config: CategoryConfig }) {
  const [state, setState] = useState<QuizState>("teaser");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const recommendations = useMemo(() => {
    if (answers.length < 4) return [];
    return rankProducts(config.products, answers);
  }, [answers, config.products]);

  const handleStart = useCallback(() => {
    setState("quiz");
    setCurrentStep(0);
    setAnswers([]);
    setEmailSubmitted(false);
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      const next = [...answers];
      next[currentStep] = value;
      setAnswers(next);

      if (currentStep < QUESTIONS.length - 1) {
        setTimeout(() => setCurrentStep((s) => s + 1), 250);
      } else {
        setTimeout(() => setState("results"), 300);
      }
    },
    [answers, currentStep],
  );

  const handleEmailSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!email.trim()) return;
      setEmailSubmitted(true);
    },
    [email],
  );

  const handleRetake = useCallback(() => {
    setState("teaser");
    setCurrentStep(0);
    setAnswers([]);
    setEmail("");
    setEmailSubmitted(false);
  }, []);

  // -- Teaser --
  if (state === "teaser") {
    return (
      <section
        className="relative overflow-hidden rounded-2xl px-6 py-10 text-center text-white sm:px-12 sm:py-14"
        style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-dark, #1a3a5c))" }}
        aria-label="Product recommendation quiz"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide opacity-90">
          Personalized Recommendation
        </p>
        <h2 className="mb-3 text-2xl font-extrabold sm:text-3xl">
          Not sure which {config.title.toLowerCase()} is right for you?
        </h2>
        <p className="mx-auto mb-6 max-w-md text-base opacity-90">
          Answer 4 quick questions and we'll match you with the best option based on your needs.
        </p>
        <button onClick={handleStart} className="btn-cta px-8 py-3.5 text-base" aria-label="Start the recommendation quiz">
          Take Our 60-Second Quiz
        </button>
      </section>
    );
  }

  // -- Quiz Steps --
  if (state === "quiz") {
    const question = QUESTIONS[currentStep];
    const progressPct = ((currentStep + 1) / QUESTIONS.length) * 100;

    return (
      <section
        className="rounded-2xl border border-[var(--gray-200,#e5e7eb)] bg-white p-6 shadow-lg sm:p-10"
        aria-label={`Quiz question ${currentStep + 1} of ${QUESTIONS.length}`}
      >
        {/* Progress bar */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[var(--foreground)]">
            <span>Step {currentStep + 1} of {QUESTIONS.length}</span>
            <button
              onClick={handleRetake}
              className="text-xs text-[var(--primary)] hover:underline"
              aria-label="Cancel quiz"
            >
              Cancel
            </button>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--gray-50)]">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%`, backgroundColor: "var(--primary)" }}
            />
          </div>
        </div>

        {/* Question */}
        <h3 className="mb-6 text-xl font-extrabold text-[var(--foreground)] sm:text-2xl">
          {question.title}
        </h3>

        {/* Options */}
        <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label={question.title}>
          {question.options.map((option) => {
            const selected = answers[currentStep] === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                role="radio"
                aria-checked={selected}
                className={`
                  rounded-[var(--radius-md)] border-2 px-5 py-3.5 text-left text-[15px] font-semibold transition-all duration-200 cursor-pointer
                  ${
                    selected
                      ? "border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]"
                      : "border-[var(--gray-200)] bg-white text-[var(--foreground)] hover:border-[var(--primary)] hover:shadow-sm"
                  }
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </section>
    );
  }

  // -- Results --
  return (
    <section
      className="rounded-2xl border border-[var(--gray-200,#e5e7eb)] bg-white p-6 shadow-lg sm:p-10"
      aria-label="Quiz results"
    >
      <div className="mb-8 text-center">
        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[var(--success)]">
          Your Personalized Results
        </p>
        <h3 className="text-2xl font-extrabold text-[var(--foreground)] sm:text-3xl">
          Our Top Picks for You
        </h3>
      </div>

      {/* Recommended products */}
      <div className="mb-10 space-y-5">
        {recommendations.map((product, idx) => (
          <div
            key={product.slug}
            className={`
              relative flex flex-col gap-4 rounded-xl border-2 p-5 transition-shadow sm:flex-row sm:items-center
              ${idx === 0 ? "border-[var(--primary)] shadow-md" : "border-[var(--gray-200,#e5e7eb)]"}
            `}
          >
            {idx === 0 && (
              <span className="absolute -top-3 left-4 rounded-full bg-[var(--primary)] px-3 py-0.5 text-xs font-bold text-white">
                Best Match
              </span>
            )}

            <div className="flex items-center gap-4 sm:w-48 sm:flex-shrink-0">
              <BrandLogo brand={product.slug} size={48} />
              <div>
                <p className="text-lg font-extrabold text-[var(--foreground)]">{product.name}</p>
                {product.bestFor && (
                  <span className="inline-block rounded-full bg-[var(--gray-50)] px-2 py-0.5 text-xs font-semibold text-[var(--foreground)]">
                    {product.bestFor}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 sm:flex-shrink-0">
              <ScoreRing score={product.score} size={52} />
              <span className="text-sm font-semibold text-[var(--foreground)]">
                {product.annualMonthly || product.monthlyPrice}/mo
              </span>
            </div>

            <div className="flex-1">
              <p className="text-sm text-[var(--foreground)] opacity-75">
                {generateFitReason(product, answers)}
              </p>
            </div>

            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn-cta px-6 py-2.5 text-[14px] flex-shrink-0 text-center"
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>

      {/* Email capture */}
      <div className="rounded-xl bg-[var(--gray-50)] p-6 text-center">
        {emailSubmitted ? (
          <p className="font-semibold text-[var(--success)]">
            Thanks! We'll send your personalized results shortly.
          </p>
        ) : (
          <>
            <p className="mb-3 text-sm font-semibold text-[var(--foreground)]">
              Want a copy of your results?
            </p>
            <form
              onSubmit={handleEmailSubmit}
              className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="quiz-email" className="sr-only">
                Email address
              </label>
              <input
                id="quiz-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-[var(--gray-200,#e5e7eb)] px-4 py-2.5 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary-light,#e8f0fe)]"
              />
              <button type="submit" className="btn-cta px-6 py-2.5 text-[14px] whitespace-nowrap">
                Email My Results
              </button>
            </form>
          </>
        )}
      </div>

      {/* Retake */}
      <div className="mt-6 text-center">
        <button
          onClick={handleRetake}
          className="text-sm font-semibold text-[var(--primary)] hover:underline"
        >
          Retake Quiz
        </button>
      </div>
    </section>
  );
}
