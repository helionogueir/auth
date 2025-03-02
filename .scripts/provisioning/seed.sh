#!/bin/bash
set -eux

_domain_database="src/domain/database"

find "$_domain_database" -type f -name "*.seed.ts" | while read file; do
  echo "Executando yarn tsx para: $file"
  yarn tsx "$file"
  if [ $? -ne 0 ]; then
    echo "Error when try to sees the file: $file"
    exit 1
  fi
done
