"use client";

import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import Navbar from "@/utils/NavBar";
import BlogFaqs from "@/components/blog/BlogFaqs";

export default function BlogPost() {
  // Hardcoded data for the blog post (To be replaced with API fetch later)
  const blogData = {
    title: "10 Hidden Gems in Kerala You Must Visit This Year",
    category: "Destinations",
    author: "Adarsh Dubey",
    date: "October 15, 2023",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2000&auto=format&fit=crop",
    content: [
      {
        type: "paragraph",
        text: "Kerala, often referred to as 'God's Own Country', is one of the most sought-after tourist destinations in India. While popular spots like Munnar, Alleppey, and Wayanad are stunning, the true magic of Kerala lies in its unexplored and tranquil hidden gems.",
      },
      {
        type: "heading",
        text: "1. Gavi, Pathanamthitta",
      },
      {
        type: "paragraph",
        text: "Tucked away in the Pathanamthitta district, Gavi is an eco-tourist's dream. Surrounded by tropical forests, cascading waterfalls, and sprawling cardamom plantations, it’s the perfect spot for wildlife watching and trekking.",
      },
      {
        type: "heading",
        text: "2. Vagamon, Idukki",
      },
      {
        type: "paragraph",
        text: "Unlike the bustling hills of Munnar, Vagamon offers a quiet, pine-scented retreat. With its rolling meadows, beautiful pine forests, and cool mountain breeze, it's an ideal location for paragliding and peaceful nature walks.",
      },
      {
        type: "quote",
        text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
      },
      {
        type: "paragraph",
        text: "Whether you are looking to escape the city's hustle or seeking a close encounter with nature, Kerala's hidden gems offer an unforgettable experience. Make sure to add these to your itinerary for an authentic Experience My India tour!",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pb-24 md:pb-12">
        <main className="max-w-6xl mx-auto sm:px-6 lg:px-8 sm:py-8">
          <article className="bg-white sm:rounded-3xl shadow-sm overflow-hidden border-b sm:border border-gray-100">
            {/* Cover Image */}
            <div className="relative w-full h-[60vh] md:h-[70vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blogData.coverImage}
                alt={blogData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
                <div className="max-w-4xl">
                  <span className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm mb-4">
                    {blogData.category}
                  </span>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {blogData.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="px-5 py-8 md:px-12 md:py-12 max-w-5xl mx-auto">
              {/* Blog Meta Data */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <User
                    size={18}
                    strokeWidth={1.5}
                    className="text-orange-500"
                  />
                  <span className="font-semibold text-gray-800">
                    {blogData.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar
                    size={18}
                    strokeWidth={1.5}
                    className="text-orange-500"
                  />
                  <span>{blogData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock
                    size={18}
                    strokeWidth={1.5}
                    className="text-orange-500"
                  />
                  <span>{blogData.readTime}</span>
                </div>
              </div>

              {/* Article Prose */}
              <div className="space-y-6 text-gray-700 text-base md:text-xl leading-relaxed">
                {blogData.content.map((block, index) => {
                  if (block.type === "paragraph") {
                    return <p key={index}>{block.text}</p>;
                  }
                  if (block.type === "heading") {
                    return (
                      <h2
                        key={index}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-orange-500 bg-orange-50/50 p-6 md:p-8 rounded-r-2xl italic text-gray-800 font-medium my-8 shadow-sm"
                      >
                        "{block.text}"
                      </blockquote>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Blog FAQ Section */}
              <BlogFaqs />

              {/* CTA / Footer of Blog */}
              <div className="mt-12 pt-8 border-t border-gray-100 bg-orange-50/30 rounded-2xl p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Want to experience this yourself?
                </h3>
                <p className="text-gray-600 text-sm md:text-lg mb-6">
                  Discover our curated packages and book your next escape.
                </p>
                <Link
                  href="/experiences"
                  className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
