'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Movie', [{

        title: "Some Title1",
        description: "Some Description1",
        price: 100,
        release: new Date()

      },{

        title: "Some Title2",
        description: "Some Description2",
        price: 100,
        release: new Date()

      },{

        title: "Some Title3",
        description: "Some Description3",
        price: 100,
        release: new Date()

      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Movie', null, {});

  }
};
