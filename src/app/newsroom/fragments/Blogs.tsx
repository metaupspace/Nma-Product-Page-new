// src/app/newsroom/fragments/Blogs.tsx

"use client";

import { BlogCard } from "@/components/cards/BlogCard";
import Marquee from "@/components/magicui/MarqueeWrapper";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import SectionHeader from "@/components/SectionHeader";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import { TransformedBlog } from "@/services/blogService";
import { BlogData } from "@/types/strapi/blogs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// BlogsSection Loading Skeleton
const BlogsLoadingSkeleton = () => {
  return (
    <section id="blogs" className="relative py-16 space-y-8">

      <SectionHeader
        className="text-black dark:text-white"
        title="Blogs"
        description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
      />

      {/* Skeleton Blog Cards */}
      <div className="mx-auto md:max-w-5xl xl:max-w-7xl">
        <div className="flex gap-6 overflow-hidden">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex-shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-80">
              {/* Image skeleton */}
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Button skeleton */}
      <div className="text-center">
        <div className="w-24 h-10 mx-auto bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></div>
      </div>
    </section>
  );
};

// BlogsSection Error State
const BlogsErrorState = ({ error }: { error: string }) => {
  const router = useRouter();

  return (
    <section id="blogs" className="relative py-16 space-y-8">
      <SectionHeader
        className="text-black dark:text-white"
        title="Blogs"
        description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
      />

      <div className="px-4 mx-auto max-w-7xl md:px-0">
        <div className="max-w-2xl p-12 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <p className="text-lg font-semibold text-red-500">{error}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Please try again later</p>
        </div>
      </div>

      {/* Keep the button even in error state */}
      <div className="text-center">
        <ShinyButton
          onClick={() => router.push("/blog")}
          className="group"
        >
          See all
        </ShinyButton>
      </div>
    </section>
  );
};

const BlogsSection: React.FC = () => {
  const [blogCards, setBlogCards] = useState<TransformedBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try different populate formats - start with * to get all relations
        const blogsData = await fetchFromStrapi<BlogData[]>('blogs', {
          populate: '*',
          sort: 'createdAt:desc',
        });

        if (blogsData && Array.isArray(blogsData)) {
          // Transform the data for easier use
          const transformedBlogs = blogsData.slice(0, 4).map((blog) => {

            // Handle the case where attributes might be directly on the blog object
            const attributes = blog.attributes || blog;
            const { title, main_image, media } = attributes;

            // Get main image URL
            let mainImageUrl = '';
            if (main_image && main_image.url) {
              mainImageUrl = getStrapiMedia(main_image.url);
            }

            // Get media URLs
            let mediaUrls: string[] = [];
            if (media && Array.isArray(media) && media.length > 0) {
              mediaUrls = media
                .filter(item => item && item.url) // Filter out null/undefined items
                .map(item => getStrapiMedia(item.url));
            }

            // Combine all images, filter out empty strings
            const allImages = [mainImageUrl, ...mediaUrls].filter(Boolean);

            return {
              documentId: blog.documentId || `fallback-${blog.id || Math.random()}`,
              title: title || 'Untitled Blog',
              images: allImages,
            };
          });

          setBlogCards(transformedBlogs);
        }
        else {
          setBlogCards([]);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
        setBlogCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Show loading skeleton
  if (loading) {
    return <BlogsLoadingSkeleton />;
  }

  // Show error state
  if (error) {
    return <BlogsErrorState error={error} />;
  }

  return (
    <section id="blogs" className="relative py-16 space-y-8 bg-black">

      <SectionHeader
        className="text-black dark:text-white"
        title="Blogs"
        description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
      />

      {/* Blog Cards Grid */}
      <Marquee pauseOnHover className="md:max-w-5xl xl:max-w-7xl mx-auto [--duration:20s]">
        {blogCards.length > 0 ? (
          blogCards.map((blog) => (
            <Link key={blog.documentId} href={`/blog/${blog.documentId}`}>
              <BlogCard title={blog.title} images={blog.images} />
            </Link>
          ))
        ) : (
          <div className="py-8 text-center col-span-full">
            <p className="text-gray-500 dark:text-gray-400">
              No blogs available at the moment.
            </p>
          </div>
        )}
      </Marquee>

      {/* See All Button */}
      <div className="text-center">
        <ShinyButton
          onClick={() => router.push("/blog")}
          className="group"
        >
          See all
        </ShinyButton>
      </div>
    </section>
  );
};

export default BlogsSection;