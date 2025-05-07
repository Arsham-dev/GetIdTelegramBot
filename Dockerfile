FROM node:slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build

FROM node:slim

WORKDIR /app

COPY package.json yarn.lock ./
COPY .env ./
COPY --from=builder /app/build ./build

RUN yarn install --production

CMD ["node", "build/index.js"]
