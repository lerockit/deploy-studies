FROM node:latest AS dev

WORKDIR /app

COPY  package.json package.json

COPY yarn.lock yarn.lock

RUN yarn

COPY . .

CMD ["yarn", "start"]

FROM node:latest AS prod

WORKDIR /app

COPY  package.json package.json

COPY yarn.lock yarn.lock

RUN yarn

COPY . .

CMD ["yarn", "start"]