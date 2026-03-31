// import { Faq } from "@/types/strapi/faqs";
// import faqData from "./faqdata.json"
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Faq, TransformedFaq } from "@/types/strapi/faqs";
import { fetchFromStrapi } from "@/lib/strapi";
// import SectionHeader from "@/components/SectionHeader";

export default function FaqSection() {
    const [faqData, setFaqData] = useState<TransformedFaq[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const toggleItem = (categoryIndex: number, itemIndex: number) => {
        const key = `${categoryIndex}-${itemIndex}`;
        const newOpenItems = new Set(openItems);

        if (newOpenItems.has(key)) {
            newOpenItems.delete(key);
        } else {
            newOpenItems.add(key);
        }

        setOpenItems(newOpenItems);
    };

    const isItemOpen = (categoryIndex: number, itemIndex: number) => {
        return openItems.has(`${categoryIndex}-${itemIndex}`);
    };


    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch FAQ data from Strapi
                const strapiData = await fetchFromStrapi<Faq[]>('faqs', {
                    populate: '*',
                    sort: 'createdAt:desc',
                });

                console.log('Raw Strapi Data:', strapiData);

                if (strapiData && Array.isArray(strapiData)) {
                    // Transform the FAQ data to group by categories
                    const transformedData = transformFaqData(strapiData);

                    console.log('Transformed FAQ Data:', transformedData);

                    setFaqData(transformedData);
                } else {
                    console.warn('No FAQ data received or data is not an array');
                    setFaqData([]);
                }

            } catch (err) {
                console.error('Error fetching FAQs:', err);
                setError('Failed to load FAQs. Please try again later.');
                setFaqData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    // Helper function to transform FAQ data
    const transformFaqData = (faqs: Faq[]): TransformedFaq[] => {
        // Group FAQs by category
        const groupedFaqs = faqs.reduce((acc, faq) => {
            if (!acc[faq.category]) {
                acc[faq.category] = [];
            }

            acc[faq.category].push({
                question: faq.question,
                answer: faq.answer
            });

            return acc;
        }, {} as Record<string, { question: string; answer: string }[]>);

        // Convert grouped object to array format and sort categories
        return Object.entries(groupedFaqs)
            .map(([category, qnaList]) => ({
                category,
                qnaList
            }))
            .sort((a, b) => a.category.localeCompare(b.category));
    };

    if (loading) {
        return (
            <section id="blogs" className="relative py-16 space-y-8">
                <div className="container px-4 mx-auto md:px-0">
                    <div className="py-8 text-center">
                        <p className="text-gray-500 dark:text-gray-400">Loading FAQs...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="blogs" className="relative py-16 space-y-8">
                <div className="container px-4 mx-auto md:px-0">
                    <div className="py-8 text-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="faq" className="pb-24">
            <div className="container mx-auto space-y-12">
                {
                    faqData.map((item, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-3">
                            <h2 className="text-2xl font-medium">{item.category}</h2>
                            <div className="space-y-5">
                                {item.qnaList.map((qna, itemIndex) => {
                                    const isOpen = isItemOpen(categoryIndex, itemIndex);

                                    return (
                                        <div
                                            key={itemIndex}
                                            className="p-1 rounded-md bg-blue-vertical"
                                        >
                                            <div className="p-3 space-y-2 bg-white rounded-sm dark:bg-black">
                                                <div className="flex items-center justify-between px-2 text-white rounded-sm bg-brand-blue">
                                                    <h3 className="p-2 font-medium">{qna.question}</h3>
                                                    <button
                                                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                                                        className="p-2"
                                                    >
                                                        <ChevronDown
                                                            className={cn(
                                                                "transition-transform duration-200",
                                                                isOpen && "rotate-180"
                                                            )}
                                                        />
                                                    </button>
                                                </div>
                                                <h4
                                                    className={cn(
                                                        "p-2 transition-all duration-300 ease-in-out",
                                                        isOpen ? "block" : "hidden"
                                                    )}
                                                >
                                                    {qna.answer}
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}