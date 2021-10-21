const http = require('http');
const https = require('https');
const { debuglog } = require('util');
const { pathToRegexp, find } = require('routing2');
const { createServer, createWorker } = require('@funkit/core');

const debug = debuglog('funkit:server');

const get = url =>
  new Promise(done => https.get(url, done));

const readStream = stream => new Promise((resolve, reject) => {
  const buffer = [];
  stream
    .on('error', reject)
    .on('data', chunk => buffer.push(chunk))
    .on('end', () => resolve(Buffer.concat(buffer)));
});

const createRoutes = async () => {
  const response = await get(`https://api.lsong.me/funkit/rules`);
  const data = await readStream(response);
  const { rules } = JSON.parse(data)
  const routes = rules.map(rule => {
    return {
      method: '*',
      workerId: rule.workerId,
      regexp: pathToRegexp(rule.route)
    };
  });
  debug('routes', routes);
  return routes;
};

const findWorkerById = async id => {
  debug('findWorkerById', id);
  const response = await get(`https://api.lsong.me/funkit/workers/${id}`);
  const data = await readStream(response);
  const { worker } = JSON.parse(data);
  return worker;
};

const findWorkerId = async request => {
  const routes = await createRoutes();
  const { status, route } = find(routes, request);
  debug('findWorkerId', request.url, route);
  if (status === 404) {
    return;
  }
  return route && route.workerId;
};

(async () => {

  const app = createServer({
    async resolve(request) {
      const workerId = await findWorkerId(request);
      if (!workerId) return; // worker not found
      const { code } = await findWorkerById(workerId);
      try {
        const worker = createWorker(code);
        worker.run();
        return worker;
      } catch (e) {
        console.log('runtime error:', e);
        return;
      }
    }
  });
  const { PORT = 3000 } = process.env;
  app.use((req, res) => res.send(404));
  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`@funkit/server is running at ${PORT}`));
})();