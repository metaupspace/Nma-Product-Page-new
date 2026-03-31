import { cn } from "@/lib/utils";

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
        >
            <div className="space-y-1.5">
                <div className={cn(
                    "w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300",
                    isOpen && "rotate-45 translate-y-2"
                )} />
                <div className={cn(
                    "w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300",
                    isOpen && "opacity-0"
                )} />
                <div className={cn(
                    "w-6 h-0.5 bg-gray-900 dark:bg-gray-100 transition-all duration-300",
                    isOpen && "-rotate-45 -translate-y-2"
                )} />
            </div>
        </button>
    )
}