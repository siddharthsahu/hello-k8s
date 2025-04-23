FROM node
WORKDIR /app

COPY package.json /app
RUN npm install --production

EXPOSE 3000

COPY . /app
CMD ["node", "service.js"]
