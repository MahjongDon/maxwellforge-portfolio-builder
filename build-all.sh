#!/bin/bash

projects=(
  "fin-forge"
  "forge-coffee"
  "forge-crm"
  "forge-notes"
  "forge-pass-safeguard"
  "forge-sales"
  "forge-wander"
)

# Ensure the dist directory exists
mkdir -p dist

for project in "${projects[@]}"; do
  echo "Building $project"
  # Clean the project's dist directory
  rm -rf "dist/$project"
  mkdir -p "dist/$project"

  cd "projects/$project" || exit
  npm install # Ensure dependencies are installed
  npm run build
  cd - || exit

  # Copy the build output to the consolidated dist directory
  cp -r "projects/$project/dist/." "dist/$project"
done