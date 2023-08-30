const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express();

//path for .env file
dotenv.config({path:'./.env'})

//database connection
require('./db/conn.js')

app.use(express.json());


const User= require('./model/userSchema.js')

app.use(require('./router/auth.js'))



const PORT = process.env.PORT||8000;


//connecting to database


//this is home route
// app.get('/',(req,res) =>{
//     res.send("hello GAURAV from server")
// })

//listening app on the PORT
app.listen(PORT,()=>{
    console.log("YOUR SERVER IS UP ON PORT:",PORT)
})