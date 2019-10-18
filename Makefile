SHELL=bash

.PHONY: *

DOCKER_REPO=docker.pkg.github.com/chiel/site

docker-lint:
	docker run --rm -i hadolint/hadolint:latest < Dockerfile

export DOCKER_BUILDKIT=1
docker-build:
	docker build -t "${DOCKER_REPO}/site:dev-latest" .

docker-run:
	docker run -d --rm -p 14598:80 "${DOCKER_REPO}/site:dev-latest"
