const db = require("../db/models/index");

const getCinemasByCityId = async (id) => {
    try {

        const cinemas = await db.Cinema.findAll({where:{cityId: id}}).map(i => i.dataValues);
        return cinemas;

    } catch (err) {
        console.error(err);
    }
};

const getCinemaById = async (id) => {
    try {

        const cinema = await db.Cinema.findOne({where: {id: id}});
        return cinema;

    } catch (err) {
        console.error(err);
    }
};

const getCinemaScheduleByMovie = async (cityId, movieId) => {
    try {

        const schedule = await db.MovieSchedule.findOne({where: {cityId: cityId, movieId}});
        return schedule;

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getCinemasByCityId,
    getCinemaById,
    getCinemaScheduleByMovie
}