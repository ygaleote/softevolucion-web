#!/bin/sh

echo 'Corriendo'
npm install --legacy-peer-deps
echo 'Running server...'
ng serve --host 0.0.0.0:$PORT