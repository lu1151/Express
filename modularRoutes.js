const express = require("express");

// create server
const app = express();

// create route handler
const home = express.Router();

// match path 
app.use("/home", home);
home.get("/index",(req,res)=>{
    res.send("Welcome to the homepage.")
})

// listen port
app.listen(3000);