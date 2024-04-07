FROM mongo

RUN apt update \
    && apt install curl \
    && curl -fsSl https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

WORKDIR /app

COPY ./main.js ./entrypoint.sh ./

RUN npm install express \
    && npm install mongoose

EXPOSE 8080

CMD ./entrypoint.sh
