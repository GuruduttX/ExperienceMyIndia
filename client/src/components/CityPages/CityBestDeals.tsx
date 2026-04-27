"use client";

import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Tag,
  Clock,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DealCard {
  id: number;
  images: string[];
  duration: string;
  title: string;
  rating: number;
  reviewCount: string;
  itinerary: { days: string; place: string }[];
  saveBadge: string;
  originalPrice: string;
  finalPrice: string;
  saleLabel: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const deals: DealCard[] = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    duration: "5 Days & 4 Nights",
    title: "Shimla & Manali Winter Retreat",
    rating: 4.5,
    reviewCount: "312",
    itinerary: [
      { days: "2D", place: "Shimla" },
      { days: "2D", place: "Manali" },
      { days: "1D", place: "Solang Valley" },
    ],
    saveBadge: "Save ₹3,200",
    originalPrice: "₹18,500",
    finalPrice: "₹15,300",
    saleLabel: "Early Bird Offer!",
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1593692812349-94e5ab81e96c?w=800&q=80",
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=800&q=80",
      "https://images.unsplash.com/photo-1571406761872-63a5b2c11e80?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    duration: "6 Days & 5 Nights",
    title: "Spiti Valley High Altitude Circuit",
    rating: 4.7,
    reviewCount: "189",
    itinerary: [
      { days: "1D", place: "Shimla" },
      { days: "1D", place: "Narkanda" },
      { days: "2D", place: "Kaza" },
      { days: "1D", place: "Chandratal" },
    ],
    saveBadge: "Save ₹4,100",
    originalPrice: "₹22,000",
    finalPrice: "₹17,900",
    saleLabel: "Limited Seats!",
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    ],
    duration: "4 Days & 3 Nights",
    title: "Dharamsala & Triund Trek",
    rating: 4.6,
    reviewCount: "427",
    itinerary: [
      { days: "2D", place: "Dharamsala" },
      { days: "1D", place: "McLeod Ganj" },
      { days: "1D", place: "Triund" },
    ],
    saveBadge: "Save ₹2,500",
    originalPrice: "₹13,999",
    finalPrice: "₹11,499",
    saleLabel: "Summer Holiday Sale!",
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    duration: "7 Days & 6 Nights",
    title: "Kullu Valley & Kasol Backpacker",
    rating: 4.4,
    reviewCount: "218",
    itinerary: [
      { days: "2D", place: "Kullu" },
      { days: "2D", place: "Kasol" },
      { days: "2D", place: "Kheerganga" },
    ],
    saveBadge: "Save ₹3,800",
    originalPrice: "₹21,000",
    finalPrice: "₹17,200",
    saleLabel: "Weekend Special!",
  },
];

// ─── Image Carousel ───────────────────────────────────────────────────────────

function ImageCarousel({
  images,
  saveBadge,
}: {
  images: string[];
  saveBadge: string;
}) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="relative w-full h-52 overflow-hidden rounded-t-2xl group/carousel">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

      {/* Save badge */}
      <div className="absolute top-3 left-3 flex items-center gap-1 bg-orange-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md pointer-events-none">
        <Tag size={10} />
        {saveBadge}
      </div>

      {/* Prev / Next — always visible on touch, hover on desktop */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center
                   rounded-full bg-white/85 text-gray-700 shadow
                   opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronLeft size={15} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center
                   rounded-full bg-white/85 text-gray-700 shadow
                   opacity-100 sm:opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronRight size={15} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
        {images.map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Deal Card ────────────────────────────────────────────────────────────────

function DealCardItem({ deal }: { deal: DealCard }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full">
      <ImageCarousel images={deal.images} saveBadge={deal.saveBadge} />

      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Duration + Rating */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <Clock size={12} className="text-orange-400" />
            {deal.duration}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-gray-700">
            <Star size={12} className="fill-orange-400 text-orange-400" />
            {deal.rating}
            <span className="font-normal text-gray-400">({deal.reviewCount})</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-orange-500 transition-colors">
          {deal.title}
        </h3>

        {/* Itinerary pills */}
        <div className="flex flex-wrap gap-1.5">
          {deal.itinerary.map((stop, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md"
            >
              <MapPin size={9} className="text-orange-400" />
              <span className="font-bold text-gray-700">{stop.days}</span> {stop.place}
            </span>
          ))}
        </div>

        {/* Sale label */}
        <span className="self-start text-[10.5px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
          {deal.saleLabel}
        </span>

        {/* Pricing */}
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs text-gray-400 line-through">{deal.originalPrice}</span>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              {deal.saveBadge}
            </span>
          </div>
          <div className="text-lg font-extrabold text-gray-900 leading-tight">
            {deal.finalPrice}{" "}
            <span className="text-xs font-normal text-gray-500">/Adult</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl border-2 border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors">
            <Phone size={16} />
          </button>
          <button className="flex-1 h-10 flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold rounded-xl transition-colors">
            Request Callback
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

// Card width + gap so the scroll button moves exactly one card
const CARD_WIDTH = 320;
const CARD_GAP = 20;

export default function HimachalBestDeals() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? CARD_WIDTH + CARD_GAP : -(CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Himachal Pradesh{" "}
            <span className="text-orange-500">Best Deals</span>
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Handpicked packages with the best value
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200
                       text-gray-500 hover:border-orange-400 hover:text-orange-500 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200
                       text-gray-500 hover:border-orange-400 hover:text-orange-500 transition-all"
          >
            <ChevronRight size={16} />
          </button>

          <button className="flex items-center gap-1 text-xs font-semibold text-orange-500 border border-orange-300 px-3 py-1.5 rounded-lg hover:bg-orange-50 transition-colors">
            View All <ArrowUpRight size={13} />
          </button>
        </div>
      </div>

      {/* Scrollable cards row — always a flex row, never a grid */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-3"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <style>{`.hide-scroll::-webkit-scrollbar{display:none}`}</style>
        {deals.map((deal) => (
          <div
            key={deal.id}
            // Fixed width on every breakpoint — card is always 320px wide
            style={{ minWidth: `${CARD_WIDTH}px`, maxWidth: `${CARD_WIDTH}px` }}
          >
            <DealCardItem deal={deal} />
          </div>
        ))}
      </div>
    </section>
  );
}