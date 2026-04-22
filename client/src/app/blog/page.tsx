import React from "react";
import Navbar from "@/utils/NavBar";
import Footer from "@/utils/Footer";
import BlogArchiveHero from "@/components/blog/BlogArchiveHero";
import BlogArchive from "@/components/blog/Blogarchive";
import BlogTrustBanner from "@/components/blog/BlogTrustBanner";
import MobileEnquiryForm from "@/components/blog/Mobileenquiryform";
import CTABanner from "@/utils/CTABanner";
import { BlogPostType } from "@/components/blog/Blogcard";
import BestOfState from "@/components/blog/Bestofstate";

export default function BlogArchivePage() {
  const Kashmir_POSTS: BlogPostType[] = [
    {
      id: "1",
      slug: "srinagar-dal-lake-guide",
      title: "The Ultimate Guide to Srinagar: Shikaras, Gardens, and Heritage",
      excerpt:
        "Discover the crown jewel of Kashmir. From the early morning floating markets on Dal Lake to the stunning terraced Mughal Gardens, here is what you can't miss.",
      coverImage:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=900&auto=format&fit=crop&q=80",
      tag: "Destinations",
      date: "Apr 20, 2026",
      readTime: "5 min read",
      author: {
        name: "Aisha Bhat",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      },
    },
    {
      id: "2",
      slug: "beyond-srinagar-gulmarg-pahalgam",
      title: "Beyond Srinagar: The Golden Triangle of Kashmir",
      excerpt:
        "Planning a full Kashmir itinerary? Here is how to divide your time between the snowy peaks of Gulmarg, the lush valleys of Pahalgam, and the glaciers of Sonamarg.",
      coverImage:
        "https://images.unsplash.com/photo-1561287437-c69a30664793?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGhlJTIwR29sZGVuJTIwVHJpYW5nbGUlMjBvZiUyMEthc2htaXJ8ZW58MHx8MHx8fDA%3D",
      tag: "Travel Guides",
      date: "Apr 15, 2026",
      readTime: "7 min read",
      author: {
        name: "Rohan Kapoor",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      },
    },
  ];

   const Rajasthan_POSTS: BlogPostType[] = [
    {
      id: "1",
      slug: "jaipur-pink-city-itinerary",
      title: "A Weekend in Jaipur: Forts, Palaces, and Bazaars",
      excerpt:
        "Explore the Pink City's majestic Amer Fort, the intricate Hawa Mahal, and dive into the bustling Johari Bazaar for authentic Rajasthani crafts and jewelry.",
      coverImage:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&auto=format&fit=crop&q=80",
      tag: "City Guides",
      date: "Apr 21, 2026",
      readTime: "6 min read",
      author: {
        name: "Vikram Singh",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
      },
    },
    {
      id: "2",
      slug: "jaisalmer-desert-camping",
      title: "Under the Stars: Desert Camping in Jaisalmer",
      excerpt:
        "Trade the city noise for the golden sands of the Thar Desert. Here is everything you need to know about booking the perfect camel safari and luxury tent experience.",
      coverImage:
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&auto=format&fit=crop&q=80",
      tag: "Experiences",
      date: "Apr 18, 2026",
      readTime: "5 min read",
      author: {
        name: "Meera Rajput",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
      },
    },
  ];

 const Kerala_POSTS: BlogPostType[] = [
    {
      id: "1",
      slug: "alleppey-houseboat-guide",
      title: "Navigating the Backwaters: Alleppey Houseboat Guide",
      excerpt:
        "Drift through the emerald, palm-fringed canals of Kerala. A complete guide to picking the right houseboat for your family or a peaceful romantic getaway.",
      coverImage:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop&q=80",
      tag: "Destinations",
      date: "Apr 19, 2026",
      readTime: "5 min read",
      author: {
        name: "Anjali Menon",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
      },
    },
    {
      id: "2",
      slug: "munnar-tea-estates",
      title: "Munnar's Green Canvas: Exploring the Tea Estates",
      excerpt:
        "Wake up to the aroma of fresh tea leaves and misty valley mornings. Discover the best hidden viewpoints and heritage plantation stays in Kerala's premier hill station.",
      coverImage:
        "https://images.unsplash.com/photo-1642425149556-b6f90e946859?w=900&auto=format&fit=crop&q=80",
      tag: "Nature",
      date: "Apr 12, 2026",
      readTime: "7 min read",
      author: {
        name: "Karthik Nair",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
      },
    },
  ];


  return (
    <>
      <BlogArchiveHero />
      <MobileEnquiryForm />
      <BlogArchive />
      <BestOfState
        stateName="Kashmir"
        tagline="What our readers like about kashmir"
        posts={Kashmir_POSTS}
        viewAllHref= "/tours/sds"
      />
        <BlogTrustBanner />
      <BestOfState
        stateName="Rajsthan"
        tagline="What our readers Love about Rajsthan"
        posts={Rajasthan_POSTS}
        viewAllHref= "/tours/sds"
      />
      <BestOfState
        stateName="Kerala"
        tagline="What our readers like about kerala"
        posts={Kerala_POSTS}
        viewAllHref= "/tours/sds"
      />
      <CTABanner />
    </>
  );
}
