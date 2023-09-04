const express= require("express");
const app =express();

app.get("/", (req,res)=>{
    res.send("this is the blog website")
})


app.listen(5000, (req, res)=>{
    console.log("app is running");
})