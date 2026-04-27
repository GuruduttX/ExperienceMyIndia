import Link from "next/link";
import { BlogPostType } from "./Blogcard";

type Props = {
  /** Topic label shown in the heading e.g. "Kerala", "Travel Tips" */
  topic: string;
  posts: Pick<BlogPostType, "id" | "slug" | "title" | "tag" | "readTime">[];
};

export default function ReadMoreAbout({ topic, posts }: Props) {
  if (!posts.length) return null;

  return (
    // hidden on mobile/tablet — only renders on lg+
    <aside className="hidden lg:flex flex-col h-full">

      {/* Header */}
      <div className="mb-5">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-1.5">
          <span className="w-4 h-px bg-orange-400" />
          Read More
        </span>
        <h3 className="text-[18px] font-bold text-gray-900 tracking-tight leading-tight">
          More about{" "}
          <span className="text-orange-500">{topic}</span>
        </h3>
      </div>

      {/* Post list */}
      <div className="flex flex-col divide-y divide-gray-100">
        {posts.map((post, i) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
          >
            {/* Index number */}
            <span className="text-[13px] font-bold text-gray-200 shrink-0 w-5 pt-0.5 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Tag */}
              <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-500 mb-1 block">
                {post.tag}
              </span>

              {/* Title */}
              <p className="text-[13.5px] font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                {post.title}
              </p>

              {/* Read time */}
              <p className="text-[11px] text-gray-400 mt-1">{post.readTime}</p>
            </div>

            {/* Arrow */}
            <span className="shrink-0 mt-1 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-200">
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* View all link */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <Link
          href={`/blog?tag=${encodeURIComponent(topic.toLowerCase())}`}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150"
        >
          View all {topic} articles
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

    </aside>
  );
}