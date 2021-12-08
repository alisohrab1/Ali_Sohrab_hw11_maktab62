const express = require("express");
const app = express();


app.get("/", function (req, res){
    res.send("HELLO WORLD!")
})

app.listen(5500);
console.log("server1 is running ");
