const { CONTENT_TYPE } = require('../const');
/**
 * @class Headers
 * @param {String} contentType The content type
 * @param {String} authorization Authorization
 */
class Headers {
    contentType;
    authorization;

    constructor({contentType, authorization}) {
        this.contentType = contentType || CONTENT_TYPE;
        this.authorization = authorization;
    }
}

module.exports =  Headers;