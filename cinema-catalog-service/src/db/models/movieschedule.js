'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieSchedule = sequelize.define('MovieSchedule', {
    name: DataTypes.STRING
  }, {});
  MovieSchedule.associate = function(models) {
    // associations can be defined here
  };
  return MovieSchedule;
};