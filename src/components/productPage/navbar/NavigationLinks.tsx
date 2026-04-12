
// Updated navigation link with submenus

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface SubMenuItem {
    label: string;
    href: string;
    description?: string;
}

interface NavigationItem {
    label: string;
    href: string;
    subItems?: SubMenuItem[];
}

interface NavigationLinksProps {
    className?: string;
}

const navigationItems: NavigationItem[] = [
    { label: "Platform", href: "/productPage" },
    {
        label: "For Private Equity",
        href: "/productPage",
    },
    {
        label: "Beta Program",
        href: "/productPageBeta",
    },
    {
        label: "About",
        href: "/productPage",
    }
];

export function NavigationLinks({ className = "" }: NavigationLinksProps) {
    const pathname = usePathname();
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    return (
        <div className={clsx("flex items-baseline space-x-8", className)}>
            {navigationItems.map((item, ind) => (
                <div
                    key={ind}
                    className='group relative'
                    onMouseEnter={() => setHoveredItem(ind)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {item.subItems && item.subItems.length > 0 ? (
                        <>
                            <Link
                                href={item.href}
                                className={clsx(
                                    "font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 px-3 py-2 text-md flex items-center gap-1",
                                    (pathname === item.href || item.subItems.some(sub => pathname === sub.href)) && "text-brand-blue"
                                )}
                            >
                                {item.label}
                                <ChevronDown className={clsx(
                                    "h-4 w-4 transition-transform duration-200",
                                    hoveredItem === ind && "rotate-180"
                                )} />
                            </Link>

                            {/* Dropdown Menu */}
                            <div className={clsx(
                                "absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                                "before:content-[''] before:absolute before:-top-2 before:left-4 before:w-4 before:h-4 before:bg-white before:dark:bg-gray-800 before:border-l before:border-t before:border-gray-200 before:dark:border-gray-700 before:rotate-45 before:z-10"
                            )}>
                                <div className="p-4 space-y-2">
                                    <Link
                                        href={item.href}
                                        className={clsx(
                                            "block rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                                            pathname === item.href && "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                                        )}
                                    >
                                        <div className="font-medium">{item.label}</div>
                                    </Link>
                                    {item.subItems.map((subItem, subInd) => (
                                        <Link
                                            key={subInd}
                                            href={subItem.href}
                                            className={clsx(
                                                "block rounded-md p-3 text-sm leading-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                                                pathname === subItem.href && "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                                            )}
                                        >
                                            <div className="font-medium">{subItem.label}</div>
                                            {subItem.description && (
                                                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                    {subItem.description}
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link
                                href={item.href}
                                className={clsx(
                                    "font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-500 px-3 py-2 text-md",
                                    pathname === item.href && "text-brand-blue"
                                )}
                            >
                                {item.label}
                            </Link>
                            <div className='absolute h-[1.5px] w-3/4 left-1/2 -translate-x-1/2 bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500' />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}