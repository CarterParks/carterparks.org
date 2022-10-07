#!/bin/sh
aws --profile personal s3 sync --exclude '.*' . 's3://carter-parks.net'
