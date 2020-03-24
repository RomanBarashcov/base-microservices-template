#!/usr/bin/env bash

docker exec -it movies-service-api npm run hard-reset;

docker exec -it cinema-catalog-service-api npm run hard-reset;

docker-compose up --build;