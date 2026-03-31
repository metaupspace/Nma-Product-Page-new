// services/waitlistService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";
import { Waitlist } from "@/types/strapi/waitlist";

export type WaitlistResponse = StrapiResponse<Waitlist>;

// Waitlist specific functions using the generic utility
export async function submitWaitlistEntry(waitlistData: Waitlist): Promise<WaitlistResponse> {
    const result = await submitToStrapi<WaitlistResponse>('waitlist-forms', waitlistData);

    if (!result) {
        throw new Error('Failed to submit waitlist entry');
    }
    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingEntries = await fetchFromStrapi<WaitlistResponse[]>('waitlist-forms', {
            filters: {
                email: {
                    $eq: email
                }
            }
        });

        return existingEntries && existingEntries.length > 0;
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}

export async function getWaitlistEntryByEmail(email: string): Promise<WaitlistResponse | null> {
    const entries = await fetchFromStrapi<WaitlistResponse[]>('waitlist-forms', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    return entries && entries.length > 0 ? entries[0] : null;
}

export async function updateWaitlistEntry(
    id: string | number, 
    updateData: Partial<Waitlist>
): Promise<WaitlistResponse | null> {
    return await updateInStrapi<WaitlistResponse>('waitlist-forms', id, updateData);
}

export async function deleteWaitlistEntry(
    id: string | number
): Promise<WaitlistResponse | null> {
    return await deleteFromStrapi<WaitlistResponse>('waitlist-forms', id);
}