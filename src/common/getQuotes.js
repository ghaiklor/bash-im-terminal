const cheerio = require('cheerio');
const he = require('he');
const Quote = require('../Quote');

/**
 * Parses an HTML response and returns {@link Quote} instances of all founded quotes.
 *
 * @param {String} html
 * @returns {Array<Quote>}
 */
module.exports = function (html) {
  const $ = cheerio.load(html);
  const quotes = $('.quote');

  return quotes
    .filter((i, elem) => $(elem).find('.text').html())
    .map((i, elem) => {
      const id = $(elem).find('.id').text().replace('#', '');
      const text = he.decode($(elem).find('.text').html()).split('<br>').join('\n');
      const rating = $(elem).find('.rating').text();
      const date = $(elem).find('.date').text();

      return new Quote({id, text, rating, date});
    })
    .get();
};
