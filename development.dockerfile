FROM node:16-alpine
EXPOSE 3000
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build
CMD ["yarn", "start:dev"]
