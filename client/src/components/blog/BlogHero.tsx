"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface BlogHeroProps {
  blogData: {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    coverImage: string;
  };
  marqueeImages?: { src: string; alt: string }[];
}

const DEFAULT_MARQUEE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80",
    alt: "Rajasthan",
  },
  {
    src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=400&q=80",
    alt: "Kerala",
  },
  {
    src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80",
    alt: "Kashmir",
  },
  {
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
    alt: "Goa",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80",
    alt: "Himalayas",
  },
  {
    src: "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Udaipur",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
    alt: "Coorg",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    alt: "Spiti",
  },
];

// ─── Lightbox ─────────────────────────────────────────────────────────────────
interface LightboxProps {
  allImages: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ allImages, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + allImages.length) % allImages.length),
    [allImages.length],
  );

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % allImages.length),
    [allImages.length],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const img = allImages[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-150"
        aria-label="Close"
      >
        <X size={16} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <span className="text-[12px] font-medium text-white/50 tabular-nums">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(allImages.length).padStart(2, "0")}
        </span>
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-4 md:left-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-150 hover:scale-105"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-4 md:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-150 hover:scale-105"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Image */}
      <div
        className="relative mx-16 md:mx-24"
        style={{ width: "min(90vw, 1100px)", height: "min(80vh, 700px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current}
          src={img.src.replace(/w=400/, "w=1200")}
          alt={img.alt}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Caption */}
      {img.alt && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
          <span className="text-[12px] font-medium text-white/45 uppercase tracking-widest">
            {img.alt}
          </span>
        </div>
      )}

      {/* Thumbnail strip */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4">
        {allImages.map((t, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            className={[
              "relative shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200",
              i === current
                ? "border-orange-500 scale-110"
                : "border-transparent opacity-50 hover:opacity-80",
            ].join(" ")}
            style={{ width: "44px", height: "32px" }}
          >
            <Image src={t.src} alt={t.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BlogHero({ blogData, marqueeImages }: BlogHeroProps) {
  const images = marqueeImages ?? DEFAULT_MARQUEE_IMAGES;
  const looped = [...images, ...images];

  // All images available in the lightbox: cover first, then marquee images
  const allLightboxImages = [
    { src: blogData.coverImage, alt: blogData.title },
    ...images,
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <style>{`
        @keyframes marquee-vertical {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-horizontal {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-vertical {
          animation: marquee-vertical 18s linear infinite;
        }
        .marquee-horizontal {
          animation: marquee-horizontal 18s linear infinite;
        }
        .marquee-vertical:hover,
        .marquee-horizontal:hover {
          animation-play-state: paused;
        }
        .img-clickable {
          cursor: zoom-in;
        }
        .img-clickable:hover .img-overlay-hint {
          opacity: 1;
        }
      `}</style>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          allImages={allLightboxImages}
          startIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}

      <div className="flex flex-col bg-white">
        {/* Header */}
        <header className="order-2 md:order-1 max-w-4xl mx-auto text-center px-4 mb-10 mt-8 md:mt-0">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
            {blogData.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-7 tracking-tight">
            {blogData.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                <User size={14} className="text-gray-500" />
              </div>
              <span className="text-gray-800">{blogData.author}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-orange-500" />
              <span>{blogData.date}</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-gray-300" />
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-orange-500" />
              <span>{blogData.readTime}</span>
            </div>
          </div>
        </header>

        {/* Images section */}
        <div className="order-1 md:order-2 w-full max-w-[1400px] mx-auto px-4 md:px-6 mb-10 md:mb-16">
          {/* ── Desktop ── */}
          <div
            className="hidden md:flex gap-3 items-stretch"
            style={{ height: "clamp(340px, 42vw, 520px)" }}
          >
            {/* Cover image */}
            <div
              className="relative flex-1 rounded-2xl overflow-hidden shadow-xl img-clickable group"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={blogData.coverImage}
                alt={blogData.title}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              {/* Zoom hint */}
              <div className="img-overlay-hint absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M13 13l3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5h4M8.5 6.5v4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical marquee strip */}
            <div
              className="w-[180px] xl:w-[200px] rounded-2xl overflow-hidden relative shrink-0"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="marquee-vertical flex flex-col gap-3">
                {looped.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full shrink-0 rounded-xl overflow-hidden img-clickable group"
                    style={{ height: "148px" }}
                    // Map back to the original (non-duplicated) image index + 1 (offset for cover)
                    onClick={() => openLightbox((i % images.length) + 1)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="img-overlay-hint absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="5.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                          <path
                            d="M13 13l3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.5 8.5h4M8.5 6.5v4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile ── */}
          <div className="flex md:hidden flex-col gap-3">
            {/* Cover image */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-lg img-clickable group"
              style={{ aspectRatio: "16/9" }}
              onClick={() => openLightbox(0)}
            >
              <Image
                src={blogData.coverImage}
                alt={blogData.title}
                fill
                priority
                className="object-cover"
              />
              <div className="img-overlay-hint absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none">
                <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="8.5"
                      cy="8.5"
                      r="5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M13 13l3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 8.5h4M8.5 6.5v4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Horizontal marquee */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="marquee-horizontal flex gap-2.5 py-0.5">
                {looped.map((img, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 rounded-xl overflow-hidden img-clickable"
                    style={{ width: "110px", height: "72px" }}
                    onClick={() => openLightbox((i % images.length) + 1)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
