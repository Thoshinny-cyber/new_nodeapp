const express= require('express')
const userRouter = express.Router();

const User = require('../models/user');

userRouter.route("/users").get(async (req, res) => {
    try {
        const user = new User.find();
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = userRouter;