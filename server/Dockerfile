FROM node:latest
FROM mysql:latest




WORKDIR /server

COPY package*.json ./

RUN npm install 


COPY . . 

EXPOSE 4000

CMD ["npm","start"]