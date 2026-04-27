"use client";

import { useState } from "react";
import { Clock, Info, AlertCircle, CheckCircle2, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LocationHours {
  name: string;
  days: string[];       
  timing: string;        
}

interface KnowBeforeTab {
  label: string;
  icon: React.ReactNode;
  points: string[];
}

// ─── Static data ──────────────────────────────────────────────────────────────

const ALL_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const locations: LocationHours[] = [
  {
    name: "Bosphorus River",
    days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    timing: "24 Hours",
  },
  {
    name: "Old City Sultanahmet",
    days: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
    timing: "9:00 AM – 7:00 PM",
  },
  {
    name: "Topkapi Palace",
    days: ["MON", "TUE", "WED", "THU", "SAT", "SUN"],
    timing: "9:00 AM – 5:00 PM",
  },
];

const tabs: KnowBeforeTab[] = [
  {
    label: "Must Know",
    icon: <AlertCircle size={14} />,
    points: [
      "ID proof is mandatory for each guest at the time of booking and upon arrival.",
      "Fixed day ticket implies that this ticket will be applicable only for the date that you've booked the ticket; it won't be carried forward to next or any other day.",
      "All foreign nationals must share their passport and visa details upon arrival.",
    ],
  },
  {
    label: "What to Carry",
    icon: <CheckCircle2 size={14} />,
    points: [
      "Carry a printed or digital copy of your booking confirmation at all times.",
      "Comfortable walking shoes are strongly recommended for cobblestone streets.",
      "Carry cash in local currency for small vendors and tips along the route.",
    ],
  },
  {
    label: "Not Allowed",
    icon: <Info size={14} />,
    points: [
      "Outside food and beverages are not permitted on the cruise vessel.",
      "Photography with professional camera equipment requires prior written permission.",
      "Pets are not allowed on any of the guided tour routes.",
    ],
  },
];

// ─── Operating Hours ──────────────────────────────────────────────────────────

export function OperatingHours({ tourName }: { tourName?: string }) {
  const [activeLocation, setActiveLocation] = useState(0);
  const loc = locations[activeLocation];

  return (
    <div className="w-full py-4 sm:py-5 px-4 sm:px-0">
      {/* Section title */}
      <div className="flex items-center gap-2.5 mb-5">
        <Clock size={18} className="text-orange-500 shrink-0" />
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Operating Hours</h2>
      </div>

      {/* Location tabs */}
      <div className="flex gap-0 border-b border-gray-200 mb-6 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}>
        {locations.map((l, i) => (
          <button
            key={l.name}
            onClick={() => setActiveLocation(i)}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-all duration-150 ${
              i === activeLocation
                ? "text-orange-500 border-orange-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            {l.name}
          </button>
        ))}
      </div>

      {/* Days row */}
      <div className="flex flex-wrap gap-2 mb-4 ">
        {ALL_DAYS.map((day) => {
          const active = loc.days.includes(day);
          return (
            <span
              key={day}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-colors ${
                active
                  ? "bg-orange-50 border-orange-200 text-orange-600"
                  : "bg-gray-50 border-gray-200 text-gray-300"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>

      {/* Timing */}
      <p className="text-sm text-gray-600">
        Timings:{" "}
        <span className="font-bold text-gray-900">{loc.timing}</span>
      </p>
    </div>
  );
}

// ─── Know Before You Go ───────────────────────────────────────────────────────

export function KnowBeforeYouGo({ tourName = "Istanbul Bosphorus Cruise Tour" }: { tourName?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full py-2 px-4 sm:px-0">
      {/* Section title */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 leading-snug">
        <span className="text-orange-500">Know Before You Go</span>{" "}
        <span className="text-gray-400 font-normal">for</span>{" "}
        {tourName}
      </h2>

      {/* Tab bar */}
      <div className="flex gap-0 border-b border-gray-200 mb-5 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}>
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-4 cursor-pointer py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 -mb-px transition-all duration-150 ${
              i === activeTab
                ? "text-orange-500 border-orange-500"
                : "text-gray-500 border-transparent hover:text-gray-700"
            }`}
          >
            <span className={i === activeTab ? "text-orange-500" : "text-gray-400"}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Points list */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5">
        <ul className="flex flex-col gap-3.5">
          {tabs[activeTab].points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
              <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Combined default export ──────────────────────────────────────────────────

export default function OperatingAndKnowBefore({
  tourName = "Istanbul Bosphorus Cruise Tour",
}: {
  tourName?: string;
}) {
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-10 px-4 sm:px-0 py-8">
      {/* Divider helper */}
      <OperatingHours tourName={tourName} />
      <div className="border-t border-gray-100" />
      <KnowBeforeYouGo tourName={tourName} />
    </div>
  );
}