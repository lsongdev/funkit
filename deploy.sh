#!/usr/bin/env bash

cd funkit-frontend
NODE_ENV=production npm run build
cd ..

git subtree push --prefix funkit-frontend origin gh-pages