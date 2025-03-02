#!/bin/bash
set -eux

if [ ! -d "prisma/migrations" ]; then
  yarn prisma migrate dev --name "initial_version"
  if [ $? -ne 0 ]; then
    echo "Error while criating migrations."
    exit 1
  fi
else
  yarn prisma migrate dev
  if [ $? -ne 0 ]; then
    echo "Error while running migrations."
    exit 1
  fi
fi
