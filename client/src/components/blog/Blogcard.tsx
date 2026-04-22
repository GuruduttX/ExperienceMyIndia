import Image from "next/image";
import Link from "next/link";

export type BlogPostType = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  tag: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
};

type Props = {
  post: BlogPostType;
};

export default function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
    >
      {/* Cover image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "196px" }}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Tag pill over image */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-orange-500 text-white px-2.5 py-1 rounded-full">
            {post.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Meta */}
        <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2">
          {post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
        </p>

        {/* Title */}
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug tracking-tight line-clamp-2 mb-2 group-hover:text-orange-500 transition-colors duration-200">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Author + read link */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[11px] text-gray-400 font-medium">
              {post.author.name}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-500 group-hover:gap-2 transition-all duration-200">
            Read
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
