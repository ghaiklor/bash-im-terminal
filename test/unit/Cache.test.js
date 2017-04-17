const assert = require('chai').assert;
const Cache = require('../../src/Cache');

describe('Cache', () => {
  it('Should properly create new instance', () => {
    const cache = new Cache();

    assert.instanceOf(cache, Cache);
  });
});
