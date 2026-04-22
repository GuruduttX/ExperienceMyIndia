import Image from "next/image";
import { Camera, Home, Star } from "lucide-react";
import DayAccordion from "../day/DayAccordion";
import MealInclusions from "../block/MealInclusions";
import SectionLabel from "../block/SectionLabel";
import type { ItineraryDay } from "../types";

export default function StayPanel({ itineraryData }: { itineraryData: ItineraryDay[] }) {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={item.day} item={item} defaultOpen={idx === 0}>
          <div>
            <SectionLabel Icon={Home} label="Stay At" />
            <p className="text-[15px] font-bold mb-3">Check-In At Heritage Hotel Jaipur</p>
            <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden mb-3">
              <div className="flex items-center bg-[#fafafa] px-4 py-3 border-b border-[#eee] gap-3">
                <span className="text-[12px] text-[#555]">Check In</span>
                <div className="flex-1 border-t border-dashed border-[#ccc] flex items-center justify-center">
                  <span className="bg-[#fafafa] px-2 text-[12px] font-bold flex items-center gap-1"><Home size={12} className="text-[#888]" />{item.stay.nights}</span>
                </div>
                <span className="text-[12px] text-[#555]">Check Out</span>
              </div>
              <div className="flex justify-between px-4 py-2.5 text-[13px] font-semibold">
                <span>{item.stay.checkIn}</span><span>{item.stay.checkOut}</span>
              </div>
            </div>
            {item.stay.note && <p className="text-[12px] text-[#e07020] font-medium mb-3">{item.stay.note}</p>}
            {item.hotels.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mb-3">
                {item.hotels.map((hotel) => (
                  <div key={hotel.name}>
                    <div className="relative h-[120px] rounded-[4px] overflow-hidden">
                      <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
                      <div className="absolute top-2 right-2 bg-black/55 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1"><Camera size={10} />Gallery</div>
                      <div className="absolute bottom-2 left-2 bg-black/55 text-white text-[11px] px-2 py-1 rounded flex items-center gap-1"><Star size={10} fill="#f5a623" stroke="none" />{hotel.rating}/5</div>
                    </div>
                    <p className="text-[13px] font-semibold mt-2">{hotel.name}</p>
                  </div>
                ))}
              </div>
            )}
            <MealInclusions meals={item.meals} />
          </div>
        </DayAccordion>
      ))}
    </div>
  );
}
