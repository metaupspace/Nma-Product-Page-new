"use client"

import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { ReactNode, useEffect, useRef, useCallback } from "react"

interface ModalProps {
    title: string
    isModalOpen: boolean
    setIsModalOpen: (val: boolean) => void
    children: ReactNode
    className?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    closeOnBackdrop?: boolean
    closeOnEscape?: boolean
    showCloseButton?: boolean
    preventBodyScroll?: boolean
}

const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
}

const Modal = ({
    title,
    isModalOpen,
    setIsModalOpen,
    children,
    className,
    size = 'lg',
    closeOnBackdrop = true,
    closeOnEscape = true,
    showCloseButton = true,
    preventBodyScroll = true
}: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const previousActiveElement = useRef<HTMLElement | null>(null)

    const closeModal = useCallback(() => {
        setIsModalOpen(false)
    }, [setIsModalOpen])

    // Handle escape key
    useEffect(() => {
        if (!closeOnEscape) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isModalOpen, closeOnEscape, closeModal])

    // Handle focus management and body scroll
    useEffect(() => {
        if (isModalOpen) {
            // Save currently focused element
            previousActiveElement.current = document.activeElement as HTMLElement

            // Prevent body scroll
            if (preventBodyScroll) {
                document.body.style.overflow = 'hidden'
            }

            // Focus modal
            modalRef.current?.focus()
        } else {
            // Restore body scroll
            if (preventBodyScroll) {
                document.body.style.overflow = ''
            }

            // Restore focus to previously focused element
            if (previousActiveElement.current) {
                previousActiveElement.current.focus()
            }
        }

        return () => {
            if (preventBodyScroll) {
                document.body.style.overflow = ''
            }
        }
    }, [isModalOpen, preventBodyScroll])

    // Handle focus trap
    useEffect(() => {
        if (!isModalOpen) return

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            const modal = modalRef.current
            if (!modal) return

            const focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
            const firstElement = focusableElements[0] as HTMLElement
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement?.focus()
                    e.preventDefault()
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement?.focus()
                    e.preventDefault()
                }
            }
        }

        document.addEventListener('keydown', handleTab)
        return () => document.removeEventListener('keydown', handleTab)
    }, [isModalOpen])

    if (!isModalOpen) return null

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (closeOnBackdrop && e.target === e.currentTarget) {
            closeModal()
        }
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop with fade effect */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out"
                onClick={handleBackdropClick}
                aria-hidden="true"
            />

            {/* Modal content */}
            <div
                ref={modalRef}
                tabIndex={-1}
                className={cn(
                    "relative w-full max-h-[90vh] overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-2xl",
                    "transform transition-all duration-300 ease-out",
                    "border border-gray-200 dark:border-gray-700",
                    sizeClasses[size],
                    className
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2
                        id="modal-title"
                        className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate pr-4"
                    >
                        {title}
                    </h2>
                    {showCloseButton && (
                        <button
                            onClick={closeModal}
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            aria-label="Close modal"
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal