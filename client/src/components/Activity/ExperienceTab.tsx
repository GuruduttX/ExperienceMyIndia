"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
}

export default function ExperienceTabs({
  highlights,
  inclusions,
  exclusions,
}: Props) {
  const [activeTab, setActiveTab] = useState<"highlights" | "inclusions">(
    "highlights"
  );

  return (
    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden px-4 sm:px-0">
      
      {/* Tabs */}
      <div className="flex border-b border-stone-100">
        {["highlights", "inclusions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "highlights" | "inclusions")}
            className={`flex-1 py-3.5 text-sm font-semibold capitalize transition-colors ${
              activeTab === tab
                ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50/40"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        
        {/* Highlights */}
        {activeTab === "highlights" && (
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-stone-800 mb-4">
              Why you'll love this experience
            </h2>
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-stone-600 text-sm leading-relaxed"
                >
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Inclusions */}
        {activeTab === "inclusions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Included */}
            <div>
              <h3 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Included
              </h3>
              <ul className="space-y-2">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-stone-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div>
              <h3 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" /> Not Included
              </h3>
              <ul className="space-y-2">
                {exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-stone-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}