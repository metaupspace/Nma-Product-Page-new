// services/newsletterService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";

// Newsletter specific types
export interface Newsletter {
    email: string;
    isSigned?: boolean;
}

export type NewsletterResponse = StrapiResponse<Newsletter>;

// Newsletter specific functions using the generic utility
export async function submitNewsletterSignup(email: string): Promise<NewsletterResponse> {
    const newsletterData: Newsletter = {
        email,
    };

    const result = await submitToStrapi<NewsletterResponse>('newsletter-signups', newsletterData);

    if (!result) {
        throw new Error('Failed to submit newsletter signup');
    }

    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingSubscriptions = await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
            filters: {
                email: {
                    $eq: email
                }
            }
        });

        return existingSubscriptions && existingSubscriptions.length > 0;
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}

export async function getAllNewsletterSubscribers(): Promise<NewsletterResponse[] | null> {
    return await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
        sort: 'signUpDate:desc'
    });
}

export async function getActiveSubscribers(): Promise<NewsletterResponse[] | null> {
    return await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
        filters: {
            isSigned: {
                $eq: true
            }
        },
        sort: 'signUpDate:desc'
    });
}

export async function unsubscribeEmail(email: string): Promise<NewsletterResponse | null> {
    // First find the subscriber
    const subscribers = await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    if (!subscribers || subscribers.length === 0) {
        throw new Error('Email not found in subscribers list');
    }

    const subscriber = subscribers[0];

    // Update their status
    return await updateInStrapi<NewsletterResponse>('newsletter-signups', subscriber.id, {
        isSigned: false
    });
}

export async function resubscribeEmail(email: string): Promise<NewsletterResponse | null> {
    // First find the subscriber
    const subscribers = await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
        filters: {
            email: {
                $eq: email
            }
        }
    });
    
    if (!subscribers || subscribers.length === 0) {
        throw new Error('Email not found in subscribers list');
    }

    const subscriber = subscribers[0];

    // Update their status
    return await updateInStrapi<NewsletterResponse>('newsletter-signups', subscriber.id, {
        isSigned: true
    });
}

export async function deleteSubscriber(email: string): Promise<NewsletterResponse | null> {
    // First find the subscriber
    const subscribers = await fetchFromStrapi<NewsletterResponse[]>('newsletter-signups', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    if (!subscribers || subscribers.length === 0) {
        throw new Error('Email not found in subscribers list');
    }

    const subscriber = subscribers[0];

    // Delete the subscriber
    return await deleteFromStrapi<NewsletterResponse>('newsletter-signups', subscriber.id);
}