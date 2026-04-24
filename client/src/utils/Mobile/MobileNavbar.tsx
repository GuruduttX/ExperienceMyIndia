"use client";

import { Home, Compass, Activity, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNavbar({
  onMenuClick,
  onSearchClick,
  onExperienceClick,
}: {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onExperienceClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-[9999]">
      <div className="relative bg-white backdrop-blur-xl shadow-2xl px-4 py-2 flex items-center justify-between rounded-t-2xl">
        {/* HOME */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-[20%] relative"
        >
          {pathname === "/" && (
            <div className="absolute -top-1 w-10 h-10 bg-orange-100 rounded-full blur-md opacity-80"></div>
          )}
          <Home
            size={24}
            strokeWidth={1.20}
            className={
              pathname === "/" ? "text-orange-500 scale-105" : "text-gray-500"
            }
          />
          <span
            className={`text-[10px] mt-1 ${pathname === "/" ? "text-orange-500 font-medium" : "text-gray-500"}`}
          >
            Home
          </span>
        </Link>

        <button
          onClick={onExperienceClick}
          className="flex flex-col items-center justify-center w-[20%] relative"
        >
          <Compass
            size={24}
            strokeWidth={1.20}
            className={`transition-all duration-300 ${
              pathname === "/experiences"
                ? "text-orange-500 scale-105"
                : "text-gray-500"
            }`}
          />

          <span
            className={`text-[10px] mt-1 ${
              pathname === "/experiences"
                ? "text-orange-500 font-medium"
                : "text-gray-500"
            }`}
          >
            Experiences
          </span>
        </button>

        {/* CENTER SEARCH */}
        <div className="rounded-full bg-white p-1 absolute left-1/2 -translate-x-1/2 -top-7">
          <button
            onClick={onSearchClick}
            className=""
          >
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-3.5 rounded-full shadow-xl active:scale-95 transition">
              <Search size={26} strokeWidth={1.20} />
            </div>
          </button>
        </div>

        {/* ACTIVITIES */}
        <Link
          href="/activities"
          className="flex flex-col items-center justify-center w-[20%] ml-auto relative"
        >
          {pathname === "/activities" && (
            <div className="absolute -top-1 w-10 h-10 bg-orange-100 rounded-full blur-md opacity-80"></div>
          )}
          <Activity
            size={24}
            strokeWidth={1.20}
            className={
              pathname === "/activities"
                ? "text-orange-500 scale-105"
                : "text-gray-500"
            }
          />
          <span
            className={`text-[10px] mt-1 ${pathname === "/activities" ? "text-orange-500 font-medium" : "text-gray-500"}`}
          >
            Activities
          </span>
        </Link>

        {/* MENU BUTTON */}
        <button
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center w-[20%]"
        >
          <User size={24} strokeWidth={1.20} className="text-gray-500" />
          <span className="text-[10px] mt-1 text-gray-500">Menu</span>
        </button>
      </div>
    </div>
  );
}
