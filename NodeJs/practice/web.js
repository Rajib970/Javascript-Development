const http = require('http');
const fs = require('fs');
const { log } = require('console');
const queryString = require('querystring');


http.createServer((req, resp) => {
    fs.readFile('html/web.html', 'utf-8', (error, data) => {
        if (error) {
            resp.writeHead(500, { 'content-type': 'text/plain' });
            resp.end("Internal Server Error");
            return;
        }
        resp.writeHead(200, { 'content-type': 'text/html' });
        if (req.url == "/") {
            resp.write(data);
        } else if (req.url == "/submit") {
            let dataBody = []
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                let dataString = "My Name is " + readableData.name + " and My Email is " + readableData.email;
                console.log(dataString);
                // fs.writeFileSync("text/" + readableData.name + ".txt", dataString) # File Created in Synchronous way
                // console.log("File Created!");

                fs.writeFile("text/" + readableData.name + ".txt", dataString, 'utf-8', (err) => {  // # File Created in Asynchronous way
                    if (err) {
                       resp.end("Internal Server Error!")
                    } else{
                        console.log("File Created!")
                   }
                });
            })
            resp.write('<h1> Data Submitted </h1>')
        }
        resp.end();
    });



}).listen(3200);