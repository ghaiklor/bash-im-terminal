const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('Entry Point', () => {
  it('Should properly get random quotes', (done) => {
    const requestMock = sinon.stub().returns(Promise.resolve('test'));
    const getQuotes = proxyquire('../../src/index.js', {'./common/request': requestMock});

    getQuotes(-1)
      .then(() => {
        assert.ok(requestMock.calledOnce);
        assert.equal(requestMock.getCall(0).args[0], 'http://bash.im/random');
        assert.deepEqual(requestMock.getCall(0).args[1], {encoding: 'binary'});

        done();
      })
      .catch(done);
  });

  it('Should properly get latest quotes', (done) => {
    const requestMock = sinon.stub().returns(Promise.resolve('test'));
    const getQuotes = proxyquire('../../src/index.js', {'./common/request': requestMock});

    getQuotes(0)
      .then(() => {
        assert.ok(requestMock.calledOnce);
        assert.equal(requestMock.getCall(0).args[0], 'http://bash.im/');
        assert.deepEqual(requestMock.getCall(0).args[1], {encoding: 'binary'});

        done();
      })
      .catch(done);
  });

  it('Should properly get quotes from specified page', (done) => {
    const requestMock = sinon.stub().returns(Promise.resolve('test'));
    const getQuotes = proxyquire('../../src/index.js', {'./common/request': requestMock});

    getQuotes(1200)
      .then(() => {
        assert.ok(requestMock.calledOnce);
        assert.equal(requestMock.getCall(0).args[0], 'http://bash.im/index/1200');
        assert.deepEqual(requestMock.getCall(0).args[1], {encoding: 'binary'});

        done();
      })
      .catch(done);
  });
});
