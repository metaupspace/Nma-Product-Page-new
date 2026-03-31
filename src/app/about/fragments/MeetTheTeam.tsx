import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import GradientText from "@/components/GradientText"
import MeetTheTeamCard from "@/components/cards/MeetTheTeamCard"
import { useEffect, useState } from "react"
import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi"
import { MeetTheTeamData, TransformedMeetTheTeam } from "@/types/strapi/team"

// Team Loading Skeleton
const TeamLoadingSkeleton = () => {
    return (
        <section id="ourteam" className="bg-primary-indigo py-12 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title={<>Meet the <GradientText>Team</GradientText></>}
                description={
                    <>
                        Our team blends AI research, engineering, and ethics with real-world experience. We&apos;re problem solvers, thinkers, creators—and we&apos;re
                        <br />
                        building AI that respects the people who use it.
                    </>
                }
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-0">
                {/* Skeleton for first row (4 cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                            {/* Avatar skeleton */}
                            <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 animate-pulse"></div>

                            {/* Name skeleton */}
                            <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-2 animate-pulse"></div>

                            {/* Designation skeleton */}
                            <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>

                            {/* Bio skeleton */}
                            <div className="space-y-2">
                                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-4/5 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Team Error State
const TeamErrorState = () => {
    return (
        <section id="ourteam" className="bg-primary-indigo py-12 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title={<>Meet the <GradientText>Team</GradientText></>}
                description={
                    <>
                        Our team blends AI research, engineering, and ethics with real-world experience. We&apos;re problem solvers, thinkers, creators—and we&apos;re
                        <br />
                        building AI that respects the people who use it.
                    </>
                }
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-12 shadow-lg text-center">
                    <p className="text-red-500 text-lg font-semibold">Error loading team members</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Please try again later</p>
                </div>
            </div>
        </section>
    );
};

const MeetTheTeam = () => {
    const [teamBio, setTeamBio] = useState<TransformedMeetTheTeam[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);

                // Try different populate formats - start with * to get all relations
                const testimonialData = await fetchFromStrapi<MeetTheTeamData[]>('meet-the-teams', {
                    populate: '*',
                });

                if (testimonialData && Array.isArray(testimonialData)) {
                    // Transform the data for easier use
                    const tranformedTestimonials = testimonialData.map((item) => {

                        // Handle the case where attributes might be directly on the item object
                        const { Id, name, designation, bio, image } = item;

                        // Get main image URL
                        let mainImageUrl = '';
                        if (image && image.url) {
                            mainImageUrl = getStrapiMedia(image.url);
                        }

                        return {
                            Id,
                            name,
                            image: mainImageUrl,
                            designation,
                            bio
                        }
                    });
                    setTeamBio(tranformedTestimonials);
                }
                else {
                    setError(true)
                    setTeamBio([]);
                }
            } catch (err) {
                setError(true)
                console.error('Error fetching testimonials:', err);
                setTeamBio([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    // Show loading skeleton
    if (loading) {
        return <TeamLoadingSkeleton />;
    }

    // Show error state
    if (error) {
        return <TeamErrorState />;
    }

    return (
        <section id="ourteam" className="bg-primary-indigo py-12 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title={<>Meet the <GradientText>Team</GradientText></>}
                description={
                    <>
                        Our team blends AI research, engineering, and ethics with real-world experience. We&apos;re problem solvers, thinkers, creators—and we&apos;re
                        <br />
                        building AI that respects the people who use it.
                    </>
                }
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="md:max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamBio.slice(0, 4).map((item) => (
                        <MeetTheTeamCard key={item.Id} {...item} />
                    ))}
                </div>

                {teamBio.length > 4 && (
                    <div className="flex justify-center mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {teamBio.slice(4).map((item) => (
                                <MeetTheTeamCard key={item.Id} {...item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default MeetTheTeam