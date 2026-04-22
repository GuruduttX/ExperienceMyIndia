"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ItineraryDay } from "../types";

function getDayImages(item: ItineraryDay) {
  return [
    ...item.activities.flatMap((activity) => activity.images),
    ...item.experiences.map((experience) => experience.image),
    ...item.hotels.map((hotel) => hotel.image),
    ...item.recommended.map((recommendation) => recommendation.image),
  ];
}

function getDayCity(item: ItineraryDay) {
  if (item.locationBanner?.city) return item.locationBanner.city;
  if (item.title.includes("Jaipur")) return "Jaipur";
  if (item.title.includes("Udaipur")) return "Udaipur";
  if (item.title.includes("Jodhpur")) return "Jodhpur";
  return "Rajasthan";
}

export default function DayGalleryBanner({ item }: { item: ItineraryDay }) {
  const images = getDayImages(item);
  const [cur, setCur] = useState(0);

  if (images.length === 0) return null;

  const dayNumber = item.day.replace(/\D/g, "") || "1";
  const city = getDayCity(item);

  return (
    <div className="mb-4 overflow-hidden rounded-[10px] border border-[#e4e0d8] bg-white">
      <div className="relative h-[190px] overflow-hidden sm:h-[250px] md:h-[290px]">
        <Image
          src={images[cur]}
          alt={`${item.title} gallery image ${cur + 1}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCur((current) => (current - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/35 sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={() => setCur((current) => (current + 1) % images.length)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/35 sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} strokeWidth={2.4} />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-4 text-white sm:bottom-5 sm:left-5">
          <div className="text-[11px] font-semibold opacity-90 sm:text-[12px]">
            Day in
          </div>
          <div className="flex items-baseline gap-2 font-extrabold leading-none">
            <span className="text-[44px] sm:text-[56px]">{dayNumber}</span>
            <span className="text-2xl sm:text-3xl">{city}</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-bold text-[#666] backdrop-blur-sm sm:flex">
          <span className="h-3 w-3 rounded-full border border-white bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
          {cur + 1}/{images.length}
          <span className="h-3 w-3 rounded-full border border-white bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
        </div>

        <div className="absolute bottom-4 right-4 flex sm:bottom-5 sm:right-5">
          {images.slice(0, 3).map((img, i) => (
            <button
              type="button"
              key={`${item.day}-thumb-${i}`}
              onClick={() => setCur(i)}
              className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-white shadow-lg transition sm:h-14 sm:w-14 ${
                i > 0 ? "-ml-3" : ""
              } ${cur === i ? "z-10 scale-105" : ""}`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
          {images.length > 3 && (
            <button
              type="button"
              onClick={() => setCur(3)}
              className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-[13px] font-extrabold text-[#e07020] shadow-lg sm:h-14 sm:w-14 sm:text-base"
            >
              +{images.length - 3}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
