// src/app/blog/[slug]/page.tsx

"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getStrapiMedia } from "@/lib/strapi";
import { BlogContent } from "@/types/strapi/blogs";
import { getBlogByDocumentId } from "@/services/blogService";
import RelatedArticles from "./articles";

// Simple Loading Skeleton
const BlogLoadingState = () => {
  return (
    <main className="pt-36 space-y-16">
      <div className="container mx-auto rounded-md bg-blue-vertical p-1">
        <div className="p-6 mx-auto bg-white dark:bg-black space-y-8 rounded-md shadow-lg">

          {/* Skeleton Blog Card */}
          <section className="p-6 shadow-md bg-[#001836] rounded-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 space-y-3">
                <div className="w-16 h-4 bg-blue-300/30 rounded animate-pulse"></div>
                <div className="w-3/4 h-8 bg-white/20 rounded animate-pulse"></div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-blue-100/20 rounded animate-pulse"></div>
                  <div className="w-4/5 h-4 bg-blue-100/20 rounded animate-pulse"></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full animate-pulse"></div>
                    <div className="w-24 h-4 bg-blue-200/20 rounded animate-pulse"></div>
                  </div>
                  <div className="w-20 h-4 bg-blue-200/20 rounded animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1 w-full h-32 md:w-48 bg-white/10 rounded-md animate-pulse"></div>
            </div>
          </section>

          {/* Skeleton Media Gallery */}
          <section className="flex flex-wrap justify-center gap-4">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="w-40 h-40 bg-gray-200 dark:bg-gray-700 border-2 border-blue-400/30 rounded-lg animate-pulse"></div>
            ))}
          </section>

          {/* Skeleton Content */}
          <section className="space-y-4 max-w-4xl mx-auto">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className={`h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${idx % 3 === 0 ? 'w-full' : idx % 3 === 1 ? 'w-5/6' : 'w-4/5'
                }`}></div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
};

// Simple Error Component
const BlogErrorState = ({ error }: { error: string }) => {
  return (
    <main className="pt-36 pb-24 space-y-16">
      <div className="container mx-auto rounded-md bg-blue-vertical p-1">
        <div className="p-6 mx-auto bg-white dark:bg-black space-y-8 rounded-md shadow-lg">
          <section className="p-6 text-white shadow-md bg-[#001836] rounded-xl">
            <div className="text-center py-16">
              <p className="text-red-400 text-xl font-semibold">{error || 'Blog not found'}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const BlogPage: React.FC = () => {
  const params = useParams();
  const [blog, setBlog] = useState<BlogContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!params.Id) return;

      try {
        setLoading(true);
        setError(null);

        const blogData = await getBlogByDocumentId(params.Id as string);

        if (blogData) {
          setBlog(blogData);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.Id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  // Show loading state
  if (loading) {
    return <BlogLoadingState />;
  }

  // Show error state
  if (error || !blog) {
    return <BlogErrorState error={error || 'Blog not found'} />;
  }

  const mainImageUrl = blog.main_image?.url ? getStrapiMedia(blog.main_image.url) : "/assets/blogs/Vector.png";
  const mediaImages = blog.media?.map(item => getStrapiMedia(item.url)) || [];

  return (
    <main className="pt-36 space-y-16">
      <div className="container mx-auto rounded-md bg-blue-vertical p-[3px]">
        <div className="p-6 mx-auto bg-white dark:bg-black space-y-8 rounded-md shadow-lg">
          {/* Featured Blog Card */}
          <section className="p-6 text-white shadow-md bg-[#001836] rounded-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 space-y-3">
                <span className="text-sm font-semibold text-blue-200 uppercase">
                  Blog
                </span>
                <h1 className="text-2xl font-bold md:text-3xl">
                  {blog.title}
                </h1>
                <p className="text-sm text-blue-100 md:text-base">
                  {blog.introduction}
                </p>

                <div className="flex items-center justify-between pt-2 text-xs text-blue-300 md:text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      {blog.authorImage ? (
                        <Image
                          src={getStrapiMedia(blog.authorImage?.url)}
                          alt={blog.authorName ?? "author image"}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      ) : (
                        <span className="text-gray-600 text-xs">
                          {blog.authorName?.charAt(0) || 'A'}
                        </span>
                      )}
                    </div>
                    <span>{blog.authorName || 'Anonymous Author'}</span>
                  </div>
                  <span>{formatDate(blog.publishedAt)}</span>
                </div>
              </div>

              <div className="relative flex-1 w-full h-32 md:w-48">
                <Image
                  src={mainImageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </section>

          {/* Media Gallery */}
          {mediaImages.length > 0 && (
            <section className="flex flex-wrap justify-center gap-4">
              {mediaImages.map((imageUrl, idx) => (
                <div
                  key={idx}
                  className="relative w-40 h-40 bg-white border-2 border-blue-400 rounded-lg overflow-hidden"
                >
                  <Image
                    src={imageUrl}
                    alt={`Blog media ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </section>
          )}

          {/* Blog Body */}
          <section className="flex flex-col items-center justify-center mx-auto space-y-6 text-sm leading-relaxed prose dark:prose-invert max-w-none">
            {blog.content ? (
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="w-full"
              />
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                No content available for this blog post.
              </p>
            )}
          </section>
        </div>
      </div>
      <RelatedArticles />
    </main>
  );
};

export default BlogPage;