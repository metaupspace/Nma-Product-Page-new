"use client";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
// import { DarkModeToggle } from './DarkModeToggle';
// import { AuthActions } from './AuthActions';

export default function ResponsiveNavbar() {
  return (
    <>
      <nav className="fixed lg:mt-2 left-1/2 -translate-x-1/2 z-30 w-full md:max-w-5xl xl:max-w-7xl md:px-0 items-center justify-center" >
        <div className="relative bg-white dark:bg-[#151515] shadow-sm border-b rounded-lg border-gray-200 dark:border-gray-700 px-5 lg:px-8 transition-colors duration-200">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section - Left */}
            <Logo />

            {/* Desktop Navigation Links - Center (Hidden on mobile) */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <NavigationLinks />
            </div>
            <div className="inline-block rounded-full bg-gradient-to-r from-[#00D5FF] to-[#006FFF] p-[2px]">
              <button className="rounded-full bg-[#0A0A0A] px-6 py-2 text-white">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
