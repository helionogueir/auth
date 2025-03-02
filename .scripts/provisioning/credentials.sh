#!/bin/bash
set -eux

_credentials=".credentials"
_private_key="${_credentials}/private_key.pem"
_public_key="${_credentials}/public_key.pem"

if [ ! -f "$_private_key" ] || [ ! -f "$_public_key" ]; then
  # Remove old keys
  rm -rf "$_credentials"
  mkdir -p "$_credentials"

  # Create private key
  openssl genpkey -algorithm RSA -out "$_private_key" -pkeyopt rsa_keygen_bits:2048

  # Create public key
  openssl rsa -pubout -in "$_private_key" -out "$_public_key"
fi