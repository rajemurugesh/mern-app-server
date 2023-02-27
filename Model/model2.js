const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    logourl: {
        type: String,
        require: true,
    }
});

const model = mongoose.model("clientlogo", userSchema);
module.exports = model;