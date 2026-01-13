# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files (including lock file for reproducible builds)
COPY package.json package-lock.json ./

# Install dependencies using lock file for stability
RUN npm ci

# Copy source code
COPY . .

# Build arguments for Vite environment variables
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Build the application
RUN npm run build

# Debug: Check what was built
RUN echo "=== Contents of dist/ ===" && ls -la /app/dist/ || true
RUN echo "=== Looking for server directory ===" && ls -la /app/dist/server/ 2>/dev/null || echo "No server directory found"
RUN echo "=== Looking for entry files ===" && find /app/dist/server -name "*.js" -type f 2>/dev/null || echo "No server JS files found"

# Production stage with Node.js
FROM node:20-alpine
WORKDIR /app

# Copy built files and node_modules from build stage
# Qwik SSR needs runtime dependencies from node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set environment variable
ENV NODE_ENV=production
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start the SSR server
# Qwik 1.7+ generates entry.ssr.js
CMD ["node", "dist/server/entry.ssr.js"]
