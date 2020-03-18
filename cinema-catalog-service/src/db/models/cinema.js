module.exports = (DataTypes, DataTypes) => {

  const Cinema = DataTypes.define('Cinema', {

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
  }, {});

  Cinema.associate = function(models) {
    // associations can be defined here
  };

  return Cinema;
  
};