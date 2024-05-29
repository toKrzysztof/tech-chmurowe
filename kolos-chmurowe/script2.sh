#!/bin/bash

docker network create mynetwork

docker build -f Dockerfile-flask -t myapp .

docker run --name myapp --network mynetwork -d myapp

sleep 5

docker build -f Dockerfile-nginx -t mynginx .

docker run --name mynginx -d -p 8080:80 -p 80:80 --network mynetwork mynginx

