FROM node:14.15.3-alpine
RUN apk add python git
RUN mkdir -p /docker
WORKDIR /docker
EXPOSE 3000
