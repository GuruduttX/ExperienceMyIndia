import BlogCard from "./Blogcard";
import { BlogPostType } from "./Blogcard";
type Props = {
  posts: BlogPostType[];
};

export default function BlogCardsGrid({ posts }: Props) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
          <svg
            className="w-5 h-5 text-orange-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6v6m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="text-[15px] font-medium text-gray-700 mb-1">
          No posts found
        </p>
        <p className="text-[13px] text-gray-400">
          Try a different category or check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
