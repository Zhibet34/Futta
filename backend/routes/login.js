const express = require('express');
const passport = require('passport');
const loginRoute = express.Router();

// GET route for the login page
loginRoute.get('/', (req, res) => {
  res.send('Welcome to the login page');
});

// POST route for handling login
loginRoute.post('/login', passport.authenticate('local', {
  successRedirect: '/', // Redirect to the home page on successful login
  failureRedirect: '/', // Redirect back to the login page on failure
}));
module.exports = loginRoute;