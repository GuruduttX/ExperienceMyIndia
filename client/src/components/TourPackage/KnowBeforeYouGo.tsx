"use client";

const points = [
    "All travelers are required to carry valid government-issued ID proof throughout the journey.",
    "Airfare and visa costs are not included in the package and must be arranged separately.",
    "Travel insurance is recommended for a safe and secure experience but is not included.",
    "Personal expenses such as shopping, tips, and additional meals should be budgeted separately.",
    "Any services or transfers not mentioned in the itinerary will be charged additionally.",
    "Consumption of alcoholic beverages is not included unless explicitly specified.",
];

export default function KnowBeforeYouGo() {
    return (
        <section className="w-full bg-white pb-10 px-6">
            <div className="max-w-4xl mx-auto">

                {/* 🔥 HEADER */}
                <div className="mb-12">
                    <p className="text-xs tracking-[0.2em] text-orange-500 uppercase mb-3">
                        Important Information
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                        Know Before You Go
                    </h2>

                    <div className="mt-4 w-16 h-[2px] bg-orange-400 rounded-full" />
                </div>

                {/* 🔥 CONTENT */}
                <div className="relative pl-6">

                    {/* LEFT ACCENT LINE */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-orange-200 via-gray-200 to-transparent" />

                    <ul className="space-y-8">

                        {points.map((point, index) => (
                            <li
                                key={index}
                                className="group flex items-start gap-4"
                            >

                                {/* 🔥 PREMIUM BULLET */}
                                <div className="relative mt-2">
                                    <div className="w-[6px] h-[6px] rounded-full bg-orange-400" />
                                    <div className="absolute inset-0 w-[6px] h-[6px] rounded-full bg-orange-400 blur-[4px] opacity-40 group-hover:opacity-70 transition" />
                                </div>

                                {/* TEXT */}
                                <p className="text-gray-700 text-[15.5px] leading-relaxed tracking-[0.01em] group-hover:text-gray-900 transition">
                                    {point}
                                </p>

                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </section>
    );
}