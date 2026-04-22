"use client";

import { Check, X } from "lucide-react";

// 🔥 DYNAMIC DATA (API READY)
const packageDetails = {
    inclusions: [
        "Airport pickup & drop (Jaipur)",
        "7 nights stay in premium hotels",
        "Daily breakfast included",
        "Jaipur, Udaipur & Jaisalmer sightseeing",
        "Desert safari & cultural evening",
        "Private SUV for all transfers",
        "Driver allowance, fuel & toll taxes",
        "24/7 travel assistance",
    ],
    exclusions: [
        "Airfare / Train tickets",
        "Personal expenses (shopping, tips, etc.)",
        "Lunch & Dinner unless specified",
        "Entry tickets to monuments",
        "Travel insurance",
        "Anything not mentioned in inclusions",
    ],
};

export default function TourInclusionExclusion() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-0">
            <div className="max-w-6xl mx-auto">

                {/* 🔥 HEADER */}
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        What’s Included in Your Experience
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Transparent breakdown of everything covered in your journey
                    </p>
                </div>

                {/* 🔥 MAIN CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* ✅ INCLUSIONS */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-green-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

                        <h3 className="text-lg font-semibold mb-6 text-green-600">
                            ✔ Inclusions
                        </h3>

                        <ul className="space-y-4">
                            {packageDetails.inclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 group">

                                    {/* Icon */}
                                    <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-500 group-hover:text-white transition">
                                        <Check size={14} />
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition">
                                        {item}
                                    </p>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ❌ EXCLUSIONS */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-red-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

                        <h3 className="text-lg font-semibold mb-6 text-red-500">
                            ✖ Exclusions
                        </h3>

                        <ul className="space-y-4">
                            {packageDetails.exclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 group">

                                    {/* Icon */}
                                    <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition">
                                        <X size={14} />
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition">
                                        {item}
                                    </p>

                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}