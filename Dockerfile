FROM node:latest

RUN npm install -g @angular/cli 

WORKDIR /weather-app-service

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD ng serve