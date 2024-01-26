#!/bin/zsh
/usr/bin/aws s3 sync\
  --acl 'public-read'\
  --exclude '.git/*'\
  --exclude 'retriever/*'\
  --exclude 'sync.sh'\
  --delete\
  . s3://carterparks.org/
