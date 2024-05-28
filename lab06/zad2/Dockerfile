FROM node:latest

WORKDIR /app

COPY ./app/package.json ./

RUN npm install

COPY ./app/main.js ./

EXPOSE 3000

CMD ["node", "main.js"]
