# Etapa de construcción
FROM node:16 AS build
WORKDIR /app
COPY . .
RUN rm -rf  node_modules
RUN npm install --force && npm run build 
# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/blk-design-system-angular/ /usr/share/nginx/html
EXPOSE 80
