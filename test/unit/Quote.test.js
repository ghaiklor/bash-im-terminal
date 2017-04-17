const assert = require('chai').assert;
const Quote = require('../../src/Quote');

describe('Quote', () => {
    it('Should properly create new instance', () => {
        const quote = new Quote({});

        assert.instanceOf(quote, Quote);
    });
});