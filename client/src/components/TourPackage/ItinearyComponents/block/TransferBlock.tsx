import { ChevronDown, Home } from "lucide-react";
import type { TransferItem } from "../types";

export default function TransferBlock({ transfer }: { transfer: TransferItem }) {
  return (
    <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden mb-2.5">
      <div className="bg-[#fdf6f0] px-4 py-2 text-[11px] font-bold text-[#e07020] uppercase tracking-[0.5px] border-b border-[#e8e0d8]">{transfer.type}</div>
      <div className="px-4 py-2.5 text-[14px] font-bold border-b border-[#eee]">{transfer.vehicle}</div>
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <div className="relative border-[1.5px] border-[#e4e0d8] rounded-[5px] px-3 py-2.5 pl-9 text-[13px] font-medium">
          <span className="absolute top-[-8px] left-3 bg-white px-1 text-[11px] font-semibold text-[#e07020]">From</span>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e07020]" />
          <Home size={13} className="inline mr-1.5 text-[#888]" />{transfer.from}
        </div>
        <div className="pl-9 py-0.5">
          <button type="button" className="text-[12px] text-[#e07020] font-semibold flex items-center gap-1">
            <ChevronDown size={13} strokeWidth={2.5} />View {transfer.stops} Stops
          </button>
        </div>
        <div className="relative border-[1.5px] border-[#e4e0d8] rounded-[5px] px-3 py-2.5 pl-9 text-[13px] font-medium">
          <span className="absolute top-[-8px] left-3 bg-white px-1 text-[11px] font-semibold text-[#e07020]">To</span>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1a1a1a]" />
          <Home size={13} className="inline mr-1.5 text-[#888]" />{transfer.to}
        </div>
      </div>
    </div>
  );
}
