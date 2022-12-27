FROM node:16.15.1-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx:1.15
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
