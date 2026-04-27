"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { 
  Mountain, 
  CheckCircle2, 
  MessageCircle, 
  Lock, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  Briefcase
} from "lucide-react";

interface Destination {
  id: number;
  name: string;
  label: string;
  price: number;
  packages: number;
  image: string;
  tag: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Uttarakhand",
    label: "Tour Packages",
    price: 12999,
    packages: 84,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    tag: "Trending",
  },
  {
    id: 2,
    name: "Shimla",
    label: "Tour Packages",
    price: 12750,
    packages: 62,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Dharamshala",
    label: "Tour Packages",
    price: 999,
    packages: 48,
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    tag: "Must Visit",
  },
  {
    id: 4,
    name: "Kullu",
    label: "Tour Packages",
    price: 1500,
    packages: 37,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tag: "Adventure",
  },
  {
    id: 5,
    name: "Spiti Valley",
    label: "Tour Packages",
    price: 15999,
    packages: 29,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    tag: "Off-Beat",
  },
  {
    id: 6,
    name: "Kasol",
    label: "Tour Packages",
    price: 4999,
    packages: 41,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    tag: "Budget",
  },
];

function formatPrice(price: number): string {
  return price.toLocaleString("en-IN");
}

const tagStyles: Record<string, string> = {
  Trending:   "bg-orange-500 text-white",
  Popular:    "bg-amber-500 text-white",
  "Must Visit": "bg-rose-500 text-white",
  Adventure:  "bg-teal-600 text-white",
  "Off-Beat": "bg-indigo-600 text-white",
  Budget:     "bg-green-600 text-white",
};

function DestinationCard({ dest }: { dest: Destination }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-[220px] sm:w-[240px] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ height: "300px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Image
        src={dest.image}
        alt={dest.name}
        fill
        className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        sizes="240px"
      />

      {/* Permanent dark gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top tag */}
      <div className="absolute top-3 left-3">
        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagStyles[dest.tag] ?? "bg-slate-600 text-white"}`}>
          {dest.tag}
        </span>
      </div>

      {/* Packages count top-right */}
      <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 flex items-center gap-1">
        <Briefcase size={10} strokeWidth={2.5} className="text-white" />
        <span className="text-[10px] text-white/90 font-medium">{dest.packages} pkgs</span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-semibold text-lg leading-tight">{dest.name}</p>
        <p className="text-white/60 text-xs mt-0.5">{dest.label}</p>

        {/* Divider */}
        <div className="w-8 h-px bg-orange-400 my-2.5" />

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-wider">Starts at</p>
            <p className="text-orange-400 font-bold text-sm mt-0.5">
              ₹{formatPrice(dest.price)}
            </p>
          </div>

          {/* Arrow CTA */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${hovered ? "bg-orange-500" : "bg-white/10 border border-white/20"}`}>
            <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularDestinations() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 520 : -520, behavior: "smooth" });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-7">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-0.5 bg-orange-400 rounded-full" />
              <span className="text-xs font-medium text-orange-500 uppercase tracking-widest">
                Explore More
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight">
              Popular Related{" "}
              <span className="text-orange-500">Destinations</span>
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Handpicked hill stations & valleys loved by our travellers
            </p>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="relative">
          {/* Left fade edge */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade edge */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-4 overflow-x-auto pb-2 px-4 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}

            {/* "View All" card */}
            <div className="flex-shrink-0 w-[150px] sm:w-[180px] rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-orange-50 hover:border-orange-300 transition-all group"
              style={{ height: "300px" }}
            >
              <div className="w-12 h-12 rounded-full bg-white border border-orange-200 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all shadow-sm">
                <ArrowRight size={20} className="text-orange-400 group-hover:text-white transition-colors" />
              </div>
              <div className="text-center px-4">
                <p className="text-sm font-semibold text-slate-700">View All</p>
                <p className="text-xs text-slate-400 mt-0.5">Destinations</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom trust row ── */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-8">
          {[
            { icon: Mountain, text: "300+ Packages" },
            { icon: CheckCircle2, text: "Verified Operators" },
            { icon: MessageCircle, text: "50,000+ Reviews" },
            { icon: Lock, text: "Secure Booking" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs text-slate-500">
              <item.icon size={14} className="text-orange-500" strokeWidth={2} />
              <span>{item.text}</span>
            </div>
          ))}

          <div className="ml-auto">
            <button className="text-xs font-semibold text-orange-500 hover:text-orange-600 flex items-center gap-1 transition-colors">
              View all destinations
              <ArrowRight size={12} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}