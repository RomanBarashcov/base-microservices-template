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

      runtime: {
        type: Sequelize.INTEGER
      },
  
      format: {
        type: Sequelize.STRING
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