const express = require('express');
const loginRoute = express.Router();

loginRoute.get('/', (req, res) => {
  res.send('Welcome to the login page');
});

loginRoute.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`the email is : ${email}`);
  console.log(`the password is : ${password}`)

  // Example: Check credentials (replace with your actual logic)
  
});



module.exports = loginRoute;