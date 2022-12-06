FROM node:12.22.12
# Create app directory
WORKDIR /usr/src/ui
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./front/package*.json ./

RUN npm install

#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY ./front .


#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000