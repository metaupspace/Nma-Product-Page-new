// services/betaAccessService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";
import { BetaAccess } from "@/types/strapi/betaAccess";

export type BetaAccessResponse = StrapiResponse<BetaAccess>;

// Beta Access specific functions using the generic utility
export async function submitBetaAccessRequest(betaAccessData: BetaAccess): Promise<BetaAccessResponse> {

    const result = await submitToStrapi<BetaAccessResponse>('beta-access-requests', betaAccessData);

    if (!result) {
        throw new Error('Failed to submit beta access request');
    }

    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingRequests = await fetchFromStrapi<BetaAccessResponse[]>('beta-access-requests', {
            filters: {
                email: {
                    $eq: email
                }
            }
        });

        return existingRequests && existingRequests.length > 0;
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}

export async function getBetaAccessRequestByEmail(email: string): Promise<BetaAccessResponse | null> {
    const requests = await fetchFromStrapi<BetaAccessResponse[]>('beta-access-requests', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    return requests && requests.length > 0 ? requests[0] : null;
}

export async function updateBetaAccessRequest(
    id: string | number, 
    updateData: Partial<BetaAccess>
): Promise<BetaAccessResponse | null> {
    return await updateInStrapi<BetaAccessResponse>('beta-access-requests', id, updateData);
}

export async function deleteBetaAccessRequest(
    id: string | number
): Promise<BetaAccessResponse | null> {
    return await deleteFromStrapi<BetaAccessResponse>('beta-access-requests', id);
}