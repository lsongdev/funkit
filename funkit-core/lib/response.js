const { STATUS_CODES } = require('http');

class Response {
  constructor(body, init) {
    this.body = body;
    const { status = 200, headers } = init;
    this.status = status;
    this.statusText = STATUS_CODES[status];
  }
}

module.exports = Response;