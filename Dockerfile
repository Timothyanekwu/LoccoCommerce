FROM node:22-alpine

COPY . /ecom

WORKDIR /ecom

RUN npm install

EXPOSE 3000

CMD  ["npm", "run", "dev"]