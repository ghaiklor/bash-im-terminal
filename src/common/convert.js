const iconv = require('iconv');

/**
 * Convert from one encoding to another one.
 *
 * @param {Buffer} body Content you want to convert
 * @param {String} [from=windows-1251]
 * @param {String} [to=utf8]
 * @returns {String}
 */
module.exports = function (body, from = 'windows-1251', to = 'utf8') {
  const conv = new iconv.Iconv(from, to);
  const buffer = Buffer.from(body, 'binary');

  return conv.convert(buffer);
};
