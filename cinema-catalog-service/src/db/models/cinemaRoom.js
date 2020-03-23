module.exports = (sequelize, DataTypes) => {

  const CinemaRoom = sequelize.define('CinemaRoom', {

    name: {
      type: DataTypes.STRING
    },

    capacity: {
      type: DataTypes.INTEGER
    },

    format: {
      type: DataTypes.INTEGER //IMAX, Normal
    },

  }, {
    timestamps: false
  });

  CinemaRoom.associate = function(models) {
    // associations can be defined here
  };

  return CinemaRoom;

};