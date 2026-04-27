"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FAQ {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqs: FAQ[] = [
  {
    q: "Is prior experience required for paragliding at Bir Billing?",
    a: "No prior experience is needed. All flights are tandem — you fly with a certified and experienced pilot who handles all controls. A brief 5-minute ground briefing before takeoff is all the preparation required.",
  },
  {
    q: "What is the best time of year to go paragliding at Bir Billing?",
    a: "The ideal seasons are March to June and September to November. Skies are clear, thermals are strong, and visibility over the Dhauladhar range is at its best. July and August are monsoon months and most flights are suspended due to weather.",
  },
  {
    q: "How long does a typical paragliding flight last?",
    a: "A standard tandem flight lasts between 30 and 45 minutes. Extended flights of up to 90 minutes can be arranged on request, subject to weather and thermal conditions on the day.",
  },
  {
    q: "What should I wear and carry on the day of the activity?",
    a: "Wear comfortable, layered clothing — temperatures at 2,400 m can be significantly cooler than in Bir town. Closed-toe shoes are mandatory. Carry a photo ID, your booking confirmation, and a light jacket. Avoid loose items like scarves that could interfere with the harness.",
  },
  {
    q: "Is it safe? What safety measures are in place?",
    a: "Bir Billing is certified by the Fédération Aéronautique Internationale and all our pilots hold APPI or BHPA certifications. Every guest is fitted with a full harness, reserve parachute, and helmet. Flights are conducted only within approved weather windows — all activities are cancelled if conditions are unsuitable.",
  },
  {
    q: "Will I receive photos or videos of my flight?",
    a: "Yes. A GoPro video and high-resolution photos are included in the package at no additional charge. Your pilot captures footage throughout the flight; files are transferred to your phone immediately after landing.",
  },
  {
    q: "What happens if the activity is cancelled due to weather?",
    a: "If our team cancels the activity due to poor weather or safety concerns, you will receive a full refund or a complimentary reschedule — whichever you prefer. We monitor conditions from early morning and will inform you by 7 AM if there are any concerns.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function FAQSection({ activityName = "Paragliding at Bir Billing" }: { activityName?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="flex items-start gap-3 mb-8">
        <div className="w-1 self-stretch rounded-full bg-orange-500 shrink-0" />
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Everything you need to know about {activityName}
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-2.5">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                isOpen
                  ? "border-orange-200 bg-orange-50/40 shadow-sm"
                  : "border-gray-200 bg-white hover:border-orange-200"
              }`}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start gap-4 px-5 py-4 text-left"
              >
                {/* Number */}
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5 transition-colors ${
                    isOpen
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {i + 1}
                </span>

                <span
                  className={`flex-1 text-sm font-semibold leading-snug transition-colors ${
                    isOpen ? "text-orange-600" : "text-gray-800"
                  }`}
                >
                  {faq.q}
                </span>

                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors mt-0.5 ${
                    isOpen
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-5 pl-[60px]">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
        <HelpCircle size={18} className="text-orange-500 shrink-0" />
        <p className="text-sm text-gray-600 flex-1">
          Still have questions?{" "}
          <a
            href="#"
            className="font-semibold text-orange-500 hover:text-orange-600 underline underline-offset-2 decoration-dotted transition-colors"
          >
            Contact our support team
          </a>{" "}
          — we typically respond within 30 minutes.
        </p>
      </div>
    </section>
  );
}