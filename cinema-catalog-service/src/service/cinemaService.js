let repositories = null;
let adapters = null;

const getCinemasByCity = async (id) => {
    try {

        return await repositories.cinemaRepository.getCinemasByCityId(id);

    } catch (err) {
        console.error(err);
    }
};

const getCinemaById = async (id) => {
    try {

        return await repositories.cinemaRepository.getCinemaById(id);

    } catch (err) {
        console.error(err);
    }
};

const getCinemaScheduleByMovie = async (cityId, movieId) => {
    try {

        let scheduleMovie = await repositories.cinemaRepository.getCinemaScheduleByMovie(cityId, movieId);
        return await adapters.scheduleMovieAdaptor.executeAdaptation(scheduleMovie, movieId);

    } catch (err) {
        console.error(err);
    }
};

module.exports = (rep, ads) => {

    repositories = rep;
    adapters = ads;

    return {
        getCinemasByCity,
        getCinemaById,
        getCinemaScheduleByMovie
    }
}