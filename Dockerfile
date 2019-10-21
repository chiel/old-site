# syntax=docker/dockerfile:1.0.0-experimental

FROM nginx:1.17.3-alpine

WORKDIR /opt/project

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./public /opt/project
