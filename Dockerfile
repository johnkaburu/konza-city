# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install sharp for image optimization
RUN npm install sharp

# Copy the rest of your application code
COPY . .

# Build the static site
RUN npm run build

# Serve stage
FROM node:20-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy the static files from builder stage
COPY --from=builder /app/out ./out

EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "out", "-p", "3000"]