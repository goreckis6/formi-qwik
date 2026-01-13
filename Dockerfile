# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build arguments for Vite environment variables
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# Build the application
RUN npm run build

# Debug: List what was built
RUN echo "=== Contents of dist/ ===" && ls -la /app/dist/ || true
RUN echo "=== Looking for HTML files ===" && find /app/dist -name "*.html" -type f || echo "No HTML files found"
RUN echo "=== Contents of dist/build ===" && ls -la /app/dist/build/ 2>/dev/null || echo "No build directory"

# Production stage with nginx
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Debug: Verify files were copied
RUN echo "=== Files in nginx html directory ===" && ls -la /usr/share/nginx/html/ || true

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
