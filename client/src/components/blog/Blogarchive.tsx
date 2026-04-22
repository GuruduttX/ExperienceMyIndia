"use client";

import { useState, useMemo } from "react";
import BlogCardsGrid from "./Blogcardsgrid";
import { BlogPostType } from "./Blogcard";

// ─── Mock data ────────────────────────────────────────────────────────────────
// Replace this with a real fetch call when the backend is ready.
// e.g. const res = await fetch("/api/blogs"); const posts: BlogPost[] = await res.json();

const ALL_POSTS: BlogPostType[] = [
  {
    id: "1",
    slug: "hidden-backwaters-kerala",
    title: "The Hidden Backwaters of Kerala No Tourist Knows About",
    excerpt:
      "Beyond the houseboats and resorts lies an untouched Kerala — silent canals, village life, and sunsets that don't make it to Instagram.",
    coverImage:
      "https://images.unsplash.com/photo-1697567464303-794509459456?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGJhY2t3YXRlcnMta2VyYWxhfGVufDB8fDB8fHww",
    tag: "Destinations",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Priya Nair",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    },
  },
  {
    id: "2",
    slug: "rajasthan-budget-road-trip",
    title: "How to Plan a Rajasthan Road Trip on a Budget",
    excerpt:
      "Royal forts, golden deserts, and street food — a full circuit of Rajasthan's best for under ₹20,000 per person.",
    coverImage:
      "https://images.unsplash.com/photo-1649073868642-bcbbd06239d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Travel Tips",
    date: "Apr 14, 2026",
    readTime: "4 min read",
    author: {
      name: "Arjun Mehra",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    },
  },
  {
    id: "3",
    slug: "meghalaya-living-root-bridges",
    title: "Meghalaya's Living Root Bridges: A Complete Guide",
    excerpt:
      "Ancient bio-engineering meets monsoon jungle. Everything you need to know before you trek to Nongriat.",
    coverImage:
      "https://images.unsplash.com/photo-1742494267580-e026d3737f65?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "North East",
    date: "Apr 10, 2026",
    readTime: "5 min read",
    author: {
      name: "Sneha Das",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    },
  },
  {
    id: "4",
    slug: "spiti-valley-summer-guide",
    title: "Spiti Valley in Summer: The Road Less Travelled",
    excerpt:
      "Barren mountains, ancient monasteries, and a silence so deep it changes you. Spiti is India's best-kept secret.",
    coverImage:
      "https://images.unsplash.com/photo-1651319493117-7c1c244132fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwaXRpLXZhbGxleS1zdW1tZXItZ3VpZGV8ZW58MHx8MHx8fDA%3D",
    tag: "Hidden Gems",
    date: "Apr 6, 2026",
    readTime: "7 min read",
    author: {
      name: "Rohan Kapoor",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    },
  },
  {
    id: "5",
    slug: "india-palace-hotels-ranked",
    title: "India's Most Iconic Palace Hotels — Ranked",
    excerpt:
      "From Udaipur's Lake Palace to Jaipur's Rambagh, we rank the palatial stays that are worth every rupee.",
    coverImage:
      "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Luxury",
    date: "Apr 2, 2026",
    readTime: "5 min read",
    author: {
      name: "Priya Nair",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    },
  },
  {
    id: "6",
    slug: "goa-beyond-the-beach",
    title: "Goa Beyond the Beach: Spice Farms, Forts & Portuguese Quarters",
    excerpt:
      "Most visitors never leave the shoreline. Here's what they're missing in Goa's lush interior.",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1753044646160-22fb1494064f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hLWJleW9uZC10aGUtYmVhY2h8ZW58MHx8MHx8fDA%3D",
    tag: "Destinations",
    date: "Mar 28, 2026",
    readTime: "5 min read",
    author: {
      name: "Arjun Mehra",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    },
  },
  {
    id: "7",
    slug: "manali-winter-travel-guide",
    title: "Manali in Winter: Snow, Silence and the Perfect Escape",
    excerpt:
      "When tourists leave and snow blankets the valley, Manali reveals its truest, most beautiful self.",
    coverImage:
      "https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Travel Tips",
    date: "Mar 22, 2026",
    readTime: "6 min read",
    author: {
      name: "Sneha Das",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    },
  },
  {
    id: "8",
    slug: "arunachal-tawang-guide",
    title: "Tawang, Arunachal Pradesh: India's Himalayan Hidden Kingdom",
    excerpt:
      "A monastery at 10,000 feet, frozen lakes, and barely any tourists. Tawang is like nowhere else in India.",
    coverImage:
      "https://images.unsplash.com/photo-1628070018796-a9f4e2dd482a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "North East",
    date: "Mar 15, 2026",
    readTime: "8 min read",
    author: {
      name: "Rohan Kapoor",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    },
  },
  {
    id: "9",
    slug: "coorg-coffee-trail",
    title: "The Coorg Coffee Trail: Plantations, Mist and Monsoons",
    excerpt:
      "Walk through endless coffee estates, stay on a working plantation, and sip the freshest cup of your life.",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Hidden Gems",
    date: "Mar 10, 2026",
    readTime: "4 min read",
    author: {
      name: "Priya Nair",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    },
  },
];

const CATEGORIES = [
  "All",
  "Destinations",
  "Travel Tips",
  "North East",
  "Hidden Gems",
  "Luxury",
];
const PAGE_SIZE = 6;

export default function BlogArchive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  // Filter
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? ALL_POSTS
        : ALL_POSTS.filter((p) => p.tag === activeCategory),
    [activeCategory],
  );

  // Paginate
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = page < totalPages;

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <section id="blog-archive" className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-1.5">
                <span className="w-4 h-px bg-orange-400" />
                Browse Articles
                </span>
                <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">
                All Stories &amp; Guides
                </h2>
          </div>

          {/* Result count */}
          <p className="text-[13px] text-gray-400 shrink-0">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="text-orange-500 font-medium">
                  {activeCategory}
                </span>
              </span>
            )}
          </p>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`shrink-0 text-[12px] font-medium px-4 py-1.5 rounded-full border transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-500 border-gray-200 hover:border-orange-300 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — child component */}
        <BlogCardsGrid posts={paginated} />

        {/* Load more */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-orange-400 text-gray-500 hover:text-orange-500 text-[13px] font-medium px-7 py-2.5 rounded-xl transition-all duration-200"
            >
              Load more articles
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M4 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* All loaded message */}
        {!hasMore && filtered.length > PAGE_SIZE && (
          <p className="text-center text-[12px] text-gray-300 mt-10 uppercase tracking-widest">
            You&apos;ve reached the end
          </p>
        )}
      </div>
    </section>
  );
}
