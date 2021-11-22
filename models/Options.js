/**
 * @class Options
 */
class Options {
    headers;
    parseJson;
    model;
    arrayModel;
    jsonModel;

    constructor({headers, parseJson, model, arrayModel, jsonModel}) {
        this.headers = headers;
        this.parseJson = parseJson != undefined ? parseJson : true;
        this.model = model;
        this.arrayModel = arrayModel;
        this.jsonModel = jsonModel
    }
}

module.exports = Options;