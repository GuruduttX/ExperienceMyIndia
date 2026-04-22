"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ images }: { images: string[]; id?: string }) {
  const [cur, setCur] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative h-[220px] overflow-hidden bg-gray-200">
      <Image src={images[cur]} alt="" fill className="object-cover" />
      <button
        type="button"
        onClick={() => setCur((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-black/45 flex items-center justify-center z-10"
      >
        <ChevronLeft size={16} color="#fff" strokeWidth={2.5} />
      </button>
      <button
        type="button"
        onClick={() => setCur((c) => (c + 1) % images.length)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-black/45 flex items-center justify-center z-10"
      >
        <ChevronRight size={16} color="#fff" strokeWidth={2.5} />
      </button>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[11px] px-2.5 py-1 rounded-full">
        {cur + 1}/{images.length}
      </div>
      <div className="absolute bottom-2.5 right-3 flex">
        {images.slice(0, 2).map((img, i) => (
          <div key={`${img}-${i}`} className={`w-[30px] h-[30px] rounded-full border-2 border-white overflow-hidden ${i > 0 ? "-ml-2" : ""}`}>
            <Image src={img} alt="" width={30} height={30} className="object-cover w-full h-full" />
          </div>
        ))}
        {images.length > 2 && (
          <div className="w-[30px] h-[30px] rounded-full border-2 border-white bg-[#e07020] text-white text-[10px] font-bold flex items-center justify-center -ml-2">
            +{images.length - 2}
          </div>
        )}
      </div>
    </div>
  );
}
