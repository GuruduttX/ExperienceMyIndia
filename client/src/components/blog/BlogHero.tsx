"use client";

import React from "react";
import { Calendar, Clock, User } from "lucide-react";

interface BlogHeroProps {
  blogData: {
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    coverImage: string;
  };
}

export default function BlogHero({ blogData }: BlogHeroProps) {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <header className="order-2 md:order-1 max-w-4xl mx-auto text-center mb-16 md:mb-10 mt-8 md:mt-0">
        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
          {blogData.category}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
          {blogData.title}
        </h1>

        {/* Meta Data */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={16} className="text-gray-500" />
            </div>
            <span className="text-gray-800">{blogData.author}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-orange-500" />
            <span>{blogData.date}</span>
          </div>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-orange-500" />
            <span>{blogData.readTime}</span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="order-1 md:order-2 max-w-5xl mx-auto mb-0 md:mb-20 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blogData.coverImage}
          alt={blogData.title}
          className="w-full aspect-[16/9] md:aspect-[21/9] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  );
}
