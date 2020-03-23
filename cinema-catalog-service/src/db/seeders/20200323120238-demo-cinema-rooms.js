module.exports = {

  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CinemaRooms', [ 
      { 
        id: 1,
        name: "room 1",
        capacity: 10,
        format: 1
      }, {
        id: 2,
        name: "room 2",
        capacity: 10,
        format: 1
      }, 
      {
        id: 3,
        name: "room 3",
        capacity: 10,
        format: 1
      }, 
      {
        id: 4,
        name: "room 4",
        capacity: 10,
        format: 1
      }, 
      {
        id: 5,
        name: "room 5",
        capacity: 10,
        format: 1
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CinemaRooms', null, {});

  }
};
