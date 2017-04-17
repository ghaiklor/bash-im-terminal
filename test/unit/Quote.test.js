const assert = require('chai').assert;
const sinon = require('sinon');
const Quote = require('../../src/Quote');

const QUOTE_OPTIONS = {
  id: '1',
  text: 'test',
  rating: '2',
  date: '2017-04-17'
};

describe('Quote', () => {
  it('Should properly create new instance', () => {
    const quote = new Quote(QUOTE_OPTIONS);

    assert.instanceOf(quote, Quote);
    assert.equal(quote.getId(), 1);
    assert.equal(quote.getText(), 'test');
    assert.equal(quote.getRating(), 2);
    assert.equal(quote.getDate().toDateString(), 'Mon Apr 17 2017');
    assert.equal(quote.getUrl(), 'http://bash.im/quote/1');
  });
});
