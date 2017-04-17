const iconv = require('iconv');

module.exports = function (body, from = 'windows-1251', to = 'utf8') {
    const conv = new iconv.Iconv(from, to);
    const buffer = Buffer.from(body, 'binary');

    return conv.convert(buffer);
};
