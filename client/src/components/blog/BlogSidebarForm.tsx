"use client";

import React from "react";

export default function BlogSidebarForm() {
  return (
    <div className="sticky top-32 bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Trip</h3>
      <p className="text-sm text-gray-500 mb-6 leading-relaxed">
        Get free quotes from our top travel experts for your next vacation.
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Where do you want to go?"
            rows={3}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 mt-2 rounded-xl shadow-md hover:shadow-orange-500/30 transition-all duration-300 active:scale-[0.98]"
        >
          Get Free Quote
        </button>
      </form>
    </div>
  );
}
