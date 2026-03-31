// services/contactService.ts
import {
    fetchFromStrapi,
    submitToStrapi,
    updateInStrapi,
    deleteFromStrapi,
    StrapiResponse
} from "@/lib/strapi";

export interface ContactFormData {
    fullName: string;
    role: string;
    company: string;
    email: string;
    industryFocus: string;
    solutions: string;
    message?: string;
}

export type ContactResponse = StrapiResponse<ContactFormData>;

// Contact form specific functions
export async function submitContactForm(contactData: ContactFormData): Promise<ContactResponse> {
    try {
        const result = await submitToStrapi<ContactResponse>('contacts', contactData);

        if (!result) {
            throw new Error('Failed to submit contact form');
        }

        return result;
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
}

export async function checkEmailExists(email: string): Promise<boolean | null> {
    try {
        const existingContacts = await fetchFromStrapi<ContactResponse[]>('contacts', {
            filters: {
                email: {
                    $eq: email
                }
            }
        });

        return existingContacts && existingContacts.length > 0;
    } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
    }
}

export async function getContactByEmail(email: string): Promise<ContactResponse | null> {
    try {
        const contacts = await fetchFromStrapi<ContactResponse[]>('contacts', {
            filters: {
                email: {
                    $eq: email
                }
            }
        });

        return contacts && contacts.length > 0 ? contacts[0] : null;
    } catch (error) {
        console.error('Error fetching contact by email:', error);
        return null;
    }
}

export async function getAllContacts(): Promise<ContactResponse[]> {
    try {
        const contacts = await fetchFromStrapi<ContactResponse[]>('contacts');
        return contacts || [];
    } catch (error) {
        console.error('Error fetching all contacts:', error);
        return [];
    }
}

export async function updateContact(
    id: string | number,
    updateData: Partial<ContactFormData>
): Promise<ContactResponse | null> {
    try {
        return await updateInStrapi<ContactResponse>('contacts', id, updateData);
    } catch (error) {
        console.error('Error updating contact:', error);
        return null;
    }
}

export async function deleteContact(
    id: string | number
): Promise<ContactResponse | null> {
    try {
        return await deleteFromStrapi<ContactResponse>('contacts', id);
    } catch (error) {
        console.error('Error deleting contact:', error);
        return null;
    }
}