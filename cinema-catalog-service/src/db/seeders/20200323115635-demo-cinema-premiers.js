'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CinemaPremiers', [{
        cinemaId: 1,
        movieId: 1
      }, 
      {
        cinemaId: 1,
        movieId: 2
      }, 
      {
        cinemaId: 1,
        movieId: 3
      }, 
      {
        cinemaId: 1,
        movieId: 4
      }, 
      {
        cinemaId: 1,
        movieId: 5
      }, 
      {
        cinemaId: 2,
        movieId: 1
      }, 
      {
        cinemaId: 2,
        movieId: 2
      }, 
      {
        cinemaId: 2,
        movieId: 3
      }, 
      {
        cinemaId: 2,
        movieId: 4
      }, 
      {
        cinemaId: 2,
        movieId: 5
      }, 
      {
        cinemaId: 3,
        movieId: 1
      }, 
      {
        cinemaId: 4,
        movieId: 2
      }, 
      {
        cinemaId: 4,
        movieId: 3
      }, 
      {
        cinemaId: 5,
        movieId: 4
      }, 
      {
        cinemaId: 5,
        movieId: 5
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CinemaPremiers', null, {});

  }

};
