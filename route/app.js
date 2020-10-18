const express = require("express");

const app = express();

const home = require("./home");
const admin = require("./admin");

app.use("/home", home);
app.use("/admin",admin);

app.listen(3000);