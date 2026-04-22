"use client";

import { useRef } from "react";

const tours = [
    {
        id: 1,
        title: "Golden Triangle Luxury Tour | Delhi, Agra & Jaipur",
        location: "Delhi • Agra • Jaipur",
        price: "₹34,999",
        duration: "5 days & 4 nights",
        image:
            "https://images.unsplash.com/photo-1564507592333-c60657eea523", 
    },
    {
        id: 2,
        title: "Royal Rajasthan Experience | Udaipur, Jodhpur & Jaisalmer",
        location: "Rajasthan, India",
        price: "₹48,999",
        duration: "7 days & 6 nights",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41", 
    },
    {
        id: 3,
        title: "Kerala Luxury Escape | Munnar, Alleppey & Kochi",
        location: "Kerala, India",
        price: "₹29,999",
        duration: "4 days & 3 nights",
        image:
            "https://images.unsplash.com/photo-1593693397690-362cb9666fc2", 
    },
    {
        id: 4,
        title: "Goa Premium Beach Retreat | North & South Goa",
        location: "Goa, India",
        price: "₹24,999",
        duration: "4 days & 3 nights",
        image:
            "https://images.unsplash.com/photo-1587922546307-776227941871", 
    },
    {
        id: 5,
        title: "Himalayan Serenity | Manali, Kasol & Tosh",
        location: "Himachal Pradesh",
        price: "₹19,999",
        duration: "5 days & 4 nights",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470", 
    },
];

export default function TourCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const isMobile = window.innerWidth < 768;
        const scrollAmount = isMobile ? window.innerWidth - 16 : 750;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
      <section className="w-full py-10 md:py-16 bg-neutral-50">
        <div className="max-w-8xl mx-auto px-0 md:px-6">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-neutral-800 mb-6 md:mb-8 px-4 md:px-0">
            Our Top Tours
          </h2>

          {/* Carousel Wrapper */}
          <div className="relative">
            {/* LEFT BUTTON */}
            <button
              onClick={() => scroll("left")}
              className="absolute invisible md:visible left-2 top-1/2 -translate-y-1/2 z-20 
                        bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md 
                        hover:scale-110 transition cursor-pointer"
            >
              ←
            </button>

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-0"
            >
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="min-w-[calc(100vw-2rem)] md:min-w-[820px] h-[420px] md:h-[500px] relative rounded-[24px] overflow-hidden group"
                >
                  {/* IMAGE */}
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* RIGHT ARROW INSIDE CARD
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 
                  bg-white/20 backdrop-blur-md p-3 rounded-full text-white 
                  opacity-0 group-hover:opacity-100 transition cursor-pointer">
                                    →
                                </button> */}

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-4 md:p-6 text-white w-full">
                    {/* Duration */}
                    <p className="text-sm text-white/70 mb-1">
                      {tour.duration}
                    </p>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold leading-snug tracking-wide">
                      {tour.title}
                    </h3>

                    {/* Location */}
                    <p className="text-sm text-white/80 mt-1">
                      {tour.location}
                    </p>

                    <div className="mt-3 flex items-end justify-between gap-4">
                      <p className="text-base md:text-lg font-bold">
                        {tour.price}
                      </p>

                      <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100">
                        View Tour
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scroll("right")}
              className="absolute invisible md:visible right-2 top-1/2 -translate-y-1/2 z-20 
                        bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md 
                        hover:scale-110 transition cursor-pointer"
            >
              →
            </button>
          </div>
        </div>
      </section>
    );
}
