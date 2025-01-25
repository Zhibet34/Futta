const express = require('express');
const homeRoute = express.Router();
const user = require('../model/users')

homeRoute.get('/',async(req,res)=>{
    const userData = await user.find({})
    res.json(userData)
})

module.exports = homeRoute;