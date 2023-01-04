 FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
 ENV NODE_VERSION 16.18.1
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]