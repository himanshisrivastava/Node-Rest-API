const mongoose = require('mongoose')
async function connectToDB () {

    const uri = "mongodb://localhost:27017/";

    mongoose.connect(uri, () => {
        console.log("Connected to DB")
    })
}

module.exports = {connectToDB}