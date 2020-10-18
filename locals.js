const express = require("express");
const path = require("path");
const app = express();

app.engine("art", require("express-art-template"));

// set template folder path
app.set("views", path.join(__dirname, "views"));

// set default file extension for template
app.set("view engine", "art");

// locals
app.locals.users = [{
    name: "Alex",
    age: 25
}, {
    name: "Evan",
    age: 7
}]

app.get("/index", (req, res) => {
    res.render("index", {
        msg: 'This is index.html'
    })
})

app.get("/list", (req, res) => {
    res.render("list", {
        msg: 'This is list.html'
    })
})

app.listen(3000);