const express = require('express');
const router = express.Router();

let services = null;

router.get('/city/:cityId', async (req, res, next) => {
    try {

        const cinemas = await services.cinemaService.getCinemasByCity(req.params.cityId);
        res.status(200).json(cinemas)

    } catch (err) {
        console.error(err);
    }
  });

router.get('/:cinemaId', async (req, res, next) => {
    try {

        const cinema = await services.cinemaService.getCinemaById(req.params.cinemaId);
        res.status(200).json(cinema)

    } catch (err) {
        console.error(err);
    }
});

router.get('/:cityId/:movieId', async (req, res, next) => {
    try {

        const schedules = await services.cinemaService.getCinemaScheduleByMovie(req.params.cityId, req.params.movieId);
        res.status(200).json(schedules);

    } catch (err) {
        console.error(err);
    }
});

module.exports  = (ser) => {

    services = ser;

    return {
        router
    }

};
