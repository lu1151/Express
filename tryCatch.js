const express = require("express");
const fs = require("fs");
const promisify = require("util").promisify;
const readFile = promisify(fs.readFile);

// create server
const server = express();

// try catch
server.get("/index", async (req, res, next) => {
    try {
        await readFile("./aaa.txt");
    } catch (err) {
        next(err)
    }
})

server.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

// listen
server.listen(3000);
console.log("Hello");