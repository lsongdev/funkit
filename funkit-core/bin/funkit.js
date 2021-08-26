#!/usr/bin/env -S node --experimental-vm-modules

const parse = require('kelp-argv');

const fs = require('fs');
const { promisify } = require('util');
const { createServer, createSimpleResolver } = require('..');

const pkg = require('../package.json');

const readFile = promisify(fs.readFile);

const help = () => {
  console.log();
  console.log(`~$ ${pkg.name} worker.js`);
  console.log();
  console.log(' options: ');
  console.log(' - port');
  console.log();
};

(async ({ _, port = 8000 }) => {
  if (_.length === 0) {
    help();
    return;
  }
  const [filename] = _;
  const code = await readFile(filename);
  const server = createServer({
    resolve: createSimpleResolver(code)
  });
  server.listen(port, () => {
    console.log(`[${pkg.name}]`, 'server is running at', port);
  });
})(parse());
