const mongoose = require('mongoose');
const userSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});
const model = mongoose.model("Register", userSchema);
module.exports = model;