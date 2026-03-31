import GradientText from "@/components/GradientText"
import SectionHeader from "@/components/SectionHeader"

const PurposeAndResponsibility = () => {

    const data = [
        {
            id: 1,
            title: "Ethical AI & Data Responsibility"
        },
        {
            id: 2,
            title: "Health Equity & Access Across Payers & Providers"
        },
        {
            id: 3,
            title: "Sustainable Digital Transformation in Pharma & Life Sciences"
        },
        {
            id: 4,
            title: "ESG-Ready Innovation for Private Equity"
        }
    ]

    return (
        <section className="space-y-8 py-16 bg-brand-indigo dark:bg-black">
            <SectionHeader
                className="text-black dark:text-white"
                title={
                    <>
                        Innovating with <GradientText>Purpose</GradientText> <br />
                        Transforming with <GradientText>Responsibility</GradientText>
                    </>
                }
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                description={
                    <>
                        We align advanced AI with ethical, sustainable outcomes—helping leaders in Private Equity,
                        Healthcare, Pharma, and Biotech drive
                        impactful, future-ready transformation.
                    </>
                }
            />

            <div className="max-w-7xl mx-auto p-4 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    data.map(item => (
                        <div key={item.id} className="hover:scale-105 relative p-[2px] bg-blue-vertical shadow-lg rounded-sm transition-all duration-500">
                            <div className="bg-white dark:bg-black p-4 rounded-sm w-full h-full">
                                <h3 className="text-md font-medium mb-2">{item.title}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default PurposeAndResponsibility