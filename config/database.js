// import mongoose from "mongoose";
const mongoose =require("mongoose")
require("dotenv").config();

const connectWithDb =()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(
        console.log("database is connected")
    ).catch((error) => {
        console.log("db facing the connection issue")
        console.log(error)
        process.exit(1)
    })
}
module.exports = connectWithDb;