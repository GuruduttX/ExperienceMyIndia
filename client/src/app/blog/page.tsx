import React from "react";
import Navbar from "@/utils/NavBar";
import Footer from "@/utils/Footer";
import BlogArchiveHero from "@/components/blog/BlogArchiveHero";
import BlogArchive from "@/components/blog/Blogarchive";
import BlogTrustBanner from "@/components/blog/BlogTrustBanner";
import MobileEnquiryForm from "@/components/blog/Mobileenquiryform";
import CTABanner from "@/utils/CTABanner";

export default function BlogArchivePage() {
  return (
    <>
      <BlogArchiveHero />
      <MobileEnquiryForm />
      <CTABanner />
      <BlogArchive />
      <BlogTrustBanner />
    </>
  );
}
