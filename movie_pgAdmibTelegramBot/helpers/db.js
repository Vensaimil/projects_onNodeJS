let pg = require("pg")

const Pool = pg.Pool
const pool = new Pool({
    user: 'vynsdmcvqjjian',
    host: 'ec2-54-220-170-192.eu-west-1.compute.amazonaws.com',
    database: 'd18hevl0orgu57',
    password: 'c6db7d6c2dbe3a8d8d54017b670b7d6ac3414583debbc109a44e5977f720e122',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    },
})

exports.getMovies = function (request, response) {
    pool.query("select * from movies", function (error, results) {
        if (error) {
            console.log(error);
        }
        response.render("movies.hbs", {
            moviesArray: results.rows
        });
    });
}

exports.aboutMovie = function (request, response) {
    let movieId = request.body.movieId;
    pool.query("select * from movies where id = $1", [movieId], function (error, results) {
        if (error) {
            console.log(error);
        }
        response.render("aboutMovie.hbs", {
            movie: results.rows[0]
        });
    });
}

exports.bookTicket = function (request, response) {
    let user_name = request.body.userName;
    let movie_id = request.body.movieId;
    let row_seat = request.body.rowSeat;
    
    pool.query("insert into orders ( movie_id, user_name, row_seat) values($1,$2,$3)", [movie_id, user_name,row_seat],
    function(error,results){
        if(error){
            console.log(error);
        }
        response.redirect("/")
    }
    );
    
}
