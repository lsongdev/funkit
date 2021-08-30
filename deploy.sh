#!/usr/bin/env bash

cd funkit-frontend
npm run build

cd ..
git subtree push --prefix funkit-frontend origin gh-pages