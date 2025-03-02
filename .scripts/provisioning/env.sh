#!/bin/bash
set -eux

if [ ! -f "/usr/src/app/.env" ]; then
  DATABASE_URL=$(node -e '
    const { driver, username, password, port, schema } = require("./src/app.config").default.database
    console.log(`${driver}://${username}:${password}@database:${port}/${schema}`)
  ')

  echo "DATABASE_URL=\"$DATABASE_URL\"" > /usr/src/app/.env
  echo ".env file created with DATABASE_URL: $DATABASE_URL"
else
  echo ".env file already exists."
fi
