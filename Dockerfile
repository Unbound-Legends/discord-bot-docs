# Use Node.js base image
FROM node:22-alpine

# Install http-server globally
RUN npm install -g http-server

# Create app directory
WORKDIR /app

# Copy dist folder
COPY dist /app

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["http-server", "--port", "8080", "-c-1"]
