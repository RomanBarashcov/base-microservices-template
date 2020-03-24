const cinemaRepository = require('../repository/cinemaRepository');
const adapters = require('../adapters/index');
const cinemaService = require('../service/cinemaService')({cinemaRepository}, adapters);
const cinemaRouter = require('./cinemas')({cinemaService});

module.exports = cinemaRouter.router;

