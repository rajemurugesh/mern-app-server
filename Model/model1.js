const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    photo: {
        type: String,
        require: true,
    },
    project: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    }
});
const model = mongoose.model("Projects", userSchema);
module.exports = model;