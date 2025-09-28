const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile('html/web.html', 'utf-8', (err, data) => {
        if (err) {
            resp.writeHead(500, { "content-type": "text/plain" });
            resp.write("Internal Server Error!");
            resp.end();
            return
        }

        resp.write(200, { "content-type": "text/html" });
        resp.write(data)
        resp.end()
    })
}).listen(5400)