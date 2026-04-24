"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronRight,
  X,
  Waves,
  Mountain,
  Trees,
  Camera,
} from "lucide-react";
import Image from "next/image";

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

const DUMMY_PACKAGES: Record<string, Package[]> = {
  water: [
    {
      id: "w1",
      name: "Scuba Diving in Havelock",
      location: "Andaman",
      duration: "1 Day",
      price: 5499,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=70",
      slug: "scuba-diving-havelock",
    },
    {
      id: "w2",
      name: "Jet Ski Ride at Baga Beach",
      location: "Goa",
      duration: "30 Min",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=70",
      slug: "jet-ski-baga-beach",
    },
    {
      id: "w3",
      name: "River Rafting in Rishikesh",
      location: "Uttarakhand",
      duration: "Half Day",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&q=70",
      slug: "river-rafting-rishikesh",
    },
    {
      id: "w4",
      name: "Snorkeling at Elephant Beach",
      location: "Andaman",
      duration: "2 Hours",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=900&q=70",
      slug: "snorkeling-elephant-beach",
    },
    {
      id: "w5",
      name: "Kayaking in Alleppey Backwaters",
      location: "Kerala",
      duration: "3 Hours",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=70",
      slug: "kayaking-alleppey-backwaters",
    },
    {
      id: "w6",
      name: "Banana Boat Ride in Nagoa",
      location: "Diu",
      duration: "20 Min",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=70",
      slug: "banana-boat-nagoa",
    },
  ],
  mountain: [
    {
      id: "m1",
      name: "Paragliding in Bir Billing",
      location: "Himachal",
      duration: "1 Day",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&q=70",
      slug: "paragliding-bir-billing",
    },
    {
      id: "m2",
      name: "ATV Ride in Solang Valley",
      location: "Manali",
      duration: "45 Min",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=70",
      slug: "atv-ride-solang-valley",
    },
    {
      id: "m3",
      name: "Bungee Jumping in Rishikesh",
      location: "Uttarakhand",
      duration: "2 Hours",
      price: 3799,
      image:
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=900&q=70",
      slug: "bungee-jumping-rishikesh",
    },
    {
      id: "m4",
      name: "Zipline Adventure in Mussoorie",
      location: "Uttarakhand",
      duration: "1 Hour",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=70",
      slug: "zipline-mussoorie",
    },
    {
      id: "m5",
      name: "Camel Safari in Jaisalmer Dunes",
      location: "Rajasthan",
      duration: "Evening",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=70",
      slug: "camel-safari-jaisalmer",
    },
    {
      id: "m6",
      name: "Quad Biking in Leh",
      location: "Ladakh",
      duration: "1 Hour",
      price: 2599,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=70",
      slug: "quad-biking-leh",
    },
  ],
  nature: [
    {
      id: "n1",
      name: "Wildlife Safari in Ranthambore",
      location: "Rajasthan",
      duration: "Half Day",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=70",
      slug: "wildlife-safari-ranthambore",
    },
    {
      id: "n2",
      name: "Tea Garden Walk in Munnar",
      location: "Kerala",
      duration: "2 Hours",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=70",
      slug: "tea-garden-walk-munnar",
    },
    {
      id: "n3",
      name: "Mangrove Boat Tour in Sundarbans",
      location: "West Bengal",
      duration: "1 Day",
      price: 3299,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=70",
      slug: "mangrove-boat-tour-sundarbans",
    },
    {
      id: "n4",
      name: "Birdwatching in Bharatpur",
      location: "Rajasthan",
      duration: "Morning",
      price: 1199,
      image:
        "https://images.unsplash.com/photo-1501706362039-c6e80948f11f?w=900&q=70",
      slug: "birdwatching-bharatpur",
    },
    {
      id: "n5",
      name: "Jeep Safari in Jim Corbett",
      location: "Uttarakhand",
      duration: "Half Day",
      price: 2899,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900&q=70",
      slug: "jeep-safari-jim-corbett",
    },
    {
      id: "n6",
      name: "Houseboat Sunset Cruise",
      location: "Kerala",
      duration: "Evening",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=900&q=70",
      slug: "houseboat-sunset-cruise",
    },
  ],
  culture: [
    {
      id: "c1",
      name: "Old Delhi Food Walk",
      location: "Delhi",
      duration: "3 Hours",
      price: 1699,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=70",
      slug: "old-delhi-food-walk",
    },
    {
      id: "c2",
      name: "Jaipur Heritage Night Tour",
      location: "Rajasthan",
      duration: "Evening",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&q=70",
      slug: "jaipur-heritage-night-tour",
    },
    {
      id: "c3",
      name: "Pottery Workshop in Jaipur",
      location: "Rajasthan",
      duration: "2 Hours",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?w=900&q=70",
      slug: "pottery-workshop-jaipur",
    },
    {
      id: "c4",
      name: "Kathakali Performance Experience",
      location: "Kerala",
      duration: "1.5 Hours",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?w=900&q=70",
      slug: "kathakali-performance-experience",
    },
    {
      id: "c5",
      name: "Varanasi Ganga Aarti Tour",
      location: "Uttar Pradesh",
      duration: "Evening",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=900&q=70",
      slug: "varanasi-ganga-aarti-tour",
    },
    {
      id: "c6",
      name: "Goan Cooking Class",
      location: "Goa",
      duration: "Half Day",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900&q=70",
      slug: "goan-cooking-class",
    },
  ],
};

const PAGE_SIZE = 5;

async function fetchPackages(
  categoryId: string,
  page: number,
): Promise<{ packages: Package[]; hasMore: boolean }> {
  await new Promise((r) => setTimeout(r, 400));
  const all = DUMMY_PACKAGES[categoryId] ?? [];
  const start = (page - 1) * PAGE_SIZE;
  const slice = all.slice(start, start + PAGE_SIZE);
  return { packages: slice, hasMore: start + PAGE_SIZE < all.length };
}

const CATEGORIES: Category[] = [
  {
    id: "water",
    title: "Water Activities",
    icon: <Waves strokeWidth={1.2} size={24} />,
    description: "Beach, diving, rafting and island fun",
  },
  {
    id: "mountain",
    title: "Adventure Activities",
    icon: <Mountain strokeWidth={1.2} size={24} />,
    description: "Thrilling outdoor experiences across India",
  },
  {
    id: "nature",
    title: "Nature & Wildlife",
    icon: <Trees strokeWidth={1.2} size={24} />,
    description: "Safaris, trails and scenic eco experiences",
  },
  {
    id: "culture",
    title: "Cultural Experiences",
    icon: <Camera strokeWidth={1.2} size={24} />,
    description: "Food walks, workshops and local traditions",
  },
];

function PackageItem({ pkg }: { pkg: Package }) {
  return (
    <a
      href={`/activities/${pkg.slug}`}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-orange-50/60 active:bg-orange-100/60 transition-colors group"
    >
      <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-gray-100">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          sizes="44px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-gray-800 group-hover:text-orange-500 transition-colors truncate leading-snug">
          {pkg.name}
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          {pkg.location} &nbsp;·&nbsp; {pkg.duration}
        </p>
      </div>

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

function PackageList({ categoryId }: { categoryId: string }) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef({
    page: 1,
    hasMore: true,
    loading: false,
    categoryId,
  });

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

  const doFetch = useCallback(async (pageToLoad: number, cat: string) => {
    if (stateRef.current.loading) return;
    stateRef.current.loading = true;
    setLoading(true);
    const res = await fetchPackages(cat, pageToLoad);
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

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPackages([]);
    setHasMore(true);
    setPage(1);
    stateRef.current = { page: 1, hasMore: true, loading: false, categoryId };

    const run = async () => {
      if (cancelled) return;
      stateRef.current.loading = true;
      setLoading(true);
      const res = await fetchPackages(categoryId, 1);
      if (cancelled) return;
      setPackages(res.packages);
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
  }, [categoryId]);

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
          All activities loaded
        </p>
      )}
    </div>
  );
}

export default function ActivitiesSheet({
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
      if (sheetRef.current) {
        sheetRef.current.style.transform = `translateX(-0%) translateY(${currentY.current}px)`;
      }
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
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        ref={sheetRef}
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[90vh] bg-[#f8f9fa] rounded-t-[28px] shadow-2xl z-[9999] transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="pt-3 pb-2 cursor-grab active:cursor-grabbing shrink-0"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="w-10 h-1 bg-gray-300/70 rounded-full mx-auto" />
        </div>

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
              {activeCategory ? activeCategory.title : "Activities in India"}
            </h2>
            {activeCategory && (
              <p className="text-[11px] text-gray-400 mt-0.5">
                {activeCategory.description}
              </p>
            )}
          </div>

          {!activeCategory && (
            <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full">
              Explore
            </span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain">
          {!activeCategory && (
            <div className="px-4 py-3 space-y-2.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat)}
                  className="w-full flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-4 hover:border-orange-200 hover:shadow-sm active:bg-orange-50/30 transition-all text-left group"
                >
                  <span className="text-2xl shrink-0 text-orange-500">
                    {cat.icon}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                      {cat.title}
                    </p>
                    <p className="text-[12px] text-gray-400 mt-0.5">
                      {cat.description}
                    </p>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center transition-colors shrink-0">
                    <ChevronRight
                      size={16}
                      strokeWidth={2}
                      className="text-gray-400 group-hover:text-orange-500 transition-colors"
                    />
                  </div>
                </button>
              ))}

              <p className="text-center text-[11px] text-gray-300 pt-2 pb-4">
                Tap a category to explore activities
              </p>
            </div>
          )}

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
