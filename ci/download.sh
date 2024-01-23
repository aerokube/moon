#!/bin/bash
set -e

VERSION=$1

mkdir -p dist
cd dist
for osArch in "linux_amd64" "darwin_amd64" "darwin_arm64" "windows_amd64" "windows_386"; do
  os=$(echo "$osArch" | awk -F "_" '{print $1;}')
  file='cypress-moon_'"$osArch"
  downloadURL="https://github.com/aerokube/moon2/releases/download/$VERSION/cypress-moon_darwin_amd64"
  outputFile="cypress-moon_$osArch"
  if [ "$os" == "windows" ]; then
    downloadURL="$downloadURL.exe"
    outputFile="$outputFile.exe"
  fi
  curl -L -o "$outputFile" -s "$downloadURL"
  chmod 755 "$outputFile"
done
