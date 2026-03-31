import GradientText from "@/components/GradientText"
import SectionHeader from "@/components/SectionHeader"
import Link from "next/link"
import { File, Mail, ShieldBan } from "lucide-react"

const HelpCenter = () => {
    const data = [
        {
            id: 1,
            icon: <Mail size={30} />,
            title: "Email Us",
            label: "trust@neuralmindatlas.ai",
            href: "#"
        },
        {
            id: 2,
            icon: <File size={30} />,
            title: "Need Documentation?",
            label: "Link",
            href: "#"
        },
        // {
        //     id: 3,
        //     icon: <ShieldBan size={30} />,
        //     title: "Report a Vulnerability",
        //     label: "security@neuralmindatlas.com",
        //     href: "#"
        // }
    ]
    return (
        <section id="helpcenter" className="py-16 bg-black space-y-8">
            <SectionHeader
                title={<>Have a <GradientText>Concern</GradientText></>}
                description={<>Our Trust & Security Team is here to support your compliance</>}
                className="text-black dark:text-white"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />
            <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    data.map(item => (
                        <div key={item.id} className="bg-blue-vertical p-[3px] rounded-xl w-full">
                            <div className="rounded-xl bg-white dark:bg-black p-6 space-y-3">
                                {item.icon}
                                <h6 className="font-medium">{item.title}</h6>
                                <Link className="underline" href={item.href}>{item.label}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default HelpCenter