FROM node:lts

WORKDIR /backend/

RUN npm install -g npm@latest

RUN npm i -g @nestjs/cli

USER node:node

CMD ["tail", "-f", "/dev/null"]
