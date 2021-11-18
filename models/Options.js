/**
 * @class Options
 */
class Options {
    headers;
    parseJson;
    model;
    arrayModel;

    constructor({headers, parseJson, model, arrayModel}) {
        this.headers = headers;
        this.parseJson = parseJson || true;
        this.model = model;
        this.arrayModel = arrayModel;
    }
}

module.exports = Options;