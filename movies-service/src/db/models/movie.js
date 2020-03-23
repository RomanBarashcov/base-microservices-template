module.exports = (sequelize, DataTypes) => {
  
  const Movie = sequelize.define('Movie', {

    title: {
      type: DataTypes.STRING
    },

    description: {
      type: DataTypes.TEXT
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

  }, {
    timestamps: false
  });

  Movie.associate = function(models) {
    // associations can be defined here
  };

  return Movie;

};