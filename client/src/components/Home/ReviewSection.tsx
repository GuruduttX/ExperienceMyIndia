"use client";

import { useRef } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Amit Agarwala",
        date: "27 Jul 2025",
        rating: 5,
        text: "Our recent trip to the Nordic countries—including Iceland, Finland, Sweden, Norway, and Denmark—arranged through Thrillophilia was nothing short of spectacular.",
        images: [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
        ],
    },
    {
        name: "Neha Sharma",
        date: "12 Aug 2025",
        rating: 5,
        text: "Amazing experience! Everything was perfectly planned and smooth.",
        images: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
            "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        ],
    },
];

export default function ReviewSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;

        const scrollAmount = window.innerWidth < 768 ? 260 : 400;

        scrollRef.current.scrollBy({
            left: dir === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="w-full py-10 md:py-16 px-4 md:px-6 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center gap-2">
                        🏆 AWARDED BEST LEISURE TOURS BRAND
                    </h2>

                    <p className="text-sm md:text-base text-gray-500 mb-4 md:mb-6">
                        The Economic Times Travel & Tourism Annual Awards
                    </p>

                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl shadow-sm mb-4 md:mb-6">
                        <p className="font-semibold text-base md:text-lg">
                            Travel & Tourism Annual Conclave & Awards
                        </p>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        <div>
                            <p className="font-bold text-base md:text-lg">12,70,891</p>
                            <p className="text-xs md:text-sm text-gray-500">Reviews</p>
                        </div>

                        <div className="h-8 md:h-10 w-px bg-gray-300"></div>

                        <div>
                            <p className="font-bold text-base md:text-lg flex items-center gap-1">
                                4.8 <Star className="text-green-500 fill-green-500 w-4 h-4" />
                            </p>
                            <p className="text-xs md:text-sm text-gray-500">
                                Rated by 3L+ travellers
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE CAROUSEL */}
                <div className="relative">

                    {/* Buttons (hide on small screens if needed) */}
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 px-4"
                    >
                        ◀
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 px-4"
                    >
                        ▶
                    </button>

                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth no-scrollbar px-1 md:px-10 scrollbar-hide"
                    >
                        {reviews.map((review, i) => (
                            <div
                                key={i}
                                className="min-w-[260px] md:min-w-[350px] bg-gray-50 rounded-2xl p-3 md:p-4 shadow-sm"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-center mb-2 md:mb-3">
                                    <div>
                                        <h4 className="font-semibold text-sm md:text-base">
                                            {review.name}
                                        </h4>
                                        <p className="text-xs md:text-sm text-gray-500">
                                            On: {review.date}
                                        </p>
                                    </div>

                                    <div className="flex items-center text-green-600 font-semibold text-sm">
                                        <Star className="w-4 h-4 fill-green-600" /> {review.rating}
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-xs md:text-sm text-gray-700 mb-2 md:mb-3 line-clamp-3">
                                    {review.text}
                                </p>

                                {/* Images */}
                                <div className="flex gap-2">
                                    {review.images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden"
                                        >
                                            <Image
                                                src={img}
                                                alt="review"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}