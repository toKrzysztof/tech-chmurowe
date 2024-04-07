FROM node

WORKDIR opt/app

COPY app/* ./

RUN npm install

ENV TEST=SOME_ENV_VARIABLE

CMD node server.js






