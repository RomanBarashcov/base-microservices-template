#!/usr/bin/env bash

cd ./docker-setup

docker inspect --format "{{ .NetworkSettings.IPAddress }}" movies-service-api;

