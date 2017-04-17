const assert = require('chai').assert;
const Bash = require('../../src/Bash');

describe('Bash', () => {
  it('Should properly create new instance', () => {
    const bash = new Bash();

    assert.instanceOf(bash, Bash);
  });
});
