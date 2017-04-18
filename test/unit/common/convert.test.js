const assert = require('chai').assert;
const convert = require('../../../src/common/convert');

const TEST_WINDOWS_1251_ENGLISH = [0x74, 0x65, 0x73, 0x74];
const TEST_WINDOWS_1251_RUSSIAN = [0xF2, 0xE5, 0xF1, 0xF2];
const TEST_UTF16_ENGLISH = [0x00, 0x74, 0x00, 0x65, 0x00, 0x73, 0x00, 0x74];
const TEST_UTF16_RUSSIAN = [0x04, 0x42, 0x04, 0x35, 0x04, 0x41, 0x04, 0x42];

describe('common::convertEncoding', () => {
  it('Should properly convert windows-1251 to utf8', () => {
    assert.equal(convert(Buffer.from(TEST_WINDOWS_1251_ENGLISH, 'binary')), 'test');
    assert.equal(convert(Buffer.from(TEST_WINDOWS_1251_RUSSIAN, 'binary')), 'тест');
  });

  it('Should properly convert utf16 to utf8', () => {
    assert.equal(convert(Buffer.from(TEST_UTF16_ENGLISH, 'binary'), 'utf-16'), 'test');
    assert.equal(convert(Buffer.from(TEST_UTF16_RUSSIAN, 'binary'), 'utf-16'), 'тест');
  });
});
