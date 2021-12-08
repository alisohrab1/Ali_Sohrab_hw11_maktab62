const express = require('express');
const Router = express.Router();

Router.get('/', function(req, res){
    res.send("hello from pages")
})
Router.get('/1', function(req, res){
    res.sendFile("C:/Users/sohrab/Desktop/express class work/5/html/index1.html")
})
Router.get('/2', function(req, res){
    res.sendFile("C:/Users/sohrab/Desktop/express class work/5/html/index2.html")
})
Router.get('/3', function(req, res){
    res.sendFile("C:/Users/sohrab/Desktop/express class work/5/html/index3.html")
})
module.exports = Router;