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


export default function TripOptions() {
    const [selectedDuration, setSelectedDuration] = useState(2);

    return (
        <section className="w-full bg-white pb-5 ">
            <div className="max-w-6xl mx-auto space-y-12">

                {/* 🔥 Duration */}
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-5">
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

                

            </div>
        </section>
    );
}