import GradientText from "@/components/GradientText"
import { ShinyButton } from "@/components/magicui/ShinyButton"
import SectionHeader from "@/components/SectionHeader"
import WaitlistForm from "@/components/forms (unused)/WaitlistForm"
import { useState } from "react"
import Modal from "@/components/modals/Modal"

const DeliveryMethods = () => {

    const [isRequestDemoModalOpen, setRequestDemoModalOpen] = useState<boolean>(false);

    return (
        <>
            <section id="roadmap" className="relative text-center space-y-12 py-20">
                <SectionHeader
                    className="text-black dark:text-white"
                    title={
                        <>
                            How <GradientText>ConvoSynth</GradientText> Delivers
                        </>
                    }
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />

                <div className="md:max-w-5xl xl:max-w-7xl relative mx-auto p-4 lg:p-0 flex flex-col lg:flex-row justify-between items-center gap-16 relative z-0">

                    <div className="w-full lg:w-2/3 h-[200px] md:h-[300px] lg:h-[500px] bg-brand-dark-blue text-center p-4 rounded-md flex items-center justify-center">
                        <h1 className="text-white lg:text-3xl">
                            canvas motion video space dedicated <br /> for workflow of platform
                        </h1>
                    </div>

                    <div className="relative flex flex-col gap-16 w-full lg:w-1/3 relative z-10">

                        <div className="relative bg-blue-vertical p-[3px] rounded-md">
                            <h6 className="bg-white dark:bg-black rounded-md shadow-md px-6 py-3 text-center">
                                architecture overview diag
                            </h6>
                            <svg
                                className="absolute left-0 top-full w-full h-[60px]"
                                viewBox="0 0 100 60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="200" y1="0" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="-100" y2="60" stroke="#0B5ACE" strokeWidth="2" />
                                <polyline points="-106,54 -100,60 -94,54" fill="none" stroke="#0B5ACE" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative bg-blue-vertical p-[3px] rounded-md">
                            <h6 className="bg-white dark:bg-black rounded-md shadow-md px-6 py-3 text-center">
                                architecture overview diag
                            </h6>
                            <svg
                                className="absolute left-0 top-full w-full h-[60px]"
                                viewBox="0 0 100 60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="-100" y1="0" x2="-100" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="200" y1="30" x2="200" y2="60" stroke="#0B5ACE" strokeWidth="2" />
                                <polyline points="206,54 200,60 194,54" fill="none" stroke="#0B5ACE" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative bg-blue-vertical p-[3px] rounded-md">
                            <h6 className="bg-white dark:bg-black rounded-md shadow-md px-6 py-3 text-center">
                                architecture overview diag
                            </h6>
                            <svg
                                className="absolute left-0 top-full w-full h-[60px]"
                                viewBox="0 0 100 60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="200" y1="0" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="-100" y2="60" stroke="#0B5ACE" strokeWidth="2" />
                                <polyline points="-106,54 -100,60 -94,54" fill="none" stroke="#0B5ACE" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="relative bg-blue-vertical p-[3px] rounded-md">
                            <h6 className="bg-white dark:bg-black rounded-md shadow-md px-6 py-3 text-center">
                                architecture overview diag
                            </h6>
                            <svg
                                className="absolute left-0 top-full w-full h-[60px]"
                                viewBox="0 0 100 60"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line x1="-100" y1="0" x2="-100" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="-100" y1="30" x2="200" y2="30" stroke="#0B5ACE" strokeWidth="2" />
                                <line x1="200" y1="30" x2="200" y2="60" stroke="#0B5ACE" strokeWidth="2" />
                                <polyline points="206,54 200,60 194,54" fill="none" stroke="#0B5ACE" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="bg-blue-vertical p-[3px] rounded-md">
                            <h6 className="bg-white dark:bg-black rounded-md shadow-md px-6 py-3">architecture overview diag</h6>
                        </div>
                    </div>
                </div>
                {/* <ShinyButton onClick={() => setRequestDemoModalOpen(true)}>Request a Demo</ShinyButton> */}
            </section>
            <Modal
                title="Request a Demo"
                isModalOpen={isRequestDemoModalOpen}
                setIsModalOpen={setRequestDemoModalOpen}
            >
                <WaitlistForm />
            </Modal>
        </>
    )
}

export default DeliveryMethods