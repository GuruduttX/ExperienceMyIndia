"use client";

import { useState, useEffect } from "react";
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

const heroData = {
  images: [
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80",
    "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1600&q=80",
  ],
  eyebrow: "Himalayan Specials - Up to 38% OFF",
  title: "Himachal Pradesh",
  subtitle: "Adventure Packages",
  description: "Snow-capped peaks, cedar forests and starlit mountain nights.",
  location: "Manali - Spiti - Kasol",
  originalPrice: "Rs 22,000",
  price: "Rs 13,699",
  saving: "38% OFF",
};

const destinations = [
  { name: "Manali", price: "Rs 12,499" },
  { name: "Spiti", price: "Rs 18,999" },
  { name: "Kasol", price: "Rs 9,999" },
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
  const images = heroData.images;

  const goTo = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(index); setAnimating(false); }, 350);
  };

  const prev = () => goTo(current === 0 ? images.length - 1 : current - 1);
  const next = () => goTo(current === images.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const t = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((value) => (value === heroData.images.length - 1 ? 0 : value + 1));
        setAnimating(false);
      }, 350);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">

      {/* ── BACKGROUND IMAGE ── */}
      {images.map((image, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current && !animating ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={image}
            alt={`${heroData.title} image ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/22 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-transparent to-black/18 z-[1]" />

      

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pt-28 pb-[230px] sm:px-6 sm:pt-32 sm:pb-36 md:px-10 lg:px-56 lg:pt-28 lg:pb-28 xl:px-64 2xl:px-80">

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
            <span className="text-orange-300 text-[11px] font-semibold uppercase tracking-widest">{heroData.eyebrow}</span>
          </div>

          <h1 className="text-white font-extrabold leading-[1.06] tracking-tight mb-4 text-3xl md:text-4xl lg:text-6xl" >
            <span className="text-orange-400 relative inline-block">
              {heroData.title}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-400 to-orange-300 rounded-full" />
            </span>
            <br />
            <span>{heroData.subtitle}</span>
          </h1>

          <p className="text-white/55 text-base md:text-[17px] font-normal leading-relaxed mb-4 max-w-xl mx-auto">
            {heroData.description}
          </p>

          <div className="inline-flex items-center gap-1.5 text-white/45 text-[12.5px] mb-7">
            <MapPin size={13} className="text-orange-400" strokeWidth={2} />
            {heroData.location}
          </div>

          <div className="flex justify-center mb-8 px-1">
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-3 py-3 backdrop-blur-md sm:gap-3 sm:px-5">
              <span className="text-white/40 text-[12px]">Starting at</span>
              <span className="text-white/35 text-sm line-through">{heroData.originalPrice}</span>
              <span className="text-white font-extrabold text-xl tracking-tight">{heroData.price}</span>
              <span className="text-white/40 text-[12px]">/Adult</span>
              <div className="hidden h-6 w-px bg-white/12 sm:block" />
              <span className="bg-orange-500 text-white text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md">
                {heroData.saving}
              </span>
            </div>
          </div>

          <div className="flex w-full max-w-sm flex-col items-stretch justify-center gap-3 mx-auto sm:max-w-none sm:flex-row sm:items-center">
            <button className="inline-flex w-full items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] px-5 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_8px_28px_rgba(249,115,22,0.55)] hover:-translate-y-0.5 cursor-pointer sm:w-auto sm:px-7">
              Connect With An Expert
              <ArrowRight size={16} strokeWidth={2.5} className="shrink-0" />
            </button>
            <button className="inline-flex w-full items-center justify-center gap-2 bg-white/10 hover:bg-white/18 text-white font-semibold text-[14px] px-5 py-3.5 rounded-xl border border-white/20 transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 cursor-pointer sm:w-auto sm:px-6">
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
      <div className="absolute bottom-[138px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:bottom-[70px] sm:gap-4">
        <button onClick={prev} className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/22 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer">
          <ChevronLeft size={16} className="text-white" strokeWidth={2.5} />
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === current ? "w-6 h-2 bg-orange-400" : "w-2 h-2 bg-white/30 hover:bg-white/55"}`} />
          ))}
        </div>

        <button onClick={next} className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 hover:bg-white/22 flex items-center justify-center transition-all backdrop-blur-sm cursor-pointer">
          <ChevronRight size={16} className="text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* ── STATS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 overflow-hidden border-t border-white/10 bg-black/70 shadow-[0_-18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:grid-cols-4">
        {stats.map(({ icon: Icon, num, label }, i) => (
          <div
            key={label}
            className={`group relative flex items-center gap-3 px-4 py-3.5 transition-colors cursor-default hover:bg-white/[0.06] sm:justify-center sm:px-5 md:px-7 md:py-4 ${
              i % 2 === 0 ? "border-r border-white/10 sm:border-r-0" : ""
            } ${
              i < 2 ? "border-b border-white/10 sm:border-b-0" : ""
            } ${
              i < stats.length - 1 ? "sm:border-r sm:border-white/10" : ""
            }`}
          >
            <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/0 to-transparent transition-colors group-hover:via-orange-300/45" />
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-orange-400/25 bg-orange-500/15 shadow-[0_0_24px_rgba(249,115,22,0.14)]">
              <Icon size={17} className="text-orange-300" strokeWidth={1.9} />
            </div>
            <div className="min-w-0">
              <p className="text-white font-extrabold text-[17px] leading-none tracking-tight md:text-[18px]">{num}</p>
              <p className="mt-1 truncate text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

