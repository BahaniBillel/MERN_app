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
  res.json({ mssg: 'Welcome to the app home page' });
});

// GET a new request from WORKOUT

app.get('/api/workouts', (req, res) => {
  res.json({ mssg: ' GET a new request from workwout' });
});

// POSTE a new request WORKOUT
app.post('/api/workouts', (req, res) => {
  res.json({ mssg: ' POST  a new request' });
});

// UPDATE a new request WORKOUT

app.patch('/api/workouts/:id', (req, res) => {
  res.json({ mssg: ' UPDATE a new request from workout' });
});

// DELETE  a new request

app.delete('/api/workouts/:id', (req, res) => {
  res.json({ mssg: ' DELETE  a new request' });
});

// LISTEN for requests
app.listen(4000, () => {
  console.log('listening on port', process.env.PORT);
});

//  inmportant notes

//  dotenv file is undefined
