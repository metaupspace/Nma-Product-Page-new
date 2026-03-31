import GradientText from "@/components/GradientText"
import { ShinyButton } from "@/components/magicui/ShinyButton"
import SectionHeader from "@/components/SectionHeader"
// import PartnerWithUsForm from "@/components/forms (unused)/PartnerWithUsForm"
import Modal from "@/components/modals/Modal"
import { useState } from "react"
import ContactUsForm from "@/components/forms/ContactUsForm"

const FillTheForm = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <>
            <section className="py-16 space-y-8">
                <SectionHeader
                    className="text-black dark:text-white"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                    title={
                        <>
                            Ready to Collaborate?
                            <GradientText> Let&apos;s Talk</GradientText>
                        </>
                    }
                />
                <div className="container mx-auto flex items-center justify-center">
                    <ShinyButton onClick={() => setIsModalOpen(true)}>
                        Fill the Form
                    </ShinyButton>
                </div>
            </section>
            <Modal
                title="Partner With Us"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <ContactUsForm />
            </Modal>
        </>
    )
}

export default FillTheForm