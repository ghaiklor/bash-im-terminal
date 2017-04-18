const cheerio = require('cheerio');

/**
 * Parses an HTML response and returns a current page.
 *
 * @param {String} html
 * @returns {Number}
 */
module.exports = function (html) {
  const $ = cheerio.load(html);

  return parseInt($('.pager').find('.current').find('input').val());
};
