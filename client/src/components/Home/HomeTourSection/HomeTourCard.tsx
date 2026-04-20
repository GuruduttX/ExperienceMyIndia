"use client"
import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

export function HomeTourCard({ tour }: any) {
    const [index, setIndex] = useState(0);

    console.log(tour);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % tour.images.length);
    };

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? tour.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="group bg-white rounded-2xl transition-all duration-300 overflow-hidden border-gray-100">

            {/* IMAGE SLIDER */}
            <div className="relative h-[240px] overflow-hidden">

                <Image
                    src={tour.images[index]}
                    alt="tour"
                    fill
                    className="object-cover transition duration-500"
                />

                {/* LEFT BUTTON */}
                <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
                >
                    ‹
                </button>

                {/* RIGHT BUTTON */}
                <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
                >
                    ›
                </button>

                {/* DOTS */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                    {tour.images.map((_: any, i: number) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>

            </div>

            {/* CONTENT */}
            <div className="p-5">

                <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{tour.duration}</span>
                    <span className="text-green-600">⭐ {tour.rating}</span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition">
                    {tour.title}
                </h3>

                <div className="bg-gray-100 text-xs px-3 py-2 rounded-lg mb-4 inline-block">
                    3D Tokyo • 3D Osaka
                </div>

                <div className="mb-4">
                    <p className="text-xs line-through text-gray-400">
                        INR {tour.oldPrice}
                    </p>

                    <p className="text-lg font-bold">
                        INR {tour.price}
                        <span className="text-sm text-gray-500"> /Adult</span>
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="w-12 h-12 border border-orange-400 rounded-xl hover:bg-gray-100 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-orange-600" />
                    </button>

                    <button className="flex-1 bg-orange-400 text-black py-3 rounded-xl hover:bg-orange-400 transition cursor-pointer">
                        Request Callback
                    </button>
                </div>

            </div>
        </div>
    );
}