const { createServer } = require('./server');
const { createWorker } = require('./worker');

const createSimpleResolver = code => {
  let worker;
  return request => {
    if (worker) return worker;
    worker = createWorker(code);
    worker.run();
    return worker;
  };
};

module.exports = {
  createWorker,
  createServer,
  createSimpleResolver,
};