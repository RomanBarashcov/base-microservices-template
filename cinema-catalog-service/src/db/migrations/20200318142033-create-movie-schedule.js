module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('MovieSchedules', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      movieId: {
        type: Sequelize.INTEGER
      },

      roomId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        validate: {
          notEmpty: true
        },

        references: {
          model: 'CinemaRooms',
          key: 'id',
        }
      },

      seatsEmpty: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
      },

      seatsOccupied: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
      },

      time: {
        type: Sequelize.DATE
      },

      price: {
        type: Sequelize.DOUBLE
      }

    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('MovieSchedules');
    
  }
  
};