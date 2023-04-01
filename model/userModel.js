const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type : String,
        required : [true, "Please add username"]
    },
    Email: {
        type : String,
        required : [true, "Email already exist"],
        unique : [true, "Please add user password"],
    },
}, {
    timespan : true,
});

module.exports = mongoose.model("User", userSchema);