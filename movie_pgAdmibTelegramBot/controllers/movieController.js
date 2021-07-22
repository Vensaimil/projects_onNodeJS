const movie = require("../models/movie");
let db = require("../helpers/db");

exports.getMovies = function (request, response) {
    db.getMovies(request,response);
}
exports.aboutMovie = function (request, response) {
    db.aboutMovie(request,response);
}
exports.bookTicket = function (request, response) {
    db.bookTicket(request,response);
}