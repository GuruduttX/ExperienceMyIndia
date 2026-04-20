"use client";

import { Home, Compass, Activity, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNavbar({ onMenuClick, onSearchClick, onExperienceClick }: { onMenuClick?: () => void, onSearchClick?: () => void, onExperienceClick?: () => void }) {

    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[9999]">

            <div className="relative bg-white backdrop-blur-xl shadow-2xl px-3 py-2 flex justify-between items-center rounded-t-2xl">

                {/* HOME */}
                <Link href="/" className="flex flex-col items-center flex-1 relative">
                    {pathname === "/" && (
                        <div className="absolute -top-1 w-10 h-10 bg-orange-100 rounded-full blur-md opacity-80"></div>
                    )}
                    <Home size={30} className={pathname === "/" ? "text-orange-500 scale-110" : "text-gray-500"} />
                    <span className={`text-[10px] mt-1 ${pathname === "/" ? "text-orange-500 font-medium" : "text-gray-500"}`}>
                        Home
                    </span>
                </Link>
                
                <button
                    onClick={onExperienceClick}
                    className="flex flex-col items-center flex-1 relative"
                >

                    <Compass
                        size={30}
                        className={`transition-all duration-300 ${pathname === "/experiences"
                                ? "text-orange-500 scale-110"
                                : "text-gray-500"
                            }`}
                    />

                    <span
                        className={`text-[10px] mt-1 ${pathname === "/experiences"
                                ? "text-orange-500 font-medium"
                                : "text-gray-500"
                            }`}
                    >
                        Experiences
                    </span>
                </button>

                {/* CENTER SEARCH */}
                <button
                    onClick={onSearchClick}
                    className="absolute left-1/2 -translate-x-1/2 -top-10"
                >
                    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-full shadow-xl active:scale-95 transition">
                        <Search size={32} />
                    </div>
                </button>

                {/* ACTIVITIES */}
                <Link href="/activities" className="flex flex-col items-center flex-1 relative">
                    {pathname === "/activities" && (
                        <div className="absolute -top-1 w-10 h-10 bg-orange-100 rounded-full blur-md opacity-80"></div>
                    )}
                    <Activity size={30} className={pathname === "/activities" ? "text-orange-500 scale-110" : "text-gray-500"} />
                    <span className={`text-[10px] mt-1 ${pathname === "/activities" ? "text-orange-500 font-medium" : "text-gray-500"}`}>
                        Activities
                    </span>
                </Link>

                {/* MENU BUTTON */}
                <button onClick={onMenuClick} className="flex flex-col items-center flex-1">
                    <User size={30} className="text-gray-500" />
                    <span className="text-[10px] mt-1 text-gray-500">Menu</span>
                </button>

            </div>
        </div>
    );
}