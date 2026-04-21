"use client";

import Link from "next/link";

export default function BlogCTA() {
  const features = [
    "Curated itineraries",
    "Expert local guides",
    "Premium stays",
  ];

  const stats = [
    { num: "500+", label: "Packages" },
    { num: "4.9★", label: "Rating" },
    { num: "12k+", label: "Happy Travellers" },
    { num: "15 yrs", label: "Experience" },
  ];

  return (
    <div className="relative bg-[#111111] rounded-3xl p-5 md:p-6 text-center overflow-hidden border border-white/[0.06]">
      {/* Decorative concentric rings — top left */}
      <div className="absolute -top-36 -left-20 w-80 h-80 rounded-full border border-orange-500/10 pointer-events-none" />
      <div className="absolute -top-20 -left-5 w-60 h-60 rounded-full border border-orange-500/10 pointer-events-none" />

      {/* Decorative concentric rings — bottom right */}
      <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full border border-orange-500/10 pointer-events-none" />
      <div className="absolute -bottom-20 -right-5 w-48 h-48 rounded-full border border-orange-500/10 pointer-events-none" />

      {/* Soft glow blobs */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-orange-500/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full bg-orange-500/[0.05] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Eyebrow badge */}
        <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-orange-500 bg-orange-500/10 border border-orange-500/25 px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          Kerala Travel
        </span>

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-snug">
          Ready to explore{" "}
          <span className="text-orange-500">Kerala&apos;s hidden gems?</span>
        </h3>

        {/* Body */}
        <p className="text-gray-500 text-[15px] mb-7 max-w-xl mx-auto leading-relaxed">
          Let us craft the perfect itinerary for your Kerala adventure.
          Experience the unseen beauty of India with our premium travel
          packages.
        </p>

        {/* Feature checks — 2 col on mobile, single row on md+ */}
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-3 md:gap-5 mb-8 max-w-xs md:max-w-none mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex items-center gap-1.5 text-[12px] text-gray-500 ${i === 2 ? "col-span-2 justify-center" : ""}`}
            >
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-orange-500/15 border border-orange-500/30 shrink-0">
                <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1.5 4l2 2 3-3"
                    stroke="#f97316"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {f}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[13px] px-6 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            View Kerala Packages
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
          <Link
            href="/contact"
            className="inline-flex items-center text-[13px] font-medium text-gray-500 hover:text-gray-300 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-xl transition-all duration-200"
          >
            Talk to an expert
          </Link>
        </div>

        {/* Stats — 2×2 grid on mobile, single 4-col row on md+ */}
        <div className="mt-8 pt-6 border-t border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className={[
                  "flex flex-col items-center justify-center px-4 py-4 md:py-2",
                  i % 2 === 0 ? "border-r border-white/[0.07]" : "",
                  i >= 2 ? "border-t border-white/[0.07]" : "",
                  i === 1 ? "md:border-r border-white/[0.07]" : "",
                  i === 2 ? "md:border-r border-white/[0.07]" : "",
                  i === 3 ? "md:border-r-0" : "",
                ].join(" ")}
              >
                <span className="text-[18px] md:text-[17px] font-bold text-white leading-none">
                  {s.num}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-600 mt-1.5 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
