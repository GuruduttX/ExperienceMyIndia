"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Star, MapPin, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const ratingData = [
    { star: 5, count: 398 },
    { star: 4, count: 146 },
    { star: 3, count: 20 },
    { star: 2, count: 5 },
    { star: 1, count: 2 },
];

const reviews = [
    {
        name: "Farheensultana",
        date: "20 Feb 2026",
        location: "Hyderabad",
        rating: 5,
        package: "Romantic Escape to Kashmir | FREE Excursion to Gulmarg",
        packageLink: "#",
        text: "I recently explored Kashmir with Thrillophilia, and it was a fantastic experience. The trip was perfectly organized, the stays were great, and the support team was always helpful. Kashmir's scenic beauty made the journey truly unforgettable. Would definitely travel with them again!",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200",
        images: [
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
            "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
        ],
    },
    {
        name: "Ranganatha Guru",
        date: "19 Jan 2026",
        location: "Bangalore",
        rating: 5,
        package: "Romantic Escape to Kashmir | FREE Excursion to Gulmarg",
        packageLink: "#",
        text: "The trip to Kashmir was nothing short of incredible. Every detail was crafted so perfectly from the airport pickup to the final drop, that the entire journey felt seamless and stress-free. The hotels were simply magical, offering breathtaking mountain views that felt straight out of a dream. Our cab driver wasn't just a driver but a wonderful guide, making every journey informative and enjoyable. The 6 nights and 7 days itinerary was thoughtfully planned and covered most of the iconic destinations in Kashmir. Visiting these beautiful places filled me with pure happiness. The trip also included unique experiences like a houseboat stay and a visit to the iconic Dal Lake.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        images: [
            "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800",
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800",
        ],
        totalImages: 43,
    },
    {
        name: "Dhruv Prajapati",
        date: "06 Apr 2026",
        location: "Ahmedabad",
        rating: 5,
        package: "Royal Rajasthan Desert Safari & Heritage Tour",
        packageLink: "#",
        text: "Rajasthan tour ekdum amazing tha! Desert safari aur royal stays unforgettable experience tha. Planning aur hotels sab top-notch the. Highly recommended for anyone who wants to experience the royal side of India!",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200",
        images: [
            "https://images.unsplash.com/photo-1599030584800-7b31d48ee8f8?q=80&w=800",
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800",
            "https://images.unsplash.com/photo-1557939574-a2f6b57e7b3f?q=80&w=800",
        ],
    },
];

/* ─── LIGHTBOX ─────────────────────────────────────────── */

interface LightboxState {
    images: string[];
    total: number;
    index: number;
}

function Lightbox({
    images,
    total,
    index: startIndex,
    onClose,
}: LightboxState & { onClose: () => void }) {
    const [current, setCurrent] = useState(startIndex);
    const [thumbStart, setThumbStart] = useState(Math.max(0, startIndex - 4));

    const prev = useCallback(() => {
        setCurrent((c) => {
            const n = (c - 1 + images.length) % images.length;
            setThumbStart(Math.max(0, n - 4));
            return n;
        });
    }, [images.length]);

    const next = useCallback(() => {
        setCurrent((c) => {
            const n = (c + 1) % images.length;
            setThumbStart(Math.min(Math.max(0, images.length - 8), Math.max(0, n - 4)));
            return n;
        });
    }, [images.length]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
            else if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next, onClose]);

    const visibleThumbs = images.slice(thumbStart, thumbStart + 8);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none">
            {/* Close */}
            <button
                onClick={onClose}
                className="absolute top-5 right-6 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Close"
            >
                <X size={28} strokeWidth={1.5} />
            </button>

            {/* Main image */}
            <div className="relative flex items-center justify-center w-full flex-1 px-20 py-6">
                <button
                    onClick={prev}
                    className="absolute left-5 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black shadow-xl transition-all active:scale-95"
                    aria-label="Previous"
                >
                    <ChevronLeft size={22} />
                </button>

                <div className="relative w-full max-w-[580px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={images[current]}
                        alt={`Photo ${current + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <button
                    onClick={next}
                    className="absolute right-5 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black shadow-xl transition-all active:scale-95"
                    aria-label="Next"
                >
                    <ChevronRight size={22} />
                </button>
            </div>

            {/* Counter */}
            <p className="text-white font-bold text-base tracking-widest mb-4">
                {current + 1}/{total}
            </p>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-2 pb-8 px-6">
                {thumbStart > 0 && (
                    <button
                        onClick={() => setThumbStart((s) => Math.max(0, s - 1))}
                        className="text-white/70 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                {visibleThumbs.map((src, i) => {
                    const idx = thumbStart + i;
                    return (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`relative w-[96px] h-[64px] rounded-md overflow-hidden flex-shrink-0 transition-all duration-150 ${
                                idx === current
                                    ? "ring-2 ring-white ring-offset-1 ring-offset-black scale-105 opacity-100"
                                    : "opacity-50 hover:opacity-80"
                            }`}
                        >
                            <Image src={src} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
                        </button>
                    );
                })}

                {thumbStart + 8 < images.length && (
                    <button
                        onClick={() => setThumbStart((s) => Math.min(images.length - 8, s + 1))}
                        className="text-white/70 hover:text-white transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}

/* ─── REVIEW CARD ──────────────────────────────────────── */

const PREVIEW_LENGTH = 280;

function ReviewCard({
    review,
    onImageClick,
}: {
    review: (typeof reviews)[0];
    onImageClick: (images: string[], total: number, index: number) => void;
}) {
    const [expanded, setExpanded] = useState(false);
    const isLong = review.text.length > PREVIEW_LENGTH;
    const displayText =
        expanded || !isLong ? review.text : review.text.slice(0, PREVIEW_LENGTH) + "...";

    const totalImages = (review as any).totalImages ?? review.images.length;
    const visibleImages = review.images.slice(0, 5);
    const extraCount = totalImages - 5;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 transition-shadow hover:shadow-md">
            {/* Top row */}
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                        <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 text-[15px] tracking-wide uppercase">
                            {review.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">Reviewed: {review.date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-green-600 font-semibold text-sm">
                    <Star size={14} fill="currentColor" className="text-green-500" />
                    {review.rating}.0/5
                </div>
            </div>

            {/* Package + location */}
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3 text-sm">
                <div className="flex items-center gap-1 text-gray-600 flex-wrap">
                    <span className="font-medium text-gray-700">Booked:</span>
                    <a
                        href={review.packageLink}
                        className="text-orange-500 hover:text-orange-600 flex items-center gap-1 font-medium"
                    >
                        {review.package}
                        <ExternalLink size={12} />
                    </a>
                </div>
                <div className="flex items-center gap-1 text-gray-600 font-medium whitespace-nowrap">
                    <span>Travelled From:</span>
                    <MapPin size={13} className="text-gray-500" />
                    <span className="font-bold text-gray-900">{review.location}</span>
                </div>
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {displayText}
                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="ml-1 text-gray-900 font-semibold hover:underline"
                    >
                        {expanded ? "Show Less" : "Read More"}
                    </button>
                )}
            </p>

            {/* Image gallery */}
            {visibleImages.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                    {visibleImages.map((src, i) => {
                        const isLast = i === visibleImages.length - 1 && extraCount > 0;
                        return (
                            <button
                                key={i}
                                onClick={() => onImageClick(review.images, totalImages, i)}
                                className="relative w-[130px] h-[90px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group"
                            >
                                <Image
                                    src={src}
                                    alt={`Photo ${i + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                                />
                                {isLast && (
                                    <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-white font-bold text-lg leading-tight">
                                            ({extraCount}+)
                                        </span>
                                        <span className="text-white text-xs font-medium">View All</span>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/* ─── MAIN SECTION ─────────────────────────────────────── */

export default function ReviewWithImage() {
    const total = ratingData.reduce((acc, r) => acc + r.count, 0);
    const [lightbox, setLightbox] = useState<LightboxState | null>(null);

    return (
        <section className="w-full bg-white pt-5 pb-10 px-6 md:px-0">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold">Traveler Reviews</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Real experiences shared by our explorers across India
                    </p>
                </div>

                {/* Rating summary */}
                <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-5xl font-bold text-gray-900">4.7</h3>
                            <div className="flex gap-1 text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Based on {total}+ verified travelers</p>
                    </div>
                    <div className="space-y-2.5">
                        {ratingData.map((item) => {
                            const pct = (item.count / total) * 100;
                            return (
                                <div key={item.star} className="flex items-center gap-3">
                                    <span className="text-sm w-6 text-gray-700">{item.star}★</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-orange-400 rounded-full"
                                            style={{ width: `${pct}%` }}
                                        />
                                    </div>
                                    <span className="text-xs text-gray-500 w-8 text-right">
                                        {item.count}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Reviews */}
                <div className="space-y-5">
                    {reviews.map((review, i) => (
                        <ReviewCard
                            key={i}
                            review={review}
                            onImageClick={(images, total, index) =>
                                setLightbox({ images, total, index })
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox portal */}
            {lightbox && (
                <Lightbox {...lightbox} onClose={() => setLightbox(null)} />
            )}
        </section>
    );
}