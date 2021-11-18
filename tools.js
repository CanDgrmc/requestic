/**
 * @module tools
 * @param {Object} queryParams 
 * @returns str
 */

function genertateQueryString(queryParams) {
    let str = "";
    let count = 0;
    for(let i in queryParams) {
        if (count === 0) {
            str = `?${i}=${queryParams[i]}`;
        } else {
            str += `&${i}=${queryParams[i]}`;
        }

        count++
    }

    return str;
}

/**
 * 
 * @param {Object} response 
 * @param {Object} model 
 * @returns modelJson
 */

function modelResponse(response, model) {
    let modelJson = {};
    for (let i in model) {
        modelJson[i] = response[i];
    }

    return modelJson;
}

/**
 * 
 * @param {Object} response 
 * @param {Object} model 
 * @returns modelJson
 */

 function modelArrayResponse(response, model) {
    let modelArray = [];
    for (let item of response) {
        const modelledItem = modelResponse(item, model);

        modelArray.push(modelledItem);
    }

    return modelArray;
}

module.exports = {
    genertateQueryString,
    modelResponse,
    modelArrayResponse
}