const express = require("express");
const router = express.Router();
const { engine } = require('express-handlebars');

router.get("/", (req,res) =>{
    res.send("nav root, select a page")
})

router.get('/:page', function (req, res) {
    res.render(req.params.page)
});

module.exports = router;