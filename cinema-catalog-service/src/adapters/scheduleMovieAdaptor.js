
const axios = require('axios');
const Docker = require('dockerode');

const movieServiceURL = new Docker(); //"http://172.20.0.4:4000/api/movies";
const config = require('../db/config/index');

const executeAdaptation = async (scheduleData, movieId) => {
    try {
        console.log(config.movieServiceContainer);
        let movieData = await axios.get(movieServiceURL + `/${movieId}`);
        scheduleData.movie = movieData;
        return scheduleData;

    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = {
    executeAdaptation
}
