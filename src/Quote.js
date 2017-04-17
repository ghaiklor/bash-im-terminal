const BASE_URL = 'http://bash.im';
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
}

module.exports = Quote;
