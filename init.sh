#!/usr/bin/sh
git secrets --install -f
git secrets --register-aws

git secrets --add '[a-f0-9]{32}'
git secrets --add '[a-fA-F0-9=+\/]{88}'
git secrets --add 'cf.login'