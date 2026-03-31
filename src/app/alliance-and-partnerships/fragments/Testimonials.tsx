import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import { useEffect, useState } from "react";
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import { TestimonialData, TransformedTestimonial } from "@/types/strapi/testimonial";

// Testimonials Loading Skeleton
const TestimonialsLoadingSkeleton = () => {
    return (
        <section id="teamtestimonials" className="py-16 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title="What Our Team Says?"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="max-w-7xl mx-auto">
                <div className="flex gap-6 overflow-hidden">
                    {[...Array(2)].map((_, idx) => (
                        <div key={idx} className="bg-brand-blue text-white w-[400px] lg:w-[600px] rounded-md p-6 px-12 flex flex-col gap-2 justify-around items-center text-center mb-12 flex-shrink-0">
                            {/* Profile section skeleton */}
                            <div className="flex gap-6 items-center w-full">
                                <div className="w-[60px] h-[60px] bg-white/20 rounded-full animate-pulse"></div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-24 h-5 bg-white/20 rounded animate-pulse"></div>
                                    <div className="w-32 h-4 bg-white/15 rounded animate-pulse"></div>
                                </div>
                            </div>

                            {/* Quote icon skeleton */}
                            <div className="rounded-full h-6 w-6 bg-white/20 animate-pulse"></div>

                            {/* Testimonial text skeleton */}
                            <div className="w-full space-y-2">
                                <div className="w-full h-4 bg-white/15 rounded animate-pulse"></div>
                                <div className="w-5/6 h-4 bg-white/15 rounded animate-pulse"></div>
                                <div className="w-4/5 h-4 bg-white/15 rounded animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-white/15 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Testimonials Error State
const TestimonialsErrorState = ({ error }: { error: string }) => {
    return (
        <section id="teamtestimonials" className="py-16 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title="What Our Team Says?"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="bg-brand-blue text-white w-full max-w-2xl mx-auto rounded-md p-12 text-center">
                    <p className="text-red-300 text-lg font-semibold">{error}</p>
                    <p className="text-white/70 mt-2">Please try again later</p>
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const [testimonialCards, setTestimonialsCards] = useState<TransformedTestimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                setError(null);

                // Try different populate formats - start with * to get all relations
                const testimonialData = await fetchFromStrapi<TestimonialData[]>('testimonials', {
                    populate: '*',
                    sort: 'createdAt:desc',
                });

                if (testimonialData && Array.isArray(testimonialData)) {
                    // Transform the data for easier use
                    const tranformedTestimonials = testimonialData.map((item) => {

                        // Handle the case where attributes might be directly on the item object
                        const { documentId, name, image, designation, testimonial } = item;

                        // Get main image URL
                        let mainImageUrl = '';
                        if (image && image.url) {
                            mainImageUrl = getStrapiMedia(image.url);
                        }

                        return {
                            documentId,
                            name,
                            image: mainImageUrl,
                            designation,
                            testimonial
                        }

                    });

                    setTestimonialsCards(tranformedTestimonials);
                }
                else {
                    setTestimonialsCards([]);
                }
            } catch (err) {
                console.error('Error fetching testimonials:', err);
                setError('Failed to load testimonials');
                setTestimonialsCards([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Show loading skeleton
    if (loading) {
        return <TestimonialsLoadingSkeleton />;
    }

    // Show error state
    if (error) {
        return <TestimonialsErrorState error={error} />;
    }

    return (
        <section id="teamtestimonials" className="py-16 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title="What Our Team Says?"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />
            
            {/* Coming Soon Placeholder */}
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="bg-brand-blue text-white w-full max-w-2xl mx-auto rounded-md p-12 text-center">
                    <div className="text-2xl text-white mb-4">Coming Soon</div>
                    <div className="text-white/80 leading-relaxed">
                        Your experience could be our very first testimonial - let’s create it together.
                    </div>
                </div>
            </div>

            {/* Testimonial Cards - Commented out for now */}
            {/* {testimonialCards.map(item => (
                <div key={item.documentId} className="bg-brand-blue text-white w-[400px] lg:w-[600px] rounded-md p-6 px-12 flex flex-col gap-2 justify-around items-center text-center mb-12">
                    <div className="flex gap-6 items-center">
                        <Image width={60} height={60} src={item.image} alt={item.name} className="rounded-full" />
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.designation}</p>
                        </div>
                    </div>
                    <div className="rounded-full h-6 w-6 bg-white text-black">
                        <span className="text-xl">
                            &quot;
                        </span>
                    </div>
                    <div>
                        <p>{item.testimonial}</p>
                    </div>
                </div>
            ))} */}
        </section>
    )
}

export default Testimonials