const assert = require('assert');

class Event {
  constructor(type) {
    assert.ok(type, 'Event: `type` is required.');
    this.type = type;
  }
}

module.exports = Event;