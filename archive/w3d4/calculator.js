var http = require('http');
var url = require('url');
var fs = require('fs');
var adder = require('./adder');

http
  .createServer(function (req, res) {
    var queryStrings = url.parse(req.url, true);
    if (queryStrings.pathname === '/adder.js') {
      adder.add(res, queryStrings.query);
    } else {
      const fileName = '.' + queryStrings.pathname;
      fs.readFile(fileName, function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          return res.end('404 Not Found');
        }
        res.writeHead(200);
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
