"use client";

import Image from "next/image";
import {
  Search,
  Users,
  Map,
  Calendar,
  Banknote,
  Minus,
  Plus,
} from "lucide-react";
import ExperienceDropDown from "./ExperienceDropDown";
import { useRef, useState, useEffect } from "react";

const activitiesData = {
  categories: ["Water Sports", "Adventure", "Nature", "Culture"],
  packages: {
    "Water Sports": [
      { title: "Scuba Diving in Andaman", days: "1 Day", rating: 4.8 },
      { title: "River Rafting Rishikesh", days: "Half Day", rating: 4.7 },
    ],
    Adventure: [
      { title: "Paragliding Bir Billing", days: "1 Day", rating: 4.9 },
      { title: "Bungee Jumping", days: "2 Hours", rating: 4.6 },
    ],
    Nature: [
      { title: "Wildlife Safari", days: "Half Day", rating: 4.8 },
      { title: "Tea Garden Walk", days: "2 Hours", rating: 4.5 },
    ],
    Culture: [
      { title: "Old Delhi Food Walk", days: "3 Hours", rating: 4.7 },
      { title: "Jaipur Heritage Night", days: "Evening", rating: 4.8 },
    ],
  },
};

const miceData = {
  categories: ["Meetings", "Incentives", "Conferences", "Exhibitions"],
  packages: {
    Meetings: [
      { title: "Corporate Boardrooms", days: "Custom", rating: 4.9 },
      { title: "Executive Retreats", days: "Custom", rating: 4.8 },
    ],
    Incentives: [
      { title: "Team Building Goa", days: "3 Days", rating: 4.7 },
      { title: "Luxury Desert Camp", days: "2 Days", rating: 4.9 },
    ],
    Conferences: [
      { title: "Large Scale Venues", days: "Custom", rating: 4.8 },
      { title: "Tech Summits", days: "Custom", rating: 4.7 },
    ],
    Exhibitions: [
      { title: "Trade Show Setup", days: "Custom", rating: 4.6 },
      { title: "Product Launches", days: "Custom", rating: 4.8 },
    ],
  },
};

function NavDropDown({ title, data }: { title: string; data: any }) {
  const [active, setActive] = useState<string>(data.categories[0]);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 180);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="font-medium text-gray-800 hover:text-orange-500 transition cursor-pointer">
        {title}
      </button>

      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[900px] rounded-3xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 px-6 py-3 flex justify-between text-sm font-medium text-black">
            <span>🔥 Exclusive Deals – Up to 40% OFF</span>
            <div className="flex gap-6 text-xs">
              <span>⭐ 4.9 Rated</span>
              <span>🌍 50+ Destinations</span>
              <span>👥 5K+ Travelers</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-[22%] bg-gray-50/80 backdrop-blur p-6 border-r border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-5">
                Categories
              </p>
              {data.categories.map((item: string) => (
                <div
                  key={item}
                  onMouseEnter={() => setActive(item)}
                  className={`group flex justify-between items-center px-4 py-3 rounded-xl mb-2 cursor-pointer transition-all duration-200 ${
                    active === item
                      ? "bg-white shadow-md text-orange-600 font-semibold"
                      : "text-gray-600 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  {item}
                  <span className="opacity-0 group-hover:opacity-100 transition">
                    →
                  </span>
                </div>
              ))}
            </div>

            <div className="w-[48%] p-7">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  All Packages
                </h4>
                <span className="text-orange-500 text-sm cursor-pointer hover:underline">
                  View all →
                </span>
              </div>
              <div className="space-y-5">
                {data.packages[active]?.map((pkg: any, i: number) => (
                  <div
                    key={i}
                    className="group p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <h5 className="font-medium text-gray-800 group-hover:text-orange-500 transition">
                      {pkg.title}
                    </h5>
                    <div className="flex justify-between mt-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        ⏱ {pkg.days}
                      </span>
                      <span className="flex items-center gap-1 text-yellow-500">
                        ⭐ {pkg.rating}
                      </span>
                    </div>
                    <p className="text-green-600 text-sm mt-2 font-medium">
                      Custom Pricing
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[30%] bg-gradient-to-br from-orange-50 to-orange-100 p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs text-orange-500 uppercase tracking-wide mb-2">
                  Featured
                </p>
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  {active}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Handpicked experiences across {active}. Enjoy premium
                  services, curated itineraries, and seamless travel.
                </p>
              </div>
              <button className="mt-8 bg-orange-500 text-white px-5 py-3 rounded-xl font-medium hover:bg-orange-600 transition shadow-md hover:shadow-lg">
                Explore All Packages →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SearchSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

function SearchChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 text-[13px] font-medium rounded-full transition-all border ${
        isActive
          ? "bg-orange-500 border-orange-500 text-white shadow-sm"
          : "bg-white border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500 active:bg-orange-50"
      }`}
    >
      {label}
    </button>
  );
}

function SearchDropDown() {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState<number>(20000);
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [selectedType, setSelectedType] = useState<string>("Tour");
  const [selectedDuration, setSelectedDuration] =
    useState<string>("3 to 5 days");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-start gap-2 px-4 h-10 w-40 md:w-64 rounded-full border border-gray-200 bg-gray-50/80 hover:bg-gray-100 hover:shadow-sm transition focus:outline-none focus:border-orange-500 focus:bg-white"
      >
        <Search size={16} className="text-gray-500 shrink-0" />
        <span className="text-[13px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
          Search destinations...
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-14 w-[750px] rounded-3xl bg-white shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 flex flex-col cursor-default">
          {/* Top Input Bar */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-7 py-5 flex items-center border-b border-orange-200/60">
            <Search size={22} className="text-orange-500 mr-4" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              className="w-full bg-transparent outline-none text-gray-800 placeholder:text-gray-400 text-lg font-medium"
              autoFocus
            />
          </div>

          <div className="flex">
            {/* Left Side */}
            <div className="w-1/2 p-7 border-r border-gray-100 bg-gray-50/50">
              <SearchSection
                title="Product Type"
                icon={<Map size={18} className="text-gray-500" />}
              >
                <SearchChip
                  label="Tour"
                  isActive={selectedType === "Tour"}
                  onClick={() => setSelectedType("Tour")}
                />
                <SearchChip
                  label="Activity"
                  isActive={selectedType === "Activity"}
                  onClick={() => setSelectedType("Activity")}
                />
              </SearchSection>

              <SearchSection
                title="Trip Duration"
                icon={<Calendar size={18} className="text-gray-500" />}
              >
                {[
                  "Upto 1 Day",
                  "2 to 3 days",
                  "3 to 5 days",
                  "5 to 7 days",
                  "7+ Days",
                ].map((duration) => (
                  <SearchChip
                    key={duration}
                    label={duration}
                    isActive={selectedDuration === duration}
                    onClick={() => setSelectedDuration(duration)}
                  />
                ))}
              </SearchSection>
            </div>

            {/* Right Side */}
            <div className="w-1/2 p-7 flex flex-col justify-between">
              <div>
                <SearchSection
                  title="Number of Guests"
                  icon={<Users size={18} className="text-gray-500" />}
                >
                  <div className="flex items-center justify-between w-full p-4 border border-gray-100 rounded-2xl bg-white shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900 text-[14px]">
                        Travellers
                      </p>
                      <p className="text-[12px] text-gray-500 mt-0.5">
                        Ages 2 or above
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setPeopleCount(Math.max(1, peopleCount - 1))
                        }
                        disabled={peopleCount <= 1}
                        className="p-1.5 rounded-full border border-gray-200 bg-white text-gray-600 active:bg-gray-100 disabled:opacity-40 transition-all cursor-pointer"
                      >
                        <Minus size={16} strokeWidth={2} />
                      </button>
                      <span className="w-5 text-center font-semibold text-[15px] text-gray-900">
                        {peopleCount}
                      </span>
                      <button
                        onClick={() => setPeopleCount(peopleCount + 1)}
                        className="p-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-500 active:bg-orange-100 transition-all cursor-pointer"
                      >
                        <Plus size={16} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </SearchSection>

                <SearchSection
                  title="Price Range"
                  icon={<Banknote size={18} className="text-gray-500" />}
                >
                  <div className="w-full mt-2">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] text-gray-500 font-medium">
                        Maximum budget
                      </span>
                      <span className="text-[14px] font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-100">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="1000"
                      value={price}
                      onChange={(e) => setPrice(Number(e.target.value))}
                      className="w-full accent-orange-500 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2.5 text-[11px] font-medium text-gray-400">
                      <span>₹0</span>
                      <span>₹5L+</span>
                    </div>
                  </div>
                </SearchSection>
              </div>

              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-semibold shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Show {peopleCount * 12} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
          <ExperienceDropDown />
          <NavDropDown title="Activities" data={activitiesData} />
          <NavDropDown title="Mice" data={miceData} />
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* SEARCH WITH DROPDOWN */}
          <SearchDropDown />

          {/* LOGIN */}
          <button className="px-3 md:px-5 h-9 md:h-10 rounded-full bg-gradient-to-r from-[#FF9933] to-[#ff7a00] text-white text-sm font-medium shadow-md hover:scale-105 transition">
            Login
          </button>
          <button className="px-3 md:px-5 h-9 md:h-10 rounded-full bg-gradient-to-r from-[#FF9933] to-[#ff7a00] text-white text-sm font-medium shadow-md hover:scale-105 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
