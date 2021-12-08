const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/cars.json"),'utf8'));

router.get("/", (req,res) =>{
    res.send("detail root, select a page")
})

router.get('/:id', function (req, res) {
    let car = data.filter((car) => car.id == req.params.id);
    res.render('cars.ejs',{data: {name:car[0].name , details:car[0].details , url : car[0].url}})
});

module.exports = router; 