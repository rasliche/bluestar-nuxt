FROM node:alpine as build

# ENV NODE_ENV production
ENV HOST "0.0.0.0"

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . /usr/src/app
RUN npm install

EXPOSE 3001

CMD npm start