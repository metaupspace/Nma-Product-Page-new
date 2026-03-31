"use client"

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Logo } from './Logo';
import { NavigationLinks } from './NavigationLinks';
// import { DarkModeToggle } from './DarkModeToggle';
// import { AuthActions } from './AuthActions';
import { HamburgerButton } from './HamburgerButton';
import { MobileMenu } from './MobileMenu';
import LoginForm from '../forms (unused)/Login';
import ContactUsForm from '../forms/ContactUsForm'; // Assuming ContactUsForm is in forms folder
import { ShinyButton } from '../magicui/ShinyButton';
import Modal from '../modals/Modal';

export default function ResponsiveNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
    const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false)
    const { isDark, toggleDarkMode } = useDarkMode()
    const { data: session, status } = useSession()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const openLoginModal = () => {
        setIsLoginModalOpen(true)
        closeMobileMenu()
    }

    const openContactModal = () => {
        setIsContactModalOpen(true)
        closeMobileMenu()
    }

    return (
        <>
            <nav className="fixed lg:mt-2 left-1/2 -translate-x-1/2 z-30 w-full md:max-w-5xl xl:max-w-7xl md:px-0">
                <div className="relative bg-white dark:bg-[#151515] shadow-sm border-b rounded-lg border-gray-200 dark:border-gray-700 px-5 lg:px-8 transition-colors duration-200">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Section - Left */}
                        <Logo />

                        {/* Desktop Navigation Links - Center (Hidden on mobile) */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <NavigationLinks />
                        </div>

                        {/* Desktop Right Side Actions (Hidden on mobile) */}
                        <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
                            {/* Contact Us Button */}
                            <ShinyButton
                                onClick={openContactModal}
                                className="px-4 py-2 text-sm font-medium"
                            >
                                Contact Us
                            </ShinyButton>

                            {/* Dark Mode Toggle */}
                            {/* <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} /> */}

                            {/* Auth Actions */}
                            {/* <AuthActions
                                session={session}
                                status={status}
                                onLoginClick={openLoginModal}
                            /> */}
                        </div>

                        {/* Mobile Hamburger Menu Button */}
                        <HamburgerButton
                            isOpen={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        />
                    </div>

                    {/* Mobile Menu */}
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        isDark={isDark}
                        toggleDarkMode={toggleDarkMode}
                        session={session}
                        status={status}
                        onLoginClick={openLoginModal}
                        onContactClick={openContactModal}
                        onMenuClose={closeMobileMenu}
                    />
                </div>
            </nav>

            {/* Login Modal */}
            <LoginForm
                isModalOpen={isLoginModalOpen}
                setIsModalOpen={setIsLoginModalOpen}
            />

            {/* Contact Us Modal */}
            <Modal
                title="Contact Us"
                isModalOpen={isContactModalOpen}
                setIsModalOpen={setIsContactModalOpen}
                size="lg"
                closeOnBackdrop={true}
                closeOnEscape={true}
                showCloseButton={true}
            >
                <ContactUsForm />
            </Modal>
        </>
    )
}