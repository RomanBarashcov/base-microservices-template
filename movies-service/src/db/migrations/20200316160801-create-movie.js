module.exports = {

  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Movies', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING
      },

      description: {
        type: Sequelize.STRING
      },

      price: {
        type: Sequelize.INTEGER
      },

      release: {
        type: Sequelize.DATE
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }

};