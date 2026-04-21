"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Calendar, Info, Shield, Home, Truck, ChevronDown,
  ChevronLeft, ChevronRight, Car, Check, Star,
  Coffee, Lightbulb, Camera
} from "lucide-react";

// ─── DATA ───────────────────────────────────────────────────
const tabs = [
  { label: "Itinerary",        Icon: Calendar },
  { label: "Summarised View",  Icon: Info     },
  { label: "Activities",       Icon: Shield   },
  { label: "Stay",             Icon: Home     },
  { label: "Transfers",        Icon: Truck    },
];

const itineraryData = [
  {
    day: "DAY 1",
    title: "Arrival in Jaipur | Royal Welcome",
    locationBanner: {
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600",
      city: "Jaipur", days: 2,
      thumbs: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=80",
      ],
      extraCount: 4,
    },
    description: "Welcome to Jaipur! Upon arrival at Jaipur Airport, you will be greeted by our representative and transferred to your heritage hotel. Check in and take time to refresh. In the evening, explore the vibrant local markets of the Pink City.",
    transfers: [{
      type: "Private Transfer", vehicle: "Transfer in Sedan",
      from: "Jaipur Airport / Railway Station",
      to: "Heritage Hotel in Jaipur", stops: 3,
    }],
    activities: [{
      name: "Evening Heritage Walk & Local Markets", ticketIncluded: true,
      images: [
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=900",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=900",
      ],
    }],
    experiences: [
      { name: "City Palace Courtyard", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300" },
      { name: "Johari Bazaar Walk",    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=300" },
      { name: "Hawa Mahal View",       image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=300" },
    ],
    stay: { checkIn: "2:00 PM", checkOut: "11:00 AM", nights: "1 Night",
      note: "Stays will be allocated based on availability or similar category" },
    hotels: [
      { name: "City Palace Heritage Hotel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600", rating: "4.5" },
      { name: "Royal Haveli Stay",          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600", rating: "4.3" },
    ],
    meals: { breakfast: true, lunch: false, dinner: false },
    highlight: "Explore vibrant local markets and enjoy a royal welcome evening in the Pink City.",
    recommended: [
      { name: "Traditional Rajasthani Puppet Show",   image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400" },
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
      name: "Full-Day Guided Jaipur City Tour", ticketIncluded: false,
      images: [
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=900",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=900",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
      ],
    }],
    experiences: [
      { name: "Amber Fort",  image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=300" },
      { name: "Hawa Mahal",  image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=300" },
      { name: "City Palace", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=300" },
    ],
    stay: { checkIn: "—", checkOut: "—", nights: "1 Night", note: "" },
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

// ─── SUB-COMPONENTS ─────────────────────────────────────────

function Slider({ images }: { images: string[]; id?: string }) {
  const [cur, setCur] = useState(0);
  return (
    <div className="relative h-[220px] overflow-hidden bg-gray-200">
      <Image src={images[cur]} alt="" fill className="object-cover" />
      <button onClick={() => setCur((c) => (c - 1 + images.length) % images.length)}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-black/45 flex items-center justify-center z-10">
        <ChevronLeft size={16} color="#fff" strokeWidth={2.5} />
      </button>
      <button onClick={() => setCur((c) => (c + 1) % images.length)}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full bg-black/45 flex items-center justify-center z-10">
        <ChevronRight size={16} color="#fff" strokeWidth={2.5} />
      </button>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[11px] px-2.5 py-1 rounded-full">
        {cur + 1}/{images.length}
      </div>
      <div className="absolute bottom-2.5 right-3 flex">
        {images.slice(0, 2).map((img, i) => (
          <div key={i} className={`w-[30px] h-[30px] rounded-full border-2 border-white overflow-hidden ${i > 0 ? "-ml-2" : ""}`}>
            <Image src={img} alt="" width={30} height={30} className="object-cover w-full h-full" />
          </div>
        ))}
        {images.length > 2 && (
          <div className="w-[30px] h-[30px] rounded-full border-2 border-white bg-[#e07020] text-white text-[10px] font-bold flex items-center justify-center -ml-2">
            +{images.length - 2}
          </div>
        )}
      </div>
    </div>
  );
}

function getDayImages(item: typeof itineraryData[0]) {
  return [
    ...item.activities.flatMap((activity) => activity.images),
    ...item.experiences.map((experience) => experience.image),
    ...item.hotels.map((hotel) => hotel.image),
    ...item.recommended.map((recommendation) => recommendation.image),
  ];
}

function getDayCity(item: typeof itineraryData[0]) {
  if (item.locationBanner?.city) return item.locationBanner.city;
  if (item.title.includes("Jaipur")) return "Jaipur";
  if (item.title.includes("Udaipur")) return "Udaipur";
  if (item.title.includes("Jodhpur")) return "Jodhpur";
  return "Rajasthan";
}

function DayGalleryBanner({ item }: { item: typeof itineraryData[0] }) {
  const images = getDayImages(item);
  const [cur, setCur] = useState(0);

  if (images.length === 0) return null;

  const dayNumber = item.day.replace(/\D/g, "") || "1";
  const city = getDayCity(item);

  return (
    <div className="mb-4 overflow-hidden rounded-[10px] border border-[#e4e0d8] bg-white">
      <div className="relative h-[190px] overflow-hidden sm:h-[250px] md:h-[290px]">
        <Image
          src={images[cur]}
          alt={`${item.title} gallery image ${cur + 1}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setCur((current) => (current - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/35 sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={20} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={() => setCur((current) => (current + 1) % images.length)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/35 sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight size={20} strokeWidth={2.4} />
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-4 text-white sm:bottom-5 sm:left-5">
          <div className="text-[11px] font-semibold opacity-90 sm:text-[12px]">
            Day in
          </div>
          <div className="flex items-baseline gap-2 font-extrabold leading-none">
            <span className="text-[44px] sm:text-[56px]">{dayNumber}</span>
            <span className="text-2xl sm:text-3xl">{city}</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-bold text-[#666] backdrop-blur-sm sm:flex">
          <span className="h-3 w-3 rounded-full border border-white bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
          {cur + 1}/{images.length}
          <span className="h-3 w-3 rounded-full border border-white bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.18)]" />
        </div>

        <div className="absolute bottom-4 right-4 flex sm:bottom-5 sm:right-5">
          {images.slice(0, 3).map((img, i) => (
            <button
              type="button"
              key={`${item.day}-thumb-${i}`}
              onClick={() => setCur(i)}
              className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-white shadow-lg transition sm:h-14 sm:w-14 ${
                i > 0 ? "-ml-3" : ""
              } ${cur === i ? "z-10 scale-105" : ""}`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
          {images.length > 3 && (
            <button
              type="button"
              onClick={() => setCur(3)}
              className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-white text-[13px] font-extrabold text-[#e07020] shadow-lg sm:h-14 sm:w-14 sm:text-base"
            >
              +{images.length - 3}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ Icon: I, label }: { Icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-semibold text-[#888] uppercase tracking-[0.4px] mb-2.5">
      <I size={14} className="text-[#e07020]" />{label}
    </div>
  );
}

function MealInclusions({ meals }: { meals: { breakfast: boolean; lunch: boolean; dinner: boolean } }) {
  const items = [
    { label: "Breakfast", included: meals.breakfast },
    { label: "Lunch",     included: meals.lunch     },
    { label: "Dinner",    included: meals.dinner    },
  ];
  return (
    <div className="flex items-center gap-4 bg-[#eef5fd] border border-[#dde8f4] rounded-[6px] px-4 py-3 flex-wrap">
      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#555]">
        <Coffee size={13} className="text-[#888]" />Inclusions:
      </div>
      {items.map((m, i) => (
        <div key={i} className="flex items-center gap-3">
          {i > 0 && <div className="w-px h-7 bg-[#ccd9ea]" />}
          <div className="flex flex-col items-center">
            <span className="text-[12px] font-semibold text-[#555]">{m.label}</span>
            {m.included
              ? <span className="text-[11px] text-[#2a7d32] flex items-center gap-1"><Check size={11} strokeWidth={2.5} />Included</span>
              : <span className="text-[11px] text-[#bbb]">Not Included</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

function TransferBlock({ t }: { t: typeof itineraryData[0]["transfers"][0] }) {
  return (
    <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden mb-2.5">
      <div className="bg-[#fdf6f0] px-4 py-2 text-[11px] font-bold text-[#e07020] uppercase tracking-[0.5px] border-b border-[#e8e0d8]">{t.type}</div>
      <div className="px-4 py-2.5 text-[14px] font-bold border-b border-[#eee]">{t.vehicle}</div>
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <div className="relative border-[1.5px] border-[#e4e0d8] rounded-[5px] px-3 py-2.5 pl-9 text-[13px] font-medium">
          <span className="absolute top-[-8px] left-3 bg-white px-1 text-[11px] font-semibold text-[#e07020]">From</span>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e07020]" />
          <Home size={13} className="inline mr-1.5 text-[#888]" />{t.from}
        </div>
        <div className="pl-9 py-0.5">
          <button className="text-[12px] text-[#e07020] font-semibold flex items-center gap-1">
            <ChevronDown size={13} strokeWidth={2.5} />View {t.stops} Stops
          </button>
        </div>
        <div className="relative border-[1.5px] border-[#e4e0d8] rounded-[5px] px-3 py-2.5 pl-9 text-[13px] font-medium">
          <span className="absolute top-[-8px] left-3 bg-white px-1 text-[11px] font-semibold text-[#e07020]">To</span>
          <span className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1a1a1a]" />
          <Home size={13} className="inline mr-1.5 text-[#888]" />{t.to}
        </div>
      </div>
    </div>
  );
}

function ActivityBlock({ a }: { a: typeof itineraryData[0]["activities"][0] }) {
  return (
    <div className="border border-[#e4e0d8] rounded-[6px] overflow-hidden mb-2.5">
      <div className="px-4 py-3 border-b border-[#eee]">
        <div className="flex items-center gap-1.5 text-[11px] text-[#aaa] uppercase tracking-[0.5px] mb-1.5">
          <Info size={12} className="text-[#aaa]" />Activity
        </div>
        <div className="text-[14px] font-bold mb-1.5">{a.name}</div>
        <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.5px] px-2 py-1 rounded-[3px] ${a.ticketIncluded ? "bg-[#e6f4ea] text-[#2a7d32]" : "bg-[#f0f0f0] text-[#888]"}`}>
          {a.ticketIncluded ? "Ticket Included" : "Ticket Not Included"}
        </span>
      </div>
      <Slider images={a.images} id={a.name} />
    </div>
  );
}

function DayAccordion({ item, defaultOpen = false, children }: {
  item: typeof itineraryData[0]; defaultOpen?: boolean; children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white border border-[#e4e0d8] rounded-[8px] overflow-hidden mb-1.5">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-[18px] py-[14px] text-left">
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

// ─── PANELS ─────────────────────────────────────────────────

function ItineraryPanel() {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <div key={idx}>
          <DayGalleryBanner item={item} />
          <DayAccordion item={item} defaultOpen={idx === 0}>
            <p className="text-[14px] text-[#444] leading-[1.75]">{item.description}</p>
            {item.transfers.map((t, i) => (
              <div key={i}><SectionLabel Icon={Car} label="Private Transfer" /><TransferBlock t={t} /></div>
            ))}
            {item.activities.map((a, i) => (
              <div key={i}><SectionLabel Icon={Shield} label="Activity" /><ActivityBlock a={a} /></div>
            ))}
            {item.experiences.length > 0 && (
              <div>
                <p className="text-[14px] font-bold mb-3">You&apos;ll be covering these amazing experiences</p>
                <div className="grid grid-cols-3 gap-2">
                  {item.experiences.map((e, i) => (
                    <div key={i}>
                      <div className="relative h-[90px] rounded-[4px] overflow-hidden">
                        <Image src={e.image} alt={e.name} fill className="object-cover" />
                      </div>
                      <p className="text-[12px] text-[#444] mt-1.5 leading-[1.4]">{i + 1}. {e.name}</p>
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
                    {item.hotels.map((h, i) => (
                      <div key={i}>
                        <div className="relative h-[120px] rounded-[4px] overflow-hidden">
                          <Image src={h.image} alt={h.name} fill className="object-cover" />
                          <div className="absolute top-2 right-2 bg-black/55 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1"><Camera size={10} />Gallery</div>
                          <div className="absolute bottom-2 left-2 bg-black/55 text-white text-[11px] px-2 py-1 rounded flex items-center gap-1"><Star size={10} fill="#f5a623" stroke="none" />{h.rating}/5</div>
                        </div>
                        <p className="text-[13px] font-semibold mt-2">{h.name}</p>
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
                  {item.recommended.map((r, i) => (
                    <div key={i}>
                      <div className="relative h-[120px] rounded-[4px] overflow-hidden"><Image src={r.image} alt={r.name} fill className="object-cover" /></div>
                      <p className="text-[13px] text-[#333] font-medium mt-2 leading-[1.4]">{r.name}</p>
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

function SummarisedPanel() {
  const [openDays, setOpenDays] = useState<number[]>([0]);
  const toggle = (i: number) => setOpenDays(p => p.includes(i) ? p.filter(d => d !== i) : [...p, i]);
  return (
    <div className="bg-white border border-[#e4e0d8] rounded-[8px] p-5 mb-4">
      <h2 className="text-[20px] font-extrabold mb-3">Trip Summary</h2>
      <div className="flex items-center gap-0 flex-wrap mb-2 pb-4 border-b border-[#eee]">
        {[
          { Icon: Info, label: "4 Activities" },
          { Icon: Truck, label: "2 Transfers" },
          { Icon: Home, label: "2 Hotels" },
        ].map(({ Icon: I, label }, i) => (
          <div key={i} className={`flex items-center gap-1.5 text-[13px] text-[#555] pr-4 mr-4 ${i < 2 ? "border-r border-[#ddd]" : ""}`}>
            <I size={14} className="text-[#e07020]" />{label}
          </div>
        ))}
      </div>
      {itineraryData.map((item, idx) => (
        <div key={idx}>
          <button onClick={() => toggle(idx)}
            className="w-full flex items-center justify-between bg-[#f7f5f2] px-4 py-3 border-t border-[#eee] first:border-t-0">
            <span className="text-[14px] font-bold">Day {idx + 1} — Jaipur</span>
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
                  <ul className="list-disc pl-5 space-y-1">{item.summary.transfers.map((t, i) => <li key={i} className="text-[13px] text-[#555]">{t}</li>)}</ul>
                </div>
              )}
              <div className="py-3 border-b border-[#eee]">
                <div className="flex items-center gap-2 text-[13px] font-bold mb-2"><Info size={14} className="text-[#888]" />{item.summary.activities.length} Activities:</div>
                <ul className="list-disc pl-5 space-y-1">{item.summary.activities.map((a, i) => <li key={i} className="text-[13px] text-[#555]">{a}</li>)}</ul>
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

function ActivitiesPanel() {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={idx} item={item} defaultOpen={idx === 0}>
          {item.activities.map((a, i) => <ActivityBlock key={i} a={a} />)}
        </DayAccordion>
      ))}
    </div>
  );
}

function StayPanel() {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={idx} item={item} defaultOpen={idx === 0}>
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
                {item.hotels.map((h, i) => (
                  <div key={i}>
                    <div className="relative h-[120px] rounded-[4px] overflow-hidden">
                      <Image src={h.image} alt={h.name} fill className="object-cover" />
                      <div className="absolute top-2 right-2 bg-black/55 text-white text-[10px] px-2 py-1 rounded flex items-center gap-1"><Camera size={10} />Gallery</div>
                      <div className="absolute bottom-2 left-2 bg-black/55 text-white text-[11px] px-2 py-1 rounded flex items-center gap-1"><Star size={10} fill="#f5a623" stroke="none" />{h.rating}/5</div>
                    </div>
                    <p className="text-[13px] font-semibold mt-2">{h.name}</p>
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

function TransfersPanel() {
  return (
    <div>
      {itineraryData.map((item, idx) => (
        <DayAccordion key={idx} item={item} defaultOpen={idx === 0}>
          {item.transfers.length > 0
            ? item.transfers.map((t, i) => (
              <div key={i}><SectionLabel Icon={Car} label="Private Transfer" /><TransferBlock t={t} /></div>
            ))
            : <p className="text-[14px] text-[#888] text-center py-2">No transfers on this day.</p>
          }
        </DayAccordion>
      ))}
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────
export default function TourItinerarySection() {
  const [activeTab, setActiveTab] = useState(0);
  const panels = [
    <ItineraryPanel key="itinerary" />,
    <SummarisedPanel key="summary" />,
    <ActivitiesPanel key="activities" />,
    <StayPanel key="stay" />,
    <TransfersPanel key="transfers" />,
  ];

  return (
    <section className="w-full bg-[#f4f4f4] pb-10 px-4 md:px-6">
      <div className="max-w-[800px] mx-auto pt-4">
        <div className="flex gap-1.5 flex-wrap mb-5">
          {tabs.map(({ label, Icon }, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium border rounded-[5px] transition-all
                ${activeTab === i ? "bg-[#e07020] text-white border-[#e07020]" : "bg-white text-[#555] border-[#ddd] hover:border-[#e07020] hover:text-[#e07020]"}`}>
              <Icon size={13} />{label}
            </button>
          ))}
        </div>
        {panels[activeTab]}
      </div>
    </section>
  );
}
