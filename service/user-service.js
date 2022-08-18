const User = require('../model/User')

const getUsers = async () => {
   return User.find()
    
};

const addUser = async (details) => {
    const newUser = new User({
        name: details.name,
        designation: details.designation,
        andTitle: details.andTitle
    })

    const data = await newUser.save()

    return data
}

module.exports = {getUsers,
    addUser}