# Use nginx alpine as base image
FROM nginx:alpine

# Copy the static files to nginx html directory
COPY dist /usr/share/nginx/html

# Create nginx configuration inline
RUN cat > /etc/nginx/nginx.conf << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server {
        listen 80;
        server_name localhost;

        # Health check endpoint
        location /health {
            access_log off;
            add_header Content-Type text/plain;
            return 200 'healthy\n';
        }

        # Serve static files
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            try_files $uri $uri/ /index.html;
        }
    }
}
EOF

# Expose port 80 (nginx default port)
EXPOSE 80

# Nginx runs automatically in the foreground when container starts
# so we don't need an explicit CMD
