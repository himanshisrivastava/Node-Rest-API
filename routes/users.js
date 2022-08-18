const express = require('express')

const userSerive = require("../service/user-service");
const router = express.Router()

router.get('/', async (req,res) => {
    const allUsers = await userSerive.getUsers()
    res.json(allUsers);
})

router.post("/", async (req, res) => {

    const newUser = await userSerive.addUser( req.body)
    res.json(newUser)
   });

   router.put("/:userId", (req, res) => {
    res.send(["User updated successfully"]);
   });
   router.delete("/:userId", (req, res) => {
    res.send(["User deleted successfully"]);
   });

module.exports = router