const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/index/:id/:name", (req, res) => {
    res.send(req.params)
})

app.listen(3000);