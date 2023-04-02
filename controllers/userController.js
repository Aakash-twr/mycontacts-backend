const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    // Hashed Password
    const hashedPassword = await bcrypt(password, 10);
    console.log("hashed password :", hashedPassword);

    const user = await User.create({
        username,
        email,
        password : hashedPassword,
    });
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({ _id: user.id, email: user.email });
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.json({message : "Register the user"});
});

const loginUser = asyncHandler((req, res) => {
    res.json({message : "Login user"})
});

const currentUser = asyncHandler((req, res) => {
    res.json({message : "Current user"})
});

module.exports = { registerUser, loginUser, currentUser };