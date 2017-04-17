const cheerio = require('cheerio');

module.exports = function (html) {
    const $ = cheerio.load(html, {decodeEntities: false});

    return $('.quote > .text')
        .map((i, elem) => $(elem).html().split('<br>').join('\n'))
        .get()
        .join('\n\n');
};