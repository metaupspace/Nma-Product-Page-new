// services/insightsService.ts

import { fetchFromStrapi, getStrapiMedia } from '@/lib/strapi';
import { TransformedBlog } from '@/services/blogService';
import { BlogData } from '@/types/strapi/blogs';
import { MediaCoverage } from '@/types/strapi/mediaCoverage';
import { PressRelease } from '@/types/strapi/pressRelease';

// Define the union type for insights using your transformed types
export type TransformedBlogWithType = TransformedBlog & { type: 'blog' };
export type TransformedMediaCoverageWithType = MediaCoverage & { type: 'media-coverage' };
export type TransformedPressReleaseWithType = PressRelease & { type: 'press-release' };

export type InsightContent =
    | TransformedBlogWithType
    | TransformedMediaCoverageWithType
    | TransformedPressReleaseWithType;

interface FetchInsightsOptions {
    limit?: number;
    sortOrder?: 'asc' | 'desc';
}

/**
 * Fetch featured blogs and add type field
 */
export async function getFeaturedBlogsForInsights(): Promise<TransformedBlogWithType[]> {
    try {
        let transformedBlogs: TransformedBlog[] = []
        const blogsData = await fetchFromStrapi<BlogData[]>('blogs', {
            populate: '*',
        });

        if (blogsData && Array.isArray(blogsData)) {
            // Transform the data for easier use
            transformedBlogs = blogsData.slice(0, 3).map((blog) => {

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
        }

        return transformedBlogs.map(blog => ({
            ...blog,
            type: 'blog' as const
        }));

    } catch (error) {
        console.error('Error fetching blogs for insights:', error);
        return [];
    }
}

/**
 * Fetch featured media coverage and add type field
 */
export async function getFeaturedMediaCoverageForInsights(): Promise<TransformedMediaCoverageWithType[]> {
    try {
        const data: MediaCoverage[] = await fetchFromStrapi('media-coverages', {
            populate: '*',
        }) || [];

        return data.map(media => ({
            ...media,
            type: 'media-coverage' as const
        }));
    } catch (error) {
        console.error('Error fetching media coverage for insights:', error);
        return [];
    }
}

/**
 * Fetch featured press releases and add type field
 */
export async function getFeaturedPressReleasesForInsights(): Promise<TransformedPressReleaseWithType[]> {
    try {
        const pressRelease: PressRelease[] = await fetchFromStrapi('press-releases', {
            populate: '*',
        }) || [];
        return pressRelease.map(press => ({
            ...press,
            type: 'press-release' as const
        }));
    } catch (error) {
        console.error('Error fetching press releases for insights:', error);
        return [];
    }
}

/**
 * Fetch all insights (blogs, media coverage, and press releases) combined
 */
export async function getAllInsights(options: FetchInsightsOptions = {}): Promise<InsightContent[]> {
    try {
        // Fetch all content types in parallel using your existing services
        const [blogs, mediaCoverage, pressReleases] = await Promise.all([
            getFeaturedBlogsForInsights(),
            getFeaturedMediaCoverageForInsights(),
            getFeaturedPressReleasesForInsights()
        ]);

        // Combine all insights
        const allInsights: InsightContent[] = [
            ...blogs,
            ...mediaCoverage,
            ...pressReleases
        ];

        // Sort combined results by date/creation date
        allInsights.sort((a, b) => {
            let dateA: Date;
            let dateB: Date;

            // Handle different date field names for different content types
            if (a.type === 'blog') {
                // Assuming blogs have publishedAt or createdAt field
                dateA = new Date((a as any).publishedAt || (a as any).createdAt || '');
            } else {
                // Media coverage and press releases should have releaseDate
                dateA = new Date((a as any).releaseDate || '');
            }

            if (b.type === 'blog') {
                dateB = new Date((b as any).publishedAt || (b as any).createdAt || '');
            } else {
                dateB = new Date((b as any).releaseDate || '');
            }

            return options.sortOrder === 'asc'
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        });

        // Apply limit if specified
        return options.limit ? allInsights.slice(0, options.limit) : allInsights;

    } catch (error) {
        console.error('Error fetching all insights:', error);
        return [];
    }
}

/**
 * Fetch latest insights (limited number, most recent first)
 */
export async function getLatestInsights(limit: number = 6): Promise<InsightContent[]> {
    return getAllInsights({
        limit,
        sortOrder: 'desc'
    });
}

/**
 * Fetch insights by type using your existing services
 */
export async function getInsightsByType(
    type: 'blog' | 'media-coverage' | 'press-release',
    options: FetchInsightsOptions = {}
): Promise<InsightContent[]> {
    let insights: InsightContent[] = [];

    try {
        switch (type) {
            case 'blog':
                insights = await getFeaturedBlogsForInsights();
                break;
            case 'media-coverage':
                insights = await getFeaturedMediaCoverageForInsights();
                break;
            case 'press-release':
                insights = await getFeaturedPressReleasesForInsights();
                break;
            default:
                return [];
        }

        // Apply limit if specified
        return options.limit ? insights.slice(0, options.limit) : insights;

    } catch (error) {
        console.error(`Error fetching ${type} insights:`, error);
        return [];
    }
}

/**
 * Get mixed insights with specific counts for each type
 */
export async function getMixedInsights(
    blogCount: number = 2,
    mediaCoverageCount: number = 2,
    pressReleaseCount: number = 2
): Promise<InsightContent[]> {
    try {
        const [blogs, mediaCoverage, pressReleases] = await Promise.all([
            getFeaturedBlogsForInsights(),
            getFeaturedMediaCoverageForInsights(),
            getFeaturedPressReleasesForInsights()
        ]);

        // Take specified number from each type
        const mixedInsights: InsightContent[] = [
            ...blogs.slice(0, blogCount),
            ...mediaCoverage.slice(0, mediaCoverageCount),
            ...pressReleases.slice(0, pressReleaseCount)
        ];

        // Sort by date (newest first)
        return mixedInsights.sort((a, b) => {
            const dateA = a.type === 'blog'
                ? new Date((a as any).publishedAt || (a as any).createdAt || '')
                : new Date((a as any).releaseDate || '');
            const dateB = b.type === 'blog'
                ? new Date((b as any).publishedAt || (b as any).createdAt || '')
                : new Date((b as any).releaseDate || '');

            return dateB.getTime() - dateA.getTime();
        });

    } catch (error) {
        console.error('Error fetching mixed insights:', error);
        return [];
    }
}