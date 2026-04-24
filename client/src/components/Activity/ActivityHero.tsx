"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Clock,
  MapPin,
  Camera,
  ArrowRight,
  Share2,
  Heart,
  Shield,
} from "lucide-react";

// ─── Activity data — 5 images of one activity ────────────────────────────────

const activity = {
  title: "Paragliding at Bir Billing",
  subtitle: "World's Highest Paragliding Site",
  location: "Bir Billing, Himachal Pradesh",
  tag: "Top Rated",
  rating: 4.9,
  reviews: 2_184,
  duration: "30 – 45 min",
  groupSize: "1 – 2",
  altitude: "2,430 m",
  description:
    "Launch from the lush ridgelines of Billing and glide over pine forests, Tibetan monasteries and the Uhl river valley — a perspective of Himachal Pradesh available to almost no one on the ground.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=1400&q=90&fit=crop",
      caption: "Over the Billing launch site",
    },
    {
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1400&q=90&fit=crop",
      caption: "Soaring above Bir valley",
    },
    {
      src: "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?w=1400&q=90&fit=crop",
      caption: "Tandem flight view",
    },
    {
      src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1400&q=90&fit=crop",
      caption: "Himalayan ridgeline panorama",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=90&fit=crop",
      caption: "Landing at Bir meadow",
    },
  ],
};

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col" onClick={onClose}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 sm:px-8 py-4 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-white/40 text-[11px] uppercase tracking-widest mb-0.5">
            {index + 1} / {activity.images.length}
          </p>
          <p className="text-white text-sm font-semibold">
            {activity.images[index].caption}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Image */}
      <div
        className="flex-1 flex items-center justify-center relative px-4 sm:px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden">
          <img
            src={activity.images[index].src}
            alt={activity.images[index].caption}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex items-center justify-center gap-2.5 px-4 py-5 shrink-0 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollbarWidth: "none" }}
      >
        {activity.images.map((img, i) => (
          <button
            key={i}
            onClick={() => {/* handled by parent */}}
            className={`relative rounded-xl overflow-hidden shrink-0 transition-all duration-200 ${
              i === index
                ? "ring-2 ring-orange-500 w-20 h-14 opacity-100"
                : "w-16 h-11 opacity-40 hover:opacity-70"
            }`}
          >
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function ActivityHero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const [liked, setLiked] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number, stopAuto = false) => {
      if (idx === active || fading) return;
      if (stopAuto && timerRef.current) clearInterval(timerRef.current);
      setPrev(active);
      setFading(true);
      setTimeout(() => {
        setActive(idx);
        setPrev(null);
        setFading(false);
      }, 400);
    },
    [active, fading]
  );

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % activity.images.length;
        setPrev(a);
        setFading(true);
        setTimeout(() => { setPrev(null); setFading(false); }, 400);
        return next;
      });
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx);
    setLightbox(true);
    document.body.style.overflow = "hidden";
    if (timerRef.current) clearInterval(timerRef.current);
  };
  const closeLightbox = () => {
    setLightbox(false);
    document.body.style.overflow = "";
  };

  const stats = [
    { icon: Star, value: `${activity.rating}`, sub: `(${activity.reviews.toLocaleString()})`, color: "text-amber-400 fill-amber-400" },
    { icon: Clock, value: activity.duration, sub: "Duration" },
    { icon: Users, value: activity.groupSize, sub: "Per flight" },
    { icon: MapPin, value: activity.altitude, sub: "Altitude" },
  ];

  return (
    <>
      <section className="relative w-full min-h-[100svh] bg-black overflow-hidden select-none">

        {/* ── Background images with crossfade ── */}
        {activity.images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
          >
            <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* ── Overlays ── */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* ── Top action row ── */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-10 pt-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[11px] text-white/50 uppercase tracking-widest">
            <span>Activities</span>
            <span className="text-white/30">/</span>
            <span>Himachal Pradesh</span>
            <span className="text-white/30">/</span>
            <span className="text-orange-400">Paragliding</span>
          </div>

          {/* Actions */}
          {/* <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
              <Share2 size={15} />
            </button>
            <button
              onClick={() => setLiked((v) => !v)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                liked ? "bg-rose-500 text-white" : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <Heart size={15} className={liked ? "fill-white" : ""} />
            </button>
          </div> */}
        </div>

        {/* ── Main content ── */}
        <div className="relative z-20 flex flex-col justify-end min-h-[100vh] pb-8 px-5 sm:px-10">
          <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">

            {/* ── LEFT: Info ── */}
            <div className="lg:col-span-7 flex flex-col gap-4 mb-0 sm:mb-20 ">

              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                {activity.tag}
              </span>

              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1] tracking-tight">
                  {activity.title.split(" ").slice(0, -2).join(" ")}{" "}
                  <span className="text-orange-400">
                    {activity.title.split(" ").slice(-2).join(" ")}
                  </span>
                </h1>
                <p className="text-white/50 text-sm font-medium mt-2 tracking-wide">
                  {activity.subtitle}
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-white/60 text-sm">
                <MapPin size={13} className="text-orange-400 shrink-0" />
                {activity.location}
              </div>

              {/* Description */}
              <p className="text-white/70 text-[15px] leading-relaxed max-w-xl">
                {activity.description}
              </p>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {stats.map(({ icon: Icon, value, sub, color }) => (
                  <div
                    key={sub}
                    className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-2.5"
                  >
                    <Icon size={15} className={color ?? "text-orange-400"} />
                    <div>
                      <p className="text-white text-sm font-bold leading-none">{value}</p>
                      <p className="text-white/40 text-[10px] mt-0.5 leading-none">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-1.5 text-white/40 text-xs">
                <Shield size={12} className="text-orange-400" />
                Certified instructors · Full safety equipment · Insured flights
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 active:scale-95 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 text-sm">
                  Book This Activity <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => openLightbox(active)}
                  className="flex items-center gap-2 border border-white/20 hover:border-orange-400/50 hover:bg-white/5 text-white/70 hover:text-white text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                  <Camera size={15} />
                  View All Photos
                </button>
              </div>
            </div>

            {/* ── RIGHT: Image selector ── */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-[11px] uppercase tracking-widest">
                  Photos
                </span>
                <span className="text-white/30 text-[11px]">
                  {active + 1} / {activity.images.length}
                </span>
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {activity.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i, true)}
                    className={`relative rounded-xl overflow-hidden aspect-[3/4] transition-all duration-300 ${
                      i === active
                        ? "ring-2 ring-orange-500 ring-offset-1 ring-offset-transparent scale-[1.05] z-10"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                    {i === active && (
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="flex gap-1 mt-0.5">
                {activity.images.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                      i === active ? "bg-orange-500" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>

              {/* Caption */}
              <p className="text-white/35 text-xs italic text-right">
                {activity.images[active].caption}
              </p>
            </div>
          </div>
        </div>

        {/* ── Prev/Next arrows (desktop) ── */}
        <button
          onClick={() => goTo((active - 1 + activity.images.length) % activity.images.length, true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => goTo((active + 1) % activity.images.length, true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>

        {/* ── Scroll hint ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1 text-white/25">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-7 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <Lightbox
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={() => setLightboxIdx((i) => (i - 1 + activity.images.length) % activity.images.length)}
          onNext={() => setLightboxIdx((i) => (i + 1) % activity.images.length)}
        />
      )}
    </>
  );
}