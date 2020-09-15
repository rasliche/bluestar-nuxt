FROM node:alpine

# ENV NODE_ENV production
ENV HOST "0.0.0.0"

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . /usr/src/app
RUN npm install
RUN npm run build

EXPOSE 3000

CMD npm run start
