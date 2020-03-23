const db = require("../db/models/index");

const getMovies = async () => {
    try {

        const movies = await db.Movie.findAll().map(i => i.dataValues);
        return movies;

    } catch (err) {
        console.error(err);
    }
};

const getMovieById = async (id) => {
    try {

        const movies = await db.Movie.findOne({where: {id: id}});
        return movies;

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getMovies,
    getMovieById
}