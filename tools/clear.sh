#! /bin/bash


docker rm -f $(docker ps -q -a)
docker rmi -f xuxinlai2002/gnode:v1.0
