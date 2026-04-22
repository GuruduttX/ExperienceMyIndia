"use client";

import BlogFaqs from "@/components/blog/BlogFaqs";
import BlogSidebarForm from "@/components/blog/BlogSidebarForm";
import ReadOtherBlogs from "@/components/blog/ReadOtherBlogs";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogHero from "@/components/blog/BlogHero";
import BlogContent from "@/components/blog/BlogContent";
import RelatedPackages from "@/components/blog/Relatedpackages";

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

  // Dummy data for "Read Other Blogs"
  const otherBlogsData = [
    {
      title: "A Complete Guide to the Spiritual Ghats of Varanasi",
      category: "Spiritual",
      date: "November 2, 2023",
      readTime: "8 min read",
      coverImage:
        "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
      slug: "varanasi-ghats-guide",
    },
    {
      title: "Top 5 Snow Destinations in Himachal Pradesh",
      category: "Adventure",
      date: "December 10, 2023",
      readTime: "5 min read",
      coverImage:
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=800&auto=format&fit=crop",
      slug: "himachal-snow-destinations",
    },
    {
      title: "Exploring the Royal Heritage of Jaipur",
      category: "Culture",
      date: "January 5, 2024",
      readTime: "7 min read",
      coverImage:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
      slug: "jaipur-royal-heritage",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white pb-24 md:pb-16 pt-24 md:pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHero blogData={blogData} />

          {/* Main Content & Sidebar Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
            <BlogContent content={blogData.content} />

            {/* Sticky Sidebar Form */}
            <aside className="lg:col-span-4 w-full">
              <BlogSidebarForm />
            </aside>
          </div>

          {/* Bottom Sections: FAQs & CTA */}
          <div className="max-w-4xl mx-auto mt-24 space-y-16">
            <BlogFaqs />
            <RelatedPackages locationName="Kerala" locationSlug="kerala" />
            {/* Redesigned CTA */}
            <BlogCTA />
          </div>
          <ReadOtherBlogs blogs={otherBlogsData} />
        </main>
      </div>
    </>
  );
}
