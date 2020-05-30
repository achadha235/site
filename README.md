## Practical Node Web Server

- Typescript: React JS / Next JS / Express / GQL / Postgres
- run in a kubernetes cluster
- on Google Cloud

### Great things

I tried to add nice features that would be good to have when starting an arbitrary react webserver project. I based this on my own experience of developing apps for many different companies and clients. Most people will agree a good webserver has many features which I will summarize below

1. Performant and reliable

- the server should serve responses quickly and be reliable under load
- performance should be equally fast across regions

2. Scaleable

-

2. Easy to work on - features should be easy to build, test and iterate on
3.

## Not so great things

1. Stock starters are a bit lame

Ideally a web server should be scalable to

1. Webserver - Next.js

- Server-side rendering, tree shaking, CSS optimization out of the box
  - Build pipeline
    - Webpack
    - -> tree shaking [next.js]
    - -> CSS optimization [purgecss],
    - -> Docker container
- Dev environment
  - Local: run dev server directly on host machine with node
  - Kubernetes: run locally with minikube and deploy to GKE

* Uses Terraform, Docker and Kubernetes - Infrastructure as code, horizontally scalable
* Advanced local dev - fully loaded with everything you need to start executing from day 1

  - Dockerized DB managed with typeorm - reliable db

* Framer motion

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

https://codefresh.io/docker-tutorial/not-ignore-dockerignore-2/
