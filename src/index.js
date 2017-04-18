const getCurrentPage = require('./common/getCurrentPage');
const getQuotes = require('./common/getQuotes');
const convert = require('./common/convert');
const request = require('./common/request');

const BASE_URL = 'http://bash.im';
const HOME_URL = () => `${BASE_URL}/`;
const RANDOM_URL = () => `${BASE_URL}/random`;
const PAGE_URL = page => `${BASE_URL}/index/${page}`;

/**
 * Get quotes from Bash.im.
 * If you provide page param equals to 0, it will load latest quotes.
 * If you provide page param greater than 0, it will load specified page.
 * If your provide page param equals to -1, it will random quotes.
 *
 * @param {Number} [page=0] -1 for random, 0 for latest, >1 for specified page
 * @returns {Promise.<{quotes: Array.<Quote>, currentPage: Number}>}
 */
module.exports = async function (page = 0) {
  const url = page === -1 ? RANDOM_URL() : page === 0 ? HOME_URL() : PAGE_URL(page);
  const response = await request(url, {encoding: 'binary'});
  const converted = convert(response);
  const quotes = getQuotes(converted);
  const currentPage = getCurrentPage(converted);

  return {quotes, currentPage};
};
