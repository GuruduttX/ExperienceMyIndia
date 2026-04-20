"use client";

import { Star, BedDouble, Coffee, MapPin } from "lucide-react";

const itinerary = [
    { day: "1st", title: "Jaipur" },
    { day: "2nd", title: "Udaipur" },
    { day: "3rd", title: "Jodhpur" },
    { day: "4th", title: "Jaisalmer" },
    { day: "5th", title: "Jodhpur" },
];

export default function TourDetails() {
    return (
        <section className="w-full bg-white pt-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* LEFT */}
                <div className="lg:col-span-2">

                    {/* TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-6">
                        Luxury Rajasthan, Smart Price – Full Circuit
                    </h1>

                    {/* ITINERARY (PREMIUM) */}
                    <div className="relative mt-6">

                        {/* Fade edges */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fdfaf6] to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fdfaf6] to-transparent z-10" />

                        {/* Scroll container */}
                        <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-6 py-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-white/40">

                            {/* Duration */}
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-md">
                                8D / 7N
                            </div>

                            {/* Timeline */}
                            {itinerary.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 min-w-max group hover:translate-y-[-2px] transition duration-300 cursor-pointer"
                                >
                                    {/* Day */}
                                    <div className="text-orange-500 font-bold text-lg group-hover:scale-110 transition">
                                        {item.day}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-[10px] tracking-wider text-gray-400 uppercase">
                                            Day in
                                        </p>
                                        <p className="text-sm font-medium group-hover:text-orange-500 transition">
                                            {item.title}
                                        </p>
                                    </div>

                                    {/* Connector */}
                                    {i !== itinerary.length - 1 && (
                                        <div className="h-[2px] w-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-8 mt-8 text-gray-700">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Transfer Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <BedDouble size={18} />
                            <span>Stay Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Coffee size={18} />
                            <span>Breakfast Included</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>Sightseeing Included</span>
                        </div>

                    </div>
                </div>

                {/* RIGHT - PRICING */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40 p-6 h-fit sticky top-24">

                    {/* Price + rating */}
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-bold">₹36,769</h2>

                        <div className="flex items-center gap-1 text-green-600 text-sm">
                            <Star size={16} fill="currentColor" />
                            <span>4.6 (1.3k)</span>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">Per Adult</p>

                    {/* Old price */}
                    <p className="text-gray-400 line-through text-sm">
                        ₹51,769
                    </p>

                    {/* Badge */}
                    <div className="inline-block bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mt-2 mb-4">
                        SUMMER HOLIDAY SALE
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg cursor-pointer">
                        Send Enquiry
                    </button>

                </div>
            </div>
        </section>
    );
}