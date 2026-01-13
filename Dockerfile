# Build stage
FROM node:20 AS builder
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

# DEBUG – zobacz co faktycznie powstało
RUN echo "=== Full dist directory structure ===" && ls -R dist || echo "dist directory not found"
RUN echo "=== Looking for server directory ===" && ls -la dist/server/ 2>/dev/null || echo "No server directory found"
RUN echo "=== Looking for entry.ssr.js ===" && find dist -name "entry.ssr.js" -type f 2>/dev/null || echo "entry.ssr.js NOT FOUND"

# Production stage with Node.js
FROM node:20
WORKDIR /app

# Copy built files and package files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Set environment variable
ENV NODE_ENV=production
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start the SSR server
# Qwik 1.7+ generates entry.ssr.js
CMD ["node", "dist/server/entry.ssr.js"]
