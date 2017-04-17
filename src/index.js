const convert = require('./common/convert');
const request = require('./common/request');
const parse = require('./common/parse');
const Quote = require('./Quote');

const BASE_URL = 'http://bash.im';
const RANDOM_URL = () => `${BASE_URL}/random`;

module.exports = async function () {
  const url = RANDOM_URL();
  const response = await request(url, {encoding: 'binary'});
  const converted = convert(response);

  return parse(converted);
};
