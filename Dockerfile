FROM naskio/strapi

COPY ./backend/package.json ./
COPY ./backend/yarn.lock ./

RUN yarn install

COPY ./backend .
COPY ./backend/.env.prod ./.env

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]