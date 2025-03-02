#!/bin/bash
set -eux

# Run tests coverage
echo "INFO: Run tests coverage"
yarn tests:coverage
