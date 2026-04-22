"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
    "All",
    "Himachal",
    "Goa",
    "Kerala",
    "Rajasthan",
    "Kashmir",
    "North East",
    "Uttarakhand",
    "Assam",
    "Tamil Nadu",
    "Punjab",
    "Chandigarh",
    "Arunachal Pradesh"
];

// 👉 Add more tours here (at least 12 for testing)
const tours = [
    {
        title: "Manali & Kasol Adventure Trip",
        location: "Himachal Pradesh",
        duration: "5 Days & 4 Nights",
        price: "12,999",
        oldPrice: "18,000",
        rating: 4.7,
        tag: "Trending",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        title: "Goa Beach Escape Package",
        location: "Goa",
        duration: "4 Days & 3 Nights",
        price: "9,499",
        oldPrice: "14,000",
        rating: 4.6,
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
        title: "Kerala Backwaters & Munnar Tour",
        location: "Kerala",
        duration: "6 Days & 5 Nights",
        price: "15,999",
        oldPrice: "22,000",
        rating: 4.8,
        tag: "Luxury",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    },
    {
        title: "Jaipur Royal Heritage Tour",
        location: "Rajasthan",
        duration: "4 Days & 3 Nights",
        price: "11,499",
        oldPrice: "16,000",
        rating: 4.5,
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    },
    {
        title: "Kashmir Paradise Retreat",
        location: "Kashmir",
        duration: "6 Days & 5 Nights",
        price: "18,999",
        oldPrice: "25,000",
        rating: 4.9,
        tag: "Top Rated",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    },
    {
        title: "Meghalaya & Shillong Explorer",
        location: "North East",
        duration: "5 Days & 4 Nights",
        price: "14,499",
        oldPrice: "19,000",
        rating: 4.6,
        tag: "Hidden Gem",
        image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
    },
    {
        title: "Rishikesh Adventure & Camping",
        location: "Uttarakhand",
        duration: "3 Days & 2 Nights",
        price: "6,999",
        oldPrice: "10,000",
        rating: 4.4,
        tag: "Adventure",
        image: "https://images.unsplash.com/photo-1590766940554-634a7ed41450",
    },
    {
        title: "Assam Tea Gardens Experience",
        location: "Assam",
        duration: "4 Days & 3 Nights",
        price: "13,499",
        oldPrice: "18,500",
        rating: 4.5,
        tag: "Nature",
        image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    },
    {
        title: "Ooty & Coonoor Hill Station Tour",
        location: "Tamil Nadu",
        duration: "5 Days & 4 Nights",
        price: "12,499",
        oldPrice: "17,000",
        rating: 4.6,
        tag: "Relax",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8",
    },
    {
        title: "Amritsar Cultural & Food Tour",
        location: "Punjab",
        duration: "2 Days & 1 Night",
        price: "5,999",
        oldPrice: "8,000",
        rating: 4.7,
        tag: "Cultural",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    },
    {
        title: "Chandigarh Weekend Getaway",
        location: "Chandigarh",
        duration: "2 Days & 1 Night",
        price: "4,999",
        oldPrice: "7,500",
        rating: 4.3,
        tag: "Quick Trip",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    },
    {
        title: "Tawang & Arunachal Expedition",
        location: "Arunachal Pradesh",
        duration: "7 Days & 6 Nights",
        price: "22,999",
        oldPrice: "30,000",
        rating: 4.8,
        tag: "Explorer",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    },
    {
        title: "Chandigarh Weekend Getaway",
        location: "Chandigarh",
        duration: "2 Days & 1 Night",
        price: "4,999",
        oldPrice: "7,500",
        rating: 4.3,
        tag: "Quick Trip",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    },
    {
        title: "Tawang & Arunachal Expedition",
        location: "Arunachal Pradesh",
        duration: "7 Days & 6 Nights",
        price: "22,999",
        oldPrice: "30,000",
        rating: 4.8,
        tag: "Explorer",
        image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
    },
];

export default function IndiaTourSection() {
    const [active, setActive] = useState(0);
    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <section className="bg-white py-10">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <p className="text-sm tracking-widest text-gray-500 mb-3">
                    EXPLORE INDIA
                </p>

                <h2 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Discover India's Best Tour Packages
                </h2>
            </div>

            {/* CATEGORY TABS */}
            <div className="max-w-7xl mx-auto px-6 mb-5 scrollbar-hide">
                <div className="relative overflow-x-auto">
                    <div className="flex gap-8 border-b border-gray-200 pb-3 w-max">
                        {categories.map((item, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`relative text-sm font-medium transition-all duration-300 cursor-pointer
                                ${active === i
                                        ? "text-gray-900"
                                        : "text-gray-400 hover:text-gray-700"
                                    }`}
                            >
                                {item}

                                {active === i && (
                                    <span className="absolute left-0 -bottom-[13px] h-[2px] w-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* CARDS */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {tours.slice(0, visibleCount).map((tour, i) => (
                    <div
                        key={i}
                        className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer transition duration-300 hover:-translate-y-2"
                    >

                        <div className="relative h-[450px] md:h-[520px]">
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-700"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-700 via-black/40 to-transparent" />

                        <div className="absolute bottom-0 p-6 text-white w-full">
                            <h3 className="text-lg font-semibold mb-1">
                                {tour.title}
                            </h3>

                            <p className="text-sm text-gray-300 mb-1">
                                {tour.location}
                            </p>

                            <p className="text-sm text-gray-300 mb-2">
                                {tour.duration}
                            </p>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs line-through text-gray-400">
                                        ₹ {tour.oldPrice}
                                    </p>
                                    <p className="text-xs text-gray-300">
                                        Starting from
                                    </p>
                                    <p className="text-xl font-bold">
                                        ₹ {tour.price}
                                    </p>
                                </div>

                                <button className="bg-white text-black px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-200 transition cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* VIEW MORE BUTTON */}
            <div className="flex justify-center mt-14 gap-4">

                {/* VIEW LESS */}
                {visibleCount > 6 && (
                    <button
                        onClick={() => setVisibleCount(6)}
                        className="px-6 py-3 rounded-xl border border-orange-300 
             hover:bg-orange-50 transition text-orange-500 cursor-pointer"
                    >
                        View less
                    </button>
                )}

                {/* VIEW MORE */}
                {visibleCount < tours.length && (
                    <button
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        className="group flex items-center gap-2 px-8 py-3 
            border border-orange-500 rounded-xl 
            text-orange-700 font-medium tracking-wide
            bg-white hover:bg-orange-50
            transition-all duration-300 
            hover:shadow-md cursor-pointer"
                    >
                        View more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                )}

            </div>
        </section>
    );
}