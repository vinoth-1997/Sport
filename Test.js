var http = require('http');

http.createServer(function (req, res) {
    console.log("Success")
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('1237');
 
}).listen(8080);