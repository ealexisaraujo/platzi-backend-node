const express = require('express');
const app = express();

const { config } = require('./config/index');
const movieApi = require('./routes/movies.js');

const {
  logErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

// body parser
app.use(express.json());

movieApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
