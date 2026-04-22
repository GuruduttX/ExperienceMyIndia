"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

type Category = "all" | "destinations" | "activities" | "stays";
const categories: Category[] = ["all", "destinations", "activities", "stays"];

const images: { src: string; category: Exclude<Category, "all"> }[] = [
    { src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1587135991058-8816b028691f?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80", category: "activities" },
    { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", category: "stays" },
    { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
    { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80", category: "destinations" },
];

function getCategoryLabel(category: Category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function ImageGallery({ isOpen, onClose }: Props) {
    const [active, setActive] = useState<Category>("all");

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const filtered = active === "all" ? images : images.filter((img) => img.category === active);

    const count = (category: Category) => (
        category === "all" ? images.length : images.filter((img) => img.category === category).length
    );

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Tour image gallery"
            className={`fixed inset-0 z-[999] transition ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
            <button
                type="button"
                aria-label="Close gallery backdrop"
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            <div
                className={`absolute inset-0 bg-white transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center justify-between gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex h-10 items-center gap-2 rounded-full border border-gray-200 px-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:h-auto sm:border-0 sm:px-0 sm:hover:bg-transparent"
                        >
                            <X size={18} />
                            Close
                        </button>

                        <p className="text-sm font-semibold text-gray-900 sm:hidden">Gallery</p>
                        <span className="w-[82px] sm:hidden" />
                    </div>

                    <div className="mt-3 flex gap-2 overflow-x-auto whitespace-nowrap pb-1 text-sm [-ms-overflow-style:none] [scrollbar-width:none] sm:absolute sm:left-1/2 sm:top-1/2 sm:mt-0 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:gap-8 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActive(category)}
                                className={`rounded-full border px-3 py-2 text-xs font-semibold transition cursor-pointer sm:rounded-none sm:border-0 sm:px-0 sm:py-0 sm:pb-1 sm:text-sm ${
                                    active === category
                                        ? "border-orange-500 bg-orange-50 text-orange-600 sm:border-b-2 sm:bg-transparent sm:text-orange-500"
                                        : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-black"
                                }`}
                            >
                                {getCategoryLabel(category)} ({count(category)})
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-[calc(100dvh-105px)] overflow-y-auto px-3 py-4 sm:h-[calc(100vh-80px)] sm:p-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
                        {filtered.map((img, index) => (
                            <div
                                key={`${img.src}-${index}`}
                                className="group relative overflow-hidden rounded-xl bg-gray-100"
                            >
                                <Image
                                    src={img.src}
                                    alt="India travel"
                                    width={600}
                                    height={400}
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                    className="h-[145px] w-full object-cover transition duration-700 group-hover:scale-105 min-[420px]:h-[170px] sm:h-[240px] lg:h-[260px]"
                                />
                                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
