module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('CinemaPremiers', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      cinemaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        validate: {
          notEmpty: true
        },

        references: {
          model: 'Cinemas',
          key: 'id',
        }
      },

      movieId: {
        type: Sequelize.INTEGER
      }


    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CinemaPremiers');
  }

};