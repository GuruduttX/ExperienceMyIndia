// components/Footer.tsx

import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 relative">



      <div className="bg-gradient-to-r from-orange-200 to-orange-300 z-10">

        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-black">
              Get travel inspiration ✈️
            </h3>
            <p className="text-sm text-gray-800 mt-1">
              Discover hidden gems & travel guides
            </p>
          </div>

          <div className="flex bg-white rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full outline-none text-gray-700"
            />
            <button className="bg-black text-white px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN GRID SYSTEM */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* LEFT: BRAND (5 cols) */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold text-white">
              Experience My India
            </h2>

            <p className="mt-4 text-sm text-gray-400 max-w-md">
              Discover India like never before — from the Himalayas to Kerala,
              explore curated travel experiences, hidden gems, and cultural journeys.
            </p>

            {/* CONTACT */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} /> support@experienceindia.com
              </div>
              <p className="text-gray-500">Available 24/7 for your travel needs</p>
            </div>
          </div>

          {/* RIGHT: LINKS (7 cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">

            {/* COLUMN 1 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#FF9933]">Destinations</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Experiences</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Packages</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Activities</Link></li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#FF9933]">About Us</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Careers</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Blog</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Reviews</Link></li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-[#FF9933]">Help Center</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Terms</Link></li>
                <li><Link href="#" className="hover:text-[#FF9933]">Privacy</Link></li>
                <li>
                  <Link href="#" className="text-[#FF9933] hover:underline">
                    Sitemap →
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500">
          © 2026 Experience My India. All rights reserved.
        </p>

        <div className="text-[#FF9933] font-semibold">
          Crafted with ❤️ in India
        </div>
      </div>

    </footer >
  );
}