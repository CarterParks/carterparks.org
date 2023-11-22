#!/bin/zsh
aws s3 sync\
  --acl 'public-read'\
  --exclude '.git/*'\
  --exclude 'sync.sh'\
  --delete\
  . s3://carterparks.org/
