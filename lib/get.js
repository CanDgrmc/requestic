"use strict";
const { sendGetRequest } = require('./requests');
const Options = require('../models/Options');
const Headers = require('../models/Headers');
const { genertateQueryString, modelResponse, modelArrayResponse} = require('../tools');

/**
 * Async get request
 * @module request
 * @requires Options
 * @requires Headers
 * @param {String} url url
 * @param {Object} options request options
 * @param {Object} queryParams query parameters
 */

async function get(url, options = {}, queryParams = undefined) {
    // get request
    options.headers = new Headers(options.headers || {});
    options = new Options(options);
    console.log('options', options);
    let completeUrl = url + genertateQueryString(queryParams);
    let response = await sendGetRequest(completeUrl, options, queryParams);

    if (options.parseJson && response) {
        response = JSON.parse(response);
    }

    if (options.jsonModel && response) {
        response = typeof response == "string" ? JSON.parse(response) : response;
        response = modelResponse(response, options.jsonModel)
    }
    if (options.arrayModel && response) {
        console.log('modelling array');
        response = typeof response == "string" ? JSON.parse(response) : response;
        response = modelArrayResponse(response, options.arrayModel)
    }

    return response;
}




module.exports = {
    get
}
