"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const ratingData = [
    { star: 5, count: 398 },
    { star: 4, count: 146 },
    { star: 3, count: 20 },
    { star: 2, count: 5 },
    { star: 1, count: 2 },
];

const reviews = [
    {
        name: "Dhruv Prajapati",
        date: "06 Apr 2026",
        location: "Ahmedabad",
        rating: 5,
        text: "Rajasthan tour ekdum amazing tha! Desert safari aur royal stays unforgettable experience tha. Planning aur hotels sab top-notch the. Highly recommended!",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    },
    {
        name: "Sonal Khanna",
        date: "11 Mar 2026",
        location: "Delhi",
        rating: 5,
        text: "Udaipur aur Jaipur ka experience magical tha. Lakes, palaces aur cultural vibes ekdum perfect thi. Very well organized trip!",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
];

export default function ReviewSection() {
    const total = ratingData.reduce((acc, r) => acc + r.count, 0);

    return (
        <section className="w-full bg-white pt-5 pb-10 px-6">
            <div className="max-w-6xl mx-auto">

                {/* 🔥 HEADER */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Traveler Reviews
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Real experiences shared by our explorers across India
                    </p>
                </div>

                {/* 🔥 RATING SUMMARY */}
                <div className="grid md:grid-cols-2 gap-10 mb-14 items-center">

                    {/* LEFT */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-5xl font-bold text-gray-900">4.7</h3>
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">
                            Based on {total}+ verified travelers
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-3">
                        {ratingData.map((item) => {
                            const percentage = (item.count / total) * 100;

                            return (
                                <div key={item.star} className="flex items-center gap-3">

                                    <span className="text-sm w-6">{item.star}★</span>

                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-400 rounded-full"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>

                                    <span className="text-xs text-gray-500 w-10 text-right">
                                        {item.count}
                                    </span>

                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* 🔥 REVIEWS */}
                <div className="space-y-6">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-2xl p-6 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] cursor-pointer"
                        >

                            {/* TOP */}
                            <div className="flex justify-between items-start mb-4">

                                <div className="flex items-center gap-4">

                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            {review.name}
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Reviewed on {review.date}
                                        </p>
                                    </div>

                                </div>

                                <div className="text-green-600 text-sm font-medium">
                                    ★ {review.rating}.0 / 5
                                </div>

                            </div>

                            {/* META */}
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                                <span className="bg-gray-100 px-3 py-1 rounded-full">
                                    📍 {review.location}
                                </span>
                                <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full">
                                    Verified Traveler
                                </span>
                            </div>

                            {/* TEXT */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {review.text}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}