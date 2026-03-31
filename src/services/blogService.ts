// services/blogService.ts
import { 
    fetchFromStrapi, 
    getStrapiMedia,
} from "@/lib/strapi";
import { BlogContent, BlogData } from "@/types/strapi/blogs";

// Transform blog data for the blogs section (just need title and images)
export interface TransformedBlog {
    documentId: string;
    title: string;
    images: string[];
}

// Transform blog data for blogs section
function transformBlogForCard(blog: BlogData): TransformedBlog {
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
}

// Transform blog data for detail page
function transformBlogForDetail(blog: BlogData): BlogContent {
    // Handle the case where attributes might be directly on the blog object
    const attributes = blog.attributes || blog;

    return {
        documentId: blog.documentId,
        title: attributes.title || 'Untitled Blog',
        content: attributes.content || '',
        introduction: attributes.introduction || '',
        publishedAt: attributes.publishedAt || attributes.createdAt || new Date().toISOString(),
        createdAt: attributes.createdAt || new Date().toISOString(),
        updatedAt: attributes.updatedAt || new Date().toISOString(),
        authorName: attributes.authorName,
        authorImage: attributes.authorImage,
        main_image: attributes.main_image,
        media: attributes.media,
    };
}

// Get featured blogs for the blogs section (first 3 blogs)
export async function getFeaturedBlogs(): Promise<TransformedBlog[]> {
    try {
        const blogsData = await fetchFromStrapi<BlogData[]>('blogs', {
            populate: '*',
        });

        if (blogsData && Array.isArray(blogsData)) {
            return blogsData.slice(0, 3).map(transformBlogForCard);
        }

        return [];
    } catch (error) {
        console.error('Error fetching featured blogs:', error);
        return [];
    }
}

// Get a single blog by documentId for the detail page
export async function getBlogByDocumentId(documentId: string): Promise<BlogContent | null> {
    try {
        // Try to fetch by documentId using filters
        const blogsArray = await fetchFromStrapi<BlogData[]>('blogs', {
            populate: '*',
            filters: {
                documentId: documentId
            }
        });

        let blogData: BlogData | null = null;
        if (blogsArray && blogsArray.length > 0) {
            blogData = blogsArray[0];
        }

        // If not found by documentId, try direct fetch (in case slug is numeric ID)
        if (!blogData) {
            blogData = await fetchFromStrapi<BlogData>(`blogs/${documentId}`, {
                populate: '*',
            });
        }

        if (blogData) {
            return transformBlogForDetail(blogData);
        }

        return null;
    } catch (error) {
        console.error('Error fetching blog by documentId:', error);
        return null;
    }
}