const express = require('express');
const signUpRoute = express.Router();
const User = require('../model/userModel'); // Import the User model

// Signup route
signUpRoute.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
    console.log(firstName,lastName,email)
  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ firstName, lastName, email });

    // Register the user with passport-local-mongoose
    await User.register(newUser, password, (err, user) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).json({ message: 'Error registering user' });
      }

      // Respond with success
      res.status(201).json({ message: 'User registered successfully', user });
    });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = signUpRoute;