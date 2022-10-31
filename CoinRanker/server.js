var http = require("http");
var fs = require("fs");
const axios = require("axios");

const PORT = 8080;

fs.readFile("./index.html", function (err, html) {
    if (err) throw err;
    console.log("index.html loaded in  http://localhost:8080/");

  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT);
});
