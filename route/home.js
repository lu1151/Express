const express = require("express");

const home = express.Router();

home.get("/index", (req, res) => {
    res.send("Weclome to the home page.")
});

module.exports = home;