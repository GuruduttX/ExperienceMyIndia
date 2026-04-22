import { Info } from "lucide-react";
import Slider from "./Slider";
import type { ActivityItem } from "../types";

export default function ActivityBlock({ activity }: { activity: ActivityItem }) {
  return (
    <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden mb-2.5">
      <div className="px-4 py-3 border-b border-[#eee]">
        <div className="flex items-center gap-1.5 text-[11px] text-[#aaa] uppercase tracking-[0.5px] mb-1.5">
          <Info size={12} className="text-[#aaa]" />Activity
        </div>
        <div className="text-[14px] font-bold mb-1.5">{activity.name}</div>
        <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.5px] px-2 py-1 rounded-[3px] ${activity.ticketIncluded ? "bg-[#e6f4ea] text-[#2a7d32]" : "bg-[#f0f0f0] text-[#888]"}`}>
          {activity.ticketIncluded ? "Ticket Included" : "Ticket Not Included"}
        </span>
      </div>
      <Slider images={activity.images} id={activity.name} />
    </div>
  );
}
