FROM node:16 AS builder

WORKDIR /app
COPY ./ ./

RUN rm -rf build
RUN rm -rf node_modules

RUN npm install webpack webpack-cli -g

RUN npm install html-webpack-plugin -g

RUN npm install -g serve
RUN npm install --legacy-peer-deps
RUN npm config set strict-ssl false
RUN npm install -g @angular/cli
RUN ng build --prod

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]