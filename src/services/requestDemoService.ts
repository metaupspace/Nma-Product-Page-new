// services/requestDemoService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";
import { DemoRequest } from "@/types/strapi/DemoRequest";

export type DemoRequestResponse = StrapiResponse<DemoRequest>;

// Demo Request specific functions using the generic utility
export async function submitDemoRequest(demoRequestData: DemoRequest): Promise<DemoRequestResponse> {

    const result = await submitToStrapi<DemoRequestResponse>('demo-requests', demoRequestData);

    if (!result) {
        throw new Error('Failed to submit demo request');
    }

    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingRequests = await fetchFromStrapi<DemoRequestResponse[]>('demo-requests', {
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

export async function getDemoRequestByEmail(email: string): Promise<DemoRequestResponse | null> {
    const requests = await fetchFromStrapi<DemoRequestResponse[]>('demo-requests', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    return requests && requests.length > 0 ? requests[0] : null;
}

export async function updateDemoRequest(
    id: string | number, 
    updateData: Partial<DemoRequest>
): Promise<DemoRequestResponse | null> {
    return await updateInStrapi<DemoRequestResponse>('demo-requests', id, updateData);
}

export async function deleteDemoRequest(
    id: string | number
): Promise<DemoRequestResponse | null> {
    return await deleteFromStrapi<DemoRequestResponse>('demo-requests', id);
}