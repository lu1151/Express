const { error } = require("console");
const express = require("express");
const fs = require("fs");

// create server
const server = express();

// error
server.get("/index", (req, res, next) => {
    // // sync
    // throw new Error("Somthing wrong with our server.")

    // async
    fs.readFile("./xxx.js", "utf8", (err, result) => {
        if (err != null) {
            next(err);
        } else {
            res.send(result);
        }
    })
    // res.send("The server is fine.")
})

// err
server.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

// listen
server.listen(3000);
console.log("Hello");