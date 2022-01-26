FROM node:16-alpine As build

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --only=development

COPY . .

RUN yarn build

FROM node:16-alpine as run

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --only=production

COPY . .

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
