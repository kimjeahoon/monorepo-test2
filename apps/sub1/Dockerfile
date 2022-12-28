# stage1 - build react app first
FROM node:16.13.1-alpine3.15 as build
WORKDIR /app

RUN ls -al
RUN ls ./package.json

# COPY ./package*.json ./.npmrc ./
# RUN npm ci && \
#     rm -f ./.npmrc
# COPY . .
# RUN npm run build && \
#     mv /app/build/index.html /app/build/step.html && \
#     mv /app/runtime-env.sh /app/build/ && \
#     mv /app/.env.${APP_ENV} /app/build/.env

# # stage 2 - build the final image and ADD the react build files
# FROM nginxinc/nginx-unprivileged:1.23.1-alpine
# WORKDIR /usr/share/nginx/html

# USER root
# RUN apk add --no-cache bash && \
#     rm /etc/nginx/conf.d/default.conf && \
#     chmod -R o+w /usr/share/nginx/html

# COPY --from=build /app/build ./
# COPY --chown=nginx nginx/nginx.tmpl /etc/nginx/nginx.tmpl

# ENV DOLLAR='$'
# USER 101

# CMD ./runtime-env.sh && envsubst < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf; nginx -g 'daemon off;'
