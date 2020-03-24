#!/usr/bin/env bash

docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q) && docker rmi $(docker images -a -q);

cd ./docker-setup

docker-compose up -d;

sleep 10;

docker exec -it movies-service-api npm run hard-reset;

docker exec -it cinema-catalog-service-api npm run hard-reset;

docker-compose up --build;