module.exports = (sequelize, DataTypes) => {
  
  const Movie = sequelize.define('Movie', {

    title: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.STRING
    },

    runtime: {
      type: DataTypes.INTEGER
    },

    format: {
      type: DataTypes.STRING
    },

    release: {
      type: DataTypes.DATE
    }

  }, {});

  Movie.associate = function(models) {
    // associations can be defined here
  };

  return Movie;

};