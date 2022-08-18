var express = require("express");
var app = express();

const bodyParser = require('body-parser')
const DBService = require("./service/db-service")
const userRoutes = require('./routes/users')

app.listen(3001, () => {
 console.log("Server running on port 3001");
});


const db = DBService.connectToDB()

app.use(bodyParser.json())
app.use('/users',userRoutes)
app.get("/", (req, res) => {
   res.send("My home page")
});


