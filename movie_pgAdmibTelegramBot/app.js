const express = require("express");
const movieRouter = require("./routes/movieRouter");
const bodyParser = require("body-parser");
const tb = require("./tb_orders");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.use("/movies", movieRouter);

app.listen(9090);