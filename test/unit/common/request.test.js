const assert = require('chai').assert;
const proxyquire = require('proxyquire');
const sinon = require('sinon');

describe('common::request', () => {
  it('Should properly make a request', (done) => {
    const requestMock = sinon.stub();
    const request = proxyquire('../../../src/common/request.js', {request: requestMock});
    const promise = request('test.url', {foo: 'bar'});

    requestMock.callArg(1);

    promise
      .then(() => {
        assert.ok(requestMock.calledOnce);
        assert.deepEqual(requestMock.getCall(0).args[0], {url: 'test.url', foo: 'bar'});

        done();
      })
      .catch(done);
  });

  it('Should properly reject if request failed', (done) => {
    const requestMock = sinon.stub();
    const request = proxyquire('../../../src/common/request.js', {request: requestMock});
    const promise = request('test.url', {foo: 'bar'});

    requestMock.callArgWith(1, 'error');

    promise
      .then(done)
      .catch(e => {
        assert.ok(requestMock.calledOnce);
        assert.deepEqual(requestMock.getCall(0).args[0], {url: 'test.url', foo: 'bar'});
        assert.equal(e, 'error');

        done();
      });
  });
});
