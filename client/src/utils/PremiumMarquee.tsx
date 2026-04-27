"use client";

import { ShieldCheck, Headphones, MapPinned, Star } from "lucide-react";

const items = [
  {
    icon: Star,
    text: "Rated 4.8 by 500+ Travelers",
  },
  {
    icon: MapPinned,
    text: "50+ Handpicked Destinations Across India",
  },
  {
    icon: ShieldCheck,
    text: "Best Price Guarantee",
  },
  {
    icon: Headphones,
    text: "24/7 Travel Support",
  },
];

export default function PremiumMarquee() {
  return (
    <div className="relative bg-gradient-to-r from-orange-50 via-white to-orange-50 border-y border-orange-100">

      {/* Container (7xl centered) */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="marquee-wrapper py-5">
          <div className="marquee-track">
            {[...items, ...items].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 mx-10 whitespace-nowrap"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 shadow-sm">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>

                  {/* Text */}
                  <span className="text-base md:text-lg font-semibold text-gray-800 tracking-wide">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}