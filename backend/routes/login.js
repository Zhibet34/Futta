const express = require('express');
const loginRoute = express.Router();

loginRoute.get('/login', (req, res) => {
  res.send('Welcome to the login page');
});

loginRoute.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  // Example: Check credentials (replace with your actual logic)
  if (email === 'user@example.com' && password === 'password') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = loginRoute;