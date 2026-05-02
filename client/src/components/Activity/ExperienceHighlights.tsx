"use client";

import {
  Zap,
  XCircle,
  Smartphone,
  ShieldCheck,
  Tag,
  CheckCircle2,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Instant Confirmation",
    sub: "Tickets delivered to your email in minutes",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: XCircle,
    title: "Free Cancellation",
    sub: "Up to 15 days before the experience starts",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Smartphone,
    title: "Mobile Tickets",
    sub: "Scan directly from your phone — no print needed",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Certified",
    sub: "All guides are government-certified & trained",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];


export default function ExperienceHighlights() {
  return (
    <div className="flex flex-col gap-6 my-6 px-4 sm:px-0">

      {/* Title Block */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Tag className="w-3 h-3" /> Lowest Price Guaranteed
          </span>
          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3" /> Instant Booking
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight tracking-tight">
          Rishikesh River Rafting —{" "}
          <span className="text-orange-500">Bharmpuri Starting Point</span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-orange-400" /> Rishikesh, Uttarakhand
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-orange-400" /> 2–3 Hours
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <strong className="text-stone-700">4.7</strong>
            <span className="text-stone-400">(1,300+ reviews)</span>
          </span>
        </div>
      </div>

      {/* Perks Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {perks.map(({ icon: Icon, title, sub, color, bg }) => (
          <div
            key={title}
            className="flex flex-col gap-2 bg-white border border-stone-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center`}>
              <Icon className={`w-4.5 h-4.5 ${color}`} strokeWidth={2} />
            </div>
            <p className="text-stone-800 font-semibold text-sm leading-tight">
              {title}
            </p>
            <p className="text-stone-400 text-xs leading-snug">{sub}</p>
          </div>
        ))}
      </div>

    </div>
  );
}