FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm audit fix

COPY . .

EXPOSE 8000

CMD ["node", "server.js"]
