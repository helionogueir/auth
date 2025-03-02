#!/bin/bash
set -eux

# Install packages
echo "INFO: Install dependencies"
yarn install --immutable
touch /tmp/yarn_installe
