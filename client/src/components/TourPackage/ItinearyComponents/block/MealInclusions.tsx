"use client";

import { Check, Coffee } from "lucide-react";
import type { Meals } from "../types";

export default function MealInclusions({ meals }: { meals: Meals }) {
  const items = [
    { label: "Breakfast", included: meals.breakfast },
    { label: "Lunch", included: meals.lunch },
    { label: "Dinner", included: meals.dinner },
  ];

  return (
    <div className="flex items-center gap-4 bg-[#eef5fd] border border-[#dde8f4] rounded-[6px] px-4 py-3 flex-wrap">
      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
        <Coffee size={13} className="text-[#888]" />Inclusions:
      </div>
      {items.map((m, i) => (
        <div key={m.label} className="flex items-center gap-3">
          {i > 0 && <div className="w-px h-7 bg-[#ccd9ea]" />}
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-semibold text-[#555]">{m.label}</span>
            {m.included ? (
              <span className="text-[11px] text-[#2a7d32] flex items-center gap-1"><Check size={11} strokeWidth={2.5} />Included</span>
            ) : (
              <span className="text-[11px] text-[#bbb]">Not Included</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
