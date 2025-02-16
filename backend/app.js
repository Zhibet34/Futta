const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo');
require('dotenv').config();
const loginRoute = require('./routes/login');
const signUpRoute = require('./routes/signup');
const User = require('./model/userModel'); // Ensure this path is correct
const logOutRoute = require('./routes/logout');

// Check for required environment variables
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in .env file.');
  process.exit(1);
}
if (!process.env.SECRET) {
  console.error('SECRET is not defined in .env file.');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/futta')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Allow requests from frontend
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    secret: process.env.SECRET, // Session secret
    resave: false, // Don't resave unchanged sessions
    saveUninitialized: true, // Save new sessions
    cookie: { 
      secure: process.env.NODE_ENV === 'production', // Secure cookies in production
      maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI, // Store sessions in MongoDB
      ttl: 14 * 24 * 60 * 60, // Session TTL (14 days)
    }),
  })
);

// Passport initialization
app.use(passport.initialize()); // Initialize Passport
app.use(passport.session()); // Enable session support for Passport

// Passport Local Strategy
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

//local factoring
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Routes
app.use('/', loginRoute);
app.use('/', signUpRoute);
app.use('/',logOutRoute)

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});