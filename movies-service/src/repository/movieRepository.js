const db = require("../db/models/index");

const getMovies = async () => {
    try {

        const movies = await db.Movies.findAll().map(i => i.dataValues);
        return movies;

    } catch (err) {
        console.error(err);
    }
};

const getMovie = async (id) => {
    try {

        const movies = await db.Movies.findOne({where: {id: id}});
        return movies;

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getMovies,
    getMovie
}