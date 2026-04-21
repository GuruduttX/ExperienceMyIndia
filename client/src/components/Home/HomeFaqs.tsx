"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = {
    General: [
        {
            q: "What is Experience My India?",
            a: "Experience My India is a premium travel platform offering curated journeys across India with personalized experiences.",
        },
        {
            q: "What destinations do you cover?",
            a: "We cover major destinations across India including Rajasthan, Kerala, Goa, Himalayas, and more.",
        },
        {
            q: "What type of travel experiences do you offer?",
            a: "We offer luxury tours, adventure trips, cultural journeys, and customized travel experiences.",
        },
        {
            q: "Is Experience My India suitable for international travelers?",
            a: "Yes, we design experiences for both domestic and international travelers.",
        },
        {
            q: "How experienced is your team?",
            a: "Our team consists of travel experts with deep local knowledge and years of industry experience.",
        },
        {
            q: "Why should I choose Experience My India?",
            a: "We focus on premium, curated, and personalized travel experiences with complete support.",
        },
    ],

    Support: [
        {
            q: "Do you provide support during trips?",
            a: "Yes, we offer 24/7 support throughout your journey.",
        },
        {
            q: "How can I contact support?",
            a: "You can contact us via phone, email, or WhatsApp anytime.",
        },
        {
            q: "What if I face issues during my trip?",
            a: "Our team will immediately assist you and resolve any issues.",
        },
        {
            q: "Do you provide emergency assistance?",
            a: "Yes, we provide emergency support for urgent situations.",
        },
        {
            q: "Is there a dedicated travel coordinator?",
            a: "Yes, every trip includes a dedicated coordinator for assistance.",
        },
        {
            q: "Can I get help with last-minute changes?",
            a: "Yes, we assist with last-minute changes based on availability.",
        },
    ],

    "Trip Planning": [
        {
            q: "Do you offer customized travel plans?",
            a: "Yes, all trips can be tailored to your preferences.",
        },
        {
            q: "Can I modify my itinerary after booking?",
            a: "Yes, modifications are possible depending on availability.",
        },
        {
            q: "Do you help with itinerary suggestions?",
            a: "Yes, our experts suggest the best travel plans.",
        },
        {
            q: "How early should I plan my trip?",
            a: "We recommend planning at least 2–4 weeks in advance.",
        },
        {
            q: "Do you plan honeymoon trips?",
            a: "Yes, we offer curated honeymoon packages.",
        },
        {
            q: "Can you plan group tours?",
            a: "Yes, we organize group and family trips as well.",
        },
    ],

    "Bookings & Payments": [
        {
            q: "How can I book a trip?",
            a: "You can book online or connect with our experts.",
        },
        {
            q: "Is my payment secure?",
            a: "Yes, we use secure payment gateways.",
        },
        {
            q: "Do you offer EMI options?",
            a: "Yes, flexible payment options are available.",
        },
        {
            q: "Can I pay in installments?",
            a: "Yes, installment plans are available for selected packages.",
        },
        {
            q: "Will I receive a booking confirmation?",
            a: "Yes, you will receive confirmation via email instantly.",
        },
        {
            q: "Are there any hidden charges?",
            a: "No, we maintain complete pricing transparency.",
        },
    ],

    "Cancellations & Refunds": [
        {
            q: "What is your cancellation policy?",
            a: "It depends on the package and timing of cancellation.",
        },
        {
            q: "Will I get a refund if I cancel?",
            a: "Yes, refunds are processed as per policy.",
        },
        {
            q: "How long does a refund take?",
            a: "Refunds take 5–10 business days.",
        },
        {
            q: "Can I reschedule my trip?",
            a: "Yes, rescheduling is possible depending on availability.",
        },
        {
            q: "Are cancellation charges applicable?",
            a: "Yes, charges depend on when you cancel.",
        },
        {
            q: "What if the trip is canceled by you?",
            a: "You will receive a full refund or alternative option.",
        },
    ],

    "During Your Trip": [
        {
            q: "Will I get support during my journey?",
            a: "Yes, we provide full-time support.",
        },
        {
            q: "Are guides included?",
            a: "Yes, experienced guides are included in most packages.",
        },
        {
            q: "What if there is a travel delay?",
            a: "We assist in managing delays and alternative arrangements.",
        },
        {
            q: "Are meals included in the package?",
            a: "Meals depend on your selected package.",
        },
        {
            q: "Will transportation be provided?",
            a: "Yes, transportation is included as per itinerary.",
        },
        {
            q: "Can I upgrade services during the trip?",
            a: "Yes, upgrades can be arranged on request.",
        },
    ],

    "Travel Essentials": [
        {
            q: "Do I need travel insurance?",
            a: "It is recommended for safety and security.",
        },
        {
            q: "What should I pack?",
            a: "We provide a checklist based on your destination.",
        },
        {
            q: "Are flights included?",
            a: "Flights can be included on request.",
        },
        {
            q: "Do I need ID proof?",
            a: "Yes, valid ID is required for all bookings.",
        },
        {
            q: "What is the best time to travel?",
            a: "It depends on the destination you choose.",
        },
        {
            q: "Do you provide visa assistance?",
            a: "Yes, we assist with visa guidance if required.",
        },
    ],
};

export default function HomeFaqs() {
    const categories = Object.keys(faqData);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-white pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-500 mt-4">
              Everything you need to know before planning your journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT CATEGORY */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-2 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(0);
                  }}
                  className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer
                  ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                      : "bg-orange-50 text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* RIGHT FAQ */}
            <div className="lg:col-span-2 space-y-4">
              {faqData[activeCategory as keyof typeof faqData].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-orange-100 rounded-xl shadow-sm overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex justify-between items-center px-6 py-5 text-left"
                    >
                      <span className="font-medium text-gray-900">
                        {item.q}
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 text-orange-500 transition-transform duration-300 
                      ${openIndex === i ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`px-6 transition-all duration-300 overflow-hidden 
                    ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}
                    >
                      <p className="text-gray-500 text-sm">{item.a}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    );
}