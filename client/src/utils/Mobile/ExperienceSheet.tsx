"use client";

import { useState } from "react";
import { ChevronDown, ArrowLeft } from "lucide-react";

export default function ExperienceSheet({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <>

            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 backdrop-blur-md z-[9998] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            <div
                className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-gray-50 rounded-t-[32px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                
                <div className="pt-3">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
                </div>

                
                <div className="flex items-center gap-3 px-5 py-4">
                    <button className="p-2 rounded-full hover:bg-gray-200" onClick={onClose}>
                        <ArrowLeft />
                    </button>
                    <h2 className="text-xl font-semibold text-gray-900">
                        India Packages
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="px-4 pb-6 space-y-4 overflow-y-auto h-[calc(90vh-80px)]">

                    <Accordion title="Popular Destinations">
                        <ListItem label="Manali" />
                        <ListItem label="Goa" />
                        <ListItem label="Kerala" />
                    </Accordion>

                    <Accordion title="Honeymoon Tour Packages">
                        <ListItem label="Kashmir Honeymoon" />
                        <ListItem label="Andaman Couple Trip" />
                    </Accordion>

                    <Accordion title="Family Tour Packages">
                        <ListItem label="Rajasthan Family Tour" />
                        <ListItem label="Kerala Family Package" />
                    </Accordion>

                    <Accordion title="Trending This Month">
                        <ListItem label="Leh Ladakh Trip" />
                        <ListItem label="Spiti Valley Adventure" />
                    </Accordion>

                </div>
            </div>
        </>
    );
}

/* 🔥 MODERN ACCORDION */
function Accordion({ title, children }: any) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-4"
            >
                <span className="text-[15px] font-semibold text-gray-800">
                    {title}
                </span>

                <ChevronDown
                    className={`transition-transform duration-300 ${open ? "rotate-180 text-orange-500" : "text-gray-400"
                        }`}
                />
            </button>

            {/* CONTENT */}
            <div
                className={`transition-all duration-300 overflow-hidden ${open ? "max-h-96 pb-2" : "max-h-0"
                    }`}
            >
                {children}
            </div>
        </div>
    );
}

/* 🔥 MODERN LIST ITEM */
function ListItem({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-between px-4 py-3 mx-2 mb-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition cursor-pointer">
            <span className="text-sm text-gray-700">{label}</span>
            <span className="text-xs text-gray-400">›</span>
        </div>
    );
}