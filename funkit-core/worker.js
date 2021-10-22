const { Script } = require('vm');
const { debuglog } = require('util');
const EventEmitter = require('events');
const { createContext } = require('./context');

const debug = debuglog('funkit:worker');
class Worker extends EventEmitter {
  constructor(code, context = {}) {
    super();
    this.script = new Script(code);
    this.context = createContext({
      ...context,
      addEventListener: this.addListener.bind(this),
    });
  }
  run() {
    const { script, context } = this;
    return script.runInContext(context);
  }
  dispatch(event) {
    const { type } = event;
    debug('dispatch', event.type);
    return this.emit(type, event);
  }
}

const createWorker = code => {
  return new Worker(code);
};

module.exports = {
  Worker,
  createWorker,
};