const request = require('request');

/**
 * Make a request to specified URL.
 *
 * @param {String} url
 * @param {Object} [options]
 * @returns {Promise}
 */
module.exports = async function (url, options) {
  return new Promise((resolve, reject) => {
    const params = Object.assign({url}, options);

    return request(params, (error, response, body) => error ? reject(error) : resolve(body));
  });
};
