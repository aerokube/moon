#!/bin/bash
set -e

die(){
    echo $1
    return 1
}

tmpdir(){
    dir_name="/tmp/$(uuidgen | sed -e 's|-||g')"
    mkdir -p "$dir_name"
    echo "$dir_name"
}

if [ -z $(command -v kubectl) ]; then
    die "kubectl command required for this script to run"
fi
if [ -z $(command -v uuidgen) ]; then
    die "uuidgen command required for this script to run"
fi
if [ -z $(command -v htpasswd) ]; then
    die "htpasswd command required for this script to run"
fi

# Getting input from user
DEFAULT_S3_ENDPOINT=https://storage.googleapis.com
DEFAULT_S3_BUCKET_NAME=moon-test
read -p "S3 endpoint: [$DEFAULT_S3_ENDPOINT] " s3_endpoint
if [ -z "$s3_endpoint" ]; then
    s3_endpoint="$DEFAULT_S3_ENDPOINT"
fi 
read -p "S3 bucket name: [$DEFAULT_S3_BUCKET_NAME] " s3_bucket_name
if [ -z "$s3_bucket_name" ]; then
    s3_bucket_name="$DEFAULT_S3_BUCKET_NAME"
fi
while [ -z "$s3_access_key" ]; do
    read -p "S3 access key: " s3_access_key
done
while [ -z "$s3_secret_key" ]; do
    read -p "S3 secret key: " s3_secret_key
done
set -x

# Deleting old installation if exists
kubectl delete -f moon-api.yaml || true
kubectl delete -f moon.yaml || true
kubectl delete -f moon-sessions.yaml || true
kubectl delete secret s3-credentials || true
kubectl delete configmap s3-config || true
kubectl delete configmap quota || true
kubectl delete secret users || true

# Creating password file
password_file=$(tmpdir)"/users.htpasswd"
htpasswd -Bbn test test-password >> "$password_file"
kubectl create secret generic users --from-file="$password_file"
echo 'Created user "test" with password "test-password"'

# Creating quota map
quota_dir=$(tmpdir)
cp ./browsers.json "$quota_dir"
kubectl create configmap quota --from-file="$quota_dir"
echo 'Created quota config map'

# Creating S3 configuration
kubectl create configmap s3-config --from-literal=endpoint="$s3_endpoint" --from-literal=version=S3v2 --from-literal=bucket="$s3_bucket_name"
kubectl create secret generic s3-credentials --from-literal=accessKey="$s3_access_key" --from-literal=secretKey="$s3_secret_key"

# Start Moon and Moon API
kubectl create -f moon-sessions.yaml
kubectl create -f moon.yaml
kubectl create -f moon-api.yaml

echo 'Bootstrap finished successfully'