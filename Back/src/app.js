const express = require("express");
const {Router} = require("express");
const morgan = require("morgan")
const routes = require("./routes");

require("./db.js");

const router = Router();
const app = express();

app.name = "StaywishAPI";

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan());

app.use("/", routes)


module.exports = app;