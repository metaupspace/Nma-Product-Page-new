// types/strapi/blogs.ts

interface BlogAttributes {
    title: string;
    introduction: string;
    content: string;
    main_image: { url: string } | null;
    media: { url: string }[] | null;
    publishedAt?: string;
    createdAt?: string;
    updatedAt?: string;
    authorName?: string;
    authorImage?: { url: string }
}

export interface BlogData {
    id: number;
    documentId: string;
    attributes: BlogAttributes;
}

export interface BlogContent {
    documentId: string;
    title: string;
    content: string;
    introduction: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    authorName?: string;
    authorImage?: { url: string }
    main_image: { url: string } | null;
    media: { url: string }[] | null;
}