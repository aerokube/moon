#!/bin/bash
set -e

VERSION=$1

mkdir -p dist
cd dist

assetsURL=$(curl -s -H 'Accept: application/vnd.github+json' -H "Authorization: Bearer $GITHUB_TOKEN" "https://api.github.com/repos/aerokube/moon2/releases/tags/$VERSION" | jq -r '.assets_url')

curl -s -H 'Accept: application/vnd.github+json' -H "Authorization: Bearer $GITHUB_TOKEN" "$assetsURL" | jq -r '.[] | .name + " " + .url' | while read line; do
    outputFile=$(echo "$line" | awk '{print $1;}')
    downloadURL=$(echo "$line" | awk '{print $2;}')
    curl -L -H 'Accept: application/octet-stream' -H "Authorization: Bearer $GITHUB_TOKEN" -o "$outputFile" -s "$downloadURL"
    chmod 755 "$outputFile"
done
