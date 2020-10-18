const express = require("express");

// create server
const app = express();

// app.use
app.use((req,res,next)=>{
    console.log("This is app.use");
    next();
})

app.use("/request",(req,res,next)=>{
    console.log("This is app.use/request");
    next();
})

app.get("/list",(req,res)=>{
    res.end('/list');
})

app.get("/request", (req, res, next) => {
    req.name = "Alex";
    next();
})

app.get("/request", (req, res) => {
    res.send(req.name);
})

// listen
app.listen(3000);
console.log("Hello");