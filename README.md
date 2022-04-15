## Client (visualisation)
node ./node_modules/kotatsu/cli.js serve --typescript src/client.ts --public / ./public

## Server (editing)
npx tsc
node ./build/server.js
