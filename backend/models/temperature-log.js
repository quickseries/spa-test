'use strict';
module.exports = (sequelize, DataTypes) => {
  const TemperatureLog = sequelize.define('temperature_log', {
    temperature: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{ paranoid: true });

  return TemperatureLog;
};
