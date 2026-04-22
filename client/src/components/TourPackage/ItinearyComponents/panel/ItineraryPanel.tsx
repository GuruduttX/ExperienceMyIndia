import Image from "next/image";
import { Car, Camera, Home, Lightbulb, Shield, Star } from "lucide-react";
import DayGalleryBanner from "../day/DayGalleryBanner";
import DayAccordion from "../day/DayAccordion";
import ActivityBlock from "../block/ActivityBlock";
import MealInclusions from "../block/MealInclusions";
import SectionLabel from "../block/SectionLabel";
import TransferBlock from "../block/TransferBlock";
import type { ItineraryDay } from "../types";

export default function ItineraryPanel({ itineraryData }: { itineraryData: ItineraryDay[] }) {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <div key={item.day}>
          <DayGalleryBanner item={item} />
          <DayAccordion item={item} defaultOpen={idx === 0}>
            <p className="text-[14px] text-[#444] leading-[1.75]">{item.description}</p>
            {item.transfers.map((transfer) => (
              <div key={`${item.day}-${transfer.from}-${transfer.to}`}><SectionLabel Icon={Car} label="Private Transfer" /><TransferBlock transfer={transfer} /></div>
            ))}
            {item.activities.map((activity) => (
              <div key={activity.name}><SectionLabel Icon={Shield} label="Activity" /><ActivityBlock activity={activity} /></div>
            ))}
            {item.experiences.length > 0 && (
              <div>
                <p className="text-[14px] font-bold mb-3">You&apos;ll be covering these amazing experiences</p>
                <div className="grid grid-cols-3 gap-2">
                  {item.experiences.map((experience, i) => (
                    <div key={experience.name}>
                      <div className="relative h-[90px] rounded-[4px] overflow-hidden">
                        <Image src={experience.image} alt={experience.name} fill className="object-cover" />
                      </div>
                      <p className="text-[12px] text-[#444] mt-1.5 leading-[1.4]">{i + 1}. {experience.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div>
              <SectionLabel Icon={Home} label="Stay" />
              <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden">
                <div className="flex justify-between items-center bg-[#fafafa] px-4 py-3 border-b border-[#eee]">
                  <div><p className="text-[10px] text-[#aaa] uppercase tracking-[0.4px] mb-0.5">Check In</p><p className="text-[14px] font-bold">{item.stay.checkIn}</p></div>
                  <span className="bg-[#e07020] text-white text-[12px] font-bold px-3 py-1.5 rounded-full">{item.stay.nights}</span>
                  <div className="text-right"><p className="text-[10px] text-[#aaa] uppercase tracking-[0.4px] mb-0.5">Check Out</p><p className="text-[14px] font-bold">{item.stay.checkOut}</p></div>
                </div>
                {item.stay.note && <p className="text-[12px] text-[#e07020] font-medium px-4 py-2 border-b border-[#eee]">{item.stay.note}</p>}
                {item.hotels.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 p-3.5">
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
                <div className="px-3.5 pb-3.5"><MealInclusions meals={item.meals} /></div>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-[#fff8f2] border-l-[3px] border-[#e07020] px-3.5 py-3 rounded-r-[4px]">
              <Star size={14} className="text-[#e07020] shrink-0 mt-0.5" fill="#e07020" stroke="none" />
              <p className="text-[13px] text-[#b85010] font-medium leading-[1.5]">{item.highlight}</p>
            </div>
            {item.recommended.length > 0 && (
              <div className="bg-[#fff8ef] border border-[#fde0b8] rounded-[8px] p-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#e07020] uppercase tracking-[1.5px] mb-1.5">
                  Recommended<span className="h-px w-12 bg-[#e07020] opacity-40 inline-block" />
                </div>
                <div className="flex items-start justify-between mb-1">
                  <p className="text-[20px] font-extrabold text-[#e07020]">More To Explore</p>
                  <Lightbulb size={30} className="text-[#e07020] opacity-60" />
                </div>
                <p className="text-[13px] text-[#888] mb-3">Fill up your day with some of the <strong className="text-[#1a1a1a]">highly recommended</strong> experiences.</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {item.recommended.map((recommendation) => (
                    <div key={recommendation.name}>
                      <div className="relative h-[120px] rounded-[4px] overflow-hidden"><Image src={recommendation.image} alt={recommendation.name} fill className="object-cover" /></div>
                      <p className="text-[13px] text-[#333] font-medium mt-2 leading-[1.4]">{recommendation.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </DayAccordion>
        </div>
      ))}
    </div>
  );
}
