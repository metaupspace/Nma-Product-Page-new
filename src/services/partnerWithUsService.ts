// services/partnerWithUsService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";
import { PartnerWithUs } from "@/types/strapi/partnerWithUs";


export type PartnerWithUsResponse = StrapiResponse<PartnerWithUs>;

// Partner With Us specific functions using the generic utility
export async function submitPartnerRequest(partnerData: PartnerWithUs): Promise<PartnerWithUsResponse> {
    const result = await submitToStrapi<PartnerWithUsResponse>('partner-with-uses', partnerData);

    if (!result) {
        throw new Error('Failed to submit partner request');
    }

    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingRequests = await fetchFromStrapi<PartnerWithUsResponse[]>('partner-with-uses', {
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

export async function getPartnerRequestByEmail(email: string): Promise<PartnerWithUsResponse | null> {
    const requests = await fetchFromStrapi<PartnerWithUsResponse[]>('partner-with-uses', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    return requests && requests.length > 0 ? requests[0] : null;
}

export async function updatePartnerRequest(
    id: string | number, 
    updateData: Partial<PartnerWithUs>
): Promise<PartnerWithUsResponse | null> {
    return await updateInStrapi<PartnerWithUsResponse>('partner-with-uses', id, updateData);
}

export async function deletePartnerRequest(
    id: string | number
): Promise<PartnerWithUsResponse | null> {
    return await deleteFromStrapi<PartnerWithUsResponse>('partner-with-uses', id);
}