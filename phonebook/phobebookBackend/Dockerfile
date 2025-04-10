FROM node:20

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

ENV MONGODB_URI=mongodb+srv://FullStackEli:FullStackEli@cluster0.x4uyz.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0

ENV PORT=3001

USER node

CMD ["npm", "start"]