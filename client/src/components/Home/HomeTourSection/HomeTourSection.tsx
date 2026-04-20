"use client";

import { useRef } from "react";
import { HomeTourCard } from "./HomeTourCard";

const tours = [
  {
    title: "Golden Triangle Tour | Delhi, Agra & Jaipur",
    duration: "5 days & 4 nights",
    rating: 4.7,
    price: "24,999",
    oldPrice: "32,999",
    location: "Delhi • Agra • Jaipur",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a",
    ],
  },
  {
    title: "Himachal Escape | Manali & Kasol Trip",
    duration: "6 days & 5 nights",
    rating: 4.8,
    price: "18,499",
    oldPrice: "25,999",
    location: "Manali • Kasol • Kullu",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    ],
  },
  {
    title: "Kerala Backwaters | Munnar & Alleppey",
    duration: "5 days & 4 nights",
    rating: 4.9,
    price: "21,999",
    oldPrice: "29,999",
    location: "Munnar • Alleppey • Kochi",
    images: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
    ],
  },
  {
    title: "Goa Beach Escape | North & South Goa",
    duration: "4 days & 3 nights",
    rating: 4.6,
    price: "14,999",
    oldPrice: "19,999",
    location: "North Goa • South Goa",
    images: [
      "https://images.unsplash.com/photo-1587922546307-776227941871",
      "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd",
      "https://images.unsplash.com/photo-1590608897129-79da98d15969",
    ],
  },
  {
    title: "Kashmir Paradise | Srinagar & Gulmarg",
    duration: "6 days & 5 nights",
    rating: 4.9,
    price: "27,999",
    oldPrice: "36,999",
    location: "Srinagar • Gulmarg • Pahalgam",
    images: [
      "https://images.unsplash.com/photo-1595815771614-ade501c1e1e3",
      "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    ],
  },
];

export default function HomeTourSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-[80vw] mx-auto py-16">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-semibold">Explore India</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
          >
            →
          </button>

          <button className="text-orange-500 font-medium">
            View All →
          </button>
        </div>
      </div>

      {/* CAROUSEL */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {tours.map((tour, i) => (
          <div key={i} className="min-w-[400px]">
            <HomeTourCard tour={tour} />
          </div>
        ))}
      </div>
    </section>
  );
}