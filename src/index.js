const iconv = require('./iconv');
const request = require('./request');
const parse = require('./parse');
const URL = 'http://bash.im';

module.exports = async function (page = 0) {
    const response = await request(URL);
    const converted = iconv(response);

    return parse(converted);
};

module.exports().then(quotes => console.log(quotes));