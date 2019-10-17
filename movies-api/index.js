const express = require('express');
const app = express();

const { config } = require('./config/index');
const movieApi = require('./routes/movies.js');

movieApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
