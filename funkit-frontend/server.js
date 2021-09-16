const http = require('http');
const kelp = require('kelp');
const proxy = require('kelp-proxy');
const serve = require('kelp-static');
const logger = require('kelp-logger');

const app = kelp();

app.use(logger);
app.use(serve('.'));
app.use(proxy({
  path: '/funkit',
  proxy: 'http://localhost:3005', // api-server
}));

http.createServer(app).listen(8000);