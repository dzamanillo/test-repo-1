#!/bin/bash

set -e

echo "Starting deployment..."

cd ~
cd www/jordanr217.sg-host.com/test-repo-1
git pull origin main -f

echo "Deployment completed!"