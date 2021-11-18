const https = require('https');
const http = require('http');

/**
 * 
 * @param {String} completeUrl 
 * @returns data
 */

async function sendGetRequest(completeUrl, options){
    return new Promise((resolve, reject) => {
        let lib = completeUrl.startsWith("https://") ? https : http;
        console.log('aa',completeUrl);

        lib.get(completeUrl, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });
    
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });
    
        }).on("error", (err) => {
            reject(err);
        });
        
    })
}

module.exports = {
    sendGetRequest
}