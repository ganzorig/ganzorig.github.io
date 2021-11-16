const express = require('express');
const path = require('path');
const word = require('./database/word');

require('dotenv').config();

const app = express();

app.set('port', process.env.PORT);

app.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));

// GET
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/dict.html'));
});

// SEARCH WORD
app.get('/search', word.searchWord);

const server = app.listen(app.get('port'), function () {
  console.log('Listening: ' + server.address().port);
});
