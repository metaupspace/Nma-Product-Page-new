// services/forumService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
} from "@/lib/strapi";
import { Question, Answer } from "@/types/strapi/forum";

export async function submitQuestion(questionData: Question): Promise<Question> {
    const result = await submitToStrapi<Question>('questions', questionData);

    if (!result) {
        throw new Error('Failed to submit question');
    }
    return result;
}

export async function getAllQuestions(): Promise<Question[] | null> {
    return await fetchFromStrapi<Question[]>('questions', {
        populate: 'user',
        sort: 'createdAt:desc'
    });
}

export async function updateQuestionVotes(
    documentId: string,
    upvotes: number,
    downvotes: number
): Promise<Question | null> {
    return await updateInStrapi<Question>('questions', documentId, {
        upvotes,
        downvotes
    });
}

export async function submitAnswer(answerData: Answer): Promise<Answer> {
    const result = await submitToStrapi<Answer>('answers', answerData);

    if (!result) {
        throw new Error('Failed to submit answer');
    }
    return result;
}

export async function getAnswersByQuestion(questionId: number): Promise<Answer[] | null> {
    return await fetchFromStrapi<Answer[]>('answers', {
        filters: { question: { $eq: questionId } },
        populate: 'user',
        sort: 'upvotes:desc'
    });
}

export async function updateAnswerVotes(
    documentId: string,
    upvotes: number,
    downvotes: number
): Promise<Answer | null> {
    return await updateInStrapi<Answer>('answers', documentId, {
        upvotes,
        downvotes
    });
}