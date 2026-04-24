"use client";

import Image from "next/image";

const tours = [
    {
        title: "Manali & Kasol Adventure Trip",
        location: "Himachal Pradesh",
        duration: "5 Days & 4 Nights",
        price: "12,999",
        images: [
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1526779259212-939e64788e3c",
        ],
    },
    {
        title: "Goa Beach Escape Package",
        location: "Goa",
        duration: "4 Days & 3 Nights",
        price: "9,499",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206",
            "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        ],
    },
    {
        title: "Kerala Backwaters & Munnar Tour",
        location: "Kerala",
        duration: "6 Days & 5 Nights",
        price: "15,999",
        images: [
            "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
            "https://images.unsplash.com/photo-1586500036706-41963de24d8d",
            "https://images.unsplash.com/photo-1589308454676-5c9d0c85f3a6",
        ],
    },
];

// Duplicate for infinite scroll
const duplicatedTours = [...tours, ...tours];

export default function InfiniteTourCarousel() {
    return (
        <section className="py-8 md:py-16 bg-white">

            {/* 🔥 SECTION TITLE */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Explore Our <span className="text-yellow-500">Top Tour Packages</span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Handpicked experiences across India for unforgettable journeys
                </p>
            </div>

            <div className="relative overflow-hidden">

                {/* Gradient Fades */}
                <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Scrolling Track */}
                <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">

                    {duplicatedTours.map((tour, index) => (
                        <div
                            key={index}
                            className="min-w-[320px] md:min-w-[400px] h-[450px] rounded-3xl overflow-hidden relative shadow-xl group"
                        >

                            {/* 🔥 MULTI IMAGE STACK */}
                            <div className="absolute inset-0">
                                {tour.images.map((img, i) => (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt={tour.title}
                                        fill
                                        className={`object-cover transition-opacity duration-1000 ${i === 0
                                                ? "opacity-100 group-hover:opacity-0"
                                                : "opacity-0 group-hover:opacity-100"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                            {/* Content */}
                            <div className="absolute bottom-0 p-6 text-white">
                                <h2 className="text-xl font-semibold">{tour.title}</h2>
                                <p className="text-sm opacity-80">{tour.location}</p>
                                <p className="text-sm">{tour.duration}</p>

                                <div className="mt-3 flex items-center justify-between">
                                    <span className="text-lg font-bold">
                                        ₹ {tour.price}
                                    </span>

                                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}