import { useState } from "react";
import StaticSections from "./StaticSection";
import ExpandableSection from "./ExpandableSection";

// Types
export interface MediaArticle {
    date: string;
    title: string;
    description: string;
    image?: string;
}

export interface ResourceSection {
    id: number;
    title: string;
    description: string;
    href: string;
    expandable: boolean;
}

// Data Hook
const useResourceData = (): ResourceSection[] => [
    {
        id: 1,
        title: "Case Studies",
        description: "Real-world impact- Learn how organizations like yours achieved measurable success with our AI solutions.",
        href: "#",
        expandable: true
    },
    {
        id: 4,
        title: "Events & Webinars",
        description: "Watch our top-rated sessions at your convenience. Topics range from AI compliance to scalable architectures.",
        href: "#",
        expandable: true,
    },
    {
        id: 6,
        title: "FAQs",
        description: "Quick answers to the most common questions from enterprise partners, developers, and clinical teams.",
        href: "/faqs",
        expandable: false
    },
    // {
    //     id: 7,
    //     title: "Forum",
    //     description: "Connect with experts and enthusiasts to discuss breakthroughs, challenges, and ideas in AI technology.",
    //     href: "/forum",
    //     expandable: false
    // }
];

// Main Component
export default function ResourceList() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());
    const data = useResourceData();

    const toggleItem = (itemId: number) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(itemId)) {
            newOpenItems.delete(itemId);
        } else {
            newOpenItems.add(itemId);
        }
        setOpenItems(newOpenItems);
    };

    const isItemOpen = (itemId: number) => openItems.has(itemId);

    // Separate expandable and non-expandable items
    const expandableItems = data.filter(item => item.expandable);
    const staticItems = data.filter(item => !item.expandable);

    return (
        <section>
            <div className="md:max-w-5xl xl:max-w-7xl mx-auto flex flex-col px-4 md:px-0 py-16 gap-12">
                {/* Expandable Sections */}
                {expandableItems.map(item => (
                    <ExpandableSection
                        key={item.id}
                        item={item}
                        isOpen={isItemOpen(item.id)}
                        onToggle={() => toggleItem(item.id)}
                    />
                ))}

                {/* Static Sections (FAQs and Forum) */}
                <StaticSections items={staticItems} />
            </div>
        </section>
    );
}