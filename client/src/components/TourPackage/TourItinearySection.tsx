"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const tabs = ["Itinerary", "Summary", "Activities", "Stay", "Transfers"];

// 🔥 FULLY DYNAMIC DATA
const itineraryData = [
    {
        day: "DAY 1",
        title: "Arrival in Jaipur | Royal Welcome",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600",

        description:
            "Welcome to Jaipur! Upon arrival, transfer to your heritage hotel and relax. Explore local markets in the evening.",

        transfer: {
            type: "Private Transfer",
            from: "Jaipur Airport",
            to: "Heritage Hotel in Jaipur",
        },

        stay: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            nights: "1N",
        },

        hotels: [
            {
                name: "City Palace Heritage Hotel",
                image:
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
                rating: "4.5",
            },
            {
                name: "Royal Haveli Stay",
                image:
                    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
                rating: "4.3",
            },
        ],

        meals: {
            breakfast: true,
            lunch: false,
            dinner: false,
        },

        highlight: "Explore local markets and enjoy a royal evening ✨",
    },

    {
        day: "DAY 2",
        title: "Jaipur Sightseeing | Forts & Culture",
        image:
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",

        description:
            "Visit Amber Fort, Hawa Mahal, and City Palace. Experience Jaipur’s royal heritage.",

        transfer: null,

        stay: {
            checkIn: "—",
            checkOut: "—",
            nights: "1N",
        },

        hotels: [],

        meals: {
            breakfast: true,
            lunch: true,
            dinner: false,
        },

        highlight: "Full-day guided sightseeing experience 🏰",
    },
];

export default function TourItinerarySection() {
    const [activeTab, setActiveTab] = useState(0);
    const [openDay, setOpenDay] = useState<number | null>(0);

    return (

        <section className="w-full bg-white pb-5 px-6">
            <div className="max-w-5xl mx-auto">

                {/* 🔥 TABS */}
                <div className="flex gap-3 mb-8 flex-wrap">
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${activeTab === i
                                    ? "bg-orange-500 text-white shadow-md"
                                    : "bg-white border border-gray-200 hover:border-orange-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 🔥 ITINERARY TAB */}
                {activeTab === 0 && (
                    <div className="space-y-5">

                        {itineraryData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm p-4"
                            >

                                {/* 🔥 IMAGE WITH PADDING */}
                                <div className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                                    <div className="absolute bottom-5 left-5 text-white">
                                        <p className="text-xs text-orange-300 font-semibold">
                                            {item.day}
                                        </p>
                                        <h3 className="text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* 🔥 DAY HEADER */}
                                <button
                                    onClick={() =>
                                        setOpenDay(openDay === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center mt-4 px-2 py-3 rounded-xl hover:bg-orange-50 transition cursor-pointer"
                                >
                                    <div className="flex gap-10">
                                        <p className="text-white text-sm font-semibold bg-orange-500 rounded-full px-2">
                                            {item.day}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            View full itinerary details
                                        </p>
                                    </div>

                                    <ChevronDown
                                        size={20}
                                        className={`transition ${openDay === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* 🔥 EXPANDED CONTENT */}
                                {openDay === index && (
                                    <div className="mt-4 space-y-6">

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>

                                        {/* 🔥 TRANSFER */}
                                        {item.transfer && (
                                            <div className="border-t pt-4 space-y-3">
                                                <p className="text-sm font-semibold text-gray-800">
                                                    🚗 {item.transfer.type}
                                                </p>

                                                <div className="bg-gray-50 rounded-xl p-3">
                                                    <p className="text-xs text-gray-400">From</p>
                                                    <p className="text-sm font-medium">
                                                        {item.transfer.from}
                                                    </p>
                                                </div>

                                                <div className="bg-gray-50 rounded-xl p-3">
                                                    <p className="text-xs text-gray-400">To</p>
                                                    <p className="text-sm font-medium">
                                                        {item.transfer.to}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {/* 🔥 STAY */}
                                        {item.stay && (
                                            <div className="border-t pt-4 space-y-4">

                                                <p className="text-sm font-semibold text-gray-800">
                                                    🏨 Stay At
                                                </p>

                                                {/* Check-in */}
                                                <div className="bg-gray-50 rounded-xl p-4 flex justify-between text-sm">
                                                    <div>
                                                        <p className="text-gray-400 text-xs">
                                                            Check In
                                                        </p>
                                                        <p className="font-medium">
                                                            {item.stay.checkIn}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <p className="text-gray-400 text-xs">
                                                            Check Out
                                                        </p>
                                                        <p className="font-medium">
                                                            {item.stay.checkOut}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* 🔥 HOTELS */}
                                                {item.hotels.length > 0 && (
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {item.hotels.map((hotel, i) => (
                                                            <div key={i} className="space-y-2">

                                                                <div className="relative h-[160px] rounded-xl overflow-hidden">
                                                                    <Image
                                                                        src={hotel.image}
                                                                        alt={hotel.name}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                </div>

                                                                <p className="text-sm font-medium">
                                                                    {hotel.name}
                                                                </p>

                                                                <p className="text-xs text-gray-500">
                                                                    ⭐ {hotel.rating}/5
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* 🔥 MEALS */}
                                                <div className="bg-blue-50 rounded-xl p-3 flex justify-between text-xs">
                                                    <span>
                                                        {item.meals.breakfast
                                                            ? "✔ Breakfast"
                                                            : "✖ Breakfast"}
                                                    </span>
                                                    <span>
                                                        {item.meals.lunch
                                                            ? "✔ Lunch"
                                                            : "✖ Lunch"}
                                                    </span>
                                                    <span>
                                                        {item.meals.dinner
                                                            ? "✔ Dinner"
                                                            : "✖ Dinner"}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* 🔥 HIGHLIGHT */}
                                        {item.highlight && (
                                            <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-sm text-orange-600">
                                                ✨ {item.highlight}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </section>
    );
}