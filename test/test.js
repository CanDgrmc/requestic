const Request = require('../index');
const options = {
    arrayModel: {
        userId: "",
        title: "",
    }
}
Request.get("https://jsonplaceholder.typicode.com/todos", options).then(data => console.log('data',data));