import React from 'react';
import { ShinyButton } from '@/components/magicui/ShinyButton';
import SectionHeader from '@/components/SectionHeader';
import GradientText from '@/components/GradientText';
import Modal from '@/components/modals/Modal';
import ContactUsForm from '@/components/forms/ContactUsForm';

interface OfficeLocation {
    title: string;
    workingHours: string;
    email: string;
    address?: string;
}

interface LetsConnectSectionProps {
    className?: string;
}

const LetsConnectSection: React.FC<LetsConnectSectionProps> = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
    const locations: OfficeLocation[] = [
        {
            title: "United States Headquarters — Atlanta, GA",
            workingHours: "Working Hours: 9:00 AM - 5:00 PM (EST)",
            email: "Email: support@neuralmindatlas.ai",
            address: "Address: 415 Peachtree Parkway, Suite 250-1031, Cumming, GA 30041, United States"
        },
        {
            title: "Extended Team — Mumbai, India",
            workingHours: "Working Hours: 9:00 AM - 5:00 PM (IST)",
            email: "Email: support@neuralmindatlas.ai",
        }
    ];

    return (
        <>
            <section id='contact' className={`py-16 bg-black px-6 ${className}`}>
                <div className="md:max-w-5xl xl:max-w-7xl mx-auto">
                    <SectionHeader
                        title={<><GradientText className="text-blue-400">Let's Connect</GradientText> — Wherever You Are!</>}
                        className="text-black dark:text-white"
                        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                        description={
                            <>
                                From Atlanta to Mumbai, we've got you covered. Two teams. One mission. Your success.
                            </>
                        }
                    />

                    {/* Office Locations */}
                    <div className="grid md:grid-cols-2 mt-12 gap-8 mb-12">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group"
                            >
                                {/* Location Title */}
                                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                                    {location.title}
                                </h3>

                                {/* Contact Details */}
                                <div className="space-y-4">
                                    {/* Working Hours */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                                            <svg className="w-full h-full text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">{location.workingHours}</span>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-3">
                                        <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                                            <svg className="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">{location.email}</span>
                                    </div>

                                    {/* Address */}
                                    {location.address &&
                                        <div className="flex items-start gap-3">
                                            <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                                                <svg className="w-full h-full text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-300">{location.address}</span>
                                        </div>
                                    }
                                </div>

                                {/* Location Badge */}
                                <div className="mt-6 pt-4 border-t border-gray-700">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                        <span className="text-blue-400 text-sm font-medium">
                                            {index === 0 ? 'Headquarters' : 'Extended Team'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="mb-6">
                            <p className="text-gray-300 mb-2">Ready to get started?</p>
                            <p className="text-gray-400 text-sm">
                                Reach out to either location and let's discuss how we can help achieve your goals.
                            </p>
                        </div>

                        <ShinyButton onClick={() => setIsModalOpen(true)} className="px-8 py-3 text-lg">
                            Contact Us →
                        </ShinyButton>
                    </div>

                    {/* Background Decorations */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {/* Floating Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>
            </section>
            <Modal
                title='Contact Us'
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            >
                <ContactUsForm />
            </Modal>
        </>
    );
};

export default LetsConnectSection;