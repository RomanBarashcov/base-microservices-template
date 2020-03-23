let repositories = null;

const getCinemasByCity = async (id) => {
    try {

        return repositories.cinemaRepository.getCinemasByCityId(id);

    } catch (err) {
        console.error(err);
    }
};

const getCinemaById = async (id) => {
    try {

        return repositories.cinemaRepository.getCinemaById(id);

    } catch (err) {
        console.error(err);
    }
};

const getCinemaScheduleByMovie = async (cityId, movieId) => {
    try {

        return repositories.cinemaRepository.getCinemaScheduleByMovie(cityId, movieId);

    } catch (err) {
        console.error(err);
    }
};

module.exports = (rep) => {

    repositories = rep;

    return {
        getCinemasByCity,
        getCinemaById,
        getCinemaScheduleByMovie
    }
}