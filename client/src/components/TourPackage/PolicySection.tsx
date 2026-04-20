"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const policies = [
    {
        title: "More On Rajasthan Tourism",
        points: [
            "Best time to visit Rajasthan is between October and March.",
            "Major destinations include Jaipur, Udaipur, Jodhpur, and Jaisalmer.",
            "Cultural experiences include desert safaris, forts, and heritage stays.",
        ],
    },
    {
        title: "Confirmation Policy",
        points: [
            "Confirmation will be provided within 24–48 hours of booking.",
            "All bookings are subject to availability.",
            "Ensure correct traveler details while booking.",
        ],
    },
    {
        title: "Refund Policy",
        points: [
            "Refunds are processed within 7–10 working days.",
            "Refund amount depends on cancellation timing.",
            "Payment gateway charges may be non-refundable.",
        ],
    },
    {
        title: "Cancellation Policy",
        points: [
            "Free cancellation up to 7 days before travel.",
            "50% charges apply within 3–7 days.",
            "No refund within 48 hours of travel.",
        ],
    },
    {
        title: "Payment Policy",
        points: [
            "30% advance required to confirm booking.",
            "Remaining amount due before travel.",
            "UPI, cards, and bank transfers accepted.",
        ],
    },
];

export default function PolicySection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full bg-white pb-10 px-6">
            <div className="max-w-4xl mx-auto">

                {/* 🔥 TITLE */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    Policies & Information
                </h2>

                {/* 🔥 LIST */}
                <div className="border-t border-gray-200">

                    {policies.map((item, index) => (
                        <div key={index} className="border-b border-gray-200">

                            {/* 🔥 ROW */}
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex justify-between items-center py-5 text-left group cursor-pointer"
                            >
                                <span className="text-[16px] font-medium text-gray-900 group-hover:text-black transition">
                                    {item.title}
                                </span>

                                <ChevronDown
                                    size={18}
                                    className={`text-gray-500 transition ${openIndex === index ? "rotate-180 text-black" : ""
                                        }`}
                                />
                            </button>

                            {/* 🔥 DROPDOWN */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? "max-h-[300px] pb-5"
                                        : "max-h-0"
                                    }`}
                            >
                                <ul className="space-y-3 pl-2">

                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex gap-3">

                                            {/* BULLET */}
                                            <div className="mt-[7px] w-[4px] h-[4px] bg-gray-400 rounded-full shrink-0" />

                                            {/* TEXT */}
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {point}
                                            </p>

                                        </li>
                                    ))}

                                </ul>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}