FROM node:12

WORKDIR /app

COPY . .

RUN npm i --production

EXPOSE 3005

CMD [ "node", "server" ]
