"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const blogFaqData = [
  {
    q: "What is the best time to visit Kerala?",
    a: "The best time to visit Kerala is between September and March when the weather is cool and pleasant, making it ideal for sightseeing and backwater cruises.",
  },
  {
    q: "Are these hidden gems safe for solo travelers?",
    a: "Yes, places like Gavi and Vagamon are generally safe for solo travelers. However, it's always advisable to take standard safety precautions and hire local guides for trekking.",
  },
  {
    q: "How many days are enough to explore these places?",
    a: "A well-planned itinerary of 5 to 7 days is usually sufficient to cover 2-3 of these hidden gems along with some popular nearby attractions.",
  },
  {
    q: "Do I need special permits to visit Gavi?",
    a: "Yes, since Gavi is part of the Periyar Tiger Reserve, entry is regulated. You may need to obtain a pass from the Forest Department or book a guided eco-tourism package.",
  },
];

export default function BlogFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {blogFaqData.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left active:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`px-6 transition-all duration-300 overflow-hidden ${openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-gray-500 text-base">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
