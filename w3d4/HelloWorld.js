var http = require('http');
var url = require('url');
var date = require('./myModule');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Exercise 1
    res.write('Hello World');
    res.write('<br/>');
    res.write('<br/>');

    // Exercise 1
    res.write(
      '<strong>The date and time are currently:</strong> ' + date.myDate()
    );
    res.write('<br/>');
    res.write('<br/>');

    // Exercise 3
    res.write('<strong>Current URL is:</strong> ' + req.url);
    res.write('<br/>');
    res.write('<br/>');
    // work with query strings
    var queryStrings = url.parse(req.url, true).query;
    res.write(
      '<strong>Query strings: </strong> ' +
        (queryStrings.year ? queryStrings.year : '') +
        ' ' +
        (queryStrings.month ? queryStrings.month : '')
    );
    res.end();
  })
  .listen(8080);
