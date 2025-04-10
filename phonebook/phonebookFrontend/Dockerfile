FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["serve", "dist"]