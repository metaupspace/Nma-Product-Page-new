import { StrapiUser } from "@/lib/userSync";

export interface Question {
    id?:number;
    documentId?: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
    user: StrapiUser | string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Answer {
    documentId?: string;
    content: string;
    upvotes: number;
    downvotes: number;
    question: string;
    parentAnswer?: string | null;
    user: StrapiUser | string;
    createdAt?: string;
    updatedAt?: string;
}