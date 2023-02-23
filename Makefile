.PHONY: build deploy

build:
	@echo Building site
	docker-compose -f docker-compose.yml build
	docker push docker.chester-lloyd.dev:5000/karsten/site:latest

deploy: build
	kubectl rollout restart deployment site --namespace=karsten-lloyd

default: build
