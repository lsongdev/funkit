const { createServer, createSimpleResolver } = require('..');

const simpleScript = `addEventListener('fetch', event => {
  event.respondWith(new Response('hello world', {status: 200}))
})`

const server = createServer({
  resolve: createSimpleResolver(simpleScript)
});

server.listen(3000);