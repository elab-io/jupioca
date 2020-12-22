FROM node:14.15.3-alpine

RUN mkdir -p /docker
# ENV PORT 3000

WORKDIR /docker

# COPY package.json /usr/app
# COPY yarn.lock /usr/app

# Production use node instead of root
# USER node

# COPY . /usr/app
# RUN yarn install --production

# RUN yarn build

EXPOSE 3000
# Start dev mode
# CMD [ "yarn", "next" ]
