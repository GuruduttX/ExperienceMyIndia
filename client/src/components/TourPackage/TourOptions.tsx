"use client";

import Image from "next/image";
import { useState } from "react";

const durations = [
    {
        label: "5 Days",
        price: "₹1,71,990",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
    },
    {
        label: "6 Days",
        price: "₹1,63,000",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    },
    {
        label: "7 Days",
        price: "₹2,30,468",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
    },
    {
        label: "8 Days",
        price: "₹2,28,171",
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
    },
    {
        label: "10 Days",
        price: "₹3,38,413",
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800",
    },
];

const routes = [
    "Jaipur → Udaipur",
    "Jaipur → Udaipur → Jodhpur",
];

const stays = ["Standard", "Deluxe", "Luxury"];

export default function TripOptions() {
    const [selectedDuration, setSelectedDuration] = useState(2);
    const [selectedRoute, setSelectedRoute] = useState(1);
    const [selectedStay, setSelectedStay] = useState(1);

    return (
        <section className="w-full bg-white pb-5 px-6">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* 🔥 Duration */}
                <div>
                    <h3 className="text-2xl font-semibold mb-5">
                        Choose Trip Duration
                    </h3>

                    <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">

                        {durations.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedDuration(index)}
                                className={`relative min-w-[140px] h-[80px] rounded-2xl overflow-hidden cursor-pointer group transition duration-300
                ${selectedDuration === index
                                        ? "ring-2 ring-orange-500 shadow-lg scale-[1.04]"
                                        : "hover:scale-[1.04]"
                                    }`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-3 left-3 text-white">
                                    <p className="text-base font-semibold">{item.label}</p>
                                    <p className="text-[11px] opacity-80">Starting from</p>
                                    <p className="text-sm font-medium">{item.price}</p>
                                </div>

                                {/* Selected Dot */}
                                {selectedDuration === index && (
                                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs shadow-md">
                                        ✓
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔥 Routes */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Destination Routes
                    </h3>

                    <div className="space-y-3">
                        {routes.map((route, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedRoute(index)}
                                className={`px-5 py-3 rounded-xl cursor-pointer transition text-sm
                ${selectedRoute === index
                                        ? "bg-orange-50 text-orange-600 border border-orange-300"
                                        : "bg-white/70 backdrop-blur-md border border-gray-200 hover:border-orange-200"
                                    }`}
                            >
                                {route}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 🔥 Stay */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Stay Category
                    </h3>

                    <div className="flex gap-3">
                        {stays.map((stay, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedStay(index)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300
                ${selectedStay === index
                                        ? "bg-orange-500 text-white shadow-md"
                                        : "bg-white border border-gray-200 hover:border-orange-300"
                                    }`}
                            >
                                {stay}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}