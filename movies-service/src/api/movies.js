const express = require('express');
const router = express.Router();

let services = null;

router.get('/', async (req, res, next) => {
    try {

        let movies = await services.movieService.getAllMovies();
        res.status(200).json(movies);

    } catch (err) {
        console.error(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {

        let movie = await services.movieService.getMovieById(req.params.id);
        res.status(200).json(movie);

    } catch (err) {
        console.error(err);
    }
});

module.exports = (ser) => {

    services = ser;
    
    return {
        router
    }

};
