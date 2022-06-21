FROM node:latest





WORKDIR /server

COPY package*.json ./

RUN npm install 


COPY . . 

EXPOSE 6000

CMD ["npm","start"]