const expect  = require("chai").expect;
const request = require("../index");

describe("Get Request", async () => { 
    
    it('should return array of objects', async () => {
        const options = {
            arrayModel: {
                userId: "",
                title: "",
            }
        }
        const data = await request.get("https://jsonplaceholder.typicode.com/todos", options);
        expect(data).to.be.an('array');
    });

    it('should return object with model', async () => {
        const options = {
            jsonModel: {
                userId: "",
                title: "",
            }
        }
        const data = await request.get("https://jsonplaceholder.typicode.com/todos/1", options);
        expect(data).to.have.all.keys('title', 'userId');
    });
    
    it('should return string', async () => {
        const options = {
            parseJson: false
        }
        const data = await request.get("https://jsonplaceholder.typicode.com/todos/1", options);
        expect(data).to.be.an('string');
    });

})