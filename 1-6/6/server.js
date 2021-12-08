const express = require('express');
const app = express();
const pages = require("./router/pages.js");
const port = 5500;


// app.use('/pages/:version', function(req,res){

//     res.sendFile(path + `index${req.params.version}.html` )
// }
// )
app.use("/pages",pages)
app.get('/',function(req,res){
    res.send("root")
})

app.listen(port);
console.log('Server started at http://localhost:' + port);