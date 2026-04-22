"use client";

import { Star , Check, Lock, RefreshCcw, Phone, ArrowRight } from "lucide-react";
import { QuickInclusion } from "./QuickInclusion";
import { TripTimeline } from "./TripTimeline";
import  TourOptions from '@/components/TourPackage/TourOptions'
import TourSideForm from "./TourSideForm";



export default function TourDetails() {
    return (
        <section className="w-full bg-white pt-12 px-6 md:px-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 ">

                {/* LEFT */}
                <div className="lg:col-span-2 space-y-12">

                    {/* TITLE */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">
                        Luxury Rajasthan, Smart Price – Full Circuit
                    </h1>

                    <div className="lg:hidden">
                        <TourSideForm variant="compact" />
                    </div>


                    <div className="space-y-16">

                    <TripTimeline/>

                    {/* Quick Inclusion */}
                    <QuickInclusion/>
                    
                    <TourOptions/>

                    </div>

                    
                    


                </div>

                {/* RIGHT - PRICING */}
                <div className="hidden lg:col-span-1 lg:block">

                    <div className="bg-white rounded-2xl border border-white/40 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.07)] sticky top-24 h-fit w-full max-w-sm mx-auto lg:mx-0">
                        {/* Top accent stripe */}
                        <div className="h-[3px] bg-gradient-to-r from-orange-400 to-orange-600" />

                        <div className="p-5">

                            {/* Sale badge */}
                            <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                            <span className="text-[11px] font-semibold text-orange-700 uppercase tracking-wide">Summer Holiday Sale</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-2.5 mb-1">
                            <h2 className="text-[28px] font-bold text-gray-900 leading-none">₹36,769</h2>
                            <span className="text-[13px] text-gray-400 line-through mb-0.5">₹51,769</span>
                            </div>
                            <p className="text-[12px] text-gray-500 mb-3.5">per adult · incl. taxes</p>

                            {/* Savings pill */}
                            <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-md px-2.5 py-1 mb-4">
                            <Check size={12} className="text-green-600" strokeWidth={2.5} />
                            <span className="text-[12px] font-semibold text-green-700">You save ₹15,000 · 29% off</span>
                            </div>

                            <hr className="border-gray-100 mb-3.5" />

                            {/* Rating */}
                            <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                                {[1,2,3,4].map(i => <Star key={i} size={13} className="text-orange-400" fill="currentColor" />)}
                                <Star size={13} className="text-orange-200" fill="currentColor" />
                                <span className="text-[13px] font-bold text-gray-900 ml-1">4.6</span>
                                <span className="text-[12px] text-gray-400"> (1.3k)</span>
                            </div>
                            <span className="text-[11px] font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-md">Verified</span>
                            </div>

                            {/* Trust row */}
                            <div className="flex gap-2 mb-5">
                            {[
                                { icon: <Lock size={16} strokeWidth={1.8} />, label: "Secure\nBooking" },
                                { icon: <RefreshCcw size={16} strokeWidth={1.8} />, label: "Free\nCancel" },
                                { icon: <Phone size={16} strokeWidth={1.8} />, label: "24/7\nSupport" },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex-1 flex flex-col items-center gap-1.5 bg-gray-50 rounded-lg py-2.5">
                                <span className="text-gray-400">{icon}</span>
                                <span className="text-[10px] text-gray-500 font-medium text-center leading-tight whitespace-pre">{label}</span>
                                </div>
                            ))}
                            </div>

                            {/* CTA */}
                            <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer">
                            Send Enquiry
                            <ArrowRight size={16} strokeWidth={2.5} />
                            </button>

                            <p className="text-center text-[11px] text-gray-400 mt-2.5">
                            No payment needed · <span className="text-orange-500 font-medium">Instant confirmation</span>
                            </p>

                        </div>
            </div>

                </div>
            
            </div>
        </section>
    );
}
