FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
EXPOSE 9000
CMD ["node", "script.js"]