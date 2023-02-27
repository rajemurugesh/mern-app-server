const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const connection = () => {
    mongoose.connect("mongodb+srv://Rajeswari:raje1992@cluster1.wm1nl.mongodb.net/limat", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((_db) => console.log("DB Connected"))
        .catch((err) => console.log(err));
}


module.exports = connection;

