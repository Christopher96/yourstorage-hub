FROM node:10

WORKDIR /usr/src/yourstorage-hub

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9999

CMD [ "node", "server.js" ]
