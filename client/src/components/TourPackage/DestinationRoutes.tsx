"use client"
import { useState } from "react";

import { Home, Building2, Heart, Users, Layers, Info } from 'lucide-react'

const stays = [
  { label: "All Stays",  icon: <Home size={14} /> },
  { label: "Hotels",     icon: <Building2 size={14} /> },
  { label: "Luxury",     icon: <Heart size={14} /> },
  { label: "Homestays",  icon: <Users size={14} /> },
  { label: "Resorts",    icon: <Layers size={14} /> },
  { label: "Hostels",    icon: <Info size={14} /> },
]

const counts = [48, 32, 9, 11, 6, 5]

   const routes = [
    "Jaipur → Udaipur",
    "Jaipur → Udaipur → Jodhpur",
];





export default function DestinationRoutes(){


    const [selectedRoute, setSelectedRoute] = useState(1);
    const [selectedStay, setSelectedStay] = useState(1);

    


    return(
        <section className="space-y-12">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        Destination Routes
                    </h3>

                    <div className="space-y-3">
                        {routes.map((route, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedRoute(index)}
                                className={`px-5 py-3 rounded-xl cursor-pointer transition text-sm
                ${selectedRoute === index
                                        ? "bg-orange-50 text-orange-600 border border-orange-300"
                                        : "bg-white/70 backdrop-blur-md border border-gray-200 hover:border-orange-200"
                                    }`}
                            >
                                {route}
                            </div>
                        ))}
                    </div>
                </div> 


                 {/* 🔥 Stay */}
            <div className="mb-12">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">
                Stay Category
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Choose your accommodation
            </h3>

            <div className="flex gap-2.5 flex-wrap">
                {stays.map((stay, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedStay(index)}
                    className={`inline-flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200
                    ${selectedStay === index
                        ? "bg-orange-400 text-white font-semibold shadow-[0_2px_10px_rgba(249,115,22,0.30)] border-transparent"
                        : "bg-white border border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-500"
                    }`}
                >
                    {stay.icon}
                    {stay.label}
                </button>
                ))}
            </div>

            <p className="text-[12px] text-gray-400 mt-3.5">
                Showing {selectedStay === 0 ? "all" : ""} {counts[selectedStay]} properties
            </p>
            </div> 

        </section>
    )
}