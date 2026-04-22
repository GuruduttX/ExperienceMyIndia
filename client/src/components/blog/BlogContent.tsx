"use client";

import React from "react";
import { Share2, Tag, Quote } from "lucide-react";

interface ContentBlock {
  type: string;
  text: string;
}

interface BlogContentProps {
  content: ContentBlock[];
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="lg:col-span-8 w-full max-w-3xl mx-auto lg:mx-0">
      <div className="max-w-none space-y-8">
        {content.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-600 leading-loose"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-6 tracking-tight"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="relative my-12 pl-8 py-4 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent rounded-r-2xl overflow-hidden"
              >
                <Quote className="absolute top-2 left-2 text-orange-500/10 w-16 h-16 -z-10 transform -rotate-6" />
                <p className="text-xl md:text-2xl italic font-medium text-gray-800 relative z-10">
                  "{block.text}"
                </p>
              </blockquote>
            );
          }
          return null;
        })}
      </div>

      {/* Tags & Share */}
      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Tag size={20} className="text-gray-400" />
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer transition">
              #Kerala
            </span>
            <span className="px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer transition">
              #Travel
            </span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500 font-medium transition">
          <Share2 size={20} />
          Share Article
        </button>
      </div>
    </article>
  );
}
