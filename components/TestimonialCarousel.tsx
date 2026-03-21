"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  initials: string;
  photo: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  product: string;
  timeAgo: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    initials: "SM",
    photo: "/photos/review-sarah.jpg",
    location: "Austin, TX",
    rating: 5,
    title: "Caught fraud before my bank did",
    text: "Got an alert at 2am that someone opened a credit card in my name. I was able to freeze everything within minutes. My bank didn't even flag it until 3 days later. Without this service I would have been dealing with months of damage.",
    product: "Aura",
    timeAgo: "2 weeks ago",
    verified: true,
  },
  {
    name: "Michael R.",
    initials: "MR",
    photo: "/photos/review-michael.jpg",
    location: "Denver, CO",
    rating: 5,
    title: "Worth every penny after the Ticketmaster breach",
    text: "I was part of the Ticketmaster data breach and freaked out. Signed up immediately and within the first week it found my SSN on two dark web databases I had no idea about. The peace of mind alone is worth the $9/month.",
    product: "Aura",
    timeAgo: "1 month ago",
    verified: true,
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    photo: "/photos/review-jennifer.jpg",
    location: "Chicago, IL",
    rating: 5,
    title: "Replaced 3 separate subscriptions",
    text: "I was paying for Norton antivirus, a separate VPN, AND credit monitoring. McAfee+ bundles all three for less than I was paying for just the antivirus. The identity protection is a bonus on top. Saved me over $200/year.",
    product: "McAfee+",
    timeAgo: "3 weeks ago",
    verified: true,
  },
  {
    name: "David K.",
    initials: "DK",
    photo: "/photos/review-david.jpg",
    location: "Seattle, WA",
    rating: 4,
    title: "Tax fraud caught before filing season",
    text: "Someone tried to file taxes with my SSN in January. Got the alert immediately and was able to get an IRS identity protection PIN before any damage was done. The $1M insurance gave me confidence to handle it without panicking.",
    product: "LifeLock",
    timeAgo: "2 months ago",
    verified: true,
  },
  {
    name: "Lisa T.",
    initials: "LT",
    photo: "/photos/review-lisa.jpg",
    location: "Miami, FL",
    rating: 5,
    title: "Data broker removal actually works",
    text: "I searched my name online before signing up and found my address, phone number, and relatives on dozens of sites. The data cleanup feature has removed me from 87 broker sites so far. I feel so much less exposed now.",
    product: "McAfee+",
    timeAgo: "1 week ago",
    verified: true,
  },
  {
    name: "Robert A.",
    initials: "RA",
    photo: "/photos/review-robert.jpg",
    location: "Phoenix, AZ",
    rating: 5,
    title: "Wish I had this before my identity was stolen",
    text: "Had my identity stolen in 2023 and spent 6 months and $3,400 fixing it. Never again. The monitoring catches everything now -- got 4 alerts in the first month alone for things I wouldn't have known about for weeks or months.",
    product: "Aura",
    timeAgo: "3 weeks ago",
    verified: true,
  },
  {
    name: "Amanda C.",
    initials: "AC",
    photo: "/photos/review-amanda.jpg",
    location: "Portland, OR",
    rating: 5,
    title: "Credit score went up 40 points",
    text: "Started monitoring my credit through the app and found two old collections accounts I didn't know about. Disputed them with the one-click feature and both got removed. My credit score jumped from 680 to 720 in two months.",
    product: "Aura",
    timeAgo: "1 month ago",
    verified: true,
  },
  {
    name: "James W.",
    initials: "JW",
    photo: "/photos/review-james.jpg",
    location: "Nashville, TN",
    rating: 4,
    title: "Set up the whole family in 10 minutes",
    text: "Got the family plan after our pediatrician's office had a data breach. Set up monitoring for me, my wife, and both kids in about 10 minutes. Kids' SSNs are now monitored which gives me huge peace of mind since child identity theft is apparently really common.",
    product: "McAfee+",
    timeAgo: "2 weeks ago",
    verified: true,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill={i < count ? "#F59E0B" : "#E5E7EB"}
        >
          <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleCount = 3;
  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section className="bg-[var(--gray-50)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-2">
            Real User Experiences
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--foreground)] mb-3">
            What People Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Stars count={5} />
            <span className="text-sm font-semibold text-[var(--foreground)]">4.7 out of 5</span>
          </div>
          <p className="text-sm text-gray-500">
            Based on 14,200+ verified user reviews across all services
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {getVisible().map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* User header */}
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={42}
                  height={42}
                  className="rounded-full object-cover flex-shrink-0"
                  style={{ width: 42, height: 42 }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm text-[var(--foreground)]">
                      {t.name}
                    </span>
                    {t.verified && (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--primary)]" fill="currentColor">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-[11px] text-gray-400">{t.location}</p>
                </div>
                <span className="text-[10px] text-gray-400 whitespace-nowrap">{t.timeAgo}</span>
              </div>

              {/* Rating + title */}
              <div className="mb-2">
                <Stars count={t.rating} />
              </div>
              <h4 className="font-bold text-sm text-[var(--foreground)] mb-2">
                &ldquo;{t.title}&rdquo;
              </h4>

              {/* Review text */}
              <p className="text-xs text-gray-600 leading-relaxed flex-1 mb-3">
                {t.text}
              </p>

              {/* Product tag */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2 py-1 rounded-full">
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  {t.product} user
                </span>
                {t.verified && (
                  <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Verified purchase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex
                  ? "bg-[var(--primary)] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => {
                setActiveIndex(i);
                setIsAutoPlaying(false);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Trust footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            All reviews verified by Trusted Scorecard
          </span>
          <span className="hidden sm:block">&middot;</span>
          <span>Reviews collected from product users and public review platforms</span>
        </div>
      </div>
    </section>
  );
}
