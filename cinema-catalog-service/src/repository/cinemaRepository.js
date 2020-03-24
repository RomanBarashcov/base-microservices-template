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

        const schedule = await db.sequelize.query(`SELECT cp."cinemaId", cp."movieId", c."name" , c."cityId", c.latitude , c.longitude 
                                            FROM "CinemaPremiers" cp
                                                LEFT JOIN "Cinemas" AS c ON cp."cinemaId" = c.id
                                            WHERE c."cityId" = :cityId AND cp."movieId" = :movieId;`,
        { replacements: { cityId: cityId, movieId: movieId }, type: db.Sequelize.QueryTypes.SELECT });

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