"use client";

import { useState } from "react";
import {
  Newspaper,
  CloudSun,
  ShieldAlert,
  X,
  ChevronRight,
  Thermometer,
  Users,
  CalendarDays,
  Droplets,
  Clock,
  Wind,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  ExternalLink,
} from "lucide-react";

// ─── Types 

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  fullText: string;
  source: string;
  publishedOn: string;
}

interface MonthWeather {
  month: string;
  season: string;
  tempRange: string;
  conditions: string;
  rainyDays: string;
  crowded: string;
  queueTime: string;
  holiday?: string;
}

// ─── Data 

const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Himachal Pradesh Opens Rohtang Pass for the 2026 Season",
    summary:
      "Border Roads Organisation clears the 13,058-ft Rohtang Pass, unlocking the gateway to Lahaul-Spiti and Leh for the summer season.",
    fullText:
      "The Border Roads Organisation has successfully cleared Rohtang Pass of snow, officially opening it for civilian traffic from May 1, 2026. The pass, connecting Kullu Valley to Lahaul and Spiti, had been shut since October 2025. Travellers are advised to carry valid NGT permits, as the National Green Tribunal caps daily vehicle entries. Road conditions remain icy in the early mornings; vehicles with adequate ground clearance and snow chains are strongly recommended for the initial weeks.",
    source: "Hindustan Times",
    publishedOn: "22 Apr 2026",
  },
  {
    id: 2,
    title: "Spiti Valley Launches Sustainable Homestay Network",
    summary:
      "A new network of 80 certified homestays across Kaza, Langza and Komic villages promises authentic high-altitude experiences with eco-certified standards.",
    fullText:
      "The Himachal Pradesh government, in partnership with the Snow Leopard Conservancy India Trust, has certified 80 new homestays across the Spiti Valley. Properties in villages like Langza, Komic, and Hikkim now meet eco-certification standards that require solar water heating, waste segregation and local sourcing of food. The initiative aims to keep tourism revenue within communities while limiting ecological impact at elevations above 4,000 m. Travellers can book through the state tourism portal starting May 2026.",
    source: "The Tribune",
    publishedOn: "18 Apr 2026",
  },
  {
    id: 3,
    title: "Dharamsala–Manali Highway Gets 4G Connectivity Boost",
    summary:
      "BSNL and Airtel have extended 4G network coverage along the NH-3 corridor, significantly improving connectivity for travellers on the Manali highway.",
    fullText:
      "BSNL and Airtel have jointly upgraded 34 towers along NH-3, closing dead zones that stretched for over 60 km between Mandi and Kullu. The upgrade provides consistent 4G LTE coverage for the first time across high-altitude sections near Pandoh Dam and Aut Tunnel. Emergency SOS apps now function reliably along the entire stretch. Mountain rescue teams have welcomed the development as a significant safety improvement for solo trekkers and motorbikers.",
    source: "News On AIR",
    publishedOn: "14 Apr 2026",
  },
];

const weatherData: MonthWeather[] = [
  {
    month: "April",
    season: "Spring",
    tempRange: "5–20°C",
    conditions: "Pleasant & Clear",
    rainyDays: "3–4 Days",
    crowded: "Low Crowds",
    queueTime: "No Wait",
    holiday: "Dr. B. R. Ambedkar Jayanti (14 Apr)",
  },
  {
    month: "May",
    season: "Pre-Summer",
    tempRange: "12–28°C",
    conditions: "Warm & Sunny",
    rainyDays: "5–6 Days",
    crowded: "Moderate",
    queueTime: "Short Wait",
    holiday: "Buddha Purnima (variable)",
  },
  {
    month: "June",
    season: "Early Summer",
    tempRange: "15–30°C",
    conditions: "Hot in Valleys",
    rainyDays: "8–10 Days",
    crowded: "Peak Season",
    queueTime: "Long Wait",
  },
  {
    month: "July",
    season: "Monsoon",
    tempRange: "15–25°C",
    conditions: "Heavy Rainfall",
    rainyDays: "18–22 Days",
    crowded: "Moderate",
    queueTime: "Short Wait",
  },
  {
    month: "August",
    season: "Monsoon",
    tempRange: "14–24°C",
    conditions: "Cloudy & Wet",
    rainyDays: "16–20 Days",
    crowded: "Low Crowds",
    queueTime: "No Wait",
    holiday: "Independence Day (15 Aug)",
  },
];

const safetyAdvisories = [
  {
    icon: Wind,
    text: "Acclimatise in Manali or Kaza for at least 24 hours before ascending above 4,000 m to prevent acute mountain sickness.",
  },
  {
    icon: AlertTriangle,
    text: "Check Rohtang Pass and Kunzum La status daily; both passes close suddenly due to snowfall or BRO maintenance without advance notice.",
  },
  {
    icon: CheckCircle2,
    text: "Obtain the NGT permit online before entering Rohtang Pass — spot permits are not issued and entry is strictly regulated.",
  },
  {
    icon: MapPin,
    text: "Inner Line Permits are mandatory for Kinnaur districts beyond Karchham; verify requirements at least 48 hours before travel.",
  },
  {
    icon: Droplets,
    text: "Carry sufficient water and electrolytes — dry mountain air at altitude accelerates dehydration faster than you may notice.",
  },
  {
    icon: ShieldAlert,
    text: "Pack basic medicines including altitude sickness tablets (Acetazolamide) since pharmacies outside Manali and Kaza are extremely limited.",
  },
  {
    icon: CalendarDays,
    text: "Avoid solo night driving on NH-3 and NH-505 — sudden rockfalls and unmarked diversions are frequent during and after monsoon season.",
  },
];

// ─── NewsCard ─────────────────────────────────────────────────────────────────

function NewsCard({
  article,
  onOpen,
}: {
  article: NewsArticle;
  onOpen: (a: NewsArticle) => void;
}) {
  return (
    <article
      onClick={() => onOpen(article)}
      className="group flex flex-col gap-3 bg-white border border-gray-200 rounded-xl p-5 cursor-pointer
                 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-orange-200"
    >
      <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2">
        {article.title}
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 flex-1">
        {article.summary}
      </p>

      <div className="flex items-center justify-between mt-1">
        <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
          <MapPin size={11} />
          {article.source}
        </span>
        <button className="flex items-center gap-0.5 text-xs font-bold text-orange-500 group-hover:text-orange-600 transition-colors">
          Read More <ChevronRight size={13} />
        </button>
      </div>

      <div className="text-xs text-gray-400 font-medium">{article.publishedOn}</div>
    </article>
  );
}

// ─── NewsModal ────────────────────────────────────────────────────────────────

function NewsModal({
  article,
  onClose,
}: {
  article: NewsArticle;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* keyframe via a tiny inline style — only animation, no layout */}
      <style>{`@keyframes hh-modal-in{from{opacity:0;transform:translateY(10px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>

      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ animation: "hh-modal-in 0.2s ease" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 leading-snug">
            {article.title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 w-8 h-8 flex items-center cursor-pointer justify-center rounded-lg border border-gray-200
                       bg-gray-50 text-gray-500 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-200 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed">
          {article.fullText}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-500">
            <ExternalLink size={12} />
            {article.source}
          </span>
          <span className="text-xs text-gray-400 font-medium">{article.publishedOn}</span>
        </div>
      </div>
    </div>
  );
}

// ─── WeatherTab ───────────────────────────────────────────────────────────────

function WeatherTab() {
  const [selected, setSelected] = useState(0);
  const w = weatherData[selected];

  const stats = [
    { icon: CloudSun, label: "Season", value: w.season },
    { icon: Thermometer, label: "Temperature", value: w.tempRange },
    { icon: Users, label: "Crowd Level", value: w.crowded },
    { icon: Wind, label: "Conditions", value: w.conditions },
    { icon: Droplets, label: "Rainy Days", value: w.rainyDays },
    { icon: Clock, label: "Queue Time", value: w.queueTime },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Month pills */}
      <div className="flex flex-wrap gap-2">
        {weatherData.map((m, i) => (
          <button
            key={m.month}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-full cursor-pointer text-xs font-semibold border transition-all duration-150 ${
              i === selected
                ? "bg-orange-500 cursor-pointer border-orange-500 text-white shadow-sm"
                : "bg-white border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
            }`}
          >
            {m.month}
          </button>
        ))}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-3.5 bg-white border border-gray-200 rounded-xl p-4
                       hover:border-orange-200 hover:shadow-sm transition-all duration-150"
          >
            <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Icon size={19} />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
                {label}
              </div>
              <div className="text-sm font-bold text-gray-900">{value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Holiday banner */}
      {w.holiday && (
        <div className="flex items-center gap-2.5 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
          <CalendarDays size={15} className="shrink-0 text-orange-500" />
          <p className="text-xs text-orange-700">
            <span className="font-bold">Public Holiday:</span> {w.holiday}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── SafetyTab ────────────────────────────────────────────────────────────────

function SafetyTab() {
  return (
    <ul className="divide-y divide-gray-100">
      {safetyAdvisories.map(({ icon: Icon, text }, i) => (
        <li key={i} className="flex items-start gap-3.5 py-4 first:pt-0 last:pb-0">
          <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-orange-50 text-orange-500 mt-0.5">
            <Icon size={16} />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
        </li>
      ))}
    </ul>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type Tab = "news" | "weather" | "safety";

const tabs: { id: Tab; label: string; icon: typeof Newspaper }[] = [
  { id: "news", label: "News", icon: Newspaper },
  { id: "weather", label: "Weather", icon: CloudSun },
  { id: "safety", label: "Safety Advisory", icon: ShieldAlert },
];

export default function CityHandbook() {
  const [activeTab, setActiveTab] = useState<Tab>("news");
  const [modalArticle, setModalArticle] = useState<NewsArticle | null>(null);

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pb-16">
        {/* Header */}
        <div className="pt-8 pb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            <span className="text-orange-500">Himachal</span> Handbook
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Latest updates, weather insights, and safety guidance for Himachal Pradesh
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="flex border-b-2 border-gray-200 mb-7 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          role="tablist"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center cursor-pointer gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap
                          border-b-2 -mb-0.5 transition-all duration-150 ${
                            activeTab === id
                              ? "text-orange-500 border-orange-500"
                              : "text-gray-500 border-transparent hover:text-orange-400"
                          }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Panels */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} onOpen={setModalArticle} />
            ))}
          </div>
        )}

        {activeTab === "weather" && <WeatherTab />}
        {activeTab === "safety" && <SafetyTab />}
      </div>

      {/* Modal */}
      {modalArticle && (
        <NewsModal article={modalArticle} onClose={() => setModalArticle(null)} />
      )}
    </>
  );
}