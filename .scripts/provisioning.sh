#!/bin/bash
set -eux

# Provisioning environment
source .scripts/provisioning/env.sh

# Provisioning migrations
source .scripts/provisioning/migrations.sh

# Provisioning seed
source .scripts/provisioning/seed.sh

# Provisioning credentials
source .scripts/provisioning/credentials.sh

# Delete .env file
rm -rf .env

# Delete node_modules
rm -rf node_modules