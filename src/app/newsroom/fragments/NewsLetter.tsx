import { ShinyButton } from "@/components/magicui/ShinyButton";
import SectionHeader from "@/components/SectionHeader";
import { submitNewsletterSignup, checkEmailExists } from "@/services/newsLetterService";
import React, { useState } from "react";

interface NewsletterSignupProps {
  onSubmit?: (email: string) => void;
  preventDuplicates?: boolean; // Option to check for existing emails
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  onSubmit,
  preventDuplicates = true
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("not your email? try again");
      return;
    }

    setIsSubmitting(true);

    try {
      // Check for duplicate emails if enabled
      if (preventDuplicates) {
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
          setError("This email is already subscribed to our newsletter");
          return;
        }
      }

      // Submit to Strapi
      const result = await submitNewsletterSignup(email);

      // Call the optional onSubmit callback if provided
      if (onSubmit) {
        await onSubmit(email);
      }

      // Show success state
      setIsSuccess(true);
      setEmail("");
      setError("");

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);

      console.log('Newsletter signup successful:', result);
    } catch (error) {
      console.error('Newsletter signup error:', error);

      let errorMessage = "Something went wrong. Please try again.";

      if (error instanceof Error) {
        // Handle specific Strapi errors
        if (error.message.includes('400')) {
          errorMessage = "Invalid email format or duplicate entry";
        } else if (error.message.includes('500')) {
          errorMessage = "Server error. Please try again later";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="px-4 py-16 mx-auto max-w-7xl bg-white dark:bg-black">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-black dark:text-white">
            Welcome aboard!
          </h2>
          <p className="text-white dark:text-white">
            Thank you for subscribing. You&apos;ll receive our next newsletter
            soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-16 bg-black">
      <div className="relative max-w-7xl space-y-8 mx-auto flex flex-col items-center text-center">
        <SectionHeader
          title="Stay Informed. Stay Ahead."
          className="text-black dark:text-white"
          separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
          description={
            <>
              Join our newsletter for product updates, AI insights, and new feature
              drops—delivered monthly.
            </>
          }
        />

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 px-4 md:px-0">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 px-4">
            {/* Email Input */}
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abcs@gmail.com"
                className={`w-full px-4 py-3 dark:bg-black placeholder-gray-500 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${error ? "border-red-300" : "border-gray-300"}`}
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <ShinyButton disabled={isSubmitting}>
              Join Our Newsletter
            </ShinyButton>
          </div>
          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </form>

        {/* Additional Info */}
        <p className="mt-4 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;