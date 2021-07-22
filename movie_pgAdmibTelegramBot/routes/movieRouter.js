const express = require("express");
const movieController = require("../controllers/movieController");
const movieRouter = express.Router();

movieRouter.get("/", movieController.getMovies);
movieRouter.post("/about", movieController.aboutMovie);
movieRouter.post("/booking", movieController.bookTicket);

module.exports = movieRouter;