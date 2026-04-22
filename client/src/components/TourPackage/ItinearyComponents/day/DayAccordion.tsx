"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { ItineraryDay } from "../types";

export default function DayAccordion({ item, defaultOpen = false, children }: {
  item: ItineraryDay;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-[#e4e0d8] rounded-[8px] overflow-hidden mb-1.5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-[18px] py-[14px] text-left"
      >
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="bg-[#e07020] text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px] shrink-0">{item.day}</span>
          <span className="text-[14px] font-semibold text-[#1a1a1a] truncate">{item.title}</span>
        </div>
        <div className={`w-7 h-7 rounded-full border-[1.5px] border-[#ddd] flex items-center justify-center shrink-0 ml-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronDown size={15} className="text-[#666]" />
        </div>
      </button>
      {open && <div className="border-t border-[#eee] px-5 py-5 flex flex-col gap-5">{children}</div>}
    </div>
  );
}
