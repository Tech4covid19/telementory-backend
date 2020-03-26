FROM node:lts-alpine3.11

ENV NODE_ENV=production
WORKDIR /app
COPY . .

EXPOSE 8080
ENTRYPOINT [ "node", "build/index.js" ]
