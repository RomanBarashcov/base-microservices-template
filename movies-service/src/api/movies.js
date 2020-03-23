const express = require('express');
const router = express.Router();

let services = null;

router.get('/', async (req, res, next) => {
    try {

        let movies = services.movieService.getAllMovies();
        res.status(status.OK).json(movies);

    } catch (err) {
        console.err(err);
    }
});

router.get('/:id', (req, res, next) => {
    try {

        let movie = services.movieService.getMovieById(res.body.id);
        res.status(status.OK).json(movie);

    } catch (err) {
        console.err(err);
    }
});

module.exports = (ser) => {

    services = ser;
    
    return {
        router
    }

};
