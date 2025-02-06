# Use nginx alpine as base image
FROM nginx:alpine

# Copy the static files to nginx html directory
COPY dist /usr/share/nginx/html

# Configure nginx
RUN echo 'events { worker_connections 1024; }' > /etc/nginx/nginx.conf && \
    echo 'http { \
    include /etc/nginx/mime.types; \
    default_type application/octet-stream; \
    server { \
        listen 80; \
        server_name localhost; \
        location /health { \
            access_log off; \
            add_header Content-Type text/plain; \
            return 200 "healthy\n"; \
        } \
        location / { \
            root /usr/share/nginx/html; \
            index index.html; \
        } \
    } \
}' >> /etc/nginx/nginx.conf

# Expose port 80 (nginx default port)
EXPOSE 80

# Nginx runs automatically in the foreground when container starts
# so we don't need an explicit CMD
