const http = require('http');
const kelp = require('kelp');
const body = require('kelp-body');
const send = require('kelp-send');
const { debuglog } = require('util');
const Request = require('./lib/request');
const FetchEvent = require('./lib/fetch');

const debug = debuglog('funkit:core');

const createServer = ({ resolve }) => {
  const app = kelp();
  app.use(body);
  app.use(send);
  app.use(async (req, res, next) => {
    const request = new Request(req);
    const worker = await resolve(request);
    if (!worker) return next();
    const event = new FetchEvent('fetch');
    event.request = request;
    event.respondWith = response => {
      debug('response', response);
      const { status, statusText, headers, body } = response;
      res.writeHead(status, statusText, headers);
      res.write(body);
      res.end();
    };
    worker.dispatch(event);
  });
  return app;
};

module.exports = {
  createServer,
};