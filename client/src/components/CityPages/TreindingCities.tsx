"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
    {
        name: "Kashmir",
        price: "₹ 18,500",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    },
    {
        name: "Rajasthan",
        price: "₹ 12,200",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600",
    },
    {
        name: "Goa",
        price: "₹ 9,800",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=600",
    },
    {
        name: "Himachal",
        price: "₹ 14,600",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600",
    },
    {
        name: "Kerala",
        price: "₹ 11,400",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600",
    },
    {
        name: "Ladakh",
        price: "₹ 22,000",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    },
    {
        name: "Char Dham",
        price: "₹ 17,300",
        image: "https://images.unsplash.com/photo-1545579133-99bb5ad189be?q=80&w=600",
    },
];

function DestCard({ item }: { item: (typeof destinations)[0] }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex-shrink-0 w-[176px] cursor-pointer select-none"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Oval frame */}
            <div className="relative w-[176px] h-[256px] rounded-[88px] overflow-hidden bg-gray-200">

                {/* Photo — zooms on hover */}
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={`object-cover transition-transform duration-500 ease-out ${hovered ? "scale-110" : "scale-100"}`}
                />

                {/* Top gradient so name text is always readable */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10" />

                {/* Bottom gradient for price */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/75 to-transparent z-10 transition-opacity duration-300"
                    style={{ opacity: hovered ? 1 : 0 }}
                />

                {/* Destination name — directly on image, no bg, like the reference */}
                <div className="absolute top-[18px] left-0 right-0 flex justify-center z-20 px-3 pointer-events-none">
                    <span
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontStyle: "italic",
                            fontSize: "19px",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.2,
                            textAlign: "center",
                            display: "block",
                            textShadow: "0 1px 8px rgba(0,0,0,0.55), 0 0 20px rgba(0,0,0,0.3)",
                        }}
                    >
                        {item.name}
                    </span>
                </div>

                {/* Price block — slides up from below on hover */}
                <div
                    className="absolute left-0 right-0 flex flex-col items-center z-20 transition-all duration-350 ease-out"
                    style={{
                        bottom: "18px",
                        transform: hovered ? "translateY(0px)" : "translateY(52px)",
                        opacity: hovered ? 1 : 0,
                    }}
                >
                    <p
                        style={{
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.75)",
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "2px",
                        }}
                    >
                        Starting at
                    </p>
                    <p
                        style={{
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "#ffffff",
                            marginBottom: "8px",
                        }}
                    >
                        {item.price}
                    </p>
                    <div
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: "#f97316",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(249,115,22,0.5)",
                        }}
                    >
                        <ArrowUpRight size={14} color="#fff" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function TrendingCities() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    };

    return (
        <section className="w-full bg-white py-10 px-2 md:px-10">
            <div className="max-w-6xl mx-auto ">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                        Trending Cities
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-white to-transparent z-10" />

                    {/* Left arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-colors"
                    >
                        <ChevronLeft size={18} className="text-gray-600" />
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors shadow-md"
                    >
                        <ChevronRight size={18} className="text-white" />
                    </button>

                    {/* Cards track */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-4"
                    >
                        {destinations.map((item, i) => (
                            <DestCard key={i} item={item} />
                        ))}
                    </div>
                </div>

                {/* Explore Now */}
                <div className="flex justify-center mt-8">
                    <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-orange-200">
                        Explore Now
                        <ArrowUpRight size={15} />
                    </button>
                </div>

            </div>
        </section>
    );
}