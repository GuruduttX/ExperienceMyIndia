// components/CityAboutSection.tsx

"use client";

import React, { useState } from "react";

type CityAboutProps = {
  city: string;
  country?: string;
  usp: string[];
  highlights: string[];
  activities: string[];
};

const CityAboutSection: React.FC<CityAboutProps> = ({
  city,
  country = "India",
  usp,
  highlights,
  activities,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-10">
      
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {city} Tour Packages
        </h2>
        <div className="w-16 h-1 bg-orange-600 mt-2 rounded-full" />
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
        
        {/* CONTENT WRAPPER */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-[1000px]" : "max-h-[120px]"
          }`}
        >
          <div className="space-y-5">

            {/* Intro */}
            <p className="text-gray-600 leading-relaxed">
              <span className="font-medium text-gray-800">
                {city} Tour Packages
              </span>{" "}
              – Explore a wide range of curated travel experiences in {city},{" "}
              {country}. Choose from budget-friendly to luxury packages with
              exclusive deals and personalized itineraries.
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {city} is a perfect destination for travelers seeking{" "}
              <span className="font-medium text-gray-800">
                {usp.join(", ")}
              </span>
              . Known for its{" "}
              <span className="font-medium text-gray-800">
                {highlights.join(", ")}
              </span>, it attracts couples, families, and adventure lovers.
            </p>

            {/* Experience */}
            <p className="text-gray-600 leading-relaxed">
              From{" "}
              <span className="font-medium text-gray-800">
                {activities.join(", ")}
              </span>, {city} offers unforgettable experiences throughout the year.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {usp.map((item, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm bg-blue-50 text-orange-600 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* READ MORE BUTTON */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-orange-600 font-medium text-sm cursor-pointer hover:underline focus:outline-none"
        >
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>
    </section>
  );
};

export default CityAboutSection;