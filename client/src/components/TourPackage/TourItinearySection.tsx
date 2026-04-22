"use client";

import { useState } from "react";
import { Calendar, Home, Info, Shield, Truck } from "lucide-react";
import ActivitiesPanel from "./ItinearyComponents/panel/ActivitiesPanel";
import ItineraryPanel from "./ItinearyComponents/panel/ItineraryPanel";
import StayPanel from "./ItinearyComponents/panel/StayPanel";
import SummarisedPanel from "./ItinearyComponents/panel/SummarisedPanel";
import TransfersPanel from "./ItinearyComponents/panel/TransfersPanel";
import type { ItineraryDay } from "./ItinearyComponents/types";

const tabs = [
  { label: "Itinerary", Icon: Calendar },
  { label: "Summarised View", Icon: Info },
  { label: "Activities", Icon: Shield },
  { label: "Stay", Icon: Home },
  { label: "Transfers", Icon: Truck },
];

const itineraryData: ItineraryDay[] = [
  {
    day: "DAY 1",
    title: "Arrival in Jaipur | Royal Welcome",
    locationBanner: {
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600",
      city: "Jaipur",
      days: 2,
      thumbs: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=80",
      ],
      extraCount: 4,
    },
    description: "Welcome to Jaipur! Upon arrival at Jaipur Airport, you will be greeted by our representative and transferred to your heritage hotel. Check in and take time to refresh. In the evening, explore the vibrant local markets of the Pink City.",
    transfers: [{
      type: "Private Transfer",
      vehicle: "Transfer in Sedan",
      from: "Jaipur Airport / Railway Station",
      to: "Heritage Hotel in Jaipur",
      stops: 3,
    }],
    activities: [{
      name: "Evening Heritage Walk & Local Markets",
      ticketIncluded: true,
      images: [
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=900",
      ],
    }],
    experiences: [
      { name: "City Palace Courtyard", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300" },
      { name: "Johari Bazaar Walk", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=300" },
      { name: "Hawa Mahal View", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=300" },
    ],
    stay: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      nights: "1 Night",
      note: "Stays will be allocated based on availability or similar category",
    },
    hotels: [
      { name: "City Palace Heritage Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600", rating: "4.5" },
      { name: "Royal Haveli Stay", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600", rating: "4.3" },
    ],
    meals: { breakfast: true, lunch: false, dinner: false },
    highlight: "Explore vibrant local markets and enjoy a royal welcome evening in the Pink City.",
    recommended: [
      { name: "Traditional Rajasthani Puppet Show", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400" },
      { name: "Elephant Village Cultural Experience", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400" },
    ],
    summary: {
      transfers: ["Transfer from Jaipur Airport / Railway Station to Heritage Hotel in Jaipur"],
      activities: ["Evening Heritage Walk & Local Markets", "Traditional Rajasthani Puppet Show"],
      hotel: "City Palace Heritage Hotel / Royal Haveli Stay",
      mealNote: "Breakfast included at hotel",
      counts: { activities: 2, hotel: 1, transfers: 1 },
    },
  },
  {
    day: "DAY 2",
    title: "Jaipur Sightseeing | Forts & Culture",
    locationBanner: null,
    description: "Embark on a full-day guided sightseeing tour of Jaipur. Begin with the majestic Amber Fort, then proceed to Hawa Mahal, City Palace, Jantar Mantar observatory, and the iconic Albert Hall Museum.",
    transfers: [],
    activities: [{
      name: "Full-Day Guided Jaipur City Tour",
      ticketIncluded: false,
      images: [
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=900",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=900",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
      ],
    }],
    experiences: [
      { name: "Amber Fort", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300" },
      { name: "Hawa Mahal", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=300" },
      { name: "City Palace", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300" },
    ],
    stay: { checkIn: "-", checkOut: "-", nights: "1 Night", note: "" },
    hotels: [],
    meals: { breakfast: true, lunch: true, dinner: false },
    highlight: "Full-day guided sightseeing through Jaipur's iconic forts, palaces, and heritage monuments.",
    recommended: [],
    summary: {
      transfers: [],
      activities: ["Full-Day Guided Jaipur City Tour", "Kathak Dance Performance Evening"],
      hotel: null,
      mealNote: "Breakfast & Lunch included",
      counts: { activities: 2, hotel: 1, transfers: 0 },
    },
  },
];

export default function TourItinerarySection() {
  const [activeTab, setActiveTab] = useState(0);
  const panels = [
    <ItineraryPanel key="itinerary" itineraryData={itineraryData} />,
    <SummarisedPanel key="summary" itineraryData={itineraryData} />,
    <ActivitiesPanel key="activities" itineraryData={itineraryData} />,
    <StayPanel key="stay" itineraryData={itineraryData} />,
    <TransfersPanel key="transfers" itineraryData={itineraryData} />,
  ];

  return (
    <section className="w-full bg-[#f4f4f4] pb-10 px-3 md:px-6">
      <div className="max-w-[800px] mx-auto pt-4">
        <div className="flex gap-1.5 flex-wrap mb-5">
          {tabs.map(({ label, Icon }, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium border rounded-[5px] transition-all ${
                activeTab === i ? "bg-[#e07020] text-white border-[#e07020]" : "bg-white text-[#555] border-[#ddd] hover:border-[#e07020] hover:text-[#e07020]"
              }`}
            >
              <Icon size={13} />{label}
            </button>
          ))}
        </div>
        {panels[activeTab]}
      </div>
    </section>
  );
}
