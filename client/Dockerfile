# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve (Nginx - Minimal & Güvenli)
FROM nginx:alpine-slim
# Nginx versiyon bilgisini gizle (Güvenlik önlemi)
RUN sed -i 's/server_tokens on;/server_tokens off;/' /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]