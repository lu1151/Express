const express = require("express");

const admin = express.Router();

admin.get("/", (req, res) => {
    res.send("Weclome to the admin page.")
});

module.exports = admin;