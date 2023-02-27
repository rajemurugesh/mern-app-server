const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const connection = () => {
    mongoose.connect("mongodb://localhost:27017/limat", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((_db) => console.log("DB Connected"))
        .catch((err) => console.log(err));
}


module.exports = connection;

