const vm = require('vm');
const Request = require('./lib/request');
const Response = require('./lib/response');

class Context {
  constructor(context) {
    Object.assign(this, {
      Request,
      Response,
    }, context);
  }
}

const createContext = context => {
  const sandbox = new Context(context);
  return vm.createContext(sandbox);
};

module.exports = {
  Context,
  createContext,
};