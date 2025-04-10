FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV MONGODB_URI=mongodb+srv://FullStackEli:FullStackEli@cluster0.x4uyz.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Cluster0

ENV PORT=3001

CMD ["npm", "run", "dev"]