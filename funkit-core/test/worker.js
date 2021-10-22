const { Worker, createWorker } = require('../worker');

const code = `
addEventListener('message', (message) => {
    console.log(message);
});
`;

const context = {
  console: {
    log: (...a) => console.log(...a)
  }
};

const worker = new Worker(code, context);
worker.run();
worker.dispatch({ type: 'message', data: "hello" });
