"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&q=80",
    title: "Manali Snow Peaks",
    subtitle: "Rohtang Pass · 13,058 ft",
    tag: "Adventure",
  },
  {
    src: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80",
    title: "Shimla Hills",
    subtitle: "Mall Road · Heritage Walk",
    tag: "Scenic",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    title: "Kasol Riverside",
    subtitle: "Parvati Valley · Trekker's Haven",
    tag: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80",
    title: "Dharamshala",
    subtitle: "McLeod Ganj · Tibetan Culture",
    tag: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Khajjiar Meadows",
    subtitle: "Mini Switzerland · 6,500 ft",
    tag: "Meadows",
  },
];

const tagColors: Record<string, string> = {
  Adventure: "bg-orange-100 text-orange-600",
  Scenic:    "bg-amber-100 text-amber-700",
  Nature:    "bg-green-100 text-green-700",
  Culture:   "bg-rose-100 text-rose-600",
  Meadows:   "bg-emerald-100 text-emerald-700",
};

/* ─── Lightbox ─────────────────────────────────────────────── */
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
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-3 sm:px-5 sm:py-4 bg-gradient-to-b from-black/70 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{img.title}</p>
          <p className="text-white/60 text-xs mt-0.5">{img.subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-white/50 text-xs tabular-nums">
            {index + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main image */}
      <div
        className="relative w-full max-w-3xl mx-auto h-[50vh] sm:h-[65vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      {/* Prev / Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center text-white border border-white/10"
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-orange-500 transition-all flex items-center justify-center text-white border border-white/10"
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Thumbnails */}
      <div
        className="flex gap-2 mt-5 overflow-x-auto px-4 pb-1"
        onClick={(e) => e.stopPropagation()}
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((thumb, i) => (
          <button
            key={i}
            onClick={() => {/* handled via prop */}}
            className={`relative flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
              i === index
                ? "border-orange-400 scale-105 shadow-lg shadow-orange-500/30"
                : "border-transparent opacity-60 hover:opacity-90"
            }`}
          >
            <Image src={thumb.src} alt={thumb.title} fill className="object-cover" sizes="56px" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function HimachalGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const next = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  }, []);

  const prev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  }, []);

  return (
    <>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-0.5 bg-orange-400 rounded-full" />
                <span className="text-xs font-medium text-orange-500 uppercase tracking-widest">
                  Photo Gallery
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight">
                Himachal Through Our{" "}
                <span className="text-orange-500">Travellers' Lens</span>
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Authentic moments captured across Himachal Pradesh
              </p>
            </div>

            <button
              onClick={() => openLightbox(0)}
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-orange-500 border border-orange-200 hover:bg-orange-50 px-4 py-2 rounded-full transition-colors"
            >
              View All
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ── Photo Grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2 gap-2 sm:gap-2.5 h-[600px] sm:h-[480px]">

            {/* Hero — col-span 2, row-span 2 */}
            <div
              className="relative col-span-2 row-span-2 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={images[0].src}
                alt={images[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 600px"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Tag */}
              <span className="absolute top-2 left-2 sm:top-3 sm:left-3 text-[10px] sm:text-xs font-medium bg-orange-500 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                {images[0].tag}
              </span>

              {/* Info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <p className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {images[0].title}
                </p>
                <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  {images[0].subtitle}
                </p>
              </div>

              {/* Hover expand icon */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </div>
            </div>

            {/* 4 small tiles */}
            {images.slice(1).map((img, i) => (
              <div
                key={i}
                className="relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i + 1)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 25vw, 300px"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/10 sm:bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                {/* Tag pill */}
                <span
                    className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 text-[9px] sm:text-[11px] font-medium px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md 
                    bg-white/80 backdrop-blur-md text-gray-800 shadow-sm border border-white/40"
                    >
                    {img.tag}
                    </span>

                {/* Bottom label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-1.5 sm:p-2 bg-gradient-to-t from-black/70 to-transparent translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[11px] font-semibold truncate leading-tight">
                    {img.title}
                  </p>
                  <p className="text-white/60 text-[10px] truncate">{img.subtitle}</p>
                </div>

                {/* Expand icon */}
                <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>

                {/* Last tile — "+X more" overlay */}
                {i === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-bold">+24</span>
                    <span className="text-white/70 text-[11px] font-medium">more photos</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Bottom strip ── */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              Updated with latest traveller photos
            </p>

            <button
              onClick={() => openLightbox(0)}
              className="sm:hidden text-sm font-medium text-orange-500 flex items-center gap-1"
            >
              View All
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
              {["Manali", "Shimla", "Kasol", "Dharamshala", "Khajjiar"].map((place) => (
                <button
                  key={place}
                  className="hover:text-orange-500 transition-colors"
                >
                  {place}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}