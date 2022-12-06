FROM node:12.22.12 as build-stage
# Create app directory
WORKDIR /usr/src/ui
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./front/package*.json ./

RUN npm install

#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY ./front .
#RUN CI=true npm test
RUN npm run build

# Stage 1
# Production build based on Nginx with artifacts from Stage 0
FROM nginx:1.19.0-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]