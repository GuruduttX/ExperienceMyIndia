"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Mountain, Trees, Waves, Cloud, Leaf, Flower2,
  MapPin, Clock, ChevronRight, ArrowRight, LayoutGrid,
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
  },
];

export default function PackageCards() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? packages : packages.filter((p) => p.category === active);

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-16">

      {/* ── HEADER ── */}
      <div className="text-center mb-10">
        <p className="text-orange-500 text-[11px] font-bold uppercase tracking-[2.5px] mb-2">
          Explore Himachal Pradesh
        </p>
        <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Choose Your Experience
        </h2>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="flex items-end justify-center gap-0 mb-10 border-b border-gray-100 overflow-x-auto">
        {categories.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex flex-col items-center gap-2 px-6 py-3 pb-3.5 text-[13px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap border-b-2 -mb-px
              ${active === label
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-400 hover:text-gray-700"
              }`}
          >
            <Icon size={20} strokeWidth={1.7} />
            {label}
          </button>
        ))}
      </div>

      {/* ── CARDS GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="group relative rounded-2xl overflow-hidden cursor-pointer h-[360px]"
          >
            {/* Full background image */}
            <Image
              src={pkg.image}
              alt={pkg.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />

            {/* Location chip — top left */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-[11.5px] font-medium px-3 py-1.5 rounded-full border border-white/15">
              <MapPin size={11} strokeWidth={2.5} className="text-orange-400" />
              {pkg.location}
            </div>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white font-semibold text-[15px] leading-snug mb-2 line-clamp-2">
                {pkg.title}
              </h3>

              <div className="flex items-center gap-1.5 text-white/55 text-[12.5px] mb-4">
                <Clock size={12} strokeWidth={2} />
                {pkg.duration}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/38 text-[12px] line-through leading-none mb-1">
                    {pkg.originalPrice}
                  </p>
                  <p className="text-white font-extrabold text-[20px] leading-none tracking-tight">
                    {pkg.price}
                  </p>
                </div>
                <button className="inline-flex items-center gap-1.5 bg-white hover:bg-orange-500 hover:text-white text-gray-900 text-[13px] font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer">
                  Get Quotes
                  <ChevronRight size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── VIEW MORE ── */}
      <div className="flex justify-center mt-12">
        <button className="inline-flex items-center gap-2 border border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold text-[14px] px-8 py-3 rounded-xl transition-all duration-200 cursor-pointer">
          View More
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}