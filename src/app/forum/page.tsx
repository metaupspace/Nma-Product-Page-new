// components/ForumPage.tsx
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ChevronUp, ChevronDown, MessageSquare } from "lucide-react";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import { ensureStrapiUser, StrapiUser } from "@/lib/userSync";
import {
    submitQuestion,
    getAllQuestions,
    updateQuestionVotes,
    submitAnswer,
    getAnswersByQuestion,
    updateAnswerVotes
} from "@/services/forumService";
import { Question, Answer } from "@/types/strapi/forum";
import { format } from "date-fns/format";

interface QuestionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        setIsSubmitting(true);
        await onSubmit(title, content);
        setTitle("");
        setContent("");
        setIsSubmitting(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Post a Question</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Question Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="What's your question?"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Question Details
                            </label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Provide more details about your question..."
                                rows={6}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
                                required
                            />
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
                            >
                                Cancel
                            </button>
                            <ShinyButton
                                type="submit"
                                disabled={isSubmitting || !title.trim() || !content.trim()}
                                className="px-6 py-2"
                            >
                                {isSubmitting ? "Posting..." : "Post Question"}
                            </ShinyButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

interface VoteButtonsProps {
    upvotes: number;
    downvotes: number;
    onUpvote: () => void;
    onDownvote: () => void;
    disabled?: boolean;
}

const VoteButtons: React.FC<VoteButtonsProps> = ({
    upvotes,
    downvotes,
    onUpvote,
    onDownvote,
    disabled = false
}) => {
    return (
        <div className="flex items-center gap-2">
            <button
                onClick={onUpvote}
                disabled={disabled}
                className="flex items-center gap-1 px-3 py-1 border border-green-500 text-green-600 rounded-sm hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-green-900/20"
            >
                <ChevronUp size={16} />
                <span>{upvotes}</span>
            </button>
            <button
                onClick={onDownvote}
                disabled={disabled}
                className="flex items-center gap-1 px-3 py-1 border border-red-500 text-red-600 rounded-sm hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-red-900/20"
            >
                <ChevronDown size={16} />
                <span>{downvotes}</span>
            </button>
        </div>
    );
};

interface AnswerFormProps {
    questionId: string;
    onAnswerSubmitted: () => void;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ questionId, onAnswerSubmitted }) => {
    const { data: session } = useSession();
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || !session?.user) return;

        setIsSubmitting(true);
        try {
            // Sync user with Strapi
            const userDocumentId = await ensureStrapiUser({
                id: session.user.id || '',
                email: session.user.email || '',
                name: session.user.name || '',
                image: session.user.image || ''
            });

            if (!userDocumentId) {
                console.error('Failed to sync user with Strapi');
                return;
            }

            // Submit answer
            await submitAnswer({
                content,
                upvotes: 0,
                downvotes: 0,
                question: questionId,
                user: userDocumentId
            });

            setContent("");
            onAnswerSubmitted();
        } catch (error) {
            console.error('Error submitting answer:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!session) {
        return (
            <div className="p-4 text-center text-gray-500">
                Please sign in to post an answer.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-full flex">
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your answer here"
                className="p-5 py-3 dark:bg-black text-md rounded-md border-2 border-gray-400 w-full"
                disabled={isSubmitting}
                required
            />
            <div className="absolute right-4 top-2.5">
                <ShinyButton
                    type="submit"
                    disabled={isSubmitting || !content.trim()}
                    className="text-sm font-normal rounded-sm p-3 py-1"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </ShinyButton>
            </div>
        </form>
    );
};

export default function Forum() {
    const { data: session } = useSession();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [answers, setAnswers] = useState<{ [questionId: string]: Answer[] }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

    // Fetch questions and answers
    const fetchForumData = async () => {
        try {
            setLoading(true);

            // Fetch questions
            const questionsData = await getAllQuestions();

            if (questionsData) {
                setQuestions(questionsData);

                // Fetch answers for each question
                const answersData: { [questionId: string]: Answer[] } = {};

                for (const question of questionsData) {
                    const questionAnswers = await getAnswersByQuestion(question.id as number);
                    if (questionAnswers) {
                        answersData[question.documentId as string] = questionAnswers;
                    }
                }

                setAnswers(answersData);
            }
        } catch (error) {
            console.error('Error fetching forum data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchForumData();
    }, []);

    const handlePostQuestion = async (title: string, content: string) => {
        if (!session?.user) return;

        try {
            // Sync user with Strapi
            const userDocumentId = await ensureStrapiUser({
                id: session.user.id || '',
                email: session.user.email || '',
                name: session.user.name || '',
                image: session.user.image || ''
            });

            if (!userDocumentId) {
                console.error('Failed to sync user with Strapi');
                return;
            }

            // Submit question
            await submitQuestion({
                title,
                content,
                upvotes: 0,
                downvotes: 0,
                user: (userDocumentId as string)// You'll need to get the actual user ID from Strapi
            })

            // Refresh forum data
            fetchForumData();
        } catch (error) {
            console.error('Error posting question:', error);
        }
    };

    const handleVote = async (
        type: 'question' | 'answer',
        documentId: string,
        voteType: 'upvote' | 'downvote',
        currentUpvotes: number,
        currentDownvotes: number
    ) => {
        if (!session) return;

        try {
            const newUpvotes = voteType === 'upvote' ? currentUpvotes + 1 : currentUpvotes;
            const newDownvotes = voteType === 'downvote' ? currentDownvotes + 1 : currentDownvotes;

            if (type === 'question') {
                await updateQuestionVotes(documentId, newUpvotes, newDownvotes);
            } else {
                await updateAnswerVotes(documentId, newUpvotes, newDownvotes);
            }

            // Refresh data
            fetchForumData();
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    const toggleQuestion = (questionId: string) => {
        const newExpanded = new Set(expandedQuestions);
        if (newExpanded.has(questionId)) {
            newExpanded.delete(questionId);
        } else {
            newExpanded.add(questionId);
        }
        setExpandedQuestions(newExpanded);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-lg">Loading forum...</div>
            </div>
        );
    }

    return (
        <main>
            <section className="relative">
                <div className="py-32 space-y-12">
                    <div className="container mx-auto flex justify-end">
                        <ShinyButton
                            onClick={() => setIsModalOpen(true)}
                            className="text-sm font-semibold rounded-sm p-4 py-1.5"
                        >
                            Post a Question
                        </ShinyButton>
                    </div>

                    {questions.map((question) => (
                        <div key={question.documentId} className="container mx-auto space-y-4">
                            {/* Question */}
                            <div className="bg-white dark:bg-black rounded-md shadow-md p-4 space-y-4">
                                <div className="flex items-center gap-4">
                                    <Image
                                        alt="User"
                                        src={(question.user as StrapiUser).image}
                                        width={48}
                                        height={48}
                                        className="rounded-full w-12 h-12"
                                    />
                                    <div className="flex-1">
                                        <h2 className="font-semibold text-lg">{(question.user as StrapiUser).name}</h2>
                                        <p className="text-sm text-gray-500">
                                            {format(new Date(question.createdAt as string), 'MMMM dd, yyyy')}
                                        </p>
                                    </div>
                                </div>

                                <div className="ml-8 space-y-2">
                                    <h3 className="text-xl font-bold">{question.title}</h3>
                                    <p className="text-lg">{question.content}</p>
                                </div>

                                <div className="ml-8 flex items-center justify-between">
                                    <VoteButtons
                                        upvotes={question.upvotes}
                                        downvotes={question.downvotes}
                                        onUpvote={() => handleVote('question', question.documentId || '', 'upvote', question.upvotes, question.downvotes)}
                                        onDownvote={() => handleVote('question', question.documentId || '', 'downvote', question.upvotes, question.downvotes)}
                                        disabled={!session}
                                    />

                                    <button
                                        onClick={() => toggleQuestion(question.documentId as string)}
                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                                    >
                                        <MessageSquare size={16} />
                                        <span>
                                            {answers[question.documentId as string]?.length || 0} Answers
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Answers */}
                            {expandedQuestions.has(question.documentId as string) && (
                                <div className="relative ml-16 space-y-8">
                                    <div className="absolute -left-10 h-full w-1 rounded-sm bg-blue-500"></div>

                                    <div>
                                        <h2 className="text-lg font-medium">Answers:</h2>
                                    </div>

                                    {answers[question.documentId as string]?.map((answer) => (
                                        <div key={answer.documentId} className="bg-white dark:bg-black space-y-4 rounded-md shadow-md p-4">
                                            <div className="flex items-center gap-4">
                                                <Image
                                                    alt="User"
                                                    src={(answer.user as StrapiUser).image}
                                                    width={48}
                                                    height={48}
                                                    className="rounded-full w-12 h-12"
                                                />
                                                <div>
                                                    <h2 className="font-medium text-lg">{(answer.user as StrapiUser).name}</h2>
                                                    <p className="text-sm text-gray-500">
                                                        {format(new Date(answer.createdAt as string), 'MMMM dd, yyyy')}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="ml-8">{answer.content}</p>

                                            <div className="ml-8">
                                                <VoteButtons
                                                    upvotes={answer.upvotes}
                                                    downvotes={answer.downvotes}
                                                    onUpvote={() => handleVote('answer', answer.documentId || '', 'upvote', answer.upvotes, answer.downvotes)}
                                                    onDownvote={() => handleVote('answer', answer.documentId || '', 'downvote', answer.upvotes, answer.downvotes)}
                                                    disabled={!session}
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    <AnswerForm
                                        questionId={question.documentId as string}
                                        onAnswerSubmitted={fetchForumData}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <QuestionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handlePostQuestion}
            />
        </main>
    );
}