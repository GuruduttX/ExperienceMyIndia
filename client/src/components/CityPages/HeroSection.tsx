"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Globe,
  MapPin,
  Users,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Shield,
} from "lucide-react";
import Navbar from "@/utils/NavBar";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    eyebrow: "Summer Sale — Up to 40% OFF",
    title: "North East India",
    subtitle: "Tour Packages",
    description: "Misty valleys, living root bridges & untouched wilderness await you.",
    location: "Meghalaya · Sikkim · Arunachal",
    originalPrice: "₹28,213",
    price: "₹16,928",
    saving: "40% OFF",
  },
  {
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80",
    eyebrow: "Heritage Special — Up to 32% OFF",
    title: "Rajasthan",
    subtitle: "Heritage Packages",
    description: "Royal forts, golden deserts and the colours of a living culture.",
    location: "Jaipur · Udaipur · Jaisalmer",
    originalPrice: "₹32,500",
    price: "₹21,999",
    saving: "32% OFF",
  },
  {
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1600&q=80",
    eyebrow: "Monsoon Deals — Up to 35% OFF",
    title: "Kerala Backwaters",
    subtitle: "Nature Escapes",
    description: "Houseboat sunsets, spice gardens and tranquil lagoon mornings.",
    location: "Alleppey · Munnar · Varkala",
    originalPrice: "₹24,000",
    price: "₹15,499",
    saving: "35% OFF",
  },
  {
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80",
    eyebrow: "Himalayan Specials — Up to 38% OFF",
    title: "Himachal Pradesh",
    subtitle: "Adventure Packages",
    description: "Snow-capped peaks, cedar forests and starlit mountain nights.",
    location: "Manali · Spiti · Kasol",
    originalPrice: "₹22,000",
    price: "₹13,699",
    saving: "38% OFF",
  },
];

const destinations = [
  { name: "Manali", price: "₹12,499" },
  { name: "Goa", price: "₹9,999" },
  { name: "Coorg", price: "₹8,499" },
];

const stats = [
  { icon: Globe,  num: "500+",  label: "Destinations"     },
  { icon: Users,  num: "1.2M+", label: "Happy Travellers" },
  { icon: Award,  num: "4.8",   label: "Avg. Rating"      },
  { icon: Shield, num: "100%",  label: "Secure Booking"   },
];

export default function HeroSection() {
  const [current, setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => { setCurrent(index); setAnimating(false); }, 350);
    },
    [animating]
  );

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = useCallback(
    () => goTo(current === slides.length - 1 ? 0 : current + 1),
    [current, goTo]
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">

      {/* ── BACKGROUND IMAGE ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current && !animating ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/22 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/18 z-[1]" />

      {/* ── NAV ── */}
      <Navbar/>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 md:px-14 pb-28">

        {/* Floating Rating — LEFT */}
        <div className="hidden lg:block absolute left-14 top-1/2 -translate-y-1/2 bg-black/45 border border-white/10 rounded-2xl p-4 backdrop-blur-md w-[150px]">
          <p className="text-white/40 text-[10px] uppercase tracking-widest mb-3">Traveller Rating</p>
          <div className="flex items-center gap-1 mb-1">
            {[1,2,3,4].map((i) => <Star key={i} size={12} fill="#F97316" className="text-orange-400" />)}
            <Star size={12} fill="none" strokeWidth={2} className="text-orange-300" />
            <span className="text-white font-extrabold text-[15px] ml-1">4.8</span>
          </div>
          <p className="text-white/35 text-[10.5px] mb-3">14,200+ reviews</p>
          <div className="h-px bg-white/10 mb-3" />
          <div className="flex items-center gap-1.5">
            <Award size={13} className="text-orange-400 flex-shrink-0" strokeWidth={2} />
            <span className="text-white/55 text-[10.5px] leading-tight">#1 Rated Travel Platform</span>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className={`text-center w-full max-w-3xl transition-all duration-350 ${animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>

          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-400/35 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-[11px] font-semibold uppercase tracking-widest">{slide.eyebrow}</span>
          </div>

          <h1 className="text-white font-extrabold leading-[1.06] tracking-tight mb-4" style={{ fontSize: "clamp(38px, 6vw, 66px)" }}>
            <span className="text-orange-400 relative inline-block">
              {slide.title}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-orange-300 rounded-full" />
            </span>
            <br />
            <span>{slide.subtitle}</span>
          </h1>

          <p className="text-white/55 text-base md:text-[17px] font-normal leading-relaxed mb-4 max-w-xl mx-auto">
            {slide.description}
          </p>

          <div className="inline-flex items-center gap-1.5 text-white/45 text-[12.5px] mb-7">
            <MapPin size={13} className="text-orange-400" strokeWidth={2} />
            {slide.location}
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 bg-black/40 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-md">
              <span className="text-white/40 text-[12px]">Starting at</span>
              <span className="text-white/35 text-sm line-through">{slide.originalPrice}</span>
              <span className="text-white font-extrabold text-xl tracking-tight">{slide.price}</span>
              <span className="text-white/40 text-[12px]">/Adult</span>
              <div className="w-px h-6 bg-white/12" />
              <span className="bg-orange-500 text-white text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                {slide.saving}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_8px_28px_rgba(249,115,22,0.55)] hover:-translate-y-0.5 cursor-pointer">
              Connect With An Expert
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/18 text-white font-semibold text-[14px] px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer">
              View All Packages
            </button>
          </div>
        </div>

        {/* Destination Chips — RIGHT */}
        <div className="hidden lg:flex absolute right-14 top-1/2 -translate-y-1/2 flex-col gap-2.5">
          <p className="text-white/32 text-[10px] uppercase tracking-widest mb-1">Trending Now</p>
          {destinations.map(({ name, price }) => (
            <button key={name} className="flex items-center gap-2.5 bg-black/40 border border-white/10 hover:border-orange-400/40 hover:bg-orange-500/10 rounded-full pl-2 pr-4 py-2 backdrop-blur-md transition-all duration-200 hover:-translate-x-1 text-left cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-orange-500/15 border border-orange-400/20 flex items-center justify-center">
                <MapPin size={13} className="text-orange-400" strokeWidth={2} />
              </div>
              <div>
                <p className="text-white text-[12px] font-semibold leading-none mb-0.5">{name}</p>
                <p className="text-white/45 text-[11px]">{price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── SLIDE CONTROLS ── */}
      <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={prev} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/22 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer">
          <ChevronLeft size={16} className="text-white" strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "w-6 h-2 bg-orange-400" : "w-2 h-2 bg-white/30 hover:bg-white/55"}`} />
          ))}
        </div>

        <button onClick={next} className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/22 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer">
          <ChevronRight size={16} className="text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* ── STATS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-stretch bg-black/65 border-t border-white/8 backdrop-blur-xl">
        {stats.map(({ icon: Icon, num, label }, i) => (
          <div key={label} className={`flex-1 flex items-center gap-3 px-5 md:px-7 py-4 hover:bg-white/4 transition-colors cursor-default ${i < stats.length - 1 ? "border-r border-white/7" : ""}`}>
            <div className="w-9 h-9 rounded-lg bg-orange-500/12 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Icon size={16} className="text-orange-400" strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-white font-extrabold text-[17px] leading-none tracking-tight">{num}</p>
              <p className="text-white/40 text-[11px] mt-0.5">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}