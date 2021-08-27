#!/bin/sh

# restore existing cache artifacts
# cp -Rp "$XDG_CACHE_HOME/.next/cache/**/*" ".next/cache"

# install dependencies and build project
yarn install && yarn build:static

# copy new cache artifacts
# cp -Rp ".next/cache/**/*" "$XDG_CACHE_HOME/.next/cache"
