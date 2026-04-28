"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle2, Quote } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Review {
  id: number;
  name: string;
  initials: string;
  rating: number;
  location: string;
  text: string;
  tag: string;
  date: string;
  verified: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const reviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    rating: 5,
    location: "Mumbai",
    text: "The Spiti Valley circuit was beyond words — ancient Pin Valley monasteries, star-gazing at 14,000 ft, and the warmth of homestay families. Every detail of the itinerary was thoughtfully curated.",
    tag: "Spiti Valley",
    date: "March 2024",
    verified: true,
  },
  {
    id: 2,
    name: "Arjun Mehta",
    initials: "AM",
    rating: 5,
    location: "Pune",
    text: "Manali to Khardung La on this tour was incredible. Our guide knew every switchback, every safe rest stop. Rohtang Pass at sunrise was the single most beautiful thing I've witnessed in years of travel.",
    tag: "Manali",
    date: "June 2024",
    verified: true,
  },
  {
    id: 3,
    name: "Kavya Nair",
    initials: "KN",
    rating: 4,
    location: "Bangalore",
    text: "Dharamshala trip exceeded expectations. The Dhauladhar trek, Tibetan cuisine at McLeod Ganj, and paragliding over Bir Billing were perfectly paced. Hotel was excellent for the price point.",
    tag: "Dharamshala",
    date: "October 2024",
    verified: true,
  },
  {
    id: 4,
    name: "Rohit Kapoor",
    initials: "RK",
    rating: 5,
    location: "Delhi",
    text: "Kasol and Kheerganga trek was beautifully organised. The natural hot springs after a 12 km hike through pine forests felt like a reward well earned. First snowfall of my life at Triund — priceless.",
    tag: "Kasol",
    date: "November 2024",
    verified: true,
  },
  {
    id: 5,
    name: "Sneha Iyer",
    initials: "SI",
    rating: 5,
    location: "Chennai",
    text: "Shimla's heritage walks and the Kalka toy train were highlights we'll talk about for years. The apple orchard stay in Sarahan was completely unique — waking up to mist-draped peaks every morning.",
    tag: "Shimla",
    date: "December 2024",
    verified: true,
  },
  {
    id: 6,
    name: "Vikram Singh",
    initials: "VS",
    rating: 5,
    location: "Jaipur",
    text: "Solang Valley in winter with fresh powder snow — the ski package was excellent value. Instructors were patient, equipment was top quality, and the apres-ski arrangements at the lodge were superb.",
    tag: "Solang Valley",
    date: "January 2025",
    verified: true,
  },
];

// avatar bg cycles through orange shades only
const avatarColors = [
  "bg-orange-500",
  "bg-orange-400",
  "bg-amber-500",
  "bg-orange-600",
  "bg-amber-400",
  "bg-orange-500",
];

// ─── Star ─────────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f97316" : "none"}
          stroke={i < rating ? "#f97316" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────────

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[310px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
            {review.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 leading-tight">{review.name}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
              <MapPin size={9} />
              {review.location}
            </p>
          </div>
        </div>
        {review.verified && (
          <span className="flex items-center gap-1 text-[10.5px] font-medium text-orange-600 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full shrink-0">
            <CheckCircle2 size={9} />
            Verified
          </span>
        )}
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-2">
        <Stars rating={review.rating} />
        <span className="text-xs text-gray-400">{review.date}</span>
      </div>

      {/* Text */}
      <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-4 flex-1">
        {review.text}
      </p>

      {/* Tag */}
      <span className="self-start text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-0.5 rounded-full">
        {review.tag}
      </span>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

const CARD_W = 310 + 16; // card width + gap

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, reviews.length - 1));
    setActiveIndex(clamped);
    scrollRef.current?.scrollTo({ left: clamped * CARD_W, behavior: "smooth" });
  }, []);

  // keep dot in sync when user swipes manually
  const onScroll = () => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / CARD_W);
    setActiveIndex(idx);
  };

  return (
    <section className="w-full py-14 sm:py-20 bg-gray-50/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
            Traveller Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            People Love Our{" "}
            <span className="text-orange-500">Himachal Pradesh</span> Tours
          </h2>
          <p className="text-sm text-gray-400 mt-2">Real experiences. Real travellers. No filters.</p>
        </div>

        {/* ── Body: stat panel + cards ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* ── Left stat panel ── */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              {/* Big number */}
              <div className="text-center mb-4">
                <div className="text-5xl font-extrabold text-gray-900 leading-none">4.7</div>
                <div className="flex justify-center gap-0.5 mt-2">
                  <Stars rating={5} />
                </div>
                <p className="text-xs text-gray-400 mt-1">out of 5</p>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-4 text-center">
                <p className="text-sm font-bold text-gray-800">38,542 Reviews</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  from travellers across{" "}
                  <span className="font-semibold text-gray-600">60+ cities</span>
                </p>
              </div>

              {/* Rating bars */}
              <div className="space-y-2">
                {[
                  { label: "5★", pct: 72 },
                  { label: "4★", pct: 18 },
                  { label: "3★", pct: 6 },
                  { label: "2★", pct: 3 },
                  { label: "1★", pct: 1 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-5 shrink-0">{row.label}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="h-full bg-orange-400 rounded-full"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-7 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Verified stamp */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5">
                <CheckCircle2 size={13} className="text-orange-500" />
                <span className="text-xs font-medium text-gray-500">All reviews verified</span>
              </div>
            </div>
          </div>

          {/* ── Right: scrollable cards ── */}
          <div className="flex-1 min-w-0 w-full">
            <div className="flex items-center gap-2 mb-5">
              <Quote size={22} className="text-orange-200 shrink-0" />
              <span className="text-sm text-gray-400 italic">What our travellers are saying</span>
            </div>

            {/* Cards row — always scrollable, touch-friendly */}
            <div
              ref={scrollRef}
              onScroll={onScroll}
              className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              {reviews.map((review, i) => (
                <ReviewCard key={review.id} review={review} index={i} />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-5">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-5 h-2 bg-orange-500"
                        : "w-2 h-2 bg-gray-300 hover:bg-orange-300"
                    }`}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 rounded-full border cursor-pointer border-gray-200 bg-white text-gray-500
                             hover:border-orange-400 hover:text-orange-500
                             disabled:opacity-30 disabled:cursor-not-allowed
                             transition-all flex items-center justify-center"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollTo(activeIndex + 1)}
                  disabled={activeIndex === reviews.length - 1}
                  className="w-9 h-9 rounded-full border cursor-pointer border-gray-200 bg-white text-gray-500
                             hover:border-orange-400 hover:text-orange-500
                             disabled:opacity-30 disabled:cursor-not-allowed
                             transition-all flex items-center justify-center"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}