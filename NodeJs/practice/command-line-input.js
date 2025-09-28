const http = require('http');
const arg = process.argv;
const port_id = arg[2];

http.createServer((req, resp) => {
    resp.write("Response from Code");
    resp.end();

}).listen(port_id);