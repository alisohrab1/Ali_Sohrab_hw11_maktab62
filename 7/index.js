const express =  require("express");
const path = require("path");
const { nextTick } = require("process");
const PORT = 5500;
const User = require('./routers/user')
const app = express();

app.use('/user',User)
app.use(express.static(path.join(__dirname,'public')))



app.listen(PORT, () => (console.log(`server is running on port ${PORT}`)));