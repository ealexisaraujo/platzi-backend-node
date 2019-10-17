const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/leap-year/:year', (req, res) => {
  const year = parseInt(req.params.year);
  if ((year % 4 === 0 && year & (100 !== 0)) || year % 400 === 0) {
    res.send('Is leap-year');
  } else {
    res.send('Is not leap-year');
  }
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
