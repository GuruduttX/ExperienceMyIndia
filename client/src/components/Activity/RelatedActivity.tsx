"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  image: string;
  location: string;
  title: string;
  rating: number;
  reviewCount: number;
  originalPrice: string;
  finalPrice: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    location: "Manali",
    title: "Solang Valley Snow Activities | Full Day Tour",
    rating: 4.8,
    reviewCount: 312,
    originalPrice: "₹2,499",
    finalPrice: "₹1,999",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80&fit=crop",
    location: "Bir Billing",
    title: "Paragliding at Bir Billing | World's Best Paragliding Site",
    rating: 4.9,
    reviewCount: 548,
    originalPrice: "₹3,200",
    finalPrice: "₹2,599",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    location: "Kheerganga",
    title: "Kheerganga Trek | Natural Hot Springs Overnight Camp",
    rating: 4.7,
    reviewCount: 421,
    originalPrice: "₹1,899",
    finalPrice: "₹1,499",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
    location: "Spiti Valley",
    title: "Chandratal Lake Trek | High Altitude Camping",
    rating: 4.6,
    reviewCount: 189,
    originalPrice: "₹4,500",
    finalPrice: "₹3,799",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    location: "Shimla",
    title: "Shimla Heritage Walk | Old Town & Ridge Guided Tour",
    rating: 4.5,
    reviewCount: 267,
    originalPrice: "₹999",
    finalPrice: "₹749",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    location: "Kasol",
    title: "Kasol to Tosh Trek | Parvati Valley Backpacker Trail",
    rating: 4.7,
    reviewCount: 334,
    originalPrice: "₹2,199",
    finalPrice: "₹1,749",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[240px] flex flex-col group cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Bottom gradient + location */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1 text-white text-xs font-semibold">
          <MapPin size={11} />
          {product.location}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-0.5">
        <h3 className="text-[13px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <Star size={12} className="fill-orange-400 text-orange-400" />
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount} Reviews)</span>
        </div>

        {/* Price */}
        <div>
          <span className="text-xs text-gray-400 line-through mr-1.5">
            {product.originalPrice}
          </span>
          <span className="text-sm font-extrabold text-gray-900">{product.finalPrice}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

const SCROLL_BY = 260;

export default function RelatedActivity() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? SCROLL_BY : -SCROLL_BY,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
            Related Activities
          </h2>
          <div className="mt-1.5 w-10 h-[3px] rounded-full bg-orange-500" />
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200
                       text-gray-500 hover:border-orange-400 hover:text-orange-500
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200
                       text-gray-500 hover:border-orange-400 hover:text-orange-500
                       disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Scrollable row */}
      <div className="relative">
        {/* Left fade */}
        {canLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        )}
        {/* Right fade */}
        {canRight && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        )}

        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-5 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}