FROM node:latest

# Create app directory
WORKDIR /app
ADD . /app

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

RUN npm install

# TODO: Serve an optimized build
CMD [ "npm", "start" ]