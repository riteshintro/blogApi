const express = require("express")

// const  blog =require("./route/blog")
const app = express();

require("dotenv").config()
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("<h1>this is the home page</h1>")
})

// app.use("/api/v1", blog)

const connectWithDb =require("./config/database")
connectWithDb();

app.listen(5000, (req, res) => {
  console.log('app is running');
});