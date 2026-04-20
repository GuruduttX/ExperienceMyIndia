"use client";
import { useRef, useState } from "react";

const categories = ["Himachal", "Goa", "Kerala", "Rajasthan", "Kashmir"] as const;
type Category = (typeof categories)[number];

const packages: Record<Category, any[]> = {
    Himachal: [
        { title: "Manali & Kasol Trip", days: "5 Days", rating: 4.7 },
        { title: "Spiti Valley Tour", days: "7 Days", rating: 4.8 },
    ],
    Goa: [
        { title: "North Goa Escape", days: "3 Days", rating: 4.6 },
        { title: "Luxury Goa Stay", days: "4 Days", rating: 4.7 },
    ],
    Kerala: [
        { title: "Munnar & Alleppey", days: "6 Days", rating: 4.8 },
    ],
    Rajasthan: [
        { title: "Jaipur Udaipur Tour", days: "5 Days", rating: 4.7 },
    ],
    Kashmir: [
        { title: "Kashmir Paradise", days: "6 Days", rating: 4.9 },
    ],
};

export default function MegaMenu() {
    const [active, setActive] = useState<Category>("Himachal");
    const [open, setOpen] = useState(false);
    const timeoutRef= useRef<ReturnType<typeof setTimeout> | null>(null);


    const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 180);
  };

    return (
        <div
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {/* NAV ITEM */}
            <button className="font-medium text-gray-800 hover:text-orange-500 transition cursor-pointer">
                Experiences
            </button>

            {/* DROPDOWN */}
            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[1000px] rounded-3xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50">

                    {/* 🔥 TOP BAR */}
                    <div className="bg-gradient-to-r from-orange-100 to-orange-200 px-6 py-3 flex justify-between text-sm font-medium text-black">
                        <span>🔥 Exclusive Deals – Up to 40% OFF</span>
                        <div className="flex gap-6 text-xs">
                            <span>⭐ 4.9 Rated</span>
                            <span>🌍 50+ Destinations</span>
                            <span>👥 5K+ Travelers</span>
                        </div>
                    </div>

                    <div className="flex">

                        {/* ✅ LEFT PANEL */}
                        <div className="w-[22%] bg-gray-50/80 backdrop-blur p-6 border-r border-gray-100">

                            <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">
                                Destinations
                            </p>

                            {categories.map((item) => (
                                <div
                                    key={item}
                                    onMouseEnter={() => setActive(item)}
                                    className={`group flex justify-between items-center px-4 py-3 rounded-xl mb-2 cursor-pointer transition-all duration-200
          ${active === item
                                            ? "bg-white shadow-md text-orange-600 font-semibold"
                                            : "text-gray-600 hover:bg-white hover:shadow-sm"
                                        }`}
                                >
                                    {item}
                                    <span className="opacity-0 group-hover:opacity-100 transition">
                                        →
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* ✅ MIDDLE SECTION */}
                        <div className="w-[48%] p-7">

                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-lg font-semibold text-gray-900">
                                    All Packages
                                </h4>
                                <span className="text-orange-500 text-sm cursor-pointer hover:underline">
                                    View all →
                                </span>
                            </div>

                            <div className="space-y-5">
                                {packages[active].map((pkg, i) => (
                                    <div
                                        key={i}
                                        className="group p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                    >
                                        <h5 className="font-medium text-gray-800 group-hover:text-orange-500 transition">
                                            {pkg.title}
                                        </h5>

                                        <div className="flex justify-between mt-3 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                ⏱ {pkg.days}
                                            </span>

                                            <span className="flex items-center gap-1 text-yellow-500">
                                                ⭐ {pkg.rating}
                                            </span>
                                        </div>

                                        <p className="text-green-600 text-sm mt-2 font-medium">
                                            Custom Pricing
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* ✅ RIGHT PANEL */}
                        <div className="w-[30%] bg-gradient-to-br from-orange-50 to-orange-100 p-7 flex flex-col justify-between">

                            <div>

                                <p className="text-xs text-orange-500 uppercase tracking-wide mb-2">
                                    Featured Destination
                                </p>

                                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {active}
                                </h4>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Handpicked experiences across {active}.
                                    Enjoy premium stays, curated itineraries, and seamless travel.
                                </p>

                            </div>

                            <button className="mt-8 bg-orange-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-orange-600 transition shadow-md hover:shadow-lg">
                                Explore All Packages →
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}