"use client";

import { useState } from "react";
import { Coffee, Home, Info, Truck } from "lucide-react";
import type { ItineraryDay } from "../types";

export default function SummarisedPanel({ itineraryData }: { itineraryData: ItineraryDay[] }) {
  const [openDays, setOpenDays] = useState<number[]>([0]);
  const toggle = (i: number) => setOpenDays((p) => p.includes(i) ? p.filter((d) => d !== i) : [...p, i]);

  return (
    <div className="bg-white border border-[#e4e0d8] rounded-[8px] p-5 mb-4">
      <h2 className="text-[20px] font-extrabold mb-3">Trip Summary</h2>
      <div className="flex items-center gap-0 flex-wrap mb-2 pb-4 border-b border-[#eee]">
        {[
          { Icon: Info, label: "4 Activities" },
          { Icon: Truck, label: "2 Transfers" },
          { Icon: Home, label: "2 Hotels" },
        ].map(({ Icon, label }, i) => (
          <div key={label} className={`flex items-center gap-1.5 text-[13px] text-[#555] pr-4 mr-4 ${i < 2 ? "border-r border-[#ddd]" : ""}`}>
            <Icon size={14} className="text-[#e07020]" />{label}
          </div>
        ))}
      </div>
      {itineraryData.map((item, idx) => (
        <div key={item.day}>
          <button
            type="button"
            onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between bg-[#f7f5f2] px-4 py-3 border-t border-[#eee] first:border-t-0"
          >
            <span className="text-[14px] font-bold">Day {idx + 1} - Jaipur</span>
            <div className="flex items-center gap-3">
              {item.summary.counts.activities > 0 && <span className="flex items-center gap-1 text-[12px] text-[#888]"><Info size={13} className="text-[#aaa]" />{item.summary.counts.activities}</span>}
              {item.summary.counts.hotel > 0 && <span className="flex items-center gap-1 text-[12px] text-[#888]"><Home size={13} className="text-[#aaa]" />{item.summary.counts.hotel}</span>}
              {item.summary.counts.transfers > 0 && <span className="flex items-center gap-1 text-[12px] text-[#888]"><Truck size={13} className="text-[#aaa]" />{item.summary.counts.transfers}</span>}
            </div>
          </button>
          {openDays.includes(idx) && (
            <div className="px-4 pb-2 flex flex-col gap-0">
              {item.summary.transfers.length > 0 && (
                <div className="py-3 border-b border-[#eee]">
                  <div className="flex items-center gap-2 text-[13px] font-bold mb-2"><Truck size={14} className="text-[#888]" />{item.summary.transfers.length} Transfer{item.summary.transfers.length > 1 ? "s" : ""}:</div>
                  <ul className="list-disc pl-5 space-y-1">{item.summary.transfers.map((transfer) => <li key={transfer} className="text-[13px] text-[#555]">{transfer}</li>)}</ul>
                </div>
              )}
              <div className="py-3 border-b border-[#eee]">
                <div className="flex items-center gap-2 text-[13px] font-bold mb-2"><Info size={14} className="text-[#888]" />{item.summary.activities.length} Activities:</div>
                <ul className="list-disc pl-5 space-y-1">{item.summary.activities.map((activity) => <li key={activity} className="text-[13px] text-[#555]">{activity}</li>)}</ul>
              </div>
              {item.summary.hotel && (
                <div className="py-3 border-b border-[#eee]">
                  <p className="text-[13px] text-[#555]"><Home size={13} className="inline mr-1.5 text-[#888]" /><strong>Hotel:</strong> Check-in at {item.summary.hotel}</p>
                </div>
              )}
              <div className="py-3">
                <div className="inline-flex items-center gap-2 text-[12px] text-[#555] bg-[#fafafa] border border-[#ddd] rounded-[4px] px-3 py-2">
                  <Coffee size={13} className="text-[#aaa]" />{item.summary.mealNote}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
