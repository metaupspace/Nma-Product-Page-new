// lib/userSync.ts - Complete version for Strapi 5
import {
    fetchFromStrapi,
    submitToStrapi,
} from "@/lib/strapi";

export interface StrapiUser {
    documentId: string
    name: string;
    email: string;
    image: string;
}

/**
 * Find existing user by email
 */
async function findUserByEmail(email: string): Promise<StrapiUser | null> {
    try {
        const userResponse = await fetchFromStrapi<StrapiUser[]>('website-users', {
            filters: { email: { $eq: email } },
        });

        return userResponse && userResponse.length > 0 ? userResponse[0] : null;
    } catch (error) {
        console.error('Error finding user by email:', error);
        return null;
    }
}

/**
 * Create new user in Strapi
 */
async function createUserInStrapi(
    {
        email,
        name,
        image
    }: {
        email: string;
        name: string;
        image: string;
    }): Promise<StrapiUser | null> {
    try {
        const newUser = await submitToStrapi<StrapiUser>('website-users', {
            name,
            email,
            image,
        });

        if (!newUser) {
            console.error('Failed to create user in Strapi');
            return null;
        }

        console.log('✅ Created new Strapi user:', newUser.email);
        return newUser;
    } catch (error) {
        console.error('Error creating user in Strapi:', error);
        return null;
    }
}


export async function ensureStrapiUser(sessionUser: {
    id: string;
    email: string;
    name: string;
    image: string;
}): Promise<string | null> {
    try {
        console.log('🔄 Syncing user with Strapi:', sessionUser.email);

        // Step 1: Find or create user
        let user = await findUserByEmail(sessionUser.email);

        if (!user) {
            console.log('👤 Creating new user:', sessionUser.email);
            user = await createUserInStrapi({
                email: sessionUser.email,
                name: sessionUser.name,
                image: sessionUser.image
            });

            if (!user) {
                console.error('❌ Failed to create user');
                return null;
            }
        } else {
            console.log('👤 Found existing user:', user.email);
        }

        console.log('✅ User sync completed successfully');
        return user.documentId;

    } catch (error) {
        console.error('❌ Error in ensureStrapiUser:', error);
        return null;
    }
}