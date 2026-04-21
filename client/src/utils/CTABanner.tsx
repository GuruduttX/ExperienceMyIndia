"use client";

import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="relative rounded-xl overflow-hidden flex items-center justify-between 
          bg-gradient-to-r from-orange-500 to-amber-400 p-6 md:p-8">

          {/* LEFT CONTENT */}
          <div className="max-w-lg text-white z-10">
            <h2 className="text-xl md:text-2xl font-semibold leading-snug">
              Planning a Group Trip?
              <span className="block font-bold">
                Get special offers up to 50% off
              </span>
            </h2>

            <p className="mt-2 text-sm md:text-base text-white/85">
              We create unforgettable adventures, customised for your group.
            </p>

            <button className="mt-5 px-5 py-2.5 bg-white text-orange-600 text-sm font-medium rounded-md 
              hover:bg-gray-100 transition-colors">
              Get a Callback
            </button>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="hidden md:flex items-center h-full absolute right-0 top-0 bottom-0">

            {/* Image 1 */}
            <div className="relative w-40 h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                alt="Group Travel"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-40 h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Celebration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Softer overlay blend */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 
            bg-gradient-to-l from-orange-500/30 to-transparent"></div>

        </div>
      </div>
    </section>
  );
}