import DayAccordion from "../day/DayAccordion";
import ActivityBlock from "../block/ActivityBlock";
import type { ItineraryDay } from "../types";

export default function ActivitiesPanel({ itineraryData }: { itineraryData: ItineraryDay[] }) {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={item.day} item={item} defaultOpen={idx === 0}>
          {item.activities.map((activity) => <ActivityBlock key={activity.name} activity={activity} />)}
        </DayAccordion>
      ))}
    </div>
  );
}
