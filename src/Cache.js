/**
 * Simple implementation of cache.
 * Just for cases, if quote already was fetched.
 *
 * @class
 */
class Cache {
  /**
   * Creates new instance of a cache.
   */
  constructor() {
    this.quotes = [];
    this.ids = new Set();
  }

  /**
   * Pushes new quotes into the cache.
   *
   * @param {Array<Quote>} quotes
   * @returns {Cache}
   */
  push(quotes) {
    this.quotes.push(...quotes);
    this.ids.push(...quotes.map(quote => quote.getId()));

    return this;
  }

  /**
   * Get a quote from the cache by its id.
   *
   * @param {Number} id
   * @returns {Quote}
   */
  get(id) {
    return this.quotes.find(quote => quote.getId() === id);
  }

  /**
   * Checks if a quote already exists in the cache.
   *
   * @param {Number} id
   * @returns {Boolean}
   */
  isExists(id) {
    return this.ids.indexOf(id) !== -1;
  }
}

module.exports = Cache;
