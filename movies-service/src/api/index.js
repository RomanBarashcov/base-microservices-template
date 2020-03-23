const movieRepository = require('../repository/movieRepository');
const movieService = require('../service/movieService')({movieRepository});
const movieRouter = require('./movies')({movieService});

module.exports = movieRouter.router;

