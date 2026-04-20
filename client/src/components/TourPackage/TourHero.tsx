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
            <section className="w-full bg-white pt-28 pb-5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT - HERO CARD */}
                    <div className="relative group rounded-3xl overflow-hidden h-[520px] cursor-pointer" onClick={() => { setOpen(true) }}>

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
                        <div className="absolute bottom-0 p-8 text-white">
                            <p className="text-xs tracking-[0.2em] text-orange-300 mb-3 uppercase">
                                Experience My India Exclusive
                            </p>

                            <h2 className="text-4xl font-bold leading-tight mb-5">
                                The Best of Rajasthan
                            </h2>

                            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl inline-block border border-white/10">
                                <p className="text-sm font-medium">
                                    Save ₹15000 • Free Upgrade • Premium SUV
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="grid grid-cols-2 gap-6">

                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden h-[250px] cursor-pointer"
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                />


                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-orange-400/10 transition duration-500" />

                                {/* Border Glow */}
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-orange-300/40 transition duration-500" />

                                {/* Content */}
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="text-lg font-semibold transform translate-y-2 group-hover:translate-y-0 transition duration-300">
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