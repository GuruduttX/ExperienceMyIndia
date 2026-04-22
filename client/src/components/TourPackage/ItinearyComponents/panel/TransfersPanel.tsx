import { Car } from "lucide-react";
import DayAccordion from "../day/DayAccordion";
import SectionLabel from "../block/SectionLabel";
import TransferBlock from "../block/TransferBlock";
import type { ItineraryDay } from "../types";

export default function TransfersPanel({ itineraryData }: { itineraryData: ItineraryDay[] }) {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={item.day} item={item} defaultOpen={idx === 0}>
          {item.transfers.length > 0
            ? item.transfers.map((transfer) => (
              <div key={`${item.day}-${transfer.from}-${transfer.to}`}><SectionLabel Icon={Car} label="Private Transfer" /><TransferBlock transfer={transfer} /></div>
            ))
            : <p className="text-[14px] text-[#888] text-center py-2">No transfers on this day.</p>
          }
        </DayAccordion>
      ))}
    </div>
  );
}
