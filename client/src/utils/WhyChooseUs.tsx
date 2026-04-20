"use client";

import { MapPin, Lightbulb, Trophy, Leaf } from "lucide-react";

const features = [
    {
        icon: MapPin,
        title: "Local Experts",
        desc: "Based across India with deep local insights & authentic experiences.",
    },
    {
        icon: Lightbulb,
        title: "Expertise",
        desc: "Curated 10,000+ premium trips crafted with precision.",
    },
    {
        icon: Trophy,
        title: "Trusted Legacy",
        desc: "Years of excellence delivering unforgettable journeys.",
    },
    {
        icon: Leaf,
        title: "Responsible Travel",
        desc: "Eco-friendly experiences that respect nature & culture.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-6 bg-white">

            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-wide mb-16">
                    <span className="text-gray-300">WHY CHOOSE</span>{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                        EXPERIENCE MY INDIA
                    </span>
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

                    {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div key={i} className="flex flex-col items-center text-center group">

                                {/* Icon Circle */}
                                <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-6 
                                group-hover:bg-orange-100 transition duration-300">

                                    <Icon className="w-8 h-8 text-orange-500 group-hover:scale-110 transition" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>

                                {/* Desc */}
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}