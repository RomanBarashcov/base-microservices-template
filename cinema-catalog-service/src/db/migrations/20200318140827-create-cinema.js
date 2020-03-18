module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('Cinemas', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: {
        type: Sequelize.STRING
      },

      latitude: {
        type: Sequelize.STRING
      },

      longitude: {
        type: Sequelize.STRING
      },
      
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        validate: {
          notEmpty: true
        },

        references: {
          model: 'Cities',
          key: 'id',
        }
      },

    });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Cinemas');

  }

};