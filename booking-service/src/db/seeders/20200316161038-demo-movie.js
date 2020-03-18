'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Movie', [{

        title: "Some Title1",
        description: "Some Description1",
        runtime: 115,
        format: 'IMAX',
        release: new Date()

      },{

        title: "Some Title2",
        description: "Some Description2",
        runtime: 125,
        format: 'IMAX',
        release: new Date()

      },{

        title: "Some Title3",
        description: "Some Description3",
        runtime: 145,
        format: 'IMAX',
        release: new Date()

      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Movie', null, {});

  }
};
