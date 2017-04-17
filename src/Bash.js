const iconv = require('iconv');
const request = require('request');
const cheerio = require('cheerio');
const Cache = require('./Cache');
const Quote = require('./Quote');

const BASE_URL = 'http://bash.im';
const RANDOM_URL = () => `${BASE_URL}/random`;
const QUOTE_URL = id => `${BASE_URL}/quote/${id}`;

class Bash {
    constructor() {
        this.cache = new Cache();
    }

    /**
     * Gets a specific quote by its id.
     *
     * @param {Number} id
     * @returns {Promise.<Quote>}
     */
    async getQuote(id) {
        const url = QUOTE_URL(id);
        const response = await this.constructor.request(url, {encoding: 'binary'});
        const converted = this.constructor.convert(response);

        return this.constructor.parse(converted);
    }

    /**
     * Gets a random quote.
     *
     * @returns {Promise.<Quote>}
     */
    async getRandom() {
        const url = RANDOM_URL();
        const response = await this.constructor.request(url, {encoding: 'binary'});
        const converted = this.constructor.convert(response);

        return this.constructor.parse(converted);
    }

    /**
     * Make a request to specified URL.
     *
     * @param {String} url
     * @param {Object} options
     * @returns {Promise}
     */
    static async request(url, options) {
        return new Promise((resolve, reject) => {
            const params = Object.assign({url}, options);

            return request(params, (error, response, body) => error ? reject(error) : resolve(body));
        });
    }

    /**
     * Parses an HTML response and returns {@link Quote} instances of all founded quotes.
     *
     * @param {String} html
     * @returns {Array<Quote>}
     */
    static parse(html) {
        const $ = cheerio.load(html, {decodeEntities: false});
        const quotes = $('.quote');

        return quotes
            .filter((i, elem) => $(elem).find('.text').html())
            .map((i, elem) => {
                const id = $(elem).find('.id').text().replace('#', '');
                const text = $(elem).find('.text').html().split('<br>').join('\n');
                const rating = $(elem).find('.rating').text();
                const date = $(elem).find('.date').text();

                return new Quote({id, text, rating, date});
            })
            .get();
    }

    /**
     * Convert from one encoding to another one.
     *
     * @param {Buffer} body Content you want to convert
     * @param {String} from
     * @param {String} to
     * @returns {String}
     */
    static convert(body, from = 'windows-1251', to = 'utf8') {
        const conv = new iconv.Iconv(from, to);
        const buffer = Buffer.from(body, 'binary');

        return conv.convert(buffer);
    }
}

module.exports = Bash;