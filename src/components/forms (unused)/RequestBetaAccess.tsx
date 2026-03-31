import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ShinyButton } from '../magicui/ShinyButton';
import { submitBetaAccessRequest, checkEmailExists } from '@/services/betaAccessService';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    role: z.string().min(1, 'Please select your role'),
    company: z.string().min(2, 'Company name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    industryFocus: z.string().min(1, 'Please select your industry focus'),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestBetaAccessForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            role: '',
            company: '',
            email: '',
            industryFocus: '',
            message: '',
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            // Check if email already exists
            const emailExists = await checkEmailExists(data.email);

            if (emailExists) {
                setSubmitStatus({
                    type: 'error',
                    message: 'This email has already requested beta access. We\'ll notify you when access is available!'
                });
                setIsSubmitting(false);
                return;
            }

            // Submit to Strapi
            const result = await submitBetaAccessRequest({
                fullName: data.fullName,
                role: data.role,
                company: data.company,
                email: data.email,
                industryFocus: data.industryFocus,
                message: data.message || '',
            });

            if (result) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you for your interest in beta access! We\'ve received your request and will notify you as soon as beta access becomes available.'
                });
                reset(); // Clear the form
            }
        } catch (error) {
            console.error('Beta access request submission error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or contact support if the problem persists.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const roleOptions = [
        'Head of Innovation',
        'Chief Technology Officer',
        'Managing Director',
        'Partner',
        'Vice President',
        'Director',
        'Manager',
        'Analyst',
        'Other',
    ];

    const industryOptions = [
        'Private Equity',
        'Healthcare Payer',
        'Healthcare Provider',
        'Pharma',
        'Biotech',
        'Other',
    ];

    return (
        <div className='space-y-6'>
            {/* Status Messages */}
            {submitStatus.type && (
                <Alert className={submitStatus.type === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
                    {submitStatus.type === 'success' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                        <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                        {submitStatus.message}
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            {...register('fullName')}
                            placeholder="Enter your full name"
                            disabled={isSubmitting}
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Role/Title */}
                    <div className="space-y-2">
                        <Label htmlFor="role">
                            Your Role/Title
                        </Label>
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isSubmitting}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roleOptions.map((role) => (
                                            <SelectItem key={role} value={role}>
                                                {role}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.role && (
                            <p className="text-red-500 text-sm">{errors.role.message}</p>
                        )}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                        <Label htmlFor="company">
                            Company Name
                        </Label>
                        <Input
                            id="company"
                            {...register('company')}
                            placeholder="Enter your company name"
                            disabled={isSubmitting}
                        />
                        {errors.company && (
                            <p className="text-red-500 text-sm">{errors.company.message}</p>
                        )}
                    </div>

                    {/* Business Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Business Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="Enter your business email"
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Industry Focus */}
                    <div className="space-y-2">
                        <Label htmlFor="industryFocus">
                            Industry Focus
                        </Label>
                        <Controller
                            name="industryFocus"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    disabled={isSubmitting}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your industry focus" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {industryOptions.map((industry) => (
                                            <SelectItem key={industry} value={industry}>
                                                {industry}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.industryFocus && (
                            <p className="text-red-500 text-sm">{errors.industryFocus.message}</p>
                        )}
                    </div>
                </div>

                {/* Brief Message */}
                <div className="space-y-2">
                    <Label htmlFor="message">
                        Describe Your Query or Idea
                    </Label>
                    <Textarea
                        id="message"
                        {...register('message')}
                        className="bg-white dark:bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 min-h-[100px]"
                        placeholder="Tell us about the challenge you're trying to solve..."
                        disabled={isSubmitting}
                    />
                </div>

                {/* Submit Button */}
                <ShinyButton
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        " Submitting..."
                    ) : (
                        'Submit'
                    )}
                </ShinyButton>
            </form>
        </div>
    );
};

export default RequestBetaAccessForm;