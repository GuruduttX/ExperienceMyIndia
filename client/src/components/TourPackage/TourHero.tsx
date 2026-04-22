"use client";

import Image from "next/image";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

const cards = [

    {
        title: "Destinations",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Luxury Stays",
        image:
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Experiences",
        image:
            "https://images.unsplash.com/photo-1587135941948-670b381f08ce?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Hidden Gems",
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1200&auto=format&fit=crop",
    },

];

export default function TourHero() {

    const [open, setOpen] = useState(false);
    
    return (
        <>
            <section className="w-full bg-white px-4 pt-24 pb-6 sm:px-6 sm:pt-28 lg:px-8">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-[1.08fr_0.92fr]">

                    {/* LEFT - HERO CARD */}
                    <div className="relative group h-[360px] cursor-pointer overflow-hidden rounded-3xl sm:h-[440px] lg:h-[520px]" onClick={() => { setOpen(true) }}>

                        <Image
                            src="https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1600&auto=format&fit=crop"
                            alt="Rajasthan Desert Luxury Camp"
                            fill
                            priority
                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />

                        {/* Depth Shadow */}
                        <div className="absolute inset-0 shadow-[inset_0_-120px_150px_rgba(0,0,0,0.7)]" />

                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-orange-300/40 transition duration-500" />

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 lg:p-8">
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300 sm:mb-3 sm:text-xs sm:tracking-[0.2em]">
                                Experience My India Exclusive
                            </p>

                            <h2 className="mb-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:mb-5">
                                The Best of Rajasthan
                            </h2>

                            <div className="inline-block rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 backdrop-blur-md sm:px-5 sm:py-3">
                                <p className="text-xs font-medium sm:text-sm">
                                    Save ₹15000 • Free Upgrade • Premium SUV
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">

                        {cards.map((card, index) => (
                            <div
                                key={index}
                                onClick={() => { setOpen(true) }}
                                className="relative group h-[112px] min-w-[148px] snap-start cursor-pointer overflow-hidden rounded-2xl shadow-md shadow-black/10 sm:h-[132px] sm:min-w-[178px] md:h-[217px] md:min-w-0 lg:h-[250px]"
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />


                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-orange-400/10 transition duration-500" />

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-orange-300/40 transition duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-3 left-3 right-3 text-white sm:bottom-4 sm:left-4 sm:right-4">
                                    <h3 className="text-sm font-semibold leading-tight transition duration-300 group-hover:translate-y-0 md:translate-y-2 md:text-lg">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <ImageGallery
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}
