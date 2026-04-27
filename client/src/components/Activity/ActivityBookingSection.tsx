"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { FloatingInput } from "@/utils/FloatingInput";
import { FloatingTextarea } from "@/utils/FloatingTextarea";

export default function ActivityBookingSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travellers: "1",
    message: "",
  });

  const WHATSAPP = "7302265809";

  const pricePerPerson = 499;
  const originalPrice = 799;
  const guests = parseInt(form.travellers) || 1;
  const discount = Math.round(((originalPrice - pricePerPerson) / originalPrice) * 100);
  const total = pricePerPerson * guests;

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/sembark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        const text = encodeURIComponent(
          `Activity Enquiry\n\nName: ${form.name}\nPhone: +91 ${form.phone}\nEmail: ${form.email || "N/A"}\nTravel Date: ${form.travelDate}\nTravellers: ${form.travellers}\n\nMessage:\n${form.message || "No additional message"}`
        );
        setTimeout(() => window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank"), 600);
        setForm({ name: "", email: "", phone: "", travelDate: "", travellers: "1", message: "" });
      } else {
        alert("Failed to send enquiry");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_12px_35px_rgba(15,23,42,0.08)] overflow-hidden">
 
        {/* Price row */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-gray-900">₹{pricePerPerson}</span>
              <span className="text-sm text-gray-400">/ person</span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-sm text-gray-400 line-through">₹{originalPrice}</span>
              <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                {discount}% off
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <strong>4.7</strong>
            <span className="text-gray-400 text-xs">(1.3k)</span>
          </div>
        </div>
 
        {/* Form */}
        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-1">
            Free consultation
          </p>
          <h3 className="text-[15px] font-semibold text-gray-900 mb-3">
            Plan this trip with an expert
          </h3>
 
          <FloatingInput label="Full Name" name="name" value={form.name} onChange={set("name")} required />
          <FloatingInput label="Email Address" name="email" type="email" value={form.email} onChange={set("email")} />
 
          {/* Phone with prefix */}
          <div className="flex gap-2">
            <div className="w-16 border border-gray-200 bg-gray-50 rounded-xl flex items-center justify-center text-sm text-gray-500 outline-none">
              +91
            </div>
            <div className="flex-1">
              <FloatingInput
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={set("phone")}
                required
              />
            </div>
          </div>
 
          {/* Date + Travellers */}
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <input
                type="date"
                value={form.travelDate}
                onChange={(e) => setForm((f) => ({ ...f, travelDate: e.target.value }))}
                required
                className="peer w-full rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm text-gray-900 outline-none transition-all
                  focus:border-orange-400 focus:ring-2 focus:ring-orange-100 px-3 pt-5 pb-2"
              />
              <label className="absolute left-3 top-1.5 text-[10px] font-semibold tracking-wide text-orange-500">
                Travel Date *
              </label>
            </div>
            <FloatingInput label="Travellers" name="travellers" value={form.travellers} onChange={set("travellers")} required />
          </div>
 
          <FloatingTextarea label="Message (optional)" name="message" value={form.message} onChange={set("message")} />
 
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 active:scale-[0.98] disabled:opacity-60 text-white font-semibold text-[15px] py-3 rounded-xl transition-all duration-200 shadow-md shadow-orange-200/60 mt-1"
          >
            {loading ? "Sending…" : "Get a Callback"}
          </button>
 
          {success && (
            <p className="text-center text-xs text-emerald-600 mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Enquiry sent — redirecting to WhatsApp…
            </p>
          )}
        </form>
 
        {/* WhatsApp quick link */}
        <div className="px-5 pb-4">
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 text-sm font-medium py-2.5 rounded-xl transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Price summary pill */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setPriceOpen((v) => !v)}
          className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-gray-700"
        >
          Price Summary
          {priceOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </button>
        {priceOpen && (
          <div className="px-4 pb-4 space-y-2 text-[13px] border-t border-gray-100 pt-3">
            <div className="flex justify-between text-gray-600">
              <span>₹{pricePerPerson} × {guests} {guests === 1 ? "person" : "people"}</span>
              <span className="font-semibold text-gray-800">₹{total}</span>
            </div>
            <div className="flex justify-between text-emerald-600">
              <span>Savings</span>
              <span className="font-semibold">−₹{(originalPrice - pricePerPerson) * guests}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-100 font-bold text-gray-900">
              <span>Total</span>
              <span className="text-orange-500">₹{total}</span>
            </div>
          </div>
        )}
      </div>

      {/* Trust row */}
      <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400">
        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500" />50,000+ bookings</span>
        <span className="w-px h-3 bg-gray-200" />
        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-400 fill-amber-400" />Top rated 2024</span>
      </div>
    </div>
  );
}