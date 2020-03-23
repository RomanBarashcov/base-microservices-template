const cinemaRepository = require('../repository/cinemaRepository');
const cinemaService = require('../service/cinemaService')({cinemaRepository});
const cinemaRouter = require('./cinemas')({cinemaService}).router;

module.exports = movieRouter;

