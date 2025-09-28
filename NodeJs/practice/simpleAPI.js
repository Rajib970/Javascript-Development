const http = require('http');

const userData = [
    {
        name: 'Rajib',
        age: 23,
        email:'rajib@123'
    },
    {
        name: 'Peter',
        age: 24,
        email: 'peter@123'
    },
    {
        name: 'Shyam',
        age: 25,
        email: 'shyam@123'
    }
]

http.createServer((req, resp) => {
    resp.setHeader('Content-Type', 'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
    
}).listen(6100)