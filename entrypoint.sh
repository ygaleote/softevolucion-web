#!/bin/sh

echo 'Corriendo'
npm install --legacy-peer-deps
echo 'Running server...'
npm run dev --host 0.0.0.0:$PORT