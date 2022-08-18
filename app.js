const express = require('express')

const app = express()

app.listen(3002, ()=> {
    console.log("My app is running on port 3002")
})

app.get('/',(req,res) => {
    res.send("Welcome to my app")
})

app.get('/users',(req,res) => {
    res.json([{'name':'Himanshi'}])
})