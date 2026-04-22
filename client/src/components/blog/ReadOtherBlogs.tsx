"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface Blog {
  title: string;
  category: string;
  date: string;
  readTime?: string;
  coverImage: string;
  slug: string;
}

interface ReadOtherBlogsProps {
  blogs: Blog[];
}

export default function ReadOtherBlogs({ blogs }: ReadOtherBlogsProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="mt-24 border-t border-gray-100 pt-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Read Other Blogs
          </h2>
          <p className="text-gray-500 text-lg">
            Discover more travel guides and hidden gems across India.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
        >
          View All Articles <ArrowRight size={18} />
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, i) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={i}
            className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Card Image */}
            <div className="relative h-60 overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase tracking-wider shadow-sm">
                {blog.category}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors">
                {blog.title}
              </h3>

              <div className="mt-auto flex items-center gap-5 text-sm text-gray-500 font-medium pt-4 border-t border-gray-50">
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-orange-400" />
                  <span>{blog.date}</span>
                </div>
                {blog.readTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-orange-400" />
                    <span>{blog.readTime}</span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
