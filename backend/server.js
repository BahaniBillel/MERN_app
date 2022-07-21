require('dotenv').config();

const express = require('express');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' });
});

// listen for requests
app.listen(4000, () => {
  console.log('listening on port', process.env.PORT);
});

//  inmportant notes

//  dotenv file is undefined
