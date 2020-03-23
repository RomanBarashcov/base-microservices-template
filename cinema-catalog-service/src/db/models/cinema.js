module.exports = (sequelize, DataTypes) => {

  const Cinema = sequelize.define('Cinema', {

    name: {
      type: DataTypes.STRING
    },

    latitude: {
      type: DataTypes.STRING
    },

    longitude: {
      type: DataTypes.STRING
    },
    
    cityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      validate: {
        notEmpty: true
      },

      references: {
        model: 'Cities',
        key: 'id',
      }

    },
  }, {
    timestamps: false
  });

  Cinema.associate = function(models) {
    // associations can be defined here
  };

  return Cinema;
  
};