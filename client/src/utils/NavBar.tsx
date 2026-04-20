"use client";

import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";
import ExperienceDropDown from "./ExperienceDropDown";

export default function Navbar() {
    return (
        <header className="flex fixed top-4 left-0 w-full z-50 justify-center px-2">

            <div className="w-full max-w-7xl bg-white shadow-xl rounded-2xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between border border-orange-500">

                {/* LOGO */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/Experience_my_India.webp"
                        alt="Experience My India"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                </div>

                {/* NAV LINKS */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">

                    <div className="relative group">
                        <ExperienceDropDown />
                    </div>

                    {["International Packages", "Activities", "Mice"].map((item, i) => (
                        <a key={i} href="#" className="relative group">
                            <span className="hover:text-black transition">{item}</span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF9933] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-2 md:gap-4">

                    {/* SEARCH */}
                    <button className="flex items-center justify-center md:justify-start gap-2 px-3 md:px-4 h-9 md:h-10 rounded-full border border-gray-200 bg-white hover:shadow-md transition">
                        <Search size={16} />
                        <span className="text-sm text-gray-600 hidden md:block">
                            Search
                        </span>
                    </button>

                    {/* CURRENCY */}
                    <div className="hidden sm:flex items-center gap-1 px-3 h-9 md:h-10 rounded-full border border-gray-200 bg-white hover:shadow-md cursor-pointer text-sm font-medium text-gray-700">
                        <span>🇮🇳</span>
                        <span>INR ₹</span>
                        <ChevronDown size={14} />
                    </div>

                    {/* LOGIN */}
                    <button className="px-3 md:px-5 h-9 md:h-10 rounded-full bg-gradient-to-r from-[#FF9933] to-[#ff7a00] text-white text-sm font-medium shadow-md hover:scale-105 transition">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
}