FROM node:10
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
COPY . .
ENV PORT 3000
ENV NODE_ENV production
EXPOSE 3000
RUN yarn
CMD ["yarn", "start" ]

