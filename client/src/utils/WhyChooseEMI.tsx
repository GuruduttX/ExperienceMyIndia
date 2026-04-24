"use client";

import { Users, Star, Heart, Headphones } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Travellers",
    description: "Indians who explored their homeland with us.",
  },
  {
    icon: Star,
    value: "4.6 / 5",
    label: "Rated by Guests",
    description: "Honest reviews from real travellers on Google.",
  },
  {
    icon: Heart,
    value: "Curated for Indians",
    label: "Made with Care",
    description: "Itineraries designed around Indian travel preferences.",
  },
  {
    icon: Headphones,
    value: "24 / 7",
    label: "On-trip Support",
    description: "We stay reachable before, during and after your trip.",
  },
];

export default function WhyChooseEMI() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-10">
        Why Choose{" "}
        <span className="text-orange-500">Experience My India</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map(({ icon: Icon, value, label, description }) => (
          <div key={label} className="flex flex-col gap-4">
            {/* Icon blob */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              {/* soft pink blob behind */}
              <div className="absolute inset-0 rounded-full bg-orange-100/70 scale-110 " />
              {/* sparkle dots */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-300 opacity-70" />
              <span className="absolute bottom-0 -left-1.5 w-1.5 h-1.5 rounded-full bg-orange-200 opacity-60" />
              {/* icon circle */}
              <div className="relative w-full h-full flex items-center justify-center rounded-full cursor-pointer border-2 border-orange-200 bg-white shadow-sm">
                <Icon size={26} className="text-orange-500" strokeWidth={1.6} />
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                {value}
              </p>
              <p className="text-xs font-semibold text-orange-500 mt-0.5 mb-1.5">
                {label}
              </p>
              <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}