FROM node:10.13-alpine

ENV NODE_ENV production
ENV HOST "0.0.0.0"

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
RUN npm run build
COPY . /usr/src/app

EXPOSE 3000

CMD npm run start