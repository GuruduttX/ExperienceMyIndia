"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
// When the real API is ready, fetch packages in the blog page using the
// blog's location slug and pass them as the `packages` prop:
//
//   const packages = await fetch(`/api/packages?location=${blog.locationSlug}`)
//   <RelatedPackages locationName="Kerala" packages={packages} />

export type TourPackage = {
  id: string;
  slug: string;
  title: string;
  location: string;
  coverImage: string;
  duration: string; // e.g. "6D / 5N"
  price: number; // base price per adult in ₹
  originalPrice?: number; // for showing strikethrough / discount
};

type Props = {
  locationName: string; // shown in the section heading, e.g. "Kerala"
  locationSlug: string; // used to build package links, e.g. "kerala"
  packages?: TourPackage[];
};

// ─── Mock data ────────────────────────────────────────────────────────────────
// Replace with a real fetch when the backend is ready.

const MOCK_PACKAGES: TourPackage[] = [
  {
    id: "1",
    slug: "kerala-backwaters-classic",
    title: "Kerala Backwaters Classic",
    location: "Alleppey · Kumarakom",
    coverImage:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&q=80",
    duration: "5D / 4N",
    price: 15999,
    originalPrice: 19999,
  },
  {
    id: "2",
    slug: "munnar-tea-trail",
    title: "Munnar Tea Trail & Waterfalls",
    location: "Munnar · Thekkady",
    coverImage:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80",
    duration: "4D / 3N",
    price: 12499,
    originalPrice: 15000,
  },
  {
    id: "3",
    slug: "kerala-complete-circuit",
    title: "Kerala Complete Circuit",
    location: "Cochin · Munnar · Alleppey",
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80",
    duration: "8D / 7N",
    price: 24999,
    originalPrice: 31000,
  },
  {
    id: "4",
    slug: "wayanad-hidden-forest",
    title: "Wayanad Hidden Forest Escape",
    location: "Wayanad · Kozhikode",
    coverImage:
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=80",
    duration: "3D / 2N",
    price: 8999,
    originalPrice: 11000,
  },
  {
    id: "5",
    slug: "kerala-luxury-houseboat",
    title: "Luxury Houseboat & Beach Retreat",
    location: "Alleppey · Kovalam",
    coverImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    duration: "6D / 5N",
    price: 32999,
    originalPrice: 40000,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatPrice(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

function discountPercent(original: number, price: number) {
  return Math.round(((original - price) / original) * 100);
}

// ─── Package Card ─────────────────────────────────────────────────────────────
function PackageCard({
  pkg,
  locationSlug,
}: {
  pkg: TourPackage;
  locationSlug: string;
}) {
  const discount = pkg.originalPrice
    ? discountPercent(pkg.originalPrice, pkg.price)
    : null;

  return (
    <div className="group flex-shrink-0 w-[260px] sm:w-[280px] rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden bg-white">
      {/* Cover image */}
      <div className="relative w-full h-[160px] overflow-hidden">
        <Image
          src={pkg.coverImage}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Duration pill — top left */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-0.5 rounded-full border border-white/60">
            <svg
              className="w-2.5 h-2.5 text-orange-500"
              viewBox="0 0 16 16"
              fill="none"
            >
              <rect
                x="2"
                y="3"
                width="12"
                height="11"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M11 2v2M5 2v2M2 7h12"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
            {pkg.duration}
          </span>
        </div>

        {/* Discount badge — top right */}
        {discount && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded-full">
              {discount}% off
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2">
        {/* Location */}
        <div className="flex items-center gap-1 text-[11px] text-gray-400">
          <svg
            className="w-3 h-3 text-orange-400 shrink-0"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.485-2.015-4.5-4.5-4.5z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <circle
              cx="8"
              cy="6"
              r="1.5"
              stroke="currentColor"
              strokeWidth="1.3"
            />
          </svg>
          <span className="truncate">{pkg.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-[14px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
          {pkg.title}
        </h3>

        {/* Price row */}
        <div className="flex items-baseline gap-1.5 mt-0.5">
          <span className="text-[16px] font-bold text-orange-500 leading-none">
            {formatPrice(pkg.price)}
          </span>
          {pkg.originalPrice && (
            <span className="text-[11px] text-gray-300 line-through leading-none">
              {formatPrice(pkg.originalPrice)}
            </span>
          )}
          <span className="text-[10px] text-gray-400 leading-none">/adult</span>
        </div>

        {/* CTA */}
        <Link
          href={`/tours/${locationSlug}/${pkg.slug}`}
          className="mt-1 w-full inline-flex items-center justify-center gap-1.5 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-[12px] font-semibold py-2 rounded-xl transition-all duration-200 group/btn"
        >
          View Package
          <svg
            className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-150"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function RelatedPackages({
  locationName,
  locationSlug,
  packages,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayPackages = packages ?? MOCK_PACKAGES;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 8);
  };

  if (!displayPackages.length) return null;

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-5">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-1.5">
              <span className="w-4 h-px bg-orange-400" />
              Explore {locationName}
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">
              Top <span className="text-orange-500">{locationName}</span>{" "}
              Packages
            </h2>
          </div>

          {/* Arrow controls — desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-orange-400 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div className="relative">
          {/* Left fade */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, white, transparent)",
              }}
            />
          )}
          {/* Right fade */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, white, transparent)",
              }}
            />
          )}

          <div
            ref={scrollRef}
            onScroll={onScroll}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
          >
            {displayPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} locationSlug={locationSlug} />
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-5 flex justify-center md:justify-end">
          <Link
            href={`/tours/${locationSlug}`}
            className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150"
          >
            View all {locationName} packages
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
