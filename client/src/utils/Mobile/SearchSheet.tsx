"use client";

import { X, ArrowLeft } from "lucide-react";

export default function SearchSheet({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <>
            {/* OVERLAY */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            />

            {/* SHEET (90% HEIGHT) */}
            <div
                className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-gray-50 rounded-t-[32px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                {/* HANDLE */}
                <div className="pt-3 pb-1">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto" />
                </div>

                {/* HEADER */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-t-[32px] border-b">
                    <button onClick={onClose}>
                        <ArrowLeft />
                    </button>

                    <input
                        type="text"
                        placeholder="Search for destinations"
                        className="flex-1 bg-gray-100 px-4 py-2 rounded-xl outline-none text-sm"
                    />

                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="px-4 py-5 space-y-6 overflow-y-auto h-[calc(90vh-140px)]">

                    {/* PRODUCT TYPE */}
                    <Section title="Product Type">
                        <Chip label="Tour" />
                        <Chip label="Activity" />
                    </Section>

                    {/* TRIP DURATION */}
                    <Section title="Trip Duration">
                        <Chip label="Upto 1 Day" />
                        <Chip label="2 to 3 days" />
                        <Chip label="3 to 5 days" />
                        <Chip label="5 to 7 days" />
                        <Chip label="7+ Days" />
                    </Section>

                    {/* PRICE RANGE */}
                    <div>
                        <h3 className="text-sm font-semibold mb-3 text-gray-800">
                            Price Range
                        </h3>

                        <input type="range" className="w-full accent-orange-500" />

                        <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>₹0</span>
                            <span>₹500000</span>
                        </div>
                    </div>

                </div>


                <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t">
                    <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-xl font-medium shadow-md active:scale-95 transition">
                        Search For Products
                    </button>
                </div>
            </div>
        </>
    );
}

/* SECTION */
function Section({ title, children }: any) {
    return (
        <div>
            <h3 className="text-sm font-semibold mb-3 text-gray-800">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">{children}</div>
        </div>
    );
}

/* CHIP (MODERN STYLE) */
function Chip({ label }: { label: string }) {
    return (
        <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-100 active:scale-95 transition">
            {label}
        </button>
    );
}