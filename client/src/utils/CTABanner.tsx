"use client";

import Image from "next/image";

export default function CTABanner() {
    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="relative rounded-2xl overflow-hidden flex items-center justify-between 
                        bg-gradient-to-r from-orange-500 to-amber-400 p-6 md:p-8">

                    {/* LEFT CONTENT */}
                    <div className="max-w-lg text-white z-10">
                        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                            Planning a Group Trip? Get{" "}
                            <span className="font-bold">Special Offers up to 50% Off!</span>
                        </h2>

                        <p className="mt-3 text-sm md:text-base text-white/90">
                            Experience unforgettable journeys across India, perfectly crafted for your group.
                        </p>

                        <button className="mt-5 px-6 py-3 bg-white text-orange-600 font-medium rounded-lg shadow hover:shadow-md transition">
                            Get A Callback
                        </button>
                    </div>

                    {/* RIGHT SIDE IMAGES */}
                    <div className="hidden md:flex items-center h-full absolute right-0 top-0 bottom-0">

                        {/* Image 1 */}
                        <div className="relative w-40 h-full clip-left">
                            <Image
                                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                                alt="Group Travel"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-40 h-full clip-right">
                            <Image
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                alt="Celebration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Overlay for smooth blend */}
                    <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-orange-500/20 to-transparent"></div>

                </div>
            </div>
        </section>
    );
}