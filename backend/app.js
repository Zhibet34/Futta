const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const homeRoute = require('./routes/home');
mongoose.connect('mongodb://127.0.0.1:27017/futta')

const app = express();
app.use('/',homeRoute);
app.use(cors())

const port = 3001;
app.listen(port,()=>{
    console.log(`the server is live on ${port}`)
});