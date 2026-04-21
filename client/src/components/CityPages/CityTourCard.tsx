"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mountain, Trees, Waves, Cloud, Leaf, Flower2,
  MapPin, Clock, ChevronRight, ArrowRight, LayoutGrid, Star
} from "lucide-react";

const categories = [
  { label: "All",          icon: LayoutGrid },
  { label: "Manali",       icon: Mountain   },
  { label: "Shimla",       icon: Trees      },
  { label: "Spiti Valley", icon: Waves      },
  { label: "Dharamshala",  icon: Cloud      },
  { label: "Kasol",        icon: Leaf       },
  { label: "Dalhousie",    icon: Flower2    },
];

const packages = [
  {
    id: 1,
    category: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900&q=80",
    title: "7-Days Manali Snow Adventure | Rohtang Pass & Solang Valley",
    duration: "7 days & 6 nights",
    location: "Manali · Solang · Rohtang",
    originalPrice: "₹42,500",
    price: "₹28,999",
    rating: "4.8",
    reviewCount: 248,
  },
  {
    id: 2,
    category: "Spiti Valley",
    image: "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=900&q=80",
    title: "8-Days Spiti Valley Circuit | Key Monastery & Chandratal Lake",
    duration: "8 days & 7 nights",
    location: "Kaza · Key · Chandratal",
    originalPrice: "₹38,200",
    price: "₹24,499",
    rating: "4.8",
    reviewCount: 196,
  },
  {
    id: 3,
    category: "Shimla",
    image: "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?w=900&q=80",
    title: "5-Days Shimla & Kufri Heritage Tour | Colonial Charm & Snowfields",
    duration: "5 days & 4 nights",
    location: "Shimla · Kufri · Chail",
    originalPrice: "₹22,750",
    price: "₹15,499",
    rating: "4.8",
    reviewCount: 312,
  },
  {
    id: 4,
    category: "Kasol",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=900&q=80",
    title: "6-Days Parvati Valley Trek | Kheerganga & Kasol Riverside Camps",
    duration: "6 days & 5 nights",
    location: "Kasol · Kheerganga · Tosh",
    originalPrice: "₹18,500",
    price: "₹12,999",
    rating: "4.8",
    reviewCount: 174,
  },
  {
    id: 5,
    category: "Dharamshala",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=80",
    title: "5-Days Dharamshala & McLeod Ganj | Triund Trek & Tibetan Culture",
    duration: "5 days & 4 nights",
    location: "Dharamshala · McLeod · Triund",
    originalPrice: "₹19,200",
    price: "₹13,499",
    rating: "4.0",
    reviewCount: 143,
  },
  {
    id: 6,
    category: "Dalhousie",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
    title: "4-Days Dalhousie & Khajjiar | Scotland of India Weekend Escape",
    duration: "4 days & 3 nights",
    location: "Dalhousie · Khajjiar · Chamba",
    originalPrice: "₹15,999",
    price: "₹10,499",
    rating: "4.8",
    reviewCount: 121,
  },
];

export default function PackageCards() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? packages : packages.filter((p) => p.category === active);
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-10 lg:px-16">
      {/* ── HEADER ── */}
      <div className="text-center mb-14">
        <p className="text-orange-500 text-xs font-bold uppercase tracking-[3px] mb-3">
          Explore Himachal Pradesh
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Choose Your Experience
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Handpicked adventures through the majestic Himalayas
        </p>
      </div>
      {/* ── CATEGORY TABS ── */}
      <div className="scrollbar-hide -mx-4 mb-10 flex snap-x snap-mandatory items-end justify-start gap-1 overflow-x-auto border-b border-gray-200 px-4 pb-0 sm:mx-0 sm:mb-14 sm:justify-center sm:px-0">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex min-w-[92px] shrink-0 snap-start flex-col items-center gap-2 px-4 py-3.5 text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap border-b-[3px] -mb-px sm:min-w-0 sm:gap-2.5 sm:px-8 sm:py-4 sm:text-sm
              ${active === label
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
          >
            <Icon size={22} strokeWidth={1.6} className="sm:size-6" />
            {label}
          </button>
        ))}
      </div>
      {/* ── CARDS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="group relative rounded-3xl overflow-hidden cursor-pointer h-[540px] shadow-lg shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500"
          >
            {/* Full background image */}
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            {/* Top badges row */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              {/* Location chip */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20">
                <MapPin size={13} strokeWidth={2.5} className="text-orange-400" />
                {pkg.location}
              </div>
              
              {/* Rating badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-2 rounded-full border border-white/20">
                <Star size={13} strokeWidth={2.5} className="fill-orange-400 text-orange-400" />
                <span>{pkg.rating}</span>
                <span className="text-white/70">({pkg.reviewCount})</span>
              </div>
            </div>
            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="text-white font-bold text-xl leading-snug mb-3 line-clamp-2 group-hover:text-orange-200 transition-colors duration-300">
                {pkg.title}
              </h3>
              <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Clock size={14} strokeWidth={2} />
                {pkg.duration}
              </div>
              {/* Divider */}
              <div className="h-px bg-white/20 mb-5" />
              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm line-through leading-none mb-1.5">
                    {pkg.originalPrice}
                  </p>
                  <p className="text-white font-extrabold text-2xl leading-none tracking-tight">
                    {pkg.price}
                    <span className="text-white/50 text-sm font-medium ml-1">/person</span>
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 bg-white   text-gray-900 text-sm font-bold px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer">
                  Get Quotes
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ── VIEW MORE ── */}
      <div className="flex justify-center mt-16">
        <button className="inline-flex items-center cursor-pointer gap-2 border border-gray-400 text-gray-800 hover:bg-gray-100 text-sm font-medium px-6 py-3 rounded-md transition-colors duration-200">
          View All Packages
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
