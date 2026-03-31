// utils/strapi.ts
import { clientConfig } from "./env";

type FetchOptions = {
    populate?: string | string[] | object;
    filters?: Record<string, any>;
    sort?: string;
    token?: string; // optional for authenticated requests
};

const STRAPI_URL = clientConfig.STRAPI_URL;

console.log("Strapi URL:", STRAPI_URL);

export async function fetchFromStrapi<T>(
    collection: string,
    options: FetchOptions = { sort: "" }
): Promise<T | null> {
    const params = new URLSearchParams();

    if (options.populate) {
        if (typeof options.populate === 'string') {
            params.append('populate', options.populate);
        } else if (Array.isArray(options.populate)) {
            options.populate.forEach(field => params.append('populate', field));
        } else if (typeof options.populate === 'object') {
            params.append('populate', JSON.stringify(options.populate));
        }
    }

    params.append('sort', 'createdAt:asc');

    if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                // Handle complex filters like { $eq: 'value' }
                Object.entries(value).forEach(([operator, operatorValue]) => {
                    params.append(`filters[${key}][${operator}]`, String(operatorValue));
                });
            } else {
                params.append(`filters[${key}]`, String(value));
            }
        });
    }

    const url = `${STRAPI_URL}/api/${collection}?${params.toString()}`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(options.token && { Authorization: `Bearer ${options.token}` }),
            },
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Error fetching ${collection}:`, {
                status: res.status,
                statusText: res.statusText,
                body: errorText
            });
            throw new Error(`Error fetching ${collection}: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        return data.data;

    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

// Generic submit function for any collection
export async function submitToStrapi<T>(
    collection: string,
    data: Record<string, any>,
    options: any = {}
): Promise<T | null> {
    const url = `${STRAPI_URL}/api/${collection}`;

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(options.token && { Authorization: `Bearer ${options.token}` }),
            },
            body: JSON.stringify({ data }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Error submitting to ${collection}:`, {
                status: res.status,
                statusText: res.statusText,
                body: errorText
            });
            throw new Error(`Error submitting to ${collection}: ${res.status} ${res.statusText}`);
        }

        const responseData = await res.json();
        return responseData.data;

    } catch (error) {
        console.error('Submit error:', error);
        throw error;
    }
}

// Generic update function for any collection
export async function updateInStrapi<T>(
    collection: string,
    id: string | number,
    data: Record<string, any>,
    options: any = {}
): Promise<T | null> {
    const url = `${STRAPI_URL}/api/${collection}/${id}`;

    try {
        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(options.token && { Authorization: `Bearer ${options.token}` }),
            },
            body: JSON.stringify({ data }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Error updating ${collection}:`, {
                status: res.status,
                statusText: res.statusText,
                body: errorText
            });
            throw new Error(`Error updating ${collection}: ${res.status} ${res.statusText}`);
        }

        const responseData = await res.json();
        return responseData.data;

    } catch (error) {
        console.error('Update error:', error);
        throw error;
    }
}

// Generic delete function for any collection
export async function deleteFromStrapi<T>(
    collection: string,
    id: string | number,
    token?: string
): Promise<T | null> {
    const url = `${STRAPI_URL}/api/${collection}/${id}`;

    try {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { Authorization: `Bearer ${token}` }),
            },
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Error deleting from ${collection}:`, {
                status: res.status,
                statusText: res.statusText,
                body: errorText
            });
            throw new Error(`Error deleting from ${collection}: ${res.status} ${res.statusText}`);
        }

        const responseData = await res.json();
        return responseData.data;

    } catch (error) {
        console.error('Delete error:', error);
        throw error;
    }
}

// Generic function to fetch a single item by ID
export async function fetchStrapiItem<T>(
    collection: string,
    id: string | number,
    options: Omit<FetchOptions, 'filters' | 'pagination'> = {}
): Promise<T | null> {
    const params = new URLSearchParams();

    if (options.populate) {
        if (typeof options.populate === 'string') {
            params.append('populate', options.populate);
        } else if (Array.isArray(options.populate)) {
            options.populate.forEach(field => params.append('populate', field));
        } else if (typeof options.populate === 'object') {
            params.append('populate', JSON.stringify(options.populate));
        }
    }

    const url = `${STRAPI_URL}/api/${collection}/${id}?${params.toString()}`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(options.token && { Authorization: `Bearer ${options.token}` }),
            },
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`Error fetching ${collection} item:`, {
                status: res.status,
                statusText: res.statusText,
                body: errorText
            });
            throw new Error(`Error fetching ${collection} item: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data.data;

    } catch (error) {
        console.error('Fetch item error:', error);
        return null;
    }
}

// Utility function for media URLs
export function getStrapiMedia(url?: string | null): string {
    if (!url) return "";

    const isAbsolute = url.startsWith("http") || url.startsWith("//");

    if (isAbsolute) return url;

    const baseUrl = STRAPI_URL || "http://localhost:1337";

    const imageUrl = `${baseUrl}${url}`

    return imageUrl;
}

// Generic types for Strapi responses
export interface StrapiResponse<T> {
    id: number;
    attributes: T;
}

export interface StrapiPaginatedResponse<T> {
    data: StrapiResponse<T>[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}