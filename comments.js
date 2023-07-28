// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Apply middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Add route
app.get('/posts/:id/comments', (req, res) => {
  res.send([]);
});

// Start server
app.listen(4001, () => {
  console.log('Listening on port 4001');
});