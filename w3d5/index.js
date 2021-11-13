const express = require('express');
const path = require('path');
const router = express.Router();

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/calculator', (req, res) => {
  const { num1, num2, operator } = req.body;
  res.redirect(`/result?num1=${num1}&num2=${num2}&operator=${operator}`);
});

app.get('/result', (req, res) => {
  const { num1, num2, operator } = req.query;
  let result = 0;
  let op = '+';
  switch (operator) {
    case 'add':
      result = parseInt(num1) + parseInt(num2);
      op = '+';
      break;
    case 'divide':
      result = parseInt(num1) / parseInt(num2);
      op = '/';
      break;
    case 'multiply':
      result = parseInt(num1) * parseInt(num2);
      op = '*';
      break;
    case 'minus':
      result = parseInt(num1) - parseInt(num2);
      op = '-';
      break;
  }

  res.send(
    `<h1><em>The Answer is:</em> ${num1} ${op} ${num2} = ${result}</h1>`
  );
});

const server = app.listen(app.get('port'), function () {
  console.log('Listening: ' + server.address().port);
});
