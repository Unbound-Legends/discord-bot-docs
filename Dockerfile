# Use nginx alpine as base image
FROM nginx:alpine

# Add build arg for cache busting
ARG BUILD_VERSION=unknown

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
        location /discord-bot-docs/ { \
            alias /usr/share/nginx/html/; \
            index index.html index.htm; \
            try_files $uri $uri/index.html =404; \
            expires 1y; \
            add_header Cache-Control "public, no-transform"; \
            add_header ETag "'$BUILD_VERSION'"; \
        } \
        location = /discord-bot-docs { \
            return 301 /discord-bot-docs/; \
        } \
    } \
}' >> /etc/nginx/nginx.conf

# Expose port 80 (nginx default port)
EXPOSE 80

# Nginx runs automatically in the foreground when container starts
# so we don't need an explicit CMD
