"use client";

import { useEffect, useState } from "react";

export default function OfferBanner() {
    const [timeLeft, setTimeLeft] = useState({
        days: 1,
        hours: 3,
        minutes: 8,
        seconds: 35,
    });

    // Countdown Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Timer Box Component
    const Box = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center">
            <div
                className="w-14 h-14 bg-[#1a1a1a] border border-white/10 rounded-lg 
        flex items-center justify-center text-lg font-bold text-white shadow-md"
            >
                {value.toString().padStart(2, "0")}
            </div>
            <p className="text-xs text-gray-400 mt-1">{label}</p>
        </div>
    );

    return (
        <section className="px-6 py-10 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* MAIN CONTAINER */}
                <div
                    className="relative rounded-2xl p-8 md:p-10 flex flex-col md:flex-row 
          items-center justify-between gap-6 bg-[#0b0b0b] overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                >

                    {/* ORANGE GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-400/10 pointer-events-none"></div>

                    {/* LEFT CONTENT */}
                    <div className="relative z-10 max-w-xl text-white">

                        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
                            Up to <span className="font-bold">₹1,11,540 OFF</span> on selected trips
                            <span className="ml-3 px-3 py-1 text-xs bg-yellow-400 text-black rounded-full font-semibold">
                                SUMMER HOLIDAY SALE!
                            </span>
                        </h2>

                        <p className="mt-3 text-gray-400 text-sm md:text-base">
                            Connect with our destination experts to get exciting discounts across India.
                        </p>

                        <button
                            className="mt-5 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 
              text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition"
                        >
                            Know more about the Deal
                        </button>
                    </div>

                    {/* RIGHT SIDE TIMER */}
                    <div className="relative z-10 flex flex-col items-center">

                        <p className="text-white mb-3 text-sm">
                            Hurry – Offer ends in!
                        </p>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10 mb-4"></div>

                        <div className="flex gap-4">
                            <Box value={timeLeft.days} label="Days" />
                            <Box value={timeLeft.hours} label="Hours" />
                            <Box value={timeLeft.minutes} label="Minutes" />
                            <Box value={timeLeft.seconds} label="Seconds" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}