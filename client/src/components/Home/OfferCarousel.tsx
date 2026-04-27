"use client"
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const offers = [
  {
    title: "Goa Summer Escape",
    description: "Enjoy beaches, nightlife & water sports",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Manali Adventure",
    description: "Mountains, snow & adventure sports",
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Kerala Backwaters",
    description: "Relax in serene houseboats",
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
];

export default function OfferCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mt-6 md:mt-16 max-w-7xl mx-auto px-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#FF9933]">
            Limited Time
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Deals & <span className="text-[#FF9933]">Offers</span>
          </h2>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full border border-[#FF9933]/30 text-[#FF9933] hover:bg-[#FF9933]/10 transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full border border-[#FF9933]/30 text-[#FF9933] hover:bg-[#FF9933]/10 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {offers.map((offer, i) => (
          <div
            key={i}
            className="relative min-w-[85%] md:min-w-[380px] h-[220px] md:h-[260px] rounded-2xl overflow-hidden group"
          >
            {/* IMAGE */}
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-4 md:p-5 text-white">
              <p className="inline-flex rounded-full bg-[#FF9933] px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-lg shadow-[#FF9933]/30">
                {offer.discount}
              </p>
              <h3 className="mt-3 text-lg md:text-xl font-semibold leading-tight">
                {offer.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-200 mt-1">
                {offer.description}
              </p>

              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FF9933] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#FF9933]/30 transition hover:bg-[#e88824]">
                Explore Deal
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
