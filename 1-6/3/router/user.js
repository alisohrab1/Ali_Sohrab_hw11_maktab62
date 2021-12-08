const express = require('express');
const Router = express.Router();

Router.get("/", function (req, res){
    res.send("hello from user")
})

Router.get('/create', function (req, res){
    res.send("user created!")
})

Router.get('/delete', function (req, res){
    res.send("user deleted!")
})
Router.get('/update', function (req, res){
    res.send("user updated!")
})

module.exports = Router;