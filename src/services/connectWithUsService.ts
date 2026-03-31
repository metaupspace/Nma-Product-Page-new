// services/connectWithUsService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";
import { ConnectWithUs } from "@/types/strapi/connectWithUs";

export type ConnectWithUsResponse = StrapiResponse<ConnectWithUs>;

// Connect With Us specific functions using the generic utility
export async function submitConnectRequest(connectData: ConnectWithUs): Promise<ConnectWithUsResponse> {

    const result = await submitToStrapi<ConnectWithUsResponse>('connect-with-uses', connectData);

    if (!result) {
        throw new Error('Failed to submit connect request');
    }

    return result;
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingRequests = await fetchFromStrapi<ConnectWithUsResponse[]>('connect-with-uses', {
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

export async function getConnectRequestByEmail(email: string): Promise<ConnectWithUsResponse | null> {
    const requests = await fetchFromStrapi<ConnectWithUsResponse[]>('connect-with-uses', {
        filters: {
            email: {
                $eq: email
            }
        }
    });

    return requests && requests.length > 0 ? requests[0] : null;
}

export async function updateConnectRequest(
    id: string | number,
    updateData: Partial<ConnectWithUs>
): Promise<ConnectWithUsResponse | null> {
    return await updateInStrapi<ConnectWithUsResponse>('connect-with-uses', id, updateData);
}

export async function deleteConnectRequest(
    id: string | number
): Promise<ConnectWithUsResponse | null> {
    return await deleteFromStrapi<ConnectWithUsResponse>('connect-with-uses', id);
}