import Image from "next/image";
import Link from "next/link";
import { BlogPostType } from "./Blogcard";

// ─── Types ────────────────────────────────────────────────────────────────────

type Props = {
  /** State name shown in the heading e.g. "Kerala", "Rajasthan" */
  stateName: string;
  /** Short tagline under the heading */
  tagline?: string;
  /** Array of blog posts — pass up to 4, only first 4 are rendered */
  posts: BlogPostType[];
  /** Link to the full state blog listing e.g. "/blog/kerala" */
  viewAllHref?: string;
};

// ─── Individual card ──────────────────────────────────────────────────────────

function BestOfCard({ post, index }: { post: BlogPostType; index: number }) {
  const isFeatured = index === 0;

  return (
    <Link
      href={`/tours/${post.slug}`}
      className={[
        "group flex flex-col bg-white rounded-2xl border border-gray-100",
        "hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5",
        "transition-all duration-300 overflow-hidden",
        // Added: Forces mobile widths and snapping, resets on md+
        "shrink-0 w-[85vw] md:w-auto snap-start md:snap-none",
        isFeatured ? "md:col-span-2 md:flex-row" : "",
      ].join(" ")}
    >
      {/* Cover image */}
      <div
        className={[
          "relative overflow-hidden shrink-0",
          isFeatured
            ? "w-full md:w-[52%] h-[220px] md:h-auto"
            : "w-full h-[180px]",
        ].join(" ")}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Tag pill */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-orange-500 text-white px-2.5 py-1 rounded-full">
            {post.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={[
          "flex flex-col justify-between p-4",
          isFeatured ? "md:p-6" : "",
        ].join(" ")}
      >
        <div>
          {/* Meta */}
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-2">
            {post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
          </p>

          {/* Title */}
          <h3
            className={[
              "font-bold text-gray-900 leading-snug tracking-tight group-hover:text-orange-500 transition-colors duration-200",
              isFeatured
                ? "text-[18px] md:text-[20px] mb-3"
                : "text-[14px] mb-2 line-clamp-2",
            ].join(" ")}
          >
            {post.title}
          </h3>

          {/* Excerpt — featured card only */}
          {isFeatured && (
            <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Footer: author + read arrow */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
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
          <span
            className={[
              "inline-flex items-center gap-1 font-semibold text-orange-500",
              "group-hover:gap-2 transition-all duration-200",
              isFeatured ? "text-[12px]" : "text-[11px]",
            ].join(" ")}
          >
            {isFeatured ? "Read story" : "Read"}
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function BestOfState({
  stateName,
  tagline,
  posts,
  viewAllHref,
}: Props) {
  if (!posts.length) return null;

  // First post is featured (spans 2 cols), remaining up to 3 go in the right column
  const [featured, ...rest] = posts.slice(0, 4);

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* ── Section header ──────────────────────────────────────────────── */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-orange-500 mb-1.5">
              <span className="w-4 h-px bg-orange-400" />
              Best of {stateName}
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">
              Top Reads: <span className="text-orange-500">{stateName}</span>
            </h2>
            {tagline && (
              <p className="text-[13px] text-gray-400 mt-1">{tagline}</p>
            )}
          </div>

          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="hidden md:inline-flex items-center gap-1.5 text-[12.5px] font-medium text-gray-400 hover:text-orange-500 transition-colors duration-150 shrink-0"
            >
              View all {stateName} stories
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* ── Grid / Mobile Carousel ───────────────────────────────────────── */}
        {/* Changed: Flex layout on mobile with hidden scrollbar and edge padding, resets to grid on md */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Featured card */}
          <BestOfCard post={featured} index={0} />

          {/* Rest */}
          {rest.length > 0 && (
            /* Changed: `contents` flattens the div on mobile so children scroll horizontally. `md:flex` restores layout on desktop. */
            <div className="contents md:flex md:flex-col gap-4">
              {rest.map((post, i) => (
                <BestOfCard key={post.id} post={post} index={i + 1} />
              ))}
            </div>
          )}
        </div>

        {/* Mobile view all */}
        {viewAllHref && (
          <div className="mt-5 flex md:hidden justify-center">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-gray-400 hover:text-orange-500 transition-colors"
            >
              View all {stateName} stories
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
