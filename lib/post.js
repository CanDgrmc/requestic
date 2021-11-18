"use strict";
const { sendGetRequest } = require('./requests');
const Options = require('../models/Options');
const Headers = require('../models/Headers');

/**
 * Async post request
 * @module request
 * @requires Options
 * @requires Headers
 * @param {String} url url
 * @param {Object} options request options
 * @param {Object} queryParams query parameters
 */

async function post(url, options = {}, queryParams = undefined) {
    // get request
    options.headers = new Headers(options.headers || {});
    options = new Options(options);

    let completeUrl = url;
    const response = await sendGetRequest(completeUrl);
    return response;
}


module.exports = {
    post
}
