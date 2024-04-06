FROM node:16

EXPOSE 8080 27017

RUN dpkg --get-selections gnupg \
    && apt-get install gnupg \
    && wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add - \
    && echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/6.0 main" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list \
    && apt-get update \
    && apt-get install -y mongodb-org \
    && apt-get install -y supervisor

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

WORKDIR /opt/app

RUN mkdir data

COPY package.json package-lock.json server.js ./

RUN npm install

ENV MONGO_HOST=localhost

CMD ["/usr/bin/supervisord"]
