# =====================
# 1. Build Stage
# =====================
FROM node:18-alpine AS builder

WORKDIR /app

# Install system dependencies for native modules (like Sharp if needed)
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# ✅ Move NEXT_PUBLIC_ variables to build stage
ENV NEXT_PUBLIC_STRAPI_URL=https://cms.neuralmindatlas.ai
ENV NEXT_PUBLIC_GA_ID=G-Z2ZNLJW4GS
ENV NEXT_PUBLIC_CLARITY_ID=swoyu61ry1
# Build the application
RUN npm run build

# =====================
# 2. Production Image
# =====================
FROM node:18-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# NextAuth configuration (set NEXTAUTH_SECRET securely at runtime)
ENV NEXTAUTH_URL=https://neuralmindatlas.ai
ENV NEXTAUTH_SECRET=



# Install system dependencies
RUN apk add --no-cache libc6-compat

# Create nextjs user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Copy config files
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Copy the source directory (needed for some Next.js features)
COPY --from=builder /app/src ./src

# Install only production dependencies
RUN npm install --omit=dev --legacy-peer-deps

# Change ownership to nextjs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]