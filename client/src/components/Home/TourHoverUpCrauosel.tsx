"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const features = [
    {
        title: "Manali & Kasol Adventure Trip",
        location: "Himachal Pradesh",
        duration: "5 Days & 4 Nights",
        price: "12,999",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        title: "Goa Beach Escape Package",
        location: "Goa",
        duration: "4 Days & 3 Nights",
        price: "9,499",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
    },
    {
        title: "Kerala Backwaters & Munnar Tour",
        location: "Kerala",
        duration: "6 Days & 5 Nights",
        price: "15,999",
        image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
    },
    {
        title: "Rajasthan Royal Tour",
        location: "Rajasthan",
        duration: "5 Days & 4 Nights",
        price: "13,499",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        title: "Kashmir Paradise Trip",
        location: "Kashmir",
        duration: "6 Days & 5 Nights",
        price: "18,999",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
];

export default function TourHoverUpCarousel() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(2);

    const scroll = (dir: "left" | "right") => {
        if (!sliderRef.current) return;

        const newIndex =
            dir === "left"
                ? Math.max(active - 1, 0)
                : Math.min(active + 1, features.length - 1);

        setActive(newIndex);

        sliderRef.current.scrollTo({
            left: newIndex * 360,
            behavior: "smooth",
        });
    };

    return (
      <section className="relative w-full py-20 bg-white overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-900">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Top Tour Packages
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={sliderRef}
          className="flex items-center gap-4 md:gap-8 px-2 md:px-10 overflow-x-auto scrollbar-hide scroll-smooth  snap-x snap-mandatory"
          onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            const containerWidth = target.clientWidth;
            const newIndex = Math.round(target.scrollLeft / containerWidth);
            if (
              newIndex !== active &&
              newIndex >= 0 &&
              newIndex < features.length
            ) {
              setActive(newIndex);
            }
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden transition-all duration-500 ease-out flex-shrink-0 cursor-pointer
              w-[calc(100vw-1rem)] md:w-[400px]
              h-[60vh] md:h-[480px]
              md:hover:scale-105 md:hover:-translate-y-10 md:hover:shadow-orange-100 md:hover:shadow-xl
              snap-center"
              onClick={() => setActive(index)}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Overlay — tight to content only, not full card */}
              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Content — reel style */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-white">
                {/* Location pill at top of text block */}
                <span className="inline-block text-[11px] font-medium bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-2">
                  📍 {item.location}
                </span>

                <h3 className="font-semibold text-base leading-snug mb-1">
                  {item.title}
                </h3>

                <p className="text-xs opacity-70 mb-3">{item.duration}</p>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">₹ {item.price}</p>
                  <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium hover:scale-105 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow — desktop only (unchanged) */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex items-center justify-center absolute left-6 top-1/2 -translate-y-1/2 
    w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition z-20"
        >
          ←
        </button>

        {/* Right Arrow — desktop only (unchanged) */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex items-center justify-center absolute right-6 top-1/2 -translate-y-1/2 
    w-12 h-12 rounded-full bg-white shadow-lg hover:scale-110 transition z-20"
        >
          →
        </button>

        {/* Dots — mobile only */}
        <div className="flex md:hidden justify-center mt-6 gap-2">
          {features.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300
                ${i === active ? "w-6 bg-orange-500" : "w-2 bg-gray-300"}
            `}
            />
          ))}
        </div>
      </section>
    );
}