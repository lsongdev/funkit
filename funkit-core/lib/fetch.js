const assert = require('assert');

class FetchEvent {
  constructor(type) {
    assert.ok(type, 'FetchEvent: `type` is required.');
    this.type = type;
  }
}

module.exports = FetchEvent;