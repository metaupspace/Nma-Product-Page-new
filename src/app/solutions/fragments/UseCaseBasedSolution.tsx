import React from 'react';
import UseCaseCard from '@/components/cards/UsecaseCard';
import SectionHeader from '@/components/SectionHeader';
import image_1 from "../../../../public/assets/solutions/usecase_based_solution/image_1.png"
import image_2 from "../../../../public/assets/solutions/usecase_based_solution/image_2.png"
import image_3 from "../../../../public/assets/solutions/usecase_based_solution/image_3.png"
import image_4 from "../../../../public/assets/solutions/usecase_based_solution/image_4.png"

interface UseCaseBasedSolutionsProps {
    className?: string;
}

const UseCaseBasedSolutions: React.FC<UseCaseBasedSolutionsProps> = ({ className = '' }) => {
    const useCases = [
        {
            title: "Market Growth",
            description: "Expand user markets and customer base",
            illustration: image_1
        },
        {
            title: "Financial Optimization",
            description: "Increase revenue, reduce costs, and mitigate risks",
            illustration: image_2
        },
        {
            title: "Market Intelligence",
            description: "Analyze white space and identify new opportunities",
            illustration: image_3
        },
        {
            title: "Strategic Operations",
            description: "M&A support (current release) with HR and IT modules coming in 2026",
            illustration: image_4
        }
    ];

    return (
        <section className={`bg-black py-16 px-4 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <SectionHeader
                    className="text-black dark:text-white -py-1"
                    title="Applicable Use Cases"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:max-w-5xl xl:max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <UseCaseCard
                            key={index}
                            title={useCase.title}
                            description={useCase.description}
                            image={useCase.illustration}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCaseBasedSolutions