const express = require("express");

// create server
const server = express();

server.get("/", (req, res) => {
    // send()
    res.send("Hello Express");
})

server.get("/list", (req, res) => {
    res.send({
        name: "Alex",
        age: 20
    })
})

// listen
server.listen(3000);
console.log("Hello");