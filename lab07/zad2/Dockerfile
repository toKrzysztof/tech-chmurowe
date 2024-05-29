FROM node:18-alpine

RUN apk update && apk add npm

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]
