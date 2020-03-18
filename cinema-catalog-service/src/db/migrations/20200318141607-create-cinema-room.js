module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('CinemaRooms', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING
      },

      capacity: {
        type: Sequelize.STRING
      },

      format: {
        type: Sequelize.INTEGER //IMAX, Normal
      },

    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('CinemaRooms');
  }

};