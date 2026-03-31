import GradientText from "@/components/GradientText";
import AnimatedGradientButton from "@/components/magicui/GradientButton";
import SectionHeader from "@/components/SectionHeader";
import ConnectWithUsForm from "@/components/forms (unused)/ConnectWithUsForm";
import { useState } from "react";
import Modal from "@/components/modals/Modal";

const Findus = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <>
            <section id="connectwithalocalexpert" className="bg-primary-indigo space-y-8 py-16">
                <SectionHeader
                    title={
                        <>
                            Where You&apos;ll <GradientText>Find Us?</GradientText> <br />
                        </>
                    }
                    className="text-black dark:text-white"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />

                <div className="relative max-w-7xl mx-auto p-4 md:p-0 flex flex-col lg:flex-row gap-16 items-center justify-between">
                    <div className="w-full lg:w-4/5 space-y-8">
                        <p className="text-3xl font-bold">
                            Where innovation meets impact—across continents, industries, and opportunity.
                        </p>
                        {/* <p className="text-lg mb-8">
                        Atlanta, Georgia- Private Equity Strategy & Healthcare, Pharma and Life Sciences Corporate AI Innovation
                    </p> */}
                        <AnimatedGradientButton
                            onClick={() => setIsModalOpen(true)}
                            className="p-3 px-6 group"
                        >
                            Connect with a local expert
                        </AnimatedGradientButton>
                    </div>

                    <div className="w-full h-full flex justify-center">
                        <iframe
                            className="h-[400px] w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60346.139577794085!2d72.85983489521486!3d19.03585504345165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50444c66492ed%3A0x1db85b47cb00fa31!2sLife%20Science%20Partner!5e0!3m2!1sen!2sin!4v1750676593262!5m2!1sen!2sin"
                            loading="lazy"
                        >
                        </iframe>
                    </div>
                </div>
            </section>
            <Modal
                title="Connect With Us"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                className="max-w-2xl"
            >
                <ConnectWithUsForm />
            </Modal>
        </>
    )
}

export default Findus;