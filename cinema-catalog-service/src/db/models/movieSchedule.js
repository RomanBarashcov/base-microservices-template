module.exports = (DataTypes, DataTypes) => {

  const MovieSchedule = DataTypes.define('MovieSchedule', {

    movieId: {
      type: DataTypes.INTEGER
    },

    roomId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },

    seatsOccupied: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    },

    time: {
      type: DataTypes.DATE
    },

    price: {
      type: DataTypes.DOUBLE
    }

  }, {});

  MovieSchedule.associate = function(models) {
    // associations can be defined here
  };

  return MovieSchedule;

};