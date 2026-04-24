"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronRight,
  X,
  Map,
  Heart,
  Users,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

// ─── Types ─────────────────────────────────────────────────────────────────────

type Package = {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  slug: string;
};

type Category = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

// ─── Dummy data ────────────────────────────────────────────────────────────────
// Replace fetchPackages() with a real API call when backend is ready:
//   const res = await fetch(`/api/packages?category=${categoryId}&page=${page}&limit=10`)
//   return res.json()

const DUMMY_PACKAGES: Record<string, Package[]> = {
  popular: [
    {
      id: "p1",
      name: "Leh Ladakh Expedition",
      location: "Ladakh",
      duration: "7D/6N",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=120&q=70",
      slug: "leh-ladakh-expedition",
    },
    {
      id: "p2",
      name: "Spiti Valley Adventure",
      location: "Himachal",
      duration: "6D/5N",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "spiti-valley-adventure",
    },
    {
      id: "p3",
      name: "Kashmir Paradise Tour",
      location: "Kashmir",
      duration: "5D/4N",
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
      slug: "kashmir-paradise-tour",
    },
    {
      id: "p4",
      name: "Kerala Backwaters Classic",
      location: "Kerala",
      duration: "5D/4N",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=120&q=70",
      slug: "kerala-backwaters-classic",
    },
    {
      id: "p5",
      name: "Andaman Island Escape",
      location: "Andaman",
      duration: "6D/5N",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=120&q=70",
      slug: "andaman-island-escape",
    },
    {
      id: "p6",
      name: "North East Explorer",
      location: "Meghalaya",
      duration: "8D/7N",
      price: 26999,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=120&q=70",
      slug: "north-east-explorer",
    },
    {
      id: "p7",
      name: "Sikkim Gangtok Tour",
      location: "Sikkim",
      duration: "5D/4N",
      price: 16999,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&q=70",
      slug: "sikkim-gangtok-tour",
    },
    {
      id: "p8",
      name: "Rajasthan Royal Circuit",
      location: "Rajasthan",
      duration: "7D/6N",
      price: 19999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=120&q=70",
      slug: "rajasthan-royal-circuit",
    },
    {
      id: "p9",
      name: "Himachal Summer Escape",
      location: "Manali",
      duration: "4D/3N",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=120&q=70",
      slug: "himachal-summer-escape",
    },
    {
      id: "p10",
      name: "Uttarakhand Char Dham",
      location: "Uttarakhand",
      duration: "10D/9N",
      price: 32999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "uttarakhand-char-dham",
    },
    {
      id: "p11",
      name: "Darjeeling Tea Trail",
      location: "West Bengal",
      duration: "4D/3N",
      price: 11999,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&q=70",
      slug: "darjeeling-tea-trail",
    },
    {
      id: "p12",
      name: "Manali Rohtang Pass Tour",
      location: "Manali",
      duration: "5D/4N",
      price: 14999,
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=120&q=70",
      slug: "manali-rohtang-pass",
    },
  ],
  honeymoon: [
    {
      id: "h1",
      name: "Kerala Honeymoon Delight",
      location: "Kerala",
      duration: "6D/5N",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=120&q=70",
      slug: "kerala-honeymoon-delight",
    },
    {
      id: "h2",
      name: "Kashmir Couple Retreat",
      location: "Kashmir",
      duration: "5D/4N",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2FzaG1pciUyMGhvbmV5bW9vbnxlbnwwfHwwfHx8MA%3D%3D",
      slug: "kashmir-couple-retreat",
    },
    {
      id: "h3",
      name: "Andaman Romantic Escape",
      location: "Andaman",
      duration: "5D/4N",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=120&q=70",
      slug: "andaman-romantic-escape",
    },
    {
      id: "h4",
      name: "Sikkim Honeymoon Package",
      location: "Sikkim",
      duration: "5D/4N",
      price: 17999,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&q=70",
      slug: "sikkim-honeymoon-package",
    },
    {
      id: "h5",
      name: "Meghalaya Honeymoon Tour",
      location: "Meghalaya",
      duration: "6D/5N",
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=120&q=70",
      slug: "meghalaya-honeymoon-tour",
    },
    {
      id: "h6",
      name: "Rajasthan Honeymoon Royale",
      location: "Rajasthan",
      duration: "6D/5N",
      price: 20999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=120&q=70",
      slug: "rajasthan-honeymoon-royale",
    },
    {
      id: "h7",
      name: "Ladakh Honeymoon Adventure",
      location: "Ladakh",
      duration: "7D/6N",
      price: 26999,
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=120&q=70",
      slug: "ladakh-honeymoon-adventure",
    },
    {
      id: "h8",
      name: "Munnar Couple Getaway",
      location: "Kerala",
      duration: "4D/3N",
      price: 12999,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=120&q=70",
      slug: "munnar-couple-getaway",
    },
    {
      id: "h9",
      name: "Manali Honeymoon Package",
      location: "Manali",
      duration: "5D/4N",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=120&q=70",
      slug: "manali-honeymoon-package",
    },
    {
      id: "h10",
      name: "Shimla Honeymoon Escape",
      location: "Himachal",
      duration: "4D/3N",
      price: 13999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "shimla-honeymoon-escape",
    },
  ],
  family: [
    {
      id: "f1",
      name: "Rajasthan Family Tour",
      location: "Rajasthan",
      duration: "7D/6N",
      price: 21999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=120&q=70",
      slug: "rajasthan-family-tour",
    },
    {
      id: "f2",
      name: "Kerala Family Package",
      location: "Kerala",
      duration: "6D/5N",
      price: 17999,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=120&q=70",
      slug: "kerala-family-package",
    },
    {
      id: "f3",
      name: "Kashmir Family Vacation",
      location: "Kashmir",
      duration: "5D/4N",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1670684960567-a6631b892968?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      slug: "kashmir-family-vacation",
    },
    {
      id: "f4",
      name: "Andaman Family Holiday",
      location: "Andaman",
      duration: "6D/5N",
      price: 24999,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=120&q=70",
      slug: "andaman-family-holiday",
    },
    {
      id: "f5",
      name: "Sikkim Family Package",
      location: "Sikkim",
      duration: "5D/4N",
      price: 16999,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&q=70",
      slug: "sikkim-family-package",
    },
    {
      id: "f6",
      name: "Meghalaya Family Tour",
      location: "Meghalaya",
      duration: "6D/5N",
      price: 19999,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=120&q=70",
      slug: "meghalaya-family-tour",
    },
    {
      id: "f7",
      name: "Ladakh Family Adventure",
      location: "Ladakh",
      duration: "8D/7N",
      price: 28999,
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=120&q=70",
      slug: "ladakh-family-adventure",
    },
    {
      id: "f8",
      name: "Himachal Family Package",
      location: "Manali",
      duration: "5D/4N",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=120&q=70",
      slug: "himachal-family-package",
    },
    {
      id: "f9",
      name: "Uttarakhand Family Trip",
      location: "Uttarakhand",
      duration: "6D/5N",
      price: 18999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "uttarakhand-family-trip",
    },
    {
      id: "f10",
      name: "Ooty Family Getaway",
      location: "Tamil Nadu",
      duration: "4D/3N",
      price: 11999,
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=120&q=70",
      slug: "ooty-family-getaway",
    },
  ],
  trending: [
    {
      id: "t1",
      name: "Leh Ladakh Bike Trip",
      location: "Ladakh",
      duration: "10D/9N",
      price: 34999,
      image:
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=120&q=70",
      slug: "leh-ladakh-bike-trip",
    },
    {
      id: "t2",
      name: "Spiti Bike Trip",
      location: "Himachal",
      duration: "8D/7N",
      price: 28999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "spiti-bike-trip",
    },
    {
      id: "t3",
      name: "Kaziranga Wildlife Safari",
      location: "Assam",
      duration: "4D/3N",
      price: 16999,
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=120&q=70",
      slug: "kaziranga-wildlife-safari",
    },
    {
      id: "t4",
      name: "South India Grand Tour",
      location: "Multi-city",
      duration: "9D/8N",
      price: 26999,
      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=120&q=70",
      slug: "south-india-grand-tour",
    },
    {
      id: "t5",
      name: "Golden Triangle Tour",
      location: "Delhi-Agra-Jaipur",
      duration: "5D/4N",
      price: 14999,
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=120&q=70",
      slug: "golden-triangle-tour",
    },
    {
      id: "t6",
      name: "Shimla Manali Winter Trip",
      location: "Himachal",
      duration: "6D/5N",
      price: 17999,
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=120&q=70",
      slug: "shimla-manali-winter-trip",
    },
    {
      id: "t7",
      name: "Andaman Scuba Diving",
      location: "Andaman",
      duration: "5D/4N",
      price: 22999,
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=120&q=70",
      slug: "andaman-scuba-diving",
    },
    {
      id: "t8",
      name: "Valley of Flowers Trek",
      location: "Uttarakhand",
      duration: "7D/6N",
      price: 19999,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&q=70",
      slug: "valley-of-flowers-trek",
    },
  ],
};

const PAGE_SIZE = 5;

// ── Simulated fetch — swap for real API later ──────────────────────────────────
async function fetchPackages(
  categoryId: string,
  page: number,
): Promise<{ packages: Package[]; hasMore: boolean }> {
  // TODO: replace with:
  // const res = await fetch(`/api/packages?category=${categoryId}&page=${page}&limit=${PAGE_SIZE}`)
  // return res.json()
  await new Promise((r) => setTimeout(r, 400)); // simulate network delay
  const all = DUMMY_PACKAGES[categoryId] ?? [];
  const start = (page - 1) * PAGE_SIZE;
  const slice = all.slice(start, start + PAGE_SIZE);
  return { packages: slice, hasMore: start + PAGE_SIZE < all.length };
}

const CATEGORIES: Category[] = [
  {
    id: "popular",
    title: "Popular Destinations",
    icon: <Map strokeWidth={1.2} size={24}/>,
    description: "Top picks across India",
  },
  {
    id: "honeymoon",
    title: "Honeymoon Tour Packages",
    icon: <Heart strokeWidth={1.2} size={24}/>,
    description: "Romantic escapes for couples",
  },
  {
    id: "family",
    title: "Family Tour Packages",
    icon: <Users strokeWidth={1.2} size={24}/>,
    description: "Fun trips for the whole family",
  },
  {
    id: "trending",
    title: "Trending This Month",
    icon: <TrendingUp strokeWidth={1.2} size={24}/>,
    description: "What travellers are booking now",
  },
];

// ─── Package list item ────────────────────────────────────────────────────────

function PackageItem({ pkg }: { pkg: Package }) {
  return (
    <a
      href={`/tours/${pkg.slug}`}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-orange-50/60 active:bg-orange-100/60 transition-colors group"
    >
      {/* Thumbnail */}
      <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-gray-100">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-gray-800 group-hover:text-orange-500 transition-colors truncate leading-snug">
          {pkg.name}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          {pkg.location} &nbsp;·&nbsp; {pkg.duration}
        </p>
      </div>

      {/* Price + arrow */}
      <div className="flex flex-col items-end shrink-0 gap-0.5">
        <span className="text-[13px] font-bold text-orange-500">
          ₹{pkg.price.toLocaleString("en-IN")}
        </span>
        <ChevronRight
          size={14}
          strokeWidth={2}
          className="text-gray-300 group-hover:text-orange-400 transition-colors"
        />
      </div>
    </a>
  );
}

// ─── Package list with infinite scroll ────────────────────────────────────────

function PackageList({ categoryId }: { categoryId: string }) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // All mutable state kept in refs so the IntersectionObserver
  // callback always sees current values without stale closures.
  const stateRef = useRef({
    page: 1,
    hasMore: true,
    loading: false,
    categoryId,
  });

  // Sync refs whenever state changes
  useEffect(() => {
    stateRef.current.page = page;
  }, [page]);
  useEffect(() => {
    stateRef.current.hasMore = hasMore;
  }, [hasMore]);
  useEffect(() => {
    stateRef.current.loading = loading;
  }, [loading]);
  useEffect(() => {
    stateRef.current.categoryId = categoryId;
  }, [categoryId]);

  // Core fetch function — reads page from argument, not from closure
  const doFetch = useCallback(async (pageToLoad: number, cat: string) => {
    if (stateRef.current.loading) return;
    stateRef.current.loading = true;
    setLoading(true);
    const res = await fetchPackages(cat, pageToLoad);
    // Deduplicate by id in case of any double-trigger in dev
    setPackages((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const fresh = res.packages.filter((p) => !existingIds.has(p.id));
      return [...prev, ...fresh];
    });
    setHasMore(res.hasMore);
    setPage(pageToLoad + 1);
    stateRef.current.loading = false;
    setLoading(false);
  }, []);

  // Reset + load page 1 whenever category changes.
  // The cleanup fn sets a cancelled flag so the Strict Mode
  // double-invoke of this effect doesn't double-append.
  useEffect(() => {
    let cancelled = false;
    setPackages([]);
    setHasMore(true);
    setPage(1);
    stateRef.current = { page: 1, hasMore: true, loading: false, categoryId };

    const run = async () => {
      if (cancelled) return;
      stateRef.current.loading = true;
      setLoading(true);
      const res = await fetchPackages(categoryId, 1);
      if (cancelled) return; // Strict Mode unmounted & remounted — bail
      setPackages(res.packages); // set, not append — eliminates duplicates
      setHasMore(res.hasMore);
      setPage(2);
      stateRef.current.page = 2;
      stateRef.current.hasMore = res.hasMore;
      stateRef.current.loading = false;
      setLoading(false);
    };
    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);

  // IntersectionObserver — only loads pages 2+ via refs (no stale closures)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const {
          page: p,
          hasMore: hm,
          loading: ld,
          categoryId: cat,
        } = stateRef.current;
        if (entries[0].isIntersecting && !ld && hm && p > 1) {
          doFetch(p, cat);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [doFetch]);

  return (
    <div className="flex flex-col">
      {packages.map((pkg) => (
        <PackageItem key={pkg.id} pkg={pkg} />
      ))}

      {/* Sentinel — triggers next page load when scrolled into view */}
      <div ref={sentinelRef} className="h-4" />

      {loading && (
        <div className="flex justify-center py-4">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}

      {!hasMore && packages.length > 0 && (
        <p className="text-center text-[11px] text-gray-300 uppercase tracking-widest py-4">
          All packages loaded
        </p>
      )}
    </div>
  );
}

// ─── Main sheet ───────────────────────────────────────────────────────────────

export default function ExperienceSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const currentY = useRef(0);
  const isDragging = useRef(false);

  // Reset drill-down when sheet closes
  useEffect(() => {
    if (!isOpen) setTimeout(() => setActiveCategory(null), 400);
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
    if (sheetRef.current) sheetRef.current.style.transition = "none";
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const y = e.touches[0].clientY;
    if (y > startY.current) {
      currentY.current = y - startY.current;
      if (sheetRef.current)
        sheetRef.current.style.transform = `translateX(-0%) translateY(${currentY.current}px)`;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    if (sheetRef.current) {
      sheetRef.current.style.transition = "";
      sheetRef.current.style.transform = "";
    }
    if (currentY.current > 100) onClose();
    currentY.current = 0;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-[#f8f9fa] rounded-t-[28px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle */}
        <div
          className="pt-3 pb-2 cursor-grab active:cursor-grabbing shrink-0"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-10 h-1 bg-gray-300/70 rounded-full mx-auto" />
        </div>

        {/* ── Header ── */}
        <div className="flex items-center gap-3 px-5 py-3 border-b border-gray-200/60 shrink-0">
          {activeCategory ? (
            <button
              onClick={() => setActiveCategory(null)}
              className="p-2 -ml-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="p-2 -ml-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
            >
              <X size={18} strokeWidth={1.8} />
            </button>
          )}

          <div className="flex-1 min-w-0">
            <h2 className="text-[18px] font-bold text-gray-900 tracking-tight truncate">
              {activeCategory ? activeCategory.title : "India Packages"}
            </h2>
            {activeCategory && (
              <p className="text-[11px] text-gray-400 mt-0.5">
                {activeCategory.description}
              </p>
            )}
          </div>

          {/* Orange pill indicator showing category */}
          {!activeCategory && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full">
              India
            </span>
          )}
        </div>

        {/* ── Body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {/* Category list view */}
          {!activeCategory && (
            <div className="px-4 py-3 space-y-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className="w-full flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-4 hover:border-orange-200 hover:shadow-sm active:bg-orange-50/30 transition-all text-left group"
                >
                  {/* Icon */}
                  <span className="text-2xl shrink-0 text-orange-500">{cat.icon}</span>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                      {cat.title}
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors shrink-0">
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors"
                    />
                  </div>
                </button>
              ))}

              {/* Bottom hint */}
              <p className="text-center text-[11px] text-gray-300 pt-2 pb-4">
                Tap a category to explore packages
              </p>
            </div>
          )}

          {/* Package drill-down view */}
          {activeCategory && (
            <div className="px-3 py-2 pb-8">
              <PackageList categoryId={activeCategory.id} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
