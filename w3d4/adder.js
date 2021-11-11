const adder = function (res, values) {
  const sum = parseInt(values.first) + parseInt(values.second);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head><meta charset="utf">');
  res.write('<title>Calculator</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Sum is: ');
  res.write(String(sum));
  res.write('</h1>');
  res.write('</body>');
  res.write('</html>');

  return res.end();
};

exports.add = adder;
