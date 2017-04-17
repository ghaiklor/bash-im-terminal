const request = require('async-request');

const BASE_URL = 'http://bash.im';
const VOTE_UP_URL = id => `${BASE_URL}/quote/${id}/rulez`;
const VOTE_DOWN_URL = id => `${BASE_URL}/quote/${id}/sux`;
const BAYAN_URL = id => `${BASE_URL}/quote/${id}/bayan`;
const QUOTE_URL = id => `${BASE_URL}/quote/${id}`;

/**
 * This class represents one Bash.im quote.
 *
 * @class
 */
class Quote {
  /**
   * Creates a Quote instance which represents one Bash.im quote.
   *
   * @param {Number} id
   * @param {String} text
   * @param {Number} rating
   * @param {Date} date
   */
  constructor({id, text, rating, date}) {
    this.id = +id;
    this.text = text;
    this.rating = +rating;
    this.date = new Date(date);
  }

  /**
   * Returns an ID of a quote.
   *
   * @returns {Number}
   */
  getId() {
    return this.id;
  }

  /**
   * Returns a quote.
   *
   * @returns {String}
   */
  getText() {
    return this.text;
  }

  /**
   * Returns a current rating of a quote.
   *
   * @returns {Number}
   */
  getRating() {
    return this.rating;
  }

  /**
   * Returns a date, when the quote was posted.
   *
   * @returns {Date}
   */
  getDate() {
    return this.date;
  }

  /**
   * Gets an URL direct to this quote.
   *
   * @returns {String}
   */
  getUrl() {
    return QUOTE_URL(this.getId());
  }

  /**
   * Vote up the quote.
   *
   * @returns {Promise}
   */
  async voteUp() {
    const id = this.getId();
    const url = VOTE_UP_URL(id);
    const response = await request(url, {method: 'POST', data: {quote: id, act: 'rulez'}});

    return response.statusCode === 200;
  }

  /**
   * Vote down the quote.
   *
   * @returns {Promise}
   */
  async voteDown() {
    const id = this.getId();
    const url = VOTE_DOWN_URL(id);
    const response = await request(url, {method: 'POST', data: {quote: id, act: 'sux'}});

    return response.statusCode === 200;
  }

  /**
   * Mark the quote as bayan.
   *
   * @returns {Promise}
   */
  async bayan() {
    const id = this.getId();
    const url = BAYAN_URL(id);
    const response = await request(url, {method: 'POST', data: {quote: id, act: 'bayan'}});

    return response.statusCode === 200;
  }
}

module.exports = Quote;
