const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const send = require('kelp-send');
const { debuglog } = require('util');
const Request = require('./lib/request');
const FetchEvent = require('./lib/fetch');

const debug = debuglog('funkit:server');

const createServer = ({ resolve }) => {
  const app = kelp();
  app.use(body);
  app.use(send);
  app.use(async (req, res) => {
    const request = new Request(req);
    const event = new FetchEvent('fetch');
    event.request = request;
    event.respondWith = response => {
      debug('response', response);
      const { status, statusText, headers, body } = response;
      res.writeHead(status, statusText, headers);
      res.write(body);
      res.end();
    };
    const worker = await resolve(request);
    worker.dispatch(event);
  });
  return http.createServer(app);
};

module.exports = {
  createServer,
};