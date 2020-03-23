let repositories = null;

const getMovies = async () => {
    try {

        return repositories.movieRepository.getMovies();

    } catch (err) {
        console.error(err);
    }
};

const getMovieById = async (id) => {
    try {

        return repositories.movieRepository.getMovieById(id);

    } catch (err) {
        console.error(err);
    }
};

module.exports = (rep) => {

    repositories = rep;

    return {
        getMovies,
        getMovieById
    }
}