const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const connection = require("./DB/mongoose")

const port = process.env.PORT|| 8000;

//Cors
//access-control-allow-credentials:true
app.use(cors());

connection();

//Middleware
app.use(express.json());
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send("server running successfully")
})

//Server Creation
app.listen(port , () => console.log("server running in 8000..."));

//router
const test1=require('./Routes/router0')
app.use('/router0',test1)

const test2 = require('./Routes/router1')
app.use('/router1', test2)

const test3 = require('./Routes/router2')
app.use('/router2', test3)

const test4 = require('./Routes/router3')
app.use('/router3', test4)
