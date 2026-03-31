import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

interface MobileNavigationLinksProps {
    onLinkClick: () => void;
}

const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/" },
    {
        label: "About",
        href: "/about",
        subItems: [
            { label: "Alliance and Partnerships", href: "/alliance-and-partnerships", description: "Get in touch with our team" },
            {
                label: "Career Opportunities",
                href: "/alliance-and-partnerships#opportunities",
                description: "Join us and grow your career.",
            }
        ]
    },
    {
        label: "Solutions",
        href: "/solutions",
        // subItems: [
        //     { label: "Trust Portal", href: "/trust-portal", description: "Security and compliance hub" }
        // ]
    },
    {
        label: "Newsroom",
        href: "/newsroom",
        subItems: [
            { label: "Resources", href: "/resources", description: "Latest updates and materials" }
        ]
    }
];

export function MobileNavigationLinks({ onLinkClick }: MobileNavigationLinksProps) {
    const pathname = usePathname();
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

    const toggleExpanded = (index: number) => {
        setExpandedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div className="space-y-1">
            {navigationItems.map((item, ind) => (
                <div key={ind} className="space-y-1">
                    {item.subItems && item.subItems.length > 0 ? (
                        <>
                            <div className="flex items-center justify-between">
                                <Link
                                    href={item.href}
                                    onClick={onLinkClick}
                                    className={clsx(
                                        "flex-1 text-md px-4 py-3 font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors",
                                        (pathname === item.href || item.subItems.some(sub => pathname === sub.href)) && "text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                    )}
                                >
                                    {item.label}
                                </Link>
                                <button
                                    onClick={() => toggleExpanded(ind)}
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                >
                                    {expandedItems.has(ind) ? (
                                        <ChevronDown className="h-4 w-4" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                            {expandedItems.has(ind) && (
                                <div className="ml-4 space-y-1">
                                    {item.subItems.map((subItem, subInd) => (
                                        <Link
                                            key={subInd}
                                            href={subItem.href}
                                            onClick={onLinkClick}
                                            className={clsx(
                                                "block text-sm px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors",
                                                pathname === subItem.href && "text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                                            )}
                                        >
                                            <div className="font-medium">{subItem.label}</div>
                                            {subItem.description && (
                                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                    {subItem.description}
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            href={item.href}
                            onClick={onLinkClick}
                            className={clsx(
                                "block text-md px-4 py-3 font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors",
                                pathname === item.href && "text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                            )}
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
}