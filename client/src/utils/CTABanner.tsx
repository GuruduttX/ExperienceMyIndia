"use client";

import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
          style={{ minHeight: "210px" }}
        >
          {/* Subtle dot pattern background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
            {/* LEFT — Content */}
            <div className="flex flex-col justify-center px-7 py-7">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 w-fit text-[11px] font-medium uppercase tracking-widest text-orange-500 border border-orange-200 bg-orange-50 px-3 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Limited Time Offer
              </span>

              {/* Heading */}
              <h2
                className="text-[22px] md:text-[26px] font-bold leading-snug text-gray-900 mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Group Trips at <span className="text-orange-500">50% Off</span>
                <br />
                <span className="font-normal text-gray-400 text-[17px]">
                  India&apos;s finest destinations await
                </span>
              </h2>

              <p className="text-[13px] text-gray-400 leading-relaxed mb-5 max-w-sm">
                Handcrafted itineraries for groups of 10+. Hotels, transport
                &amp; expert guides — fully sorted.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-5 mb-5">
                {[
                  { num: "200+", label: "Destinations" },
                  { num: "50k+", label: "Travellers" },
                  { num: "4.9★", label: "Rated" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-[15px] font-semibold text-orange-500">
                      {s.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-[12px] font-medium px-5 py-1.5 rounded-lg transition-colors duration-150">
                  Get a Free Quote
                </button>
                <button className="text-[12px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150 flex items-center gap-1">
                  View packages
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT — Image Grid */}
            <div className="hidden md:block relative overflow-hidden">
              {/* Left fade — blends images into white bg */}
              <div
                className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, white, transparent)",
                }}
              />

              <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                {/* Tall left image */}
                <div className="relative rounded-xl overflow-hidden row-span-2">
                  <Image
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80"
                    alt="Taj Mahal"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-medium text-gray-700 px-2 py-0.5 rounded-full">
                    📍 Agra
                  </div>
                </div>

                {/* Top right */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=300&q=80"
                    alt="Goa Beach"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-medium text-gray-700 px-2 py-0.5 rounded-full">
                    📍 Goa
                  </div>
                </div>

                {/* Bottom right */}
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=300&q=80"
                    alt="Kashmir"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm text-[10px] font-medium text-gray-700 px-2 py-0.5 rounded-full">
                    📍 Kashmir
                  </div>
                </div>
              </div>

              {/* Offer pill */}
              <div className="absolute top-4 right-4 z-20 bg-orange-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                Upto 50% off
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
