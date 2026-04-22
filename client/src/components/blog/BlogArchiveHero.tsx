"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import EnquiryForm from "./EnquiryForm";

const posts = [
  {
    tag: "Destinations",
    title: "The Hidden Backwaters of Kerala No Tourist Knows About",
    excerpt:
      "Beyond the houseboats and resorts lies an untouched Kerala — silent canals, village life, and sunsets that don't make it to Instagram.",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1697567464303-794509459456?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJhY2t3YXRlcnMta2VyYWxhfGVufDB8fDB8fHww",
    href: "/blog/hidden-backwaters-kerala",
  },
  {
    tag: "Rajasthan",
    title: "How to Plan a Rajasthan Road Trip on a Budget",
    excerpt:
      "Royal forts, golden deserts, and street food — a full circuit of Rajasthan's best for under ₹20,000 per person.",
    date: "Apr 14, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D",
    href: "/blog/rajasthan-budget-road-trip",
  },
  {
    tag: "North East",
    title: "Meghalaya's Living Root Bridges: A Complete Guide",
    excerpt:
      "Ancient bio-engineering meets monsoon jungle. Here's everything you need to know before you trek to Nongriat.",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1742494267580-e026d3737f65?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/blog/meghalaya-living-root-bridges",
  },
  {
    tag: "Hidden Gems",
    title: "Spiti Valley in Summer: The Road Less Travelled",
    excerpt:
      "Barren mountains, ancient monasteries, and a silence so deep it changes you. Spiti is India's best-kept secret.",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1651319493117-7c1c244132fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwaXRpLXZhbGxleS1zdW1tZXItZ3VpZGV8ZW58MHx8MHx8fDA%3D",
    href: "/blog/spiti-valley-summer-guide",
  },
  {
    tag: "Luxury",
    title: "India's Most Iconic Palace Hotels — Ranked",
    excerpt:
      "From Udaipur's Lake Palace to Jaipur's Rambagh, we rank the palatial stays that are worth every rupee.",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/blog/india-palace-hotels-ranked",
  },
];

const INTERVAL = 5000;
const TICK = 50;
const STEP = (TICK / INTERVAL) * 100;

export default function BlogArchiveHero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % posts.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + STEP;
      });
    }, TICK);
    return () => clearInterval(timer);
  }, [paused, next]);

  const post = posts[active];

  return (
    <section className="bg-white pt-23 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-1.5">
              <span className="w-4 h-px bg-orange-400" />
              What&apos;s Hot Right Now
            </span>
            <h1 className="text-[26px] md:text-[32px] font-bold text-gray-900 leading-tight tracking-tight">
              The <span className="text-orange-500">Experience My India</span>{" "}
              Journal
            </h1>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150 shrink-0"
          >
            View all posts
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* ── Two-column layout: carousel (left) + enquiry form (right, desktop only) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-4">
          {/* ── LEFT: Carousel ─────────────────────────────────────────── */}
          <div
            className="relative rounded-2xl overflow-hidden w-full select-none"
            style={{ height: "clamp(320px, 48vw, 500px)" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* All images stacked, crossfade via opacity */}
            {posts.map((p, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  zIndex: i === active ? 1 : 0,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.12) 100%)",
                zIndex: 2,
              }}
            />

            {/* Top-left: Trending + tag badges */}
            <div className="absolute top-4 left-5 z-10 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-orange-500 text-white px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Trending
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">
                {post.tag}
              </span>
            </div>

            {/* Top-right: slide counter */}
            <div className="absolute top-4 right-5 z-10">
              <span className="text-[11px] font-medium text-white/40 tabular-nums">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(posts.length).padStart(2, "0")}
              </span>
            </div>

            {/* Bottom content block */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-7">
              <div className="max-w-xl">
                <p className="text-[11px] text-white/45 uppercase tracking-widest mb-2">
                  {post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
                </p>
                <h2 className="text-white font-bold text-[18px] md:text-[24px] leading-snug tracking-tight mb-2">
                  {post.title}
                </h2>
                <p className="text-white/55 text-[12.5px] leading-relaxed line-clamp-2 mb-4 hidden sm:block">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-[12px] font-semibold px-5 py-2 rounded-xl transition-all duration-150 hover:-translate-y-0.5"
                >
                  Read Story
                  <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Animated progress indicators — bottom right */}
              <div className="absolute bottom-5 right-5 md:bottom-7 md:right-7 flex items-center gap-2">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-[3px] rounded-full overflow-hidden focus:outline-none transition-all duration-300"
                    style={{
                      width: i === active ? "36px" : "8px",
                      background: "rgba(255,255,255,0.22)",
                    }}
                  >
                    {i === active && (
                      <span
                        className="absolute left-0 top-0 h-full rounded-full bg-orange-500"
                        style={{
                          width: `${progress}%`,
                          transition: `width ${TICK}ms linear`,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Enquiry form — desktop only ─────────────────────── */}
          <div
            className="hidden lg:flex relative rounded-2xl overflow-hidden"
            style={{ height: "clamp(320px, 48vw, 500px)" }}
          >
            {/* Same dark bg as the carousel overlays — uses the active image blurred as backdrop */}
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt=""
                fill
                className="object-cover scale-110 blur-sm transition-all duration-700"
                aria-hidden
              />
              {/* Heavy dark tint so form text is always legible */}
              <div
                className="absolute inset-0"
                style={{ background: "rgba(15,10,5,0.55)" }}
              />
              {/* Subtle orange glow top-left */}
              <div
                className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background: "rgba(249,115,22,0.22)",
                  filter: "blur(48px)",
                }}
              />
            </div>

            {/* Form content */}
            <div className="relative z-10 w-full px-6 py-6">
              <EnquiryForm />
            </div>
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-4 flex md:hidden justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-orange-500 transition-colors"
          >
            View all posts
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
