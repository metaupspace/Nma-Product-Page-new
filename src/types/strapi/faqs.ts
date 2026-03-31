export interface Faq {
    id: number;
    documentId: string;
    question: string
    answer: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
}

export interface TransformedFaq {
    category: string;
    qnaList: {
        question: string;
        answer: string;
    }[]
}