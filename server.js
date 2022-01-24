//1- import express
const express = require("express");

//2- express instance
const app = express();

//5- require and configure dotenv

require("dotenv").config();

//6 connect to DB

const connectDB = require('./config/connectDB')
connectDB()

//8 - bodyparser middleware

app.use(express.json());

//7 Require router

const router = require('./routes/user')

app.use('/api/user/', router)

//3 - Port

const port = process.env.PORT


//4- Start Server

app.listen(port, error => {
    error ? console.log('Can not run server !!!')
        : console.log(`Server is Running on port ${port} ...`);
});

console.clear()
