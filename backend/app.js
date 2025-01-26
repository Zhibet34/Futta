const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/futta')

const app = express();

// Middleware
app.use(cors({
origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
    if (allowedOrigins.includes(origin)) {
    callback(null, true); // Allow the request
    } else {
    callback(new Error('Not allowed by CORS')); // Block the request
    }
},
credentials: true,
}));

app.use(express.json()); // Add middleware to parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
app.use(bodyParser.json());

// Routes
app.use('/',loginRoute)

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`The server is live on http://localhost:${port}`);
});