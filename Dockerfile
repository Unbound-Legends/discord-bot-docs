# Use nginx alpine as base image
FROM nginx:alpine

# Copy the static files to nginx html directory
COPY dist /usr/share/nginx/html

# Expose port 80 (nginx default port)
EXPOSE 80

# Nginx runs automatically in the foreground when container starts
# so we don't need an explicit CMD
