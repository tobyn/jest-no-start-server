const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<title>Hello, World!</title>");
}).listen(8080);
