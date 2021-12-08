const express = require("express");
const PORT = 5000;
const app = express();
// const { engine } = require('express-handlebars');
const nav = require("./routes/nav")
const detail = require("./routes/detail")
const path = require("path")

//template engine
// app.engine('handlebars', engine({ extname: '.handlebars', defaultLayout: "main"}));
app.set('views', './views')
app.set('view engine', 'ejs');


//midleware
app.use("/page",nav)
app.use("/detail",detail)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('/public'));
app.use('/css', express.static(__dirname  + '/public/css'))
app.use('/js', express.static(__dirname  + '/public/js'))
app.use('/img', express.static(__dirname  + '/public/img'))
app.use('data',express.static(__dirname+'/public/data'))


app.get("/", (req,res) => {
    res.render('index')
})



app.listen(PORT,() => console.log(`server running on port ${PORT}`))