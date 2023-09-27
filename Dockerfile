FROM node:18-alpine3.18 AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Meter la aplicacion en un nginx
FROM nginx:alpine
COPY --from=build /app/dist/admin-front/ /usr/share/nginx/html
EXPOSE 80