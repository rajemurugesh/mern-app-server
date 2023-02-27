const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }
});
const model = mongoose.model("contact", userSchema);
module.exports = model;