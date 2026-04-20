"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

type Category = "all" | "destinations" | "activities" | "stays";

const images = [
    // 🔥 DESTINATIONS (India)
    { src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Taj Mahal
    { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Hawa Mahal
    { src: "https://images.unsplash.com/photo-1587135991058-8816b028691f?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Amber Fort
    { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Jaipur
    { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Varanasi
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Kerala
    { src: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Himalayas
    { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Ladakh
    { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Golden Temple
    // 🔥 ACTIVITIES
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", category: "activities" }, // Trekking
    { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80", category: "activities" },

    // 🔥 STAYS (Luxury Hotels)
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", category: "stays" },

    // 🔥 EXTRA DESTINATIONS (more India vibes)
    { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80", category: "destinations" }, // Red Fort
    { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
];

export default function ImageGallery({ isOpen, onClose }: Props) {
    const [active, setActive] = useState<Category>("all");

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    const filtered =
        active === "all"
            ? images
            : images.filter((img) => img.category === active);

    const count = (cat: Category) =>
        cat === "all"
            ? images.length
            : images.filter((i) => i.category === cat).length;

    return (
        <div
            className={`fixed inset-0 z-[999] transition ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            {/* BACKDROP */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* PANEL */}
            <div
                className={`absolute inset-0 bg-white transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* HEADER */}
                <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">

                    <button
                        onClick={onClose}
                        className="flex items-center gap-2 text-sm text-gray-700"
                    >
                        <X size={18} />
                        Close
                    </button>

                    {/* 🔥 TABS */}
                    <div className="flex gap-8 text-sm">
                        {["all", "destinations", "activities", "stays"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat as Category)}
                                className={`pb-1 transition ${active === cat
                                    ? "text-orange-500 border-b-2 border-orange-500"
                                    : "text-gray-500 hover:text-black"
                                    }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)} ({count(cat as Category)})
                            </button>
                        ))}
                    </div>

                    <div />
                </div>

                {/* GRID */}
                <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {filtered.map((img, i) => (
                            <div
                                key={i}
                                className="relative group overflow-hidden rounded-xl"
                            >
                                <Image
                                    src={img.src}
                                    alt="india travel"
                                    width={600}
                                    height={400}
                                    className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}