import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { checkEmailExists, submitContactForm } from '@/services/contactUsService';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ShinyButton } from '../magicui/ShinyButton';

const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    role: z.string().min(2, 'Role must be at least 2 characters'),
    company: z.string().min(2, 'Company name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    industryFocus: z.string().min(2, 'Industry focus must be at least 2 characters'),
    solutions: z.string().min(2, 'Solutions must be at least 2 characters'),
    message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUsForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            fullName: '',
            role: '',
            company: '',
            email: '',
            industryFocus: '',
            solutions: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Check if email already exists
            const emailExists = await checkEmailExists(data.email);

            if (emailExists) {
                setSubmitStatus({
                    type: 'error',
                    message: 'This email has already submitted a contact request. We\'ll be in touch soon!'
                });
                setIsSubmitting(false);
                return;
            }

            // Submit contact form
            const result = await submitContactForm({
                fullName: data.fullName,
                role: data.role,
                company: data.company,
                email: data.email,
                industryFocus: data.industryFocus,
                solutions: data.solutions,
                message: data.message || '',
            });

            if (result) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for contacting us! We\'ve received your message and our team will get back to you within 24 hours.'
                });
                reset(); // Clear the form
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact support if the problem persists.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 space-y-8">
            {/* Status Messages */}
            {submitStatus.type && (
                <Alert className={submitStatus.type === 'success' ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-red-500 bg-red-50 dark:bg-red-950'}>
                    {submitStatus.type === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}>
                        {submitStatus.message}
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name *
                        </Label>
                        <Input
                            id="fullName"
                            {...register('fullName')}
                            placeholder="Enter your full name"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Role/Title */}
                    <div className="space-y-2">
                        <Label htmlFor="role" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Your Role/Title *
                        </Label>
                        <Input
                            id="role"
                            {...register('role')}
                            placeholder="Enter your role or title"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.role && (
                            <p className="text-red-500 text-sm">{errors.role.message}</p>
                        )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Company Name *
                        </Label>
                        <Input
                            id="company"
                            {...register('company')}
                            placeholder="Enter your company name"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm">{errors.company.message}</p>
                        )}
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Business Email *
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="Enter your business email"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Industry Focus */}
                    <div className="space-y-2">
                        <Label htmlFor="industryFocus" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Industry Focus *
                        </Label>
                        <Input
                            id="industryFocus"
                            {...register('industryFocus')}
                            placeholder="Enter your industry focus"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.industryFocus && (
                            <p className="text-red-500 text-sm">{errors.industryFocus.message}</p>
                        )}
                    </div>

                    {/* Solutions */}
                    <div className="space-y-2">
                        <Label htmlFor="solutions" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Solutions *
                        </Label>
                        <Input
                            id="solutions"
                            {...register('solutions')}
                            placeholder="Enter solutions you're interested in"
                            disabled={isSubmitting}
                            className="w-full"
                        />
                        {errors.solutions && (
                            <p className="text-red-500 text-sm">{errors.solutions.message}</p>
                        )}
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        {...register('message')}
                        className="w-full min-h-[120px] resize-none"
                        placeholder="Tell us about your query or idea"
                        disabled={isSubmitting}
                    />
                </div>

                {/* Submit Button */}
                <ShinyButton
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                    disabled={isSubmitting}
                >
                    Send Message
                </ShinyButton>
            </form>
        </div>
    );
};

export default ContactUsForm;