// lib/client-config.ts
export const clientConfig = {
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL || '',
  NEXT_PUBLIC_NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL || "",
} as const


export const serverConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || "",
} as const