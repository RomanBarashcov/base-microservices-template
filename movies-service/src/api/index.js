const movieRepository = require('../repository/movieRepository');
const movieService = require('../service/movieService')({movieRepository});
const movieRouter = require('./movies')({movieService}).router;

module.exports = movieRouter;

