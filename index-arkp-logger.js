const express = require('express');
const morgan = require('morgan');
const log = console.log;

const app = express();

// To handle json in requests
app.use(express.json());
// To poner la verga console log
app.use(morgan('[:date] :remote-addr :method :url :status :res[content-length] - :response-time ms'));

// Middleware for pretty-printing JSON responses
app.set('json spaces', 2);

// Endpoint
app.post('/', async (req, res) => {
  // Example JSON response
  log('...Logging message...');
  log('> America/Bogota time:',new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' }));
  log(JSON.stringify(req.body, null, 4));

  res.sendStatus(200);
});

// Server setup
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`arkp-logger server is listening to port ${PORT}`);
});
