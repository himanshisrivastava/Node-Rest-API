const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    designation: {
        type: String,
        required: true
     },
    andTitle: {
        type: String,
        required: true
     },
    userAddedOn: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Users', userSchema)