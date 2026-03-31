"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import GradientText from '@/components/GradientText';
import image_1 from "../../../../public/assets/home/beta_testing/image_1.png"
import image_2 from "../../../../public/assets/home/beta_testing/image_2.png"
import image_3 from "../../../../public/assets/home/beta_testing/image_3.png"
import image_4 from "../../../../public/assets/home/beta_testing/image_4.png"

import favicon from "../../../../public/assets/brand/favicon.png"
import { AnimatedBeam } from '@/components/magicui/AnimatedBeam';
// import AnimatedGradientButton from '@/components/magicui/GradientButton';
import Modal from '@/components/modals/Modal';
import RequestBetaAccessForm from '@/components/forms (unused)/RequestBetaAccess';

const BetaTesting = () => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <section id='betatestingprogram' className="relative py-16 space-y-16 overflow-hidden text-center bg-brand-indigo dark:bg-black bg-primary-indigo">
                <SectionHeader
                    className='text-black dark:text-white'
                    title={<><GradientText>Beta-Testing</GradientText>  Program</>}
                    description={<>Be the First to Shape the Future - Join Our Beta Testing Program</>}
                    separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
                />

                {/* <AnimatedGradientButton
                    onClick={() => setIsModalOpen(true)}
                    className="p-3 px-6"
                >
                    Request Beta Access
                </AnimatedGradientButton> */}

                <div className='flex flex-col items-center w-full lg:mt-36' ref={containerRef}>
                    <div className="z-20 flex flex-col items-center justify-center w-full min-w-0 gap-10 px-4 mx-auto mt-16 md:px-0 max-w-7xl">
                        <div className='flex justify-between w-full'>

                            <div className='bg-blue-vertical h-24 w-1/4 p-[3px] rounded-md'>
                                <div ref={div1Ref} className='flex items-center justify-center w-full h-full gap-4 p-4 bg-white rounded-md shadow-lg md:justify-between dark:bg-black'>
                                    <h6 className='hidden text-lg md:block font-semi-bold'>Direct Collaboration</h6>
                                    <Image className='object-contain w-10' src={image_1} alt='Direct Collaboration' />
                                </div>
                            </div>

                            <div className='bg-blue-vertical h-24 w-1/4 p-[3px] rounded-md'>
                                <div ref={div2Ref} className='flex items-center justify-center w-full h-full gap-4 p-4 bg-white rounded-md shadow-lg md:justify-between dark:bg-black'>
                                    <h6 className='hidden text-lg md:block font-semi-bold'>Exclusive Incentives</h6>
                                    <Image className='object-contain w-10' src={image_2} alt='Exclusive Incentives' />
                                </div>
                            </div>
                        </div>

                        <div ref={div3Ref} className='mx-auto'>
                            <Image className='w-16' src={favicon} alt='logo' />
                        </div>

                        <div className='flex justify-between w-full'>
                            <div className='bg-blue-vertical h-24 w-1/4 p-[3px] rounded-md'>
                                <div ref={div4Ref} className='flex items-center justify-center w-full h-full gap-4 p-4 bg-white rounded-md shadow-lg md:justify-between dark:bg-black'>
                                    <h6 className='hidden text-lg md:block font-semi-bold'>Early Access</h6>
                                    <Image className='object-contain w-10' src={image_3} alt='Early Access' />
                                </div>
                            </div>

                            <div className='bg-blue-vertical h-24 w-1/4 p-[3px] rounded-md'>
                                <div ref={div5Ref} className='flex items-center justify-center w-full h-full gap-4 p-4 bg-white rounded-md shadow-lg md:justify-between dark:bg-black'>
                                    <h6 className='hidden text-lg md:block font-semi-bold'>Real-World Feedback</h6>
                                    <Image className='object-contain w-10' src={image_4} alt='Real-World Feedback' />
                                </div>
                            </div>

                        </div>

                    </div>

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div1Ref}
                        toRef={div3Ref}
                        curvature={75}
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div2Ref}
                        toRef={div3Ref}
                        curvature={75}
                        reverse
                    />

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div4Ref}
                        toRef={div3Ref}
                        curvature={-75}
                    />

                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div5Ref}
                        toRef={div3Ref}
                        curvature={-75}
                        reverse
                    />

                </div>

                <div className='flex flex-col w-full gap-2 py-4 mt-24 text-center text-white bg-brand-blue'>
                    <h2 className='text-xl md:text-3xl font-semi-bold'>Your feedback fuels innovation.</h2>
                    <h6 className='text-sm md:text-lg'>Your data stays secure always.</h6>
                </div>

            </section>
            <Modal
                title="Request Beta Access"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                className="max-w-2xl"
            >
                <RequestBetaAccessForm />
            </Modal>
        </>
    );
};

export default BetaTesting;