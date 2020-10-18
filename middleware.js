const express = require("express");

// create server
const server = express();

// // next()
// server.get("/request", (req, res, next) => {
//     req.name = "Alex";
//     next();
// })

// server.get("/request", (req, res) => {
//     res.send(req.name);
// })

// // under maintenance
// server.use((req,res,next)=>{
//     res.send("Website under planed manintenance, please come back later.")
// })

// login
server.use("/admin",(req,res,next)=>{
    let isLogin = true;
    if (isLogin){
        next();
    }else {
        res.send("Login failed")
    }
})

server.get("/admin",(req,res)=>{
    res.send("Login complete")
})

// 404 page
server.use((req,res,next)=>{
    res.status(404).send("404, page not found")
})

// listen
server.listen(3000);
console.log("Hello");