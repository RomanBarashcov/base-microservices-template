module.exports = (sequelize, DataTypes) => {

  const CinemaPremier = sequelize.define('CinemaPremier', {

    cinemaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER
    }

  }, {
    timestamps: false
  });

  CinemaPremier.associate = function(models) {
    // associations can be defined here
  };

  return CinemaPremier;

};