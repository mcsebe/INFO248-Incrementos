FROM node:latest


WORKDIR /server

COPY package*.json ./

RUN npm install 
RUN npm i mysql2
RUN npm install -g nodemon

ARG DATABASE_IP
ENV DATABASE_IP $DATABASE_IP

COPY . . 

EXPOSE 8000

CMD ["npm","start"]