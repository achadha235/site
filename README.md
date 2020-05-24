## Node Webserver

### Introduction

This is a basic repository designed to be a good jumping off point into an early project.

1. Frontend / Webserver - node js process uses next.js with express
2. Containerization - docker wrapper and kubernetes setup for minikube and gcloud kubernetes cluster
3. Storage - Google cloud storage, CloudSQL Postgres (coming soon)
4. Infrastructure - gcloud managed with terraform backend

### Prerequsites

1. node js
2. gcloud
3. docker
4. kubectl
5. minikube
6. terraform

You will learn about: node js, react, babel, graphql, express

By the end of the tutorial you will cover the 58 initial files in this repo and understand what each one is about.

## Setup

1. Clone the repository
2. `yarn install`. This will install a lot of things but they will (mostly) be worth it. Heck I don't know....you be the judge.

## Database / Migrating

1. Run a local postgres database using docker `yarn db:local:start`

1. The `server/entity` contains the typeorm models for the app. You can update these depending on your needs
1. `yarn typeorm-migration-generate`
1. `typeform-migration-run`
1. `yarn dev`

## Setting up gcloud

## Configuring remote cluster

`gcloud container clusters get-credentials abhi-250902-gke --region us-west1`
