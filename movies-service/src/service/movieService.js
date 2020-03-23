let repositories = null;

const getAllMovies = async () => {
    try {

        return await repositories.movieRepository.getMovies();

    } catch (err) {
        console.error(err);
    }
};

const getMovieById = async (id) => {
    try {

        return await repositories.movieRepository.getMovieById(id);

    } catch (err) {
        console.error(err);
    }
};

module.exports = (rep) => {

    repositories = rep;

    return {
        getAllMovies,
        getMovieById
    }
}