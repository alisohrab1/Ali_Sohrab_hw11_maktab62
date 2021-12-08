const express = require('express');
const Router = express.Router();
const path = "C:/Users/sohrab/Desktop/express class work/6/html/"

Router.get("/",function(req,res){
    res.send("root")
})
Router.use('/:version', function(req,res){

    res.sendFile(path + `index${req.params.version}.html` )
}
)

module.exports = Router;