const request = require('request');

module.exports = function (url) {
    return new Promise(function (resolve, reject) {
        request({url: url, method: 'GET', encoding: 'binary'}, (error, response, body) => {
            if (error) return reject(error);

            return resolve(body);
        });
    });
};