// app/blog/page.tsx

"use client"

import SectionHeader from "@/components/SectionHeader"
import { BlogCard } from "@/components/cards/BlogCard";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import { BlogData } from "@/types/strapi/blogs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface TransformedBlog {
  documentId: string;
  title: string;
  images: string[];
}

const BlogPage = () => {
    const [blogCards, setBlogCards] = useState<TransformedBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch all blogs with populated relations
                const blogsData = await fetchFromStrapi<BlogData[]>('blogs', {
                    populate: '*',
                    sort: 'createdAt:desc',
                });

                if (blogsData && Array.isArray(blogsData)) {
                    // Transform the data for easier use
                    const transformedBlogs = blogsData.map((blog) => {
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
                } else {
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

    if (loading) {
        return (
            <main className="space-y-12 py-24 pt-32">
                <SectionHeader
                    title="Blogs"
                    description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                <div className="container mx-auto">
                    <div className="text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400">Loading blogs...</p>
                    </div>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="space-y-12 py-24 pt-32">
                <SectionHeader
                    title="Blogs"
                    description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                <div className="container mx-auto">
                    <div className="text-center py-8">
                        <p className="text-red-500">{error}</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="space-y-12 py-24 pt-32">
            <SectionHeader
                title="Blogs"
                description="Learn, lead, and leverage actionable thought leadership that moves industries forward."
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />
            <div className="container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogCards.length > 0 ? (
                    blogCards.map((blog) => (
                        <Link key={blog.documentId} href={`/blog/${blog.documentId}`}>
                            <BlogCard title={blog.title} images={blog.images} />
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400">
                            No blogs available at the moment.
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default BlogPage