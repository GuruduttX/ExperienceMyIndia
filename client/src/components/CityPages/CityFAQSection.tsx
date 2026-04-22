"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type CityFAQSectionProps = {
  city?: string;
  faqs?: FAQItem[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "What is the best time to visit Shimla?",
    answer:
      "March to June is ideal for pleasant weather and sightseeing, while December to February is best if you want a winter holiday with chances of snow around Shimla and Kufri.",
  },
  {
    question: "How many days are enough for a Shimla trip?",
    answer:
      "A 3 to 5 day trip is usually enough to cover Mall Road, The Ridge, Jakhu Temple, Kufri, Chail, and nearby viewpoints at a comfortable pace.",
  },
  {
    question: "Are Shimla tour packages suitable for families?",
    answer:
      "Yes, Shimla is a family-friendly hill station with easy sightseeing, comfortable hotels, short day trips, and activities that work well for kids and senior travelers.",
  },
  {
    question: "Can I customize my Shimla itinerary?",
    answer:
      "Yes, the itinerary can be adjusted for hotel category, sightseeing pace, transfers, adventure activities, honeymoon inclusions, and nearby destinations like Kufri or Chail.",
  },
  {
    question: "What is usually included in a Shimla package?",
    answer:
      "Most packages include hotel stay, selected meals, local transfers, sightseeing, and trip assistance. Exact inclusions depend on the package you choose.",
  },
  {
    question: "Do you provide pickup and drop for Shimla packages?",
    answer:
      "Pickup and drop can be arranged from nearby hubs such as Delhi, Chandigarh, Kalka, or the nearest airport based on your travel plan.",
  },
];

export default function CityFAQSection({
  city = "Shimla",
  faqs = defaultFaqs,
}: CityFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[2.5px] text-orange-500">
            <HelpCircle size={14} strokeWidth={2.2} />
            Travel Help
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-[40px]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base">
            Quick answers for planning your {city} tour package with confidence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center cursor-pointer justify-between gap-4 px-5 py-5 text-left md:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold leading-snug text-gray-900 md:text-base">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <ChevronDown
                      size={18}
                      strokeWidth={2.4}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-500 md:px-6 md:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
