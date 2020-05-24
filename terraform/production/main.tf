provider "google" {
  version = "3.5.0"

  credentials = "./secrets/abhi-732088bb1a43.json"

  project = "abhi-250902"
  region  = "us-west1"
  zone    = "us-west1-c"
}

terraform {
  backend "gcs" {
    credentials = "./secrets/abhi-732088bb1a43.json"
    bucket  = "main-tf-state-prod"
    prefix  = "terraform/state"
  }
}